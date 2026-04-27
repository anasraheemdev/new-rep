import React from 'react';

const AdminDocumentReview: React.FC = () => {
  return (
    <main className="flex-1 flex overflow-hidden bg-background h-[calc(100vh-64px)]">
      {/* Left Pane: Document Queue */}
      <div className="w-full lg:w-[400px] xl:w-[480px] border-r border-outline-variant bg-surface flex flex-col flex-shrink-0">
        <div className="p-lg border-b border-outline-variant bg-surface-container-lowest">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">Review Queue</h2>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">12 documents pending approval</p>
          {/* Filters */}
          <div className="flex gap-sm mt-md overflow-x-auto pb-xs no-scrollbar">
            <button onClick={() => alert('Filter All')} className="px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm whitespace-nowrap">All (12)</button>
            <button onClick={() => alert('Filter Passports')} className="px-3 py-1 rounded-full bg-surface-container border border-outline-variant text-on-surface font-label-sm text-label-sm whitespace-nowrap">Passports (4)</button>
            <button onClick={() => alert('Filter Transcripts')} className="px-3 py-1 rounded-full bg-surface-container border border-outline-variant text-on-surface font-label-sm text-label-sm whitespace-nowrap">Transcripts (5)</button>
            <button onClick={() => alert('Filter Financial')} className="px-3 py-1 rounded-full bg-surface-container border border-outline-variant text-on-surface font-label-sm text-label-sm whitespace-nowrap">Financial (3)</button>
          </div>
        </div>

        {/* Queue List */}
        <div className="flex-1 overflow-y-auto p-sm space-y-sm">
          {/* Active Item */}
          <div onClick={() => alert('Select Document')} className="p-md rounded-lg bg-primary-fixed border border-primary-container cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-start mb-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container">travel</span>
                <span className="font-label-bold text-label-bold text-on-surface">Passport Copy</span>
              </div>
              <span className="px-2 py-0.5 rounded text-xs bg-tertiary-container/20 text-tertiary font-medium">High Priority</span>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="font-label-bold text-label-bold text-on-surface">Aarav Sharma</p>
                <p className="font-body-md text-body-md text-sm text-on-surface-variant">ID: STU-29384</p>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">2 hrs ago</span>
            </div>
          </div>

          {/* Pending Item */}
          <div onClick={() => alert('Select Document')} className="p-md rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary-fixed-dim cursor-pointer transition-colors">
            <div className="flex justify-between items-start mb-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">school</span>
                <span className="font-label-bold text-label-bold text-on-surface">Bachelors Transcript</span>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="font-label-bold text-label-bold text-on-surface">Priya Patel</p>
                <p className="font-body-md text-body-md text-sm text-on-surface-variant">ID: STU-84721</p>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">4 hrs ago</span>
            </div>
          </div>

          {/* Pending Item */}
          <div onClick={() => alert('Select Document')} className="p-md rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary-fixed-dim cursor-pointer transition-colors">
            <div className="flex justify-between items-start mb-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">euro</span>
                <span className="font-label-bold text-label-bold text-on-surface">Blocked Account Proof</span>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="font-label-bold text-label-bold text-on-surface">Rahul Desai</p>
                <p className="font-body-md text-body-md text-sm text-on-surface-variant">ID: STU-10293</p>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">1 day ago</span>
            </div>
          </div>

          {/* Pending Item */}
          <div onClick={() => alert('Select Document')} className="p-md rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary-fixed-dim cursor-pointer transition-colors">
            <div className="flex justify-between items-start mb-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">language</span>
                <span className="font-label-bold text-label-bold text-on-surface">IELTS Certificate</span>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="font-label-bold text-label-bold text-on-surface">Neha Gupta</p>
                <p className="font-body-md text-body-md text-sm text-on-surface-variant">ID: STU-55621</p>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">1 day ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Pane: Document Previewer & Actions */}
      <div className="hidden lg:flex flex-1 flex-col bg-surface-container-low h-full">
        {/* Preview Header */}
        <div className="px-xl py-lg border-b border-outline-variant bg-surface-container-lowest flex justify-between items-center flex-shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-xs">
              <span className="material-symbols-outlined text-primary-container">travel</span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Passport Copy</h2>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="font-label-bold text-label-bold text-on-surface">Aarav Sharma</span>
              <span className="text-outline-variant">|</span>
              <span className="font-body-md text-body-md text-on-surface-variant">Uploaded: 14 Oct 2023, 09:42 AM</span>
              <span className="text-outline-variant">|</span>
              <button onClick={() => alert('View Full Profile')} className="text-primary-container font-label-bold text-label-bold hover:underline flex items-center gap-1">
                View Full Profile <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-md">
            <button onClick={() => alert('Reject Document')} className="px-6 py-2 rounded-lg border border-error text-error font-label-bold text-label-bold hover:bg-error-container transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined">close</span> Reject
            </button>
            <button onClick={() => alert('Request Re-upload')} className="px-6 py-2 rounded-lg border border-primary-container text-primary-container font-label-bold text-label-bold hover:bg-primary-fixed transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined">replay</span> Request Re-upload
            </button>
            <button onClick={() => alert('Approve Document')} className="px-6 py-2 rounded-lg bg-tertiary-container text-on-tertiary-container font-label-bold text-label-bold hover:bg-tertiary shadow-md hover:shadow-lg transition-all flex items-center gap-2">
              <span className="material-symbols-outlined">check</span> Approve
            </button>
          </div>
        </div>

        {/* Preview Canvas */}
        <div className="flex-1 overflow-auto p-xl flex justify-center items-start bg-surface-container relative">
          {/* Verification Checklist Overlay */}
          <div className="absolute top-xl right-xl w-72 bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant rounded-xl shadow-lg p-md z-10">
            <h3 className="font-label-bold text-label-bold text-on-surface mb-md flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">fact_check</span>
              Verification Checklist
            </h3>
            <div className="space-y-3">
              <label className="flex items-start gap-2 cursor-pointer group">
                <input type="checkbox" className="mt-0.5 rounded border-outline text-primary-container focus:ring-primary-container" />
                <span className="font-body-md text-body-md text-sm text-on-surface-variant group-hover:text-on-surface">MRZ code is clearly legible</span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer group">
                <input type="checkbox" className="mt-0.5 rounded border-outline text-primary-container focus:ring-primary-container" />
                <span className="font-body-md text-body-md text-sm text-on-surface-variant group-hover:text-on-surface">Validity &gt; 6 months from travel date</span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer group">
                <input type="checkbox" className="mt-0.5 rounded border-outline text-primary-container focus:ring-primary-container" />
                <span className="font-body-md text-body-md text-sm text-on-surface-variant group-hover:text-on-surface">No glare or obscured text</span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer group">
                <input type="checkbox" className="mt-0.5 rounded border-outline text-primary-container focus:ring-primary-container" />
                <span className="font-body-md text-body-md text-sm text-on-surface-variant group-hover:text-on-surface">Matches student profile name</span>
              </label>
            </div>
          </div>

          {/* Document Image Placeholder */}
          <div className="bg-surface-container-lowest shadow-md border border-outline-variant p-4 inline-block max-w-full">
            <img
              className="max-w-[800px] w-full h-auto object-contain rounded border border-surface-variant"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA6IqAqiYHRsZUKOjIPdg7DLhi_8iRM2uwuH-CTW8k-FhqmXpZY8xUUOgqIkNvXvf7jx01QxzLdZXntUY-Ni_DaeCFjUI7jIYbELHWEGTGnud4sJYktqs2Cbng9yHiJlr9f2yLCf1M2bh-qHkt6l-9axjBshfnx6RQJ6-PCQx57K0bwv_2rTP-XzDznMj9OqTJg-9p8fMaaJi7JLGy8wr10MZ_U9dLLSliCxEozEWM8U7ixUxYV7-hvBogp7y8MeUxgqPtRO0WZBWX"
              alt="Mockup of a passport"
            />
          </div>
        </div>

        {/* Feedback Form (Hidden by default in standard view, but visible in code for completeness) */}
        <div className="p-md bg-surface-container-lowest border-t border-outline-variant hidden">
          <div className="flex gap-4">
            <textarea className="flex-1 rounded-lg border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md focus:ring-2 focus:ring-primary-container focus:border-transparent resize-none h-20" placeholder="Add mandatory feedback for rejection or re-upload request..."></textarea>
            <div className="flex flex-col gap-2 justify-end w-48">
              <button onClick={() => alert('Use Template')} className="w-full py-2 rounded-lg bg-surface-container text-on-surface font-label-bold text-label-bold border border-outline-variant hover:bg-surface-container-high transition-colors text-sm">Use Template</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminDocumentReview;