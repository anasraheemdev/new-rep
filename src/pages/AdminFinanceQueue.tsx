import React from 'react';

const AdminFinanceQueue: React.FC = () => {
  return (
    <main className="flex-1 flex overflow-hidden bg-background h-[calc(100vh-64px)]">
      {/* Left Pane: Document Queue */}
      <div className="w-full md:w-1/2 lg:w-5/12 xl:w-1/3 flex flex-col h-full border-r border-outline-variant bg-surface-container-lowest">
        <div className="p-6 border-b border-outline-variant bg-surface-container-lowest z-10 sticky top-0">
          <h2 className="font-headline-md text-on-surface mb-2">Finance Review Queue</h2>
          <div className="flex gap-4 mb-4">
            <div className="bg-primary-fixed rounded-lg p-3 flex-1 flex flex-col items-center border border-outline-variant">
              <span className="font-label-sm text-on-surface-variant">Pending</span>
              <span className="font-headline-sm text-primary">24</span>
            </div>
            <div className="bg-surface-container rounded-lg p-3 flex-1 flex flex-col items-center border border-outline-variant">
              <span className="font-label-sm text-on-surface-variant">Total Verified</span>
              <span className="font-headline-sm text-tertiary-container">€1.2M</span>
            </div>
          </div>
          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            <button onClick={() => alert('Filter All')} className="px-4 py-1.5 rounded-full bg-on-surface text-surface font-label-bold whitespace-nowrap">All</button>
            <button onClick={() => alert('Filter Blocked Account')} className="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant font-label-bold hover:bg-surface-container whitespace-nowrap">Blocked Account</button>
            <button onClick={() => alert('Filter Bank Statement')} className="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant font-label-bold hover:bg-surface-container whitespace-nowrap">Bank Statement</button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {/* Queue Item 1 */}
          <div onClick={() => alert('Select Finance Item')} className="bg-surface-container-lowest border-2 border-primary-container rounded-xl p-4 shadow-sm cursor-pointer relative overflow-hidden transition-all duration-200 transform hover:-translate-y-1">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container"></div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-label-bold text-on-surface">Priya Sharma</h3>
                <p className="font-label-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">flag</span> Germany
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-surface-container text-on-surface flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">hourglass_empty</span> Pending
              </span>
            </div>
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-outline-variant">
              <div className="flex items-center gap-2 text-on-surface-variant font-label-sm">
                <span className="material-symbols-outlined text-[18px]">account_balance</span>
                Blocked Account
              </div>
              <span className="font-label-bold text-on-surface">€11,208.00</span>
            </div>
          </div>

          {/* Queue Item 2 */}
          <div onClick={() => alert('Select Finance Item')} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm cursor-pointer hover:bg-surface-container-low transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-label-bold text-on-surface">Rahul Desai</h3>
                <p className="font-label-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">flag</span> France
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-error-container text-on-error-container flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">flag</span> Flagged
              </span>
            </div>
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-outline-variant">
              <div className="flex items-center gap-2 text-on-surface-variant font-label-sm">
                <span className="material-symbols-outlined text-[18px]">description</span>
                Bank Statement
              </div>
              <span className="font-label-bold text-on-surface">€8,500.00</span>
            </div>
          </div>

          {/* Queue Item 3 */}
          <div onClick={() => alert('Select Finance Item')} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm cursor-pointer hover:bg-surface-container-low transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-label-bold text-on-surface">Ananya Patel</h3>
                <p className="font-label-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">flag</span> Netherlands
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-surface-variant text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">visibility</span> Under Review
              </span>
            </div>
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-outline-variant">
              <div className="flex items-center gap-2 text-on-surface-variant font-label-sm">
                <span className="material-symbols-outlined text-[18px]">account_balance</span>
                Blocked Account
              </div>
              <span className="font-label-bold text-on-surface">€12,500.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Preview & Action Pane */}
      <div className="hidden md:flex w-1/2 lg:w-7/12 xl:w-2/3 flex-col h-full bg-surface-container-low">
        {/* Header for Preview */}
        <div className="p-6 border-b border-outline-variant bg-surface-container-lowest flex justify-between items-center h-[96px]">
          <div>
            <h2 className="font-headline-sm text-on-surface">Reviewing: Priya Sharma</h2>
            <p className="font-body-md text-on-surface-variant">Blocked Account Confirmation - Fintiba</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => alert('Download Document')} className="p-2 rounded-lg border border-outline-variant hover:bg-surface-container text-on-surface-variant transition-colors" title="Download">
              <span className="material-symbols-outlined">download</span>
            </button>
            <button onClick={() => alert('Expand Document')} className="p-2 rounded-lg border border-outline-variant hover:bg-surface-container text-on-surface-variant transition-colors" title="Expand">
              <span className="material-symbols-outlined">open_in_new</span>
            </button>
          </div>
        </div>

        {/* Document Preview Area */}
        <div className="flex-1 p-6 overflow-y-auto flex items-center justify-center bg-surface-container-low">
          {/* Mock Document Container */}
          <div className="w-full max-w-3xl aspect-[1/1.4] bg-surface-container-lowest border border-outline-variant shadow-lg rounded-xl overflow-hidden flex flex-col relative">
            <div className="w-full h-full p-12 flex flex-col relative">
              {/* Simulated Document Content */}
              <div className="flex justify-between items-start border-b-2 border-outline-variant pb-6 mb-8">
                <div>
                  <div className="text-2xl font-bold text-on-surface tracking-widest uppercase mb-2">Fintiba</div>
                  <div className="text-sm text-on-surface-variant">Sperrkonto Confirmation</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-on-surface">Document ID: SPERR-2023-889</div>
                  <div className="text-sm text-on-surface-variant">Date: Oct 24, 2023</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-surface p-4 rounded-lg border border-outline-variant">
                  <h4 className="font-bold text-on-surface mb-2">Account Holder Details</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><span className="text-on-surface-variant">Name:</span> Priya Sharma</div>
                    <div><span className="text-on-surface-variant">DOB:</span> 15/04/2001</div>
                    <div><span className="text-on-surface-variant">Passport:</span> Z9876543</div>
                  </div>
                </div>

                <div className="bg-surface-bright p-6 rounded-lg border-2 border-primary-fixed border-dashed text-center">
                  <h4 className="font-bold text-on-surface mb-1">Total Blocked Amount</h4>
                  <div className="text-4xl font-bold text-primary-container my-2">€ 11,208.00</div>
                  <p className="text-sm text-on-surface-variant">Includes monthly payout of €934.00 for 12 months</p>
                </div>

                {/* Watermark/Security detail */}
                <div className="absolute bottom-12 right-12 opacity-20 transform -rotate-12 pointer-events-none">
                  <span className="material-symbols-outlined text-[120px]">verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar Bottom */}
        <div className="p-6 border-t border-outline-variant bg-surface-container-lowest">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between">
            {/* Verification Checklist */}
            <div className="flex-1 max-w-md">
              <p className="font-label-bold text-on-surface mb-3">Verification Checklist:</p>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-2 rounded hover:bg-surface-container cursor-pointer transition-colors">
                  <input type="checkbox" className="w-5 h-5 rounded border-outline text-primary-container focus:ring-primary-container" />
                  <span className="font-body-md text-on-surface">Name matches passport perfectly</span>
                </label>
                <label className="flex items-center gap-3 p-2 rounded hover:bg-surface-container cursor-pointer transition-colors">
                  <input type="checkbox" className="w-5 h-5 rounded border-outline text-primary-container focus:ring-primary-container" />
                  <span className="font-body-md text-on-surface">Amount meets country requirement (€11,208 for DE)</span>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 lg:min-w-[400px]">
              {/* Reject Dropdown/Button */}
              <div className="relative flex-1 group">
                <select className="w-full appearance-none px-4 py-3 bg-surface-container border border-outline-variant rounded-xl font-label-bold text-on-surface focus:ring-2 focus:ring-error outline-none cursor-pointer" defaultValue="">
                  <option value="" disabled>Select Rejection Reason</option>
                  <option value="blur">Document Illegible / Blurred</option>
                  <option value="name">Name Mismatch</option>
                  <option value="amount">Insufficient Funds</option>
                  <option value="other">Other (Add Note)</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
              </div>
              <button onClick={() => alert('Reject')} className="px-6 py-3 rounded-xl font-label-bold border-2 border-error text-error hover:bg-error-container transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
                Reject
              </button>

              {/* Approve Button */}
              <button onClick={() => alert('Approve')} className="flex-1 px-6 py-3 rounded-xl font-label-bold bg-tertiary-container text-on-tertiary shadow-md hover:shadow-lg hover:bg-tertiary transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminFinanceQueue;