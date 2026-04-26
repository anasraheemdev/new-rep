import React from 'react';

const Roadmap: React.FC = () => {
  return (
    <div className="p-margin-mobile md:p-xl max-w-2xl mx-auto w-full pb-32">
      {/* Page Header */}
      <div className="mb-lg">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-xs tracking-tight">Your Application Journey</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">Stay focused on your upcoming milestones. You're making great progress!</p>
      </div>

      {/* Deadline Countdown Banner */}
      <div className="bg-surface-container-lowest border border-primary/20 rounded-xl p-md mb-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined">event_available</span>
          </div>
          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Next Major Deadline</p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">University Applications</h3>
          </div>
        </div>
        <div className="bg-primary text-on-primary font-label-bold text-label-bold px-4 py-2 rounded-lg shadow-sm whitespace-nowrap">
          14 Days Left
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Month 1: Completed */}
        <div className="relative pl-10 pb-lg">
          {/* Line */}
          <div className="absolute left-4 top-8 bottom-[-16px] w-[2px] bg-tertiary"></div>
          {/* Node */}
          <div className="absolute left-[11px] top-4 w-[14px] h-[14px] rounded-full bg-tertiary border-2 border-surface-container-lowest z-10 flex items-center justify-center"></div>

          <div className="bg-surface-container-lowest rounded-xl border border-surface-variant p-md shadow-sm transition-all hover:shadow-md">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary text-[24px]">task_alt</span>
                <div>
                  <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider block mb-1">Month 1</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">IELTS & Initial Research</h3>
                </div>
              </div>
              <span className="bg-tertiary/10 text-tertiary font-label-sm text-label-sm px-2 py-1 rounded-md">Completed</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant ml-9">Language proficiency secured and target universities shortlisted.</p>
          </div>
        </div>

        {/* Month 2: Current */}
        <div className="relative pl-10 pb-lg">
          {/* Line */}
          <div className="absolute left-4 top-8 bottom-[-16px] w-[2px] bg-surface-variant"></div>
          {/* Node */}
          <div className="absolute left-[9px] top-4 w-[18px] h-[18px] rounded-full bg-surface-container-lowest border-[4px] border-primary z-10 shadow-[0_0_0_4px_rgba(26,115,232,0.1)]"></div>

          <div className="bg-surface-container-lowest rounded-xl border-2 border-primary/50 p-md shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative overflow-hidden">
            {/* Active highlight strip */}
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider block mb-1">Month 2</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">University Applications</h3>
                </div>
              </div>
              <span className="bg-primary-container text-on-primary font-label-sm text-label-sm px-2 py-1 rounded-md shadow-sm">Current</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant ml-11 mb-4">Drafting SOPs, gathering LORs, and submitting final applications to selected universities.</p>
            {/* Mini progress or action inside active card */}
            <div className="ml-11 flex gap-3">
              <button className="bg-primary text-on-primary font-label-bold text-label-bold px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">Review Documents</button>
            </div>
          </div>
        </div>

        {/* Month 3: Locked */}
        <div className="relative pl-10 pb-lg opacity-60">
          {/* Line */}
          <div className="absolute left-4 top-8 bottom-[-16px] w-[2px] bg-surface-variant"></div>
          {/* Node */}
          <div className="absolute left-[12px] top-5 w-[10px] h-[10px] rounded-full bg-outline-variant z-10"></div>

          <div className="bg-surface rounded-xl border border-surface-variant p-md">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline text-[24px]">mail</span>
                <div>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-1">Month 3</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">Admission Results</h3>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline text-[20px]">lock</span>
            </div>
            <p className="font-body-md text-body-md text-outline ml-9">Awaiting decisions and applying for relevant scholarships.</p>
          </div>
        </div>

        {/* Month 4: Locked */}
        <div className="relative pl-10 pb-lg opacity-60">
          {/* Line */}
          <div className="absolute left-4 top-8 bottom-[-16px] w-[2px] bg-surface-variant"></div>
          {/* Node */}
          <div className="absolute left-[12px] top-5 w-[10px] h-[10px] rounded-full bg-outline-variant z-10"></div>

          <div className="bg-surface rounded-xl border border-surface-variant p-md">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline text-[24px]">folder_open</span>
                <div>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-1">Month 4</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">Visa Document Prep</h3>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline text-[20px]">lock</span>
            </div>
            <p className="font-body-md text-body-md text-outline ml-9">Setting up blocked accounts and gathering financial proofs.</p>
          </div>
        </div>

        {/* Month 5: Locked */}
        <div className="relative pl-10 pb-lg opacity-60">
          {/* Line */}
          <div className="absolute left-4 top-8 bottom-[-16px] w-[2px] bg-surface-variant"></div>
          {/* Node */}
          <div className="absolute left-[12px] top-5 w-[10px] h-[10px] rounded-full bg-outline-variant z-10"></div>

          <div className="bg-surface rounded-xl border border-surface-variant p-md">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline text-[24px]">badge</span>
                <div>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-1">Month 5</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">Visa Interview</h3>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline text-[20px]">lock</span>
            </div>
            <p className="font-body-md text-body-md text-outline ml-9">Attending consulate interview and awaiting visa approval.</p>
          </div>
        </div>

        {/* Month 6: Locked */}
        <div className="relative pl-10 opacity-60">
          {/* Node */}
          <div className="absolute left-[12px] top-5 w-[10px] h-[10px] rounded-full bg-outline-variant z-10"></div>

          <div className="bg-surface rounded-xl border border-surface-variant p-md">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline text-[24px]">flight_takeoff</span>
                <div>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-1">Month 6</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">Travel & Enrollment</h3>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline text-[20px]">lock</span>
            </div>
            <p className="font-body-md text-body-md text-outline ml-9">Booking flights, securing accommodation, and arriving on campus.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;