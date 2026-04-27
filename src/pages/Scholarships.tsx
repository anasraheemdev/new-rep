import React from 'react';
import { Link } from 'react-router-dom';

const Scholarships: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-background p-margin-mobile md:p-xl flex flex-col lg:flex-row gap-lg pb-32 md:pb-8">
      {/* Left/Center Content Area */}
      <div className="flex-1 max-w-4xl">
        <div className="mb-8">
          <h1 className="font-display-lg text-on-surface mb-2">Explore Scholarships</h1>
          <p className="font-body-lg text-on-surface-variant">Find funding opportunities tailored to your academic profile and target destinations.</p>
        </div>

        {/* Active Filters Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="flex items-center gap-1 bg-surface-container-high px-3 py-1.5 rounded-full border border-outline-variant">
            <span className="font-label-sm text-on-surface">Italy</span>
            <button className="flex items-center"><span className="material-symbols-outlined text-[16px]">close</span></button>
          </div>
          <div className="flex items-center gap-1 bg-surface-container-high px-3 py-1.5 rounded-full border border-outline-variant">
            <span className="font-label-sm text-on-surface">Masters</span>
            <button className="flex items-center"><span className="material-symbols-outlined text-[16px]">close</span></button>
          </div>
          <button onClick={() => alert('Clear all filters triggered')} className="font-label-sm text-primary-container px-2 py-1.5 hover:underline">Clear all</button>
        </div>

        {/* Scholarship Cards List */}
        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-md lg:p-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_30px_rgba(0,0,0,0.08)] transition-shadow">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-tertiary-container/10 text-tertiary font-label-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    Official
                  </span>
                  <span className="text-on-surface-variant font-label-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    Italy
                  </span>
                </div>
                <h3 className="font-headline-md text-on-surface mb-1">DSU Scholarship Italy</h3>
                <p className="font-body-md text-on-surface-variant mb-4">Regional scholarship offering free tuition, accommodation, and free meals at university dining halls.</p>
                <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
                  <div className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-primary-container">euro</span>
                    <span className="font-label-bold">€7,200/year</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-primary-container">school</span>
                    <span className="font-label-bold">Bachelors & Masters</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between items-start md:items-end md:w-48 border-t md:border-t-0 md:border-l border-outline-variant pt-4 md:pt-0 md:pl-4">
                <div className="mb-4 text-left md:text-right">
                  <p className="font-label-sm text-on-surface-variant mb-1">Application Deadline</p>
                  <p className="font-label-bold text-on-surface flex items-center md:justify-end gap-1">
                    <span className="material-symbols-outlined text-[16px] text-error">calendar_today</span>
                    Sept 15, 2024
                  </p>
                </div>
                <Link to="/scholarships/1" className="w-full md:w-auto bg-primary-container text-on-primary-container font-label-bold py-2.5 px-6 rounded-xl shadow-[0_4px_12px_rgba(26,115,232,0.2)] hover:shadow-[0_6px_16px_rgba(26,115,232,0.3)] transition-shadow text-center">
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-md lg:p-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_30px_rgba(0,0,0,0.08)] transition-shadow">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-tertiary-container/10 text-tertiary font-label-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    Official
                  </span>
                  <span className="text-on-surface-variant font-label-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    Germany
                  </span>
                </div>
                <h3 className="font-headline-md text-on-surface mb-1">DAAD Scholarship</h3>
                <p className="font-body-md text-on-surface-variant mb-4">Fully funded scholarship for international students pursuing postgraduate degrees in Germany.</p>
                <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
                  <div className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-primary-container">account_balance_wallet</span>
                    <span className="font-label-bold">Fully Funded</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-primary-container">school</span>
                    <span className="font-label-bold">Masters & PhD</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between items-start md:items-end md:w-48 border-t md:border-t-0 md:border-l border-outline-variant pt-4 md:pt-0 md:pl-4">
                <div className="mb-4 text-left md:text-right">
                  <p className="font-label-sm text-on-surface-variant mb-1">Application Deadline</p>
                  <p className="font-label-bold text-on-surface flex items-center md:justify-end gap-1">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    Oct 31, 2024
                  </p>
                </div>
                <Link to="/scholarships/2" className="w-full md:w-auto bg-primary-container text-on-primary-container font-label-bold py-2.5 px-6 rounded-xl shadow-[0_4px_12px_rgba(26,115,232,0.2)] hover:shadow-[0_6px_16px_rgba(26,115,232,0.3)] transition-shadow text-center">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Filters */}
      <aside className="w-full lg:w-80 flex-shrink-0">
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-md shadow-[0px_4px_20px_rgba(0,0,0,0.05)] sticky top-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline-sm text-on-surface">Filters</h2>
            <span className="material-symbols-outlined text-on-surface-variant">tune</span>
          </div>

          {/* Destination Country */}
          <div className="mb-6">
            <h3 className="font-label-bold text-on-surface mb-3">Destination Country</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input onChange={() => alert('Filter Italy toggled')} type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary-container focus:ring-primary-container" defaultChecked />
                <span className="font-body-md text-on-surface group-hover:text-primary-container transition-colors">Italy</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input onChange={() => alert('Filter Germany toggled')} type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary-container focus:ring-primary-container" />
                <span className="font-body-md text-on-surface group-hover:text-primary-container transition-colors">Germany</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input onChange={() => alert('Filter France toggled')} type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary-container focus:ring-primary-container" />
                <span className="font-body-md text-on-surface group-hover:text-primary-container transition-colors">France</span>
              </label>
            </div>
          </div>

          <div className="h-px bg-outline-variant w-full mb-6"></div>

          {/* Degree Level */}
          <div className="mb-6">
            <h3 className="font-label-bold text-on-surface mb-3">Degree Level</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input onChange={() => alert('Filter Bachelors toggled')} type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary-container focus:ring-primary-container" />
                <span className="font-body-md text-on-surface group-hover:text-primary-container transition-colors">Bachelors</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input onChange={() => alert('Filter Masters toggled')} type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary-container focus:ring-primary-container" defaultChecked />
                <span className="font-body-md text-on-surface group-hover:text-primary-container transition-colors">Masters</span>
              </label>
            </div>
          </div>

          <div className="h-px bg-outline-variant w-full mb-6"></div>

          {/* Funding Type */}
          <div className="mb-6">
            <h3 className="font-label-bold text-on-surface mb-3">Funding Type</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input onChange={() => alert('Filter Fully Funded toggled')} type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary-container focus:ring-primary-container" />
                <span className="font-body-md text-on-surface group-hover:text-primary-container transition-colors">Fully Funded</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input onChange={() => alert('Filter Partial / Regional toggled')} type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary-container focus:ring-primary-container" />
                <span className="font-body-md text-on-surface group-hover:text-primary-container transition-colors">Partial / Regional</span>
              </label>
            </div>
          </div>

          <div className="h-px bg-outline-variant w-full mb-6"></div>

          {/* Quick Toggles */}
          <div>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="font-label-bold text-on-surface">No IELTS Required</span>
              <div className="relative">
                <input onChange={() => alert('Filter No IELTS toggled')} type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
              </div>
            </label>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default Scholarships;