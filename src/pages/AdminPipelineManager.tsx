import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPipelineManager: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="flex-1 p-6 md:p-8 overflow-y-auto w-full max-w-[1400px] mx-auto bg-background">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="font-headline-md text-on-surface">Pipeline Monitor</h2>
          <p className="font-body-md text-outline mt-1">Manage AI scraping tasks and verify data ingestion.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => alert('Refresh Pipelines')} className="px-4 py-2 border border-outline-variant text-on-surface rounded-lg font-label-bold hover:bg-surface-container-low transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">refresh</span>
            Refresh
          </button>
          <button onClick={() => alert('Run All Scrapers')} className="px-4 py-2 bg-primary-container text-on-primary-container rounded-lg font-label-bold shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">play_arrow</span>
            Run All Scrapers
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* System Status Summary */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/90 backdrop-blur-md border border-outline-variant/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-5 flex items-center gap-4 border-l-4 border-l-primary-container">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined">language</span>
            </div>
            <div>
              <p className="font-label-sm text-outline uppercase tracking-wider">Active Sources</p>
              <p className="font-headline-sm text-on-surface">142</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md border border-outline-variant/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-5 flex items-center gap-4 border-l-4 border-l-tertiary">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div>
              <p className="font-label-sm text-outline uppercase tracking-wider">Processed Today</p>
              <p className="font-headline-sm text-on-surface">3,842</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md border border-outline-variant/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-5 flex items-center gap-4 border-l-4 border-l-secondary-container">
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-secondary-container">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <div>
              <p className="font-label-sm text-outline uppercase tracking-wider">In AI Queue</p>
              <p className="font-headline-sm text-on-surface">512</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md border border-outline-variant/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-5 flex items-center gap-4 border-l-4 border-l-[#f59e0b]">
            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-[#f59e0b]">
              <span className="material-symbols-outlined">fact_check</span>
            </div>
            <div>
              <p className="font-label-sm text-outline uppercase tracking-wider">Needs Verification</p>
              <p className="font-headline-sm text-on-surface">87</p>
            </div>
          </div>
        </div>

        {/* Left Column: Source Config & Terminal */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Source Configuration */}
          <div className="bg-white/90 backdrop-blur-md border border-outline-variant/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-6 flex-1">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">settings_ethernet</span>
                <h3 className="font-headline-sm text-on-surface">Source Configuration</h3>
              </div>
              <button onClick={() => navigate('/admin/manual-entry')} className="text-primary font-label-bold hover:underline text-sm">Add Source</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-surface-container-highest">
                    <th className="pb-3 font-label-sm text-outline uppercase tracking-wider font-semibold">Target URL</th>
                    <th className="pb-3 font-label-sm text-outline uppercase tracking-wider font-semibold">Schedule</th>
                    <th className="pb-3 font-label-sm text-outline uppercase tracking-wider font-semibold">Status</th>
                    <th className="pb-3 font-label-sm text-outline uppercase tracking-wider font-semibold">Progress</th>
                    <th className="pb-3 font-label-sm text-outline uppercase tracking-wider font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-sm">
                  <tr className="border-b border-surface-container-highest/50 hover:bg-surface-container-low/30 transition-colors">
                    <td className="py-4 font-medium text-on-surface">polimi.it/en/programs</td>
                    <td className="py-4 text-outline">Daily, 02:00 AM</td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-primary-container">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                        Running
                      </span>
                    </td>
                    <td className="py-4 w-32">
                      <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                        <div className="bg-primary-container h-1.5 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <span className="text-xs text-outline mt-1 block">65% (142/218)</span>
                    </td>
                    <td className="py-4 text-right">
                      <button onClick={() => alert('More actions for Polimi')} className="text-outline hover:text-on-surface p-1"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
                    </td>
                  </tr>
                  <tr className="border-b border-surface-container-highest/50 hover:bg-surface-container-low/30 transition-colors">
                    <td className="py-4 font-medium text-on-surface">tum.de/en/studies/degree-programs</td>
                    <td className="py-4 text-outline">Weekly, Mon 03:00 AM</td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-50 text-tertiary">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                        Success
                      </span>
                    </td>
                    <td className="py-4 w-32">
                      <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                        <div className="bg-tertiary h-1.5 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <span className="text-xs text-outline mt-1 block">Completed (312 items)</span>
                    </td>
                    <td className="py-4 text-right">
                      <button onClick={() => alert('More actions for TUM')} className="text-outline hover:text-on-surface p-1"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
                    </td>
                  </tr>
                  <tr className="border-b border-surface-container-highest/50 hover:bg-surface-container-low/30 transition-colors">
                    <td className="py-4 font-medium text-on-surface">scholarships.daad.de</td>
                    <td className="py-4 text-outline">Daily, 01:00 AM</td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-red-50 text-error">
                        <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                        Failed
                      </span>
                    </td>
                    <td className="py-4 w-32">
                      <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                        <div className="bg-error h-1.5 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                      <span className="text-xs text-error mt-1 block">Timeout (HTTP 504)</span>
                    </td>
                    <td className="py-4 text-right">
                      <button onClick={() => alert('More actions for DAAD')} className="text-outline hover:text-on-surface p-1"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Log/Terminal View */}
          <div className="bg-white/90 backdrop-blur-md border border-outline-variant/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-0 overflow-hidden bg-inverse-surface flex flex-col h-64">
            <div className="px-4 py-2 bg-on-surface/90 flex justify-between items-center border-b border-outline/30">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline text-[16px]">terminal</span>
                <span className="font-mono text-xs text-outline">pipeline_worker_01.log</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-error/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-tertiary/80"></div>
              </div>
            </div>
            <div className="p-4 font-mono text-[13px] leading-relaxed text-inverse-on-surface overflow-y-auto flex-1 h-full bg-[#2e3132]">
              <div className="text-outline">[10:42:01] INFO  System init. Workers: 4, Mode: Async</div>
              <div className="text-tertiary-fixed-dim">[10:42:05] START Scraper job #492 (polimi.it/en/programs)</div>
              <div className="text-outline">[10:42:06] FETCH Requesting initial catalog index...</div>
              <div className="text-outline">[10:42:08] PARSE Found pagination (8 pages)</div>
              <div className="text-secondary-fixed-dim">[10:42:15] BATCH Extracting details for 24 items in chunk 1</div>
              <div className="text-outline">[10:42:19] FETCHING: polimi.it/en/program/aerospace-engineering...</div>
              <div className="text-tertiary-fixed-dim">[10:42:21] PARSED: 1 program found. Sent to AI Queue.</div>
              <div className="text-outline">[10:42:22] FETCHING: polimi.it/en/program/architecture-design...</div>
              <div className="text-tertiary-fixed-dim">[10:42:24] PARSED: 1 program found. Sent to AI Queue.</div>
              <div className="text-[#f59e0b]">[10:42:25] WARN  Missing field 'tuition_fee' for item ID: P-882. Flagging for review.</div>
              <div className="flex items-center gap-2 mt-2 text-outline">
                <span className="w-2 h-4 bg-outline animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Queues */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* AI Processing Queue */}
          <div className="bg-white/90 backdrop-blur-md border border-outline-variant/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container">psychology</span>
                <h3 className="font-headline-sm text-on-surface">AI Processing</h3>
              </div>
              <span className="bg-surface-container-highest px-2 py-0.5 rounded text-xs font-label-bold text-on-surface-variant">512 In Queue</span>
            </div>
            <p className="text-sm text-outline mb-4">Normalizing data structures and summarizing descriptions.</p>
            <div className="space-y-3">
              <div className="p-3 border border-surface-container-highest rounded-lg bg-surface-container-lowest">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-label-sm font-semibold text-on-surface">Aerospace Engineering (MSc)</span>
                  <span className="text-[10px] uppercase tracking-wider text-secondary font-bold px-1.5 py-0.5 bg-secondary-fixed rounded">Cleaning</span>
                </div>
                <div className="text-xs text-outline font-mono truncate">ID: PLM-991 | Source: polimi.it</div>
              </div>
              <div className="p-3 border border-surface-container-highest rounded-lg bg-surface-container-lowest">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-label-sm font-semibold text-on-surface">Biomedical Sciences</span>
                  <span className="text-[10px] uppercase tracking-wider text-secondary font-bold px-1.5 py-0.5 bg-secondary-fixed rounded">Summarizing</span>
                </div>
                <div className="text-xs text-outline font-mono truncate">ID: TUM-204 | Source: tum.de</div>
              </div>
              <div className="p-3 border border-surface-container-highest rounded-lg bg-surface-container-lowest opacity-60">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-label-sm font-semibold text-on-surface">Data Science (BSc)</span>
                  <span className="text-[10px] uppercase tracking-wider text-outline font-bold px-1.5 py-0.5 bg-surface-container-high rounded">Queued</span>
                </div>
                <div className="text-xs text-outline font-mono truncate">ID: TUM-205 | Source: tum.de</div>
              </div>
            </div>
            <button onClick={() => navigate('/admin/applications')} className="w-full mt-4 py-2 text-sm font-label-bold text-primary hover:bg-surface-container-low rounded transition-colors">View Full Queue</button>
          </div>

          {/* Verification Queue */}
          <div className="bg-white/90 backdrop-blur-md border border-outline-variant/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-6 flex-1 border-t-4 border-t-[#f59e0b]">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#f59e0b]">rule</span>
                <h3 className="font-headline-sm text-on-surface">Verification Needed</h3>
              </div>
              <span className="bg-amber-100 px-2 py-0.5 rounded text-xs font-label-bold text-[#b45309]">87 Pending</span>
            </div>
            <p className="text-sm text-outline mb-4">Low-confidence AI parses requiring human approval.</p>
            <div className="space-y-3">
              <div className="p-3 border border-amber-200 rounded-lg bg-[#fffbeb] relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400"></div>
                <div className="pl-2">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-label-sm font-semibold text-on-surface line-clamp-1">DAAD Excellence Scholarship</span>
                  </div>
                  <p className="text-xs text-[#92400e] mb-2 font-medium">Flag: Unclear Deadline Date Format</p>
                  <div className="flex gap-2">
                    <button onClick={() => alert('Review DAAD')} className="flex-1 py-1.5 bg-white border border-amber-300 text-xs font-label-bold text-on-surface rounded hover:bg-gray-50">Review</button>
                    <button onClick={() => alert('Delete DAAD')} className="py-1.5 px-3 bg-white border border-amber-300 text-xs text-outline rounded hover:bg-gray-50"><span className="material-symbols-outlined text-[14px]">delete</span></button>
                  </div>
                </div>
              </div>
              <div className="p-3 border border-amber-200 rounded-lg bg-[#fffbeb] relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400"></div>
                <div className="pl-2">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-label-sm font-semibold text-on-surface line-clamp-1">MSc Urban Planning</span>
                  </div>
                  <p className="text-xs text-[#92400e] mb-2 font-medium">Flag: Missing Tuition Fee Value</p>
                  <div className="flex gap-2">
                    <button onClick={() => alert('Review Urban Planning')} className="flex-1 py-1.5 bg-white border border-amber-300 text-xs font-label-bold text-on-surface rounded hover:bg-gray-50">Review</button>
                    <button onClick={() => alert('Delete Urban Planning')} className="py-1.5 px-3 bg-white border border-amber-300 text-xs text-outline rounded hover:bg-gray-50"><span className="material-symbols-outlined text-[14px]">delete</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminPipelineManager;