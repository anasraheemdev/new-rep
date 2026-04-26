import React from 'react';

const DocumentsHub: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto w-full pb-32 md:pb-8">
      {/* Capped "Concierge Column" max-width */}
      <div className="max-w-[640px] mx-auto w-full px-margin-mobile py-lg md:py-xl flex flex-col gap-lg">

        {/* Page Header & Trust Signal */}
        <div className="flex flex-col gap-sm">
          <div className="flex items-center justify-between">
            <h1 className="font-headline-md text-headline-md text-on-surface">Documents Hub</h1>
            <div className="flex items-center gap-xs bg-tertiary-container/10 px-3 py-1.5 rounded-full border border-tertiary-container/20">
              <span className="material-symbols-outlined text-[16px] text-tertiary">lock</span>
              <span className="font-label-sm text-label-sm text-tertiary font-medium">End-to-End Encrypted</span>
            </div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">Securely upload and manage all required paperwork for your journey.</p>
        </div>

        {/* Global Upload Zone (Drag & Drop) */}
        <div onClick={() => alert('Global file upload triggered')} className="w-full bg-surface-container-lowest border-2 border-dashed border-primary/30 rounded-xl p-xl flex flex-col items-center justify-center text-center gap-md cursor-pointer hover:bg-primary-fixed/30 transition-colors shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group">
          <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-3xl">cloud_upload</span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Drag & Drop files here</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">or <span className="text-primary font-medium">browse your device</span>. PDF, JPG, PNG up to 10MB.</p>
          </div>
        </div>

        {/* Category: Identity */}
        <section className="flex flex-col gap-md mt-sm">
          <div className="flex items-center gap-2 border-b border-outline-variant pb-2">
            <span className="material-symbols-outlined text-on-surface-variant">badge</span>
            <h2 className="font-label-bold text-label-bold text-on-surface uppercase tracking-wider">Identity</h2>
          </div>
          <div className="grid grid-cols-1 gap-md">
            {/* Document Card 1: Verified */}
            <div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col gap-sm hover:shadow-[0px_8px_30px_rgba(0,0,0,0.08)] transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0">
                    <span className="material-symbols-outlined">travel</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-label-bold text-label-bold text-on-surface">Passport Copy</h3>
                    <p className="font-label-sm text-label-sm text-outline">Uploaded on Oct 12, 2023</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-tertiary-container/15 text-tertiary px-2 py-1 rounded-md">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  <span className="font-label-sm text-label-sm">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category: Academic */}
        <section className="flex flex-col gap-md">
          <div className="flex items-center gap-2 border-b border-outline-variant pb-2">
            <span className="material-symbols-outlined text-on-surface-variant">school</span>
            <h2 className="font-label-bold text-label-bold text-on-surface uppercase tracking-wider">Academic</h2>
          </div>
          <div className="grid grid-cols-1 gap-md">
            {/* Document Card 2: Uploaded (Pending) */}
            <div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col gap-sm hover:shadow-[0px_8px_30px_rgba(0,0,0,0.08)] transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0">
                    <span className="material-symbols-outlined">description</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-label-bold text-label-bold text-on-surface">Bachelor's Transcripts</h3>
                    <p className="font-label-sm text-label-sm text-outline">Uploaded on Oct 14, 2023</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-surface-variant text-on-surface-variant px-2 py-1 rounded-md">
                  <span className="material-symbols-outlined text-[14px]">hourglass_empty</span>
                  <span className="font-label-sm text-label-sm">In Review</span>
                </div>
              </div>
            </div>

            {/* Document Card 3: Action Required */}
            <div className="bg-surface-container-lowest rounded-xl p-md border border-error/30 bg-error-container/5 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col gap-sm hover:shadow-[0px_8px_30px_rgba(0,0,0,0.08)] transition-shadow relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
              <div className="flex justify-between items-start">
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-error-container/20 flex items-center justify-center text-error shrink-0">
                    <span className="material-symbols-outlined">warning</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-label-bold text-label-bold text-on-surface">Language Certificate</h3>
                    <p className="font-label-sm text-label-sm text-error font-medium mt-1">IELTS/TOEFL required by Nov 1</p>
                  </div>
                </div>
                <button onClick={() => alert('Language Certificate upload triggered')} className="bg-primary text-on-primary font-label-bold text-label-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Category: Financial */}
        <section className="flex flex-col gap-md mb-xl">
          <div className="flex items-center gap-2 border-b border-outline-variant pb-2">
            <span className="material-symbols-outlined text-on-surface-variant">account_balance</span>
            <h2 className="font-label-bold text-label-bold text-on-surface uppercase tracking-wider">Financial</h2>
          </div>
          <div className="grid grid-cols-1 gap-md">
            {/* Document Card 4: Missing/Upload Prompt inside category */}
            <div onClick={() => alert('Blocked Account upload triggered')} className="bg-surface-container-lowest rounded-xl p-md border border-dashed border-outline-variant flex flex-col gap-sm items-center justify-center py-lg cursor-pointer hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-outline text-3xl mb-1">add_circle</span>
              <h3 className="font-label-bold text-label-bold text-on-surface">Blocked Account Confirmation</h3>
              <p className="font-label-sm text-label-sm text-outline">Required for Visa Phase</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DocumentsHub;