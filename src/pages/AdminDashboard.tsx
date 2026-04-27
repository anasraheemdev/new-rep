import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="p-6 lg:p-10 max-w-7xl mx-auto w-full space-y-lg">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="font-display-lg text-display-lg text-on-surface mb-2">Overview</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Welcome back, here's what's happening today.</p>
        </div>
        <div className="hidden md:flex gap-3">
          <button onClick={() => alert('Export Report triggered')} className="px-4 py-2 border border-outline-variant rounded-lg font-label-bold text-label-bold text-on-surface flex items-center gap-2 hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-[20px]">download</span>
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[64px] text-primary">group</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
              <span className="material-symbols-outlined">group</span>
            </div>
            <h3 className="font-label-bold text-label-bold text-on-surface-variant">Total Students</h3>
          </div>
          <p className="font-display-lg text-display-lg text-on-surface mb-1">1,248</p>
          <p className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">trending_up</span>
            +12% this month
          </p>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[64px] text-secondary">school</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
              <span className="material-symbols-outlined">school</span>
            </div>
            <h3 className="font-label-bold text-label-bold text-on-surface-variant">Active Applications</h3>
          </div>
          <p className="font-display-lg text-display-lg text-on-surface mb-1">432</p>
          <p className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">trending_up</span>
            +5% this week
          </p>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[64px] text-[#D97706]">description</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
              <span className="material-symbols-outlined">description</span>
            </div>
            <h3 className="font-label-bold text-label-bold text-on-surface-variant">Documents Pending</h3>
          </div>
          <p className="font-display-lg text-display-lg text-on-surface mb-1">87</p>
          <p className="font-label-sm text-label-sm text-error flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">warning</span>
            Needs review
          </p>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[64px] text-error">confirmation_number</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-on-error-container">
              <span className="material-symbols-outlined">confirmation_number</span>
            </div>
            <h3 className="font-label-bold text-label-bold text-on-surface-variant">Support Tickets</h3>
          </div>
          <p className="font-display-lg text-display-lg text-on-surface mb-1">24</p>
          <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">schedule</span>
            Avg response: 2h
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task Queue */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col">
          <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface-bright">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-error-container flex items-center justify-center text-on-error-container">
                <span className="material-symbols-outlined text-[18px]">assignment_late</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Urgent Task Queue</h3>
            </div>
            <button onClick={() => navigate('/admin/pipeline')} className="font-label-bold text-label-bold text-primary-container hover:underline">View All</button>
          </div>
          <div className="p-0 flex-1">
            <ul className="divide-y divide-outline-variant/20">
              <li onClick={() => navigate('/admin/documents')} className="p-4 md:p-6 hover:bg-surface-container-low transition-colors flex flex-col sm:flex-row gap-4 sm:items-center justify-between group cursor-pointer">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex-shrink-0 overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB-2IPTBkuFahZOSpRDixQOXJKwwdel4tfwfrdZX2JdGoEE5NTB7XAPKppGs3HZqCTMZemWHuups-UoI1NkC3FA_kj12lkOGZAga5hvPhg2wJGR8cSG3iolCx2biwZs0FNXCFaD_YsNUS7KbrycID1y1zuCPEuPd7ZAD2uRzGNMLoa9wwVCPrPziS_uq5qEX-0dr1tBTKJ6EeB6gpv2zCkuv7j2Z_TGW-QBhL9P1yUjbFT9xMe0dOMn0jKICCvNj1wrHabXjHG4FgA" alt="Student Profile" />
                  </div>
                  <div>
                    <h4 className="font-label-bold text-label-bold text-on-surface mb-1">Verify Blocked Account Document</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-1">Aisha Patel • University of Munich</p>
                    <div className="flex gap-2">
                      <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase bg-error-container text-on-error-container">High Priority</span>
                      <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase bg-surface-variant text-on-surface-variant">Finance</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-2 sm:mt-0 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={(e) => { e.stopPropagation(); navigate('/admin/documents'); }} className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="View Document">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); navigate('/admin/documents'); }} className="px-4 py-2 bg-primary-container text-on-primary-container rounded-lg font-label-bold text-label-bold shadow-sm hover:shadow-md transition-shadow">
                    Review
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Side Column for Chart & Activity */}
        <div className="flex flex-col gap-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container">public</span>
                Target Countries
              </h3>
              <button onClick={() => alert('More Options')} className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined">more_vert</span></button>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-label-sm text-label-sm mb-1">
                  <span className="text-on-surface font-semibold">Germany</span>
                  <span className="text-on-surface-variant">45%</span>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                  <div className="bg-primary-container h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex-1">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">history</span>
              Recent Activity
            </h3>
            <div className="relative pl-4 border-l-2 border-outline-variant/30 space-y-6">
              <div className="relative">
                <div className="absolute -left-[21px] w-3 h-3 bg-tertiary rounded-full ring-4 ring-surface-container-lowest"></div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">10 mins ago</p>
                <p className="font-body-md text-body-md text-on-surface"><span className="font-bold">Visa Approved:</span> Sarah Jenkins received her German Student Visa.</p>
              </div>
            </div>
            <button onClick={() => navigate('/admin/analytics')} className="mt-6 w-full py-2 text-center font-label-bold text-label-bold text-primary-container border border-outline-variant/30 rounded-lg hover:bg-surface-container-low transition-colors">
              View Full Timeline
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;