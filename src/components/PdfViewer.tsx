'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import type { PDFDocumentProxy } from 'pdfjs-dist';

type PdfViewerProps = {
  fileUrl: string;
};

const MIN_ZOOM = 0.6;
const MAX_ZOOM = 2.4;
const ZOOM_STEP = 0.2;
// A4 width at 96dpi — pages render at this width (× zoom) regardless of the PDF's own page size,
// so every document previews at a consistent, print-like size.
const A4_WIDTH_PX = 794;

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pageWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const pdfDocRef = useRef<PDFDocumentProxy | null>(null);
  const renderGenerationRef = useRef(0);

  const [numPages, setNumPages] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [baseScale, setBaseScale] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const scale = baseScale !== null ? baseScale * zoom : null;

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
        const naturalWidth = firstPage.getViewport({ scale: 1 }).width;

        pdfDocRef.current = doc;
        setNumPages(doc.numPages);
        setBaseScale(A4_WIDTH_PX / naturalWidth);
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

    for (let i = 1; i <= doc.numPages; i++) {
      if (renderGenerationRef.current !== generation) return; // superseded by a newer render pass (e.g. zoom changed)

      const canvas = canvasRefs.current[i - 1];
      if (!canvas) continue;

      const page = await doc.getPage(i);
      const viewport = page.getViewport({ scale });
      const context = canvas.getContext('2d');
      if (!context) continue;

      canvas.width = viewport.width * dpr;
      canvas.height = viewport.height * dpr;
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      try {
        await page.render({ canvasContext: context, viewport }).promise;
      } catch {
        // superseded render — ignore
      }
    }
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
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-white/10 bg-black/20">
        <div className="flex items-center gap-2">
          <button
            onClick={() => goToPage(pageNum - 1)}
            disabled={pageNum <= 1 || loading}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white hover:bg-canary hover:text-dark-fern hover:border-canary transition-all disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white disabled:hover:border-white/15"
            aria-label="Previous page"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <span
            className="text-sm text-white/80 font-semibold tracking-wide tabular-nums min-w-[92px] text-center"
            style={{ fontFamily: '"din-condensed", sans-serif' }}
          >
            {loading ? '—' : `PAGE ${pageNum} / ${numPages}`}
          </span>

          <button
            onClick={() => goToPage(pageNum + 1)}
            disabled={pageNum >= numPages || loading}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white hover:bg-canary hover:text-dark-fern hover:border-canary transition-all disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white disabled:hover:border-white/15"
            aria-label="Next page"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={zoomOut}
            disabled={zoom <= MIN_ZOOM || loading}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white hover:bg-canary hover:text-dark-fern hover:border-canary transition-all disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white disabled:hover:border-white/15"
            aria-label="Zoom out"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
          </button>

          <span className="text-xs text-white/50 font-semibold tabular-nums w-12 text-center">
            {Math.round(zoom * 100)}%
          </span>

          <button
            onClick={zoomIn}
            disabled={zoom >= MAX_ZOOM || loading}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white hover:bg-canary hover:text-dark-fern hover:border-canary transition-all disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white disabled:hover:border-white/15"
            aria-label="Zoom in"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          </button>

          <a
            href={fileUrl}
            download
            className="ml-1 flex items-center gap-1.5 rounded-lg border border-canary/40 bg-canary/10 text-canary hover:bg-canary hover:text-dark-fern transition-all px-3 h-9 text-xs font-bold uppercase tracking-wider"
            style={{ fontFamily: '"din-condensed", sans-serif' }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
            Download
          </a>
        </div>
      </div>

      {/* Continuous page scroller */}
      <div
        ref={containerRef}
        className="relative bg-[#0a1710] h-[70vh] sm:h-[75vh] overflow-y-auto flex flex-col items-center gap-6 py-6 px-4"
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-canary/30 border-t-canary rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center gap-4 text-center px-6 my-auto">
            <p className="text-gray-300">{error}</p>
            <a
              href={fileUrl}
              download
              className="inline-block bg-canary text-dark-fern font-bold uppercase tracking-wide px-6 py-3 rounded-xl hover:bg-white transition-colors"
              style={{ fontFamily: '"din-condensed", sans-serif' }}
            >
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
            >
              <canvas
                ref={(el) => { canvasRefs.current[i] = el; }}
                className="rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PdfViewer;
