import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminContentManagement: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="flex-1 p-6 lg:p-10 lg:pt-12 max-w-7xl mx-auto w-full">
      {/* Page Header & Quick Actions */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-1">Content Engine Overview</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Real-time status of university data and scraping pipelines.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => navigate('/admin/manual-entry')} className="bg-surface border border-outline-variant text-primary font-label-bold text-label-bold py-2.5 px-4 rounded-xl hover:bg-surface-container-low transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">domain_add</span>
            Add University
          </button>
          <button onClick={() => navigate('/admin/manual-entry')} className="bg-surface border border-outline-variant text-primary font-label-bold text-label-bold py-2.5 px-4 rounded-xl hover:bg-surface-container-low transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">post_add</span>
            Add Scholarship
          </button>
          <button onClick={() => alert('Run AI Sync')} className="bg-primary-container text-on-primary font-label-bold text-label-bold py-2.5 px-5 rounded-xl shadow-[0_8px_24px_rgba(26,115,232,0.15)] hover:opacity-90 transition-opacity flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            Run AI Sync
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Database Statistics (Top Row, spans 12) */}
        <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Stat 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-container">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
              </div>
              <span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed-dim px-2 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">trending_up</span> 12%
              </span>
            </div>
            <p className="font-label-bold text-label-bold text-on-surface-variant mb-1">Total Universities</p>
            <h3 className="font-display-lg text-display-lg text-on-surface">1,402</h3>
          </div>

          {/* Stat 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-container">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>euro_symbol</span>
              </div>
              <span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed-dim px-2 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">trending_up</span> 5%
              </span>
            </div>
            <p className="font-label-bold text-label-bold text-on-surface-variant mb-1">Active Scholarships</p>
            <h3 className="font-display-lg text-display-lg text-on-surface">3,845</h3>
          </div>

          {/* Stat 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-container flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-outline">update</span>
              <p className="font-label-bold text-label-bold text-on-surface-variant">Last Database Sync</p>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">Today, 04:30 AM</h4>
              <p className="font-body-md text-body-md text-outline">Automated nightly batch completed successfully.</p>
            </div>
          </div>
        </div>

        {/* Pipeline Status (Spans 8) */}
        <div className="md:col-span-8 bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-container">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">memory</span>
              Active AI Pipelines
            </h3>
            <button onClick={() => navigate('/admin/pipeline')} className="text-primary font-label-bold text-label-bold hover:underline">View All Tasks</button>
          </div>
          <div className="space-y-5">
            {/* Task 1 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <img className="w-5 h-5 object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1MCIGx8wK4SVuCkemVTw3LYPMCLaZ9fV0Q3owfgKHWhdsmSKWPYSwfzVk32KnwRG0EgjqT7pi33vsNuFRNmCam556mJqeomx0TIALQR7rXZ8h7lBH5T_iZ-TRuzgChi5sSbmNhrSR6bj9g3z8kWD5o_-4qoWPrX0szcn919R3k4E6wnNJ07HcJx8kzkyE-jFY_0_Y4heVGpXCglvsUhiM89r1O8wfwbIu6uAt4SC0xBRTzlFhDhkuWIxc6mUz5RhK83qwneFP6Ij5" alt="Italy flag icon" />
                  </div>
                  <span className="font-label-bold text-label-bold text-on-surface">Scraping Italian Uni sites...</span>
                </div>
                <span className="font-label-sm text-label-sm text-primary bg-primary-fixed-dim px-2 py-0.5 rounded">Running</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-1.5 mb-2 overflow-hidden">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="font-label-sm text-label-sm text-outline flex justify-between">
                <span>Target: Politecnico di Milano, Sapienza...</span>
                <span>45% (Estimated 12m left)</span>
              </p>
            </div>

            {/* Task 2 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                  </div>
                  <span className="font-label-bold text-label-bold text-on-surface">Processing German Scholarships with AI</span>
                </div>
                <span className="font-label-sm text-label-sm text-primary bg-primary-fixed-dim px-2 py-0.5 rounded">Running</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-1.5 mb-2 overflow-hidden">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '82%' }}></div>
              </div>
              <p className="font-label-sm text-label-sm text-outline flex justify-between">
                <span>Extracting eligibility criteria via LLM</span>
                <span>82% (Estimated 3m left)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity (Spans 4) */}
        <div className="md:col-span-4 bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-container flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-outline">history</span>
              Recent Activity
            </h3>
          </div>
          <div className="flex-1 space-y-4">
            {/* Activity Item 1 */}
            <div onClick={() => alert('View Activity Detail')} className="flex gap-3 cursor-pointer">
              <div className="mt-1">
                <div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim ring-4 ring-tertiary-fixed/20"></div>
              </div>
              <div>
                <p className="font-label-bold text-label-bold text-on-surface">DAAD Scholarship 2024</p>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-1">Updated eligibility criteria.</p>
                <div className="flex gap-2 mt-1">
                  <span className="font-label-sm text-label-sm text-xs text-outline">10m ago</span>
                  <span className="font-label-sm text-label-sm text-xs px-1.5 rounded bg-surface-variant text-on-surface-variant">AI-Verified</span>
                </div>
              </div>
            </div>

            {/* Activity Item 2 */}
            <div onClick={() => alert('View Activity Detail')} className="flex gap-3 cursor-pointer">
              <div className="mt-1">
                <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary-fixed-dim/20"></div>
              </div>
              <div>
                <p className="font-label-bold text-label-bold text-on-surface">Sorbonne University</p>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-1">New tuition fees added for Fall.</p>
                <div className="flex gap-2 mt-1">
                  <span className="font-label-sm text-label-sm text-xs text-outline">1h ago</span>
                  <span className="font-label-sm text-label-sm text-xs px-1.5 rounded bg-surface-variant text-on-surface-variant">Scraped</span>
                </div>
              </div>
            </div>

            {/* Activity Item 3 */}
            <div onClick={() => alert('View Activity Detail')} className="flex gap-3 cursor-pointer">
              <div className="mt-1">
                <div className="w-2 h-2 rounded-full bg-outline ring-4 ring-surface-variant"></div>
              </div>
              <div>
                <p className="font-label-bold text-label-bold text-on-surface">KU Leuven Engineering</p>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-1">Manual correction to deadline.</p>
                <div className="flex gap-2 mt-1">
                  <span className="font-label-sm text-label-sm text-xs text-outline">3h ago</span>
                  <span className="font-label-sm text-label-sm text-xs px-1.5 rounded bg-surface-variant text-on-surface-variant">Manual</span>
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => alert('View Activity Log')} className="mt-4 w-full text-center text-primary font-label-bold text-label-bold py-2 hover:bg-surface-container-lowest rounded-lg transition-colors">View Activity Log</button>
        </div>
      </div>
    </main>
  );
};

export default AdminContentManagement;