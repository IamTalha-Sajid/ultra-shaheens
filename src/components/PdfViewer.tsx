'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import type { PDFDocumentProxy, RenderTask } from 'pdfjs-dist';

type PdfViewerProps = {
  fileUrl: string;
};

const MIN_ZOOM = 0.6;
const MAX_ZOOM = 2.4;
const ZOOM_STEP = 0.2;
// A4 width at 96dpi: the widest a page renders at 100% zoom. On narrower screens pages
// shrink to fit the viewer width, so nothing scrolls sideways until the user zooms in.
const A4_WIDTH_PX = 794;
// Horizontal padding of the scroller (px-4 on each side).
const SCROLLER_PADDING_PX = 32;

const iconButton =
  'w-11 h-11 sm:w-10 sm:h-10 flex items-center justify-center border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink';

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pageWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const pdfDocRef = useRef<PDFDocumentProxy | null>(null);
  const renderGenerationRef = useRef(0);
  const renderTaskRef = useRef<RenderTask | null>(null);
  const renderPassRef = useRef<Promise<void> | null>(null);

  const [numPages, setNumPages] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [naturalWidth, setNaturalWidth] = useState<number | null>(null);
  const [availableWidth, setAvailableWidth] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const scale =
    naturalWidth !== null && availableWidth !== null
      ? (Math.min(A4_WIDTH_PX, availableWidth) / naturalWidth) * zoom
      : null;

  // Fit pages to the viewer width.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const width = Math.floor(entry.contentRect.width - SCROLLER_PADDING_PX);
      setAvailableWidth((prev) => (prev === width ? prev : Math.max(width, 120)));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Load the document once.
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

        const doc = await pdfjsLib.getDocument(fileUrl).promise;
        if (cancelled) return;

        const firstPage = await doc.getPage(1);

        pdfDocRef.current = doc;
        setNumPages(doc.numPages);
        setNaturalWidth(firstPage.getViewport({ scale: 1 }).width);
        canvasRefs.current = new Array(doc.numPages).fill(null);
        pageWrapperRefs.current = new Array(doc.numPages).fill(null);
        setLoading(false);
      } catch {
        if (!cancelled) {
          setError('Could not load the constitution PDF.');
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
      pdfDocRef.current?.destroy();
      pdfDocRef.current = null;
    };
  }, [fileUrl]);

  // Render every page into its own canvas whenever the doc/scale is ready.
  const renderAllPages = useCallback(async () => {
    const doc = pdfDocRef.current;
    if (!doc || scale === null) return;

    const generation = ++renderGenerationRef.current;
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

    // Stop the in-flight render and wait for the previous pass to finish, so two passes
    // never draw on the same canvas at once.
    renderTaskRef.current?.cancel();
    await renderPassRef.current;
    if (renderGenerationRef.current !== generation) return;

    const pass = (async () => {
      for (let i = 1; i <= doc.numPages; i++) {
        if (renderGenerationRef.current !== generation) return; // superseded by a newer pass (zoom or resize)

        const canvas = canvasRefs.current[i - 1];
        if (!canvas) continue;

        const page = await doc.getPage(i);
        if (renderGenerationRef.current !== generation) return;

        const viewport = page.getViewport({ scale });
        const context = canvas.getContext('2d');
        if (!context) continue;

        canvas.width = viewport.width * dpr;
        canvas.height = viewport.height * dpr;
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;
        context.setTransform(dpr, 0, 0, dpr, 0, 0);

        try {
          renderTaskRef.current = page.render({ canvasContext: context, viewport });
          await renderTaskRef.current.promise;
        } catch {
          // cancelled by a newer pass — ignore
        }
      }
    })();
    renderPassRef.current = pass;
    await pass;
  }, [scale]);

  useEffect(() => {
    if (!loading && !error && scale !== null) void renderAllPages();
  }, [loading, error, scale, renderAllPages]);

  // Continuous scroll: track which page is currently in view.
  useEffect(() => {
    if (loading || error || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = pageWrapperRefs.current.findIndex((el) => el === visible.target);
          if (idx !== -1) setPageNum(idx + 1);
        }
      },
      { root: containerRef.current, threshold: [0.5] }
    );

    pageWrapperRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [loading, error, numPages]);

  const goToPage = (next: number) => {
    const target = Math.min(Math.max(1, next), numPages || 1);
    pageWrapperRefs.current[target - 1]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const zoomIn = () => setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2)));
  const zoomOut = () => setZoom((z) => Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2)));

  return (
    <div className="bg-paper text-ink border border-ink/20">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-3 sm:px-4 py-3 border-b border-ink/20">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goToPage(pageNum - 1)}
            disabled={pageNum <= 1 || loading}
            className={iconButton}
            aria-label="Previous page"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <span className="font-display font-semibold text-sm tracking-[0.14em] uppercase tabular-nums min-w-[96px] text-center">
            {loading ? '—' : `Page ${pageNum} / ${numPages}`}
          </span>

          <button
            type="button"
            onClick={() => goToPage(pageNum + 1)}
            disabled={pageNum >= numPages || loading}
            className={iconButton}
            aria-label="Next page"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={zoomOut}
            disabled={zoom <= MIN_ZOOM || loading}
            className={iconButton}
            aria-label="Zoom out"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
          </button>

          <span className="font-display font-semibold text-sm tracking-[0.08em] tabular-nums w-12 text-center text-muted-light">
            {Math.round(zoom * 100)}%
          </span>

          <button
            type="button"
            onClick={zoomIn}
            disabled={zoom >= MAX_ZOOM || loading}
            className={iconButton}
            aria-label="Zoom in"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          </button>
        </div>
      </div>

      {/* Continuous page scroller */}
      <div
        ref={containerRef}
        className="relative bg-paper-2 h-[70vh] sm:h-[75vh] overflow-auto [scrollbar-gutter:stable] flex flex-col gap-4 py-4 px-4"
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-ink/20 border-t-ink rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center gap-4 text-center px-6 my-auto">
            <p className="text-body-light">{error}</p>
            <a href={fileUrl} download className="btn btn-dark !px-6 !py-3 !text-base">
              Download the Constitution
            </a>
          </div>
        )}

        {!error && !loading &&
          Array.from({ length: numPages }, (_, i) => (
            <div
              key={i}
              ref={(el) => { pageWrapperRefs.current[i] = el; }}
              data-page-num={i + 1}
              className="mx-auto flex-none"
            >
              <canvas
                ref={(el) => { canvasRefs.current[i] = el; }}
                className="bg-white shadow-[0_2px_12px_rgba(20,33,26,0.18)]"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PdfViewer;
