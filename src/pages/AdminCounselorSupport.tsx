import React from 'react';

const AdminCounselorSupport: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-8 pb-20">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-headline-md text-on-surface">Counselor Management</h2>
            <p className="font-body-md text-on-surface-variant">Oversee support staff, manage workload, and monitor active tickets.</p>
          </div>
          <button onClick={() => alert('Add New Counselor')} className="flex items-center justify-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-lg font-label-bold hover:shadow-md transition-shadow active:scale-95">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
            Add New Counselor
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Counselors List (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <button onClick={() => alert('Filter All Counselors')} className="px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full font-label-bold border border-transparent">All Counselors</button>
              <button onClick={() => alert('Filter Germany Visa')} className="px-4 py-1.5 bg-surface-container-lowest text-on-surface border border-outline-variant rounded-full font-label-bold hover:bg-surface-container-low transition-colors">Germany Visa</button>
              <button onClick={() => alert('Filter Italy Apps')} className="px-4 py-1.5 bg-surface-container-lowest text-on-surface border border-outline-variant rounded-full font-label-bold hover:bg-surface-container-low transition-colors">Italy Apps</button>
              <button onClick={() => alert('Filter General Support')} className="px-4 py-1.5 bg-surface-container-lowest text-on-surface border border-outline-variant rounded-full font-label-bold hover:bg-surface-container-low transition-colors">General Support</button>
            </div>

            {/* Counselor Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJL3LV5vtHWk_yuLzqch_z4Sd9mfjcUqQ4Tu8nDh_mZq2rFmt5d5r6Z5725nBWSvLC6wS8q5rO0xQ6XOeNYuhFAoVakdkRkp02XTnZGeq6Pl6IgnAKEANmWZXQIpYxkz1lsQIM-a3lXCQKeKaYAnGBNlTayMFrFG9v4bRURc77RoaouZ_B12NZTDGR9E63tta-so3d-SboXAKNJ9wOwdfsIWJfEr82DmXPDXQdn-BN0FXTbA5DqU6CLl_pErnnXEmFJC3iGu7yWDIS" alt="Sarah Jenkins" />
                    <div>
                      <h3 className="font-headline-sm text-on-surface text-base">Sarah Jenkins</h3>
                      <p className="font-label-sm text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">school</span> Germany Visa Expert
                      </p>
                    </div>
                  </div>
                  <button onClick={() => alert('Sarah Jenkins Menu')} className="text-outline hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-surface-variant">
                  <div className="text-center">
                    <p className="font-label-sm text-on-surface-variant">Workload</p>
                    <p className="font-headline-sm text-on-surface">42 <span className="font-label-sm text-outline font-normal">/ 50</span></p>
                  </div>
                  <div className="text-center">
                    <p className="font-label-sm text-on-surface-variant">Rating</p>
                    <p className="font-headline-sm text-on-surface flex items-center justify-center gap-1">
                      4.9 <span className="material-symbols-outlined text-[16px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgbZ7AnrZxugO-xXLpG26tlKXUZrPzyscFPU06ufsSDJhpMgS7P5hq5enr5JgrLdfvipsl-NuJCW1v2sz-dDVBYINblBJuJAtguIjeUY-BqSoIT_J6mIVCSUd2TR1UEZ9Bw1ep-KKCsnQKYH0dPzXa-LfUVTBQt2G_2tia0Jb3oyCWLdyVO_LZTCBiux2oEpwsp4ofxGTN-zvtUPo0Pi5k7ESM03gxEDFE88soCwsGHNPJFYhBUcZjb9WhzOg3PAxcF5-IomAfjVhS" alt="David Chen" />
                    <div>
                      <h3 className="font-headline-sm text-on-surface text-base">David Chen</h3>
                      <p className="font-label-sm text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">account_balance</span> Italy Apps
                      </p>
                    </div>
                  </div>
                  <button onClick={() => alert('David Chen Menu')} className="text-outline hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-surface-variant">
                  <div className="text-center">
                    <p className="font-label-sm text-on-surface-variant">Workload</p>
                    <p className="font-headline-sm text-on-surface">28 <span className="font-label-sm text-outline font-normal">/ 50</span></p>
                  </div>
                  <div className="text-center">
                    <p className="font-label-sm text-on-surface-variant">Rating</p>
                    <p className="font-headline-sm text-on-surface flex items-center justify-center gap-1">
                      4.7 <span className="material-symbols-outlined text-[16px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant font-headline-sm">
                      MR
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-on-surface text-base">Maria Rodriguez</h3>
                      <p className="font-label-sm text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">euro</span> Finance & Blocked Acc.
                      </p>
                    </div>
                  </div>
                  <button onClick={() => alert('Maria Rodriguez Menu')} className="text-outline hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-surface-variant">
                  <div className="text-center">
                    <p className="font-label-sm text-on-surface-variant">Workload</p>
                    <p className="font-headline-sm text-error">49 <span className="font-label-sm text-outline font-normal">/ 50</span></p>
                  </div>
                  <div className="text-center">
                    <p className="font-label-sm text-on-surface-variant">Rating</p>
                    <p className="font-headline-sm text-on-surface flex items-center justify-center gap-1">
                      4.8 <span className="material-symbols-outlined text-[16px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support Ticket Queue (Span 1) */}
          <div className="lg:col-span-1">
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm h-full flex flex-col">
              <div className="p-5 border-b border-surface-variant flex items-center justify-between">
                <h3 className="font-headline-sm text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">local_activity</span>
                  Ticket Queue
                </h3>
                <span className="px-2 py-0.5 bg-error-container text-on-error-container rounded-full font-label-bold text-[10px]">12 Unresolved</span>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {/* Ticket 1 */}
                <div onClick={() => alert('View High Priority Ticket')} className="p-4 bg-surface-container-low rounded-lg border border-transparent hover:border-outline-variant transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-label-bold text-error">High Priority</span>
                    <span className="font-label-sm text-outline">10m ago</span>
                  </div>
                  <h4 className="font-label-bold text-on-surface mb-1">Visa Application Delay Query</h4>
                  <p className="font-label-sm text-on-surface-variant line-clamp-2">Student is asking about the current processing times for the Berlin consulate as their flight is approaching.</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-label-sm text-primary">Unassigned</span>
                    <button onClick={(e) => { e.stopPropagation(); alert('Assign Ticket 1'); }} className="text-primary font-label-bold text-xs hover:underline">Assign</button>
                  </div>
                </div>

                {/* Ticket 2 */}
                <div onClick={() => alert('View Medium Priority Ticket')} className="p-4 bg-surface-container-low rounded-lg border border-transparent hover:border-outline-variant transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-label-bold text-on-surface-variant">Medium</span>
                    <span className="font-label-sm text-outline">2h ago</span>
                  </div>
                  <h4 className="font-label-bold text-on-surface mb-1">Blocked Account Verification</h4>
                  <p className="font-label-sm text-on-surface-variant line-clamp-2">Need clarification on acceptable documents for proof of funds transfer.</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-label-sm text-on-surface-variant">Assigned to: Maria R.</span>
                    <button onClick={(e) => { e.stopPropagation(); alert('View Ticket 2 Details'); }} className="text-primary font-label-bold text-xs hover:underline">View</button>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-surface-variant">
                <button onClick={() => alert('View All Tickets')} className="w-full py-2 text-primary font-label-bold hover:bg-surface-container rounded-lg transition-colors text-center">
                  View All Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminCounselorSupport;