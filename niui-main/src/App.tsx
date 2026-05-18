import { useState } from 'react';
import { Download, Ligature as FileSignature, Sparkles } from 'lucide-react';
import ConfigPanel from './components/ConfigPanel';
import DocumentPreview from './components/DocumentPreview';
import Articles from './components/Articles';
import Footer from './components/Footer';
import type { BasicInfo, Clause, Signatures, DocumentType } from './types';

const DEFAULT_CLAUSES: Clause[] = [
  {
    id: 'preset-1a',
    text: 'Wipe down stove, countertop, and microwave immediately after cooking.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-1b',
    text: 'Deep clean the shared bathroom shower and toilet once a week.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-2',
    text: 'Rotate purchasing of common household supplies like toilet paper and trash bags monthly.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-3',
    text: 'Enforce strict quiet hours from 10:00 PM to 7:00 AM daily.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-4',
    text: 'Limit overnight guests to a maximum of 2 nights per week with a 24-hour advance notice.',
    enabled: true,
    preset: true,
  },
];

const DEFAULT_BASIC_INFO: BasicInfo = {
  roommateA: '',
  roommateB: '',
  leaseStart: '',
  address: '',
};

const DEFAULT_SIGNATURES: Signatures = {
  signatureA: '',
  signatureB: '',
  dateA: '',
  dateB: '',
};

export default function App() {
  const [docType, setDocType] = useState<DocumentType>('roommate');
  const [basicInfo, setBasicInfo] = useState<BasicInfo>(DEFAULT_BASIC_INFO);
  const [clauses, setClauses] = useState<Clause[]>(DEFAULT_CLAUSES);
  const [signatures, setSignatures] = useState<Signatures>(DEFAULT_SIGNATURES);

  function handlePrint() {
    window.print();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Nav */}
      <header className="no-print sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
              <FileSignature size={15} className="text-sky-400" />
            </div>
            <span className="font-bold text-sm tracking-tight text-slate-100">
              Chore<span className="text-sky-400">Pact</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-full border border-slate-700/50">
              <Sparkles size={11} className="text-sky-400" />
              100% Free &amp; Private
            </span>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-sky-500/20"
            >
              <Download size={15} />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="no-print relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.08),transparent)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-sky-400/80 uppercase mb-4 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20">
            <Sparkles size={12} />
            Free Roommate Agreement Generator
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight leading-tight mb-4">
            Official Chore Contracts,<br />
            <span className="text-sky-400">Generated in Seconds</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Build a print-ready Roommate Agreement, Chore Contract, Fridge Treaty, or Pet Addendum — fully customizable, legally structured, and 100% private.
          </p>
        </div>
      </section>

      {/* Main Tool — Split Layout */}
      <main className="no-print max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Left: Config Dashboard */}
          <aside className="w-full lg:w-[380px] xl:w-[420px] flex-shrink-0">
            <div className="bg-slate-900/70 border border-slate-800/60 rounded-2xl p-5 md:p-6 lg:sticky lg:top-20">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-slate-800/60">
                <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                <h2 className="text-sm font-semibold text-slate-200">Contract Builder</h2>
                <span className="ml-auto text-xs text-slate-500">Live Preview →</span>
              </div>
              <ConfigPanel
                docType={docType}
                setDocType={setDocType}
                basicInfo={basicInfo}
                setBasicInfo={setBasicInfo}
                clauses={clauses}
                setClauses={setClauses}
              />
            </div>
          </aside>

          {/* Right: Document Preview */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-xs text-slate-400 font-medium">Live Document Preview</span>
              <button
                onClick={handlePrint}
                className="ml-auto flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700/60 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg text-xs font-semibold transition-all duration-150 shadow"
              >
                <Download size={13} />
                Download Formal PDF
              </button>
            </div>
            <DocumentPreview
              docType={docType}
              basicInfo={basicInfo}
              clauses={clauses}
              signatures={signatures}
              setSignatures={setSignatures}
            />
          </div>
        </div>
      </main>

      {/* Floating PDF button (mobile & always visible) */}
      <button
        onClick={handlePrint}
        className="no-print fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 bg-sky-500 hover:bg-sky-400 text-white rounded-2xl font-semibold text-sm shadow-xl shadow-sky-500/30 transition-all duration-200 hover:scale-105 active:scale-95 lg:hidden"
      >
        <Download size={16} />
        Download Formal PDF
      </button>

      {/* SEO Articles */}
      <Articles />

      {/* Legal Footer */}
      <Footer />
    </div>
  );
}
