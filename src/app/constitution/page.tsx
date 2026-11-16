'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PdfViewer from '@/components/PdfViewer';

const CONSTITUTION_PDF = '/documents/Ultra_Shaheens_Constitution_v1.0.pdf';
const CONSTITUTION_FILE = 'Ultra_Shaheens_Constitution_v1.0.pdf';

const ConstitutionPage: React.FC = () => {
  return (
    <div className="font-sans min-h-screen bg-ink-dark text-paper">
      <Header />

      <section className="px-[clamp(20px,4vw,48px)] pt-[clamp(56px,8vw,112px)] pb-[clamp(72px,9vw,120px)]">
        <div className="wrap flex flex-col gap-[clamp(40px,5vw,56px)]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-x-16 gap-y-7 items-end">
            <div className="flex flex-col gap-5">
              <div className="eyebrow text-canary">Governing document · Version 1.0</div>
              <h1 className="m-0 font-display font-extrabold uppercase text-[clamp(56px,9vw,132px)] leading-[0.84]">
                The
                <br />
                Constitution
              </h1>
            </div>
            <div className="flex flex-col gap-6">
              <p className="m-0 text-lg leading-[1.55] text-paper/80 max-w-[460px]">
                The rules, roles and values that govern Ultra Shaheens as a supporters&apos;
                organisation.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={CONSTITUTION_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary !px-6 !py-4 !text-[17px]"
                >
                  Open in new tab ↗
                </a>
                <a
                  href={CONSTITUTION_PDF}
                  download={CONSTITUTION_FILE}
                  className="btn btn-secondary !px-6 !py-[15px] !text-[17px]"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          <div className="bg-paper p-[clamp(8px,1.5vw,16px)]">
            <div className="flex justify-between gap-3 px-1.5 pt-1.5 pb-3.5 font-display font-semibold text-[13px] tracking-[0.16em] uppercase text-muted-light">
              <span>{CONSTITUTION_FILE}</span>
              <span>PDF</span>
            </div>
            <PdfViewer fileUrl={CONSTITUTION_PDF} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConstitutionPage;
