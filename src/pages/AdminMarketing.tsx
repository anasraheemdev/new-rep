import React from 'react';

const AdminMarketing: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto px-6 pb-12 w-full max-w-6xl mx-auto space-y-lg pt-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-surface">Campaign Management</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Engage students and track conversion across multiple channels.</p>
        </div>
        <button onClick={() => alert('New Campaign')} className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary-container px-6 py-3 rounded-xl font-label-bold text-label-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0">
          <span className="material-symbols-outlined text-[20px]">add</span>
          New Campaign
        </button>
      </div>

      {/* Dashboard Metrics (Bento Grid Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
            </div>
            <span className="font-label-bold text-label-bold text-on-surface-variant">Total Reach</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display-lg text-display-lg text-on-surface">45,280</span>
            <span className="font-label-sm text-label-sm text-tertiary-container bg-tertiary-container/10 px-2 py-0.5 rounded-full">+12%</span>
          </div>
          <p className="font-body-md text-body-md text-outline mt-2 text-sm">Students engaged this month</p>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>ads_click</span>
            </div>
            <span className="font-label-bold text-label-bold text-on-surface-variant">Avg. CTR</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display-lg text-display-lg text-on-surface">18.4%</span>
            <span className="font-label-sm text-label-sm text-tertiary-container bg-tertiary-container/10 px-2 py-0.5 rounded-full">+2.1%</span>
          </div>
          <p className="font-body-md text-body-md text-outline mt-2 text-sm">Across all active channels</p>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>task_alt</span>
            </div>
            <span className="font-label-bold text-label-bold text-on-surface-variant">Conversion Rate</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display-lg text-display-lg text-on-surface">8.2%</span>
            <span className="font-label-sm text-label-sm text-error bg-error-container px-2 py-0.5 rounded-full">-0.4%</span>
          </div>
          <p className="font-body-md text-body-md text-outline mt-2 text-sm">Action completed after alert</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Campaigns List */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="p-6 border-b border-surface-variant flex items-center justify-between">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Active Campaigns</h3>
            <button onClick={() => alert('View All Campaigns')} className="text-primary-container font-label-bold text-label-bold hover:underline">View All</button>
          </div>
          <div className="divide-y divide-surface-variant">
            {/* Campaign Item 1 */}
            <div onClick={() => alert('View Campaign Details')} className="p-6 hover:bg-surface-container-low transition-colors cursor-pointer group">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                    <span className="material-symbols-outlined">forum</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-[16px] text-on-surface group-hover:text-primary-container transition-colors">Italy Visa Deadline Reminder</h4>
                    <p className="font-body-md text-sm text-on-surface-variant mt-1">Target: Students going to Italy (Application Stage)</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-outline">
                        <span className="material-symbols-outlined text-[14px]">send</span> 2,400 Sent
                      </span>
                      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-outline">
                        <span className="material-symbols-outlined text-[14px]">visibility</span> 85% Open
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-container/10 text-tertiary-container font-label-sm text-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span> Running
                  </span>
                  <div className="mt-2 font-label-bold text-label-bold text-on-surface">
                    312 Conversions
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Item 2 */}
            <div onClick={() => alert('View Campaign Details')} className="p-6 hover:bg-surface-container-low transition-colors cursor-pointer group">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-[16px] text-on-surface group-hover:text-primary-container transition-colors">Germany Blocked Account Guide</h4>
                    <p className="font-body-md text-sm text-on-surface-variant mt-1">Target: Germany Admits (Pre-Departure)</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-outline">
                        <span className="material-symbols-outlined text-[14px]">send</span> 5,120 Sent
                      </span>
                      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-outline">
                        <span className="material-symbols-outlined text-[14px]">touch_app</span> 12% CTR
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-container/10 text-tertiary-container font-label-sm text-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span> Running
                  </span>
                  <div className="mt-2 font-label-bold text-label-bold text-on-surface">
                    184 Conversions
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Item 3 */}
            <div onClick={() => alert('View Campaign Details')} className="p-6 hover:bg-surface-container-low transition-colors cursor-pointer group">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <span className="material-symbols-outlined">notifications_active</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-[16px] text-on-surface group-hover:text-primary-container transition-colors">Complete Profile Nudge</h4>
                    <p className="font-body-md text-sm text-on-surface-variant mt-1">Target: All Incomplete Profiles (Day 3)</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-outline">
                        <span className="material-symbols-outlined text-[14px]">send</span> Automated
                      </span>
                      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-outline">
                        <span className="material-symbols-outlined text-[14px]">visibility</span> 65% Open
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 font-label-sm text-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Paused
                  </span>
                  <div className="mt-2 font-label-bold text-label-bold text-on-surface">
                    89 Conversions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Targeting & Segmentation Sidebar */}
        <div className="flex flex-col gap-6">
          {/* Targeting Quick Actions */}
          <div className="bg-surface-container-lowest rounded-xl border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary-container">radar</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Quick Segments</h3>
            </div>
            <p className="font-body-md text-sm text-on-surface-variant mb-4">Launch campaigns to pre-defined student cohorts.</p>
            <div className="space-y-3">
              <button onClick={() => alert('Quick Segment 1')} className="w-full flex items-center justify-between p-3 rounded-lg border border-surface-variant hover:border-primary-container hover:bg-primary-container/5 transition-colors text-left group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-outline group-hover:text-primary-container">public</span>
                  <span className="font-label-bold text-label-bold text-on-surface">EU Bound (Admitted)</span>
                </div>
                <span className="font-label-sm text-label-sm text-outline bg-surface-container px-2 py-1 rounded">12k</span>
              </button>
              <button onClick={() => alert('Quick Segment 2')} className="w-full flex items-center justify-between p-3 rounded-lg border border-surface-variant hover:border-primary-container hover:bg-primary-container/5 transition-colors text-left group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-outline group-hover:text-primary-container">account_balance</span>
                  <span className="font-label-bold text-label-bold text-on-surface">Finance Pending</span>
                </div>
                <span className="font-label-sm text-label-sm text-outline bg-surface-container px-2 py-1 rounded">3.4k</span>
              </button>
              <button onClick={() => alert('Quick Segment 3')} className="w-full flex items-center justify-between p-3 rounded-lg border border-surface-variant hover:border-primary-container hover:bg-primary-container/5 transition-colors text-left group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-outline group-hover:text-primary-container">warning</span>
                  <span className="font-label-bold text-label-bold text-on-surface">Inactive &gt; 7 Days</span>
                </div>
                <span className="font-label-sm text-label-sm text-outline bg-surface-container px-2 py-1 rounded">850</span>
              </button>
            </div>
            <button onClick={() => alert('Create Custom Segment')} className="w-full mt-4 text-center font-label-bold text-label-bold text-primary-container hover:underline py-2">
              Create Custom Segment
            </button>
          </div>

          {/* Channel Performance Mini */}
          <div className="bg-surface-container-lowest rounded-xl border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-6">
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Channel ROI</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-label-sm text-label-sm mb-1">
                  <span className="text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-[#25D366]">forum</span> WhatsApp</span>
                  <span className="text-on-surface-variant">42% Conv.</span>
                </div>
                <div className="w-full bg-surface-variant rounded-full h-2">
                  <div className="bg-[#25D366] h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-label-sm text-label-sm mb-1">
                  <span className="text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-blue-500">mail</span> Email</span>
                  <span className="text-on-surface-variant">18% Conv.</span>
                </div>
                <div className="w-full bg-surface-variant rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-label-sm text-label-sm mb-1">
                  <span className="text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-purple-500">notifications</span> Push</span>
                  <span className="text-on-surface-variant">24% Conv.</span>
                </div>
                <div className="w-full bg-surface-variant rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '55%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminMarketing;