import React from 'react';

const AdminStudentDirectory: React.FC = () => {
  return (
    <main className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full">
      {/* Page Header & Filters */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-1">Student Directory</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage and track student progress across 142 active applications.</p>
        </div>
        <button onClick={() => alert('New Student')} className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-bold text-label-bold hover:bg-primary-container transition-colors shadow-sm flex items-center gap-2 self-start md:self-auto">
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
          New Student
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant mb-6 flex flex-wrap gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="flex-1 min-w-[200px]">
          <label className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Journey Stage</label>
          <div className="relative">
            <select className="w-full appearance-none bg-surface border border-outline-variant rounded-lg py-2 pl-3 pr-10 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none">
              <option>All Stages</option>
              <option>Document Prep</option>
              <option>Uni Applied</option>
              <option>Offer Received</option>
              <option>Visa Interview</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
          </div>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Target Country</label>
          <div className="relative">
            <select className="w-full appearance-none bg-surface border border-outline-variant rounded-lg py-2 pl-3 pr-10 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none">
              <option>All Countries</option>
              <option>Germany</option>
              <option>France</option>
              <option>Netherlands</option>
              <option>Ireland</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
          </div>
        </div>
        <div className="flex-1 min-w-[150px]">
          <label className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Intake</label>
          <div className="relative">
            <select className="w-full appearance-none bg-surface border border-outline-variant rounded-lg py-2 pl-3 pr-10 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none">
              <option>All Intakes</option>
              <option>Winter 2024</option>
              <option>Summer 2024</option>
              <option>Winter 2025</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
          </div>
        </div>
        <div className="flex items-end">
          <button onClick={() => alert('More Filters')} className="bg-surface-container-low text-on-surface-variant border border-outline-variant px-4 py-2 rounded-lg font-label-bold text-label-bold hover:bg-surface-container transition-colors flex items-center gap-2 h-[42px]">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>filter_list</span>
            More Filters
          </button>
        </div>
      </div>

      {/* Student Data Table (Bento/Card-like Rows) */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-surface-container-low border-b border-outline-variant font-label-bold text-label-bold text-on-surface-variant">
          <div className="col-span-3">Student</div>
          <div className="col-span-3">Journey Stage</div>
          <div className="col-span-2">Target</div>
          <div className="col-span-2">Last Active</div>
          <div className="col-span-2 text-right">Quick Actions</div>
        </div>

        {/* Row 1 */}
        <div onClick={() => alert('View Student Profile')} className="grid grid-cols-12 gap-4 px-6 py-4 items-center border-b border-outline-variant hover:bg-surface-bright transition-colors group cursor-pointer">
          <div className="col-span-3 flex items-center gap-3">
            <img className="w-10 h-10 rounded-full object-cover border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_rCcWlbAbzpeaxzKIuMQwlohQOwzepk8lv_LD_G3cEn-0qQBCxqBT5dxl1cIGibaj-QJjYngtVRE7ripFHkY2ToP6blhPWo9AWaLrOfUkasiVKQIdgxdIHUk9AmZkd3k7FUTt1Wroul6UMdo-v3aLw3z0gQ0Ptnd7oqeGbCP1GWR73-f8FBdZTWJFxne-BFrjWfFj7hvzippSISEtrZ2fI3hBaIz3U6zwVwDh1OJKBkfzr46F89hxq-1UjiAP08B0gtywadKv5j4b" alt="Arjun Patel Avatar" />
            <div>
              <div className="font-label-bold text-label-bold text-on-surface">Arjun Patel</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant">Winter 2024 • ID: 8492</div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>description</span>
              Document Prep
            </div>
            <div className="w-full bg-surface-variant h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-secondary w-1/4 h-full rounded-full"></div>
            </div>
          </div>
          <div className="col-span-2 flex items-center gap-2 text-on-surface font-body-md text-body-md">
            <span className="material-symbols-outlined text-outline-variant">public</span>
            Germany
          </div>
          <div className="col-span-2 text-on-surface-variant font-body-md text-body-md">
            Today, 10:42 AM
          </div>
          <div className="col-span-2 flex justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => alert('Message Student')} className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="Message">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chat</span>
            </button>
            <button onClick={() => alert('Review Docs')} className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="Review Docs">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>folder_open</span>
            </button>
            <button onClick={() => alert('Assign Counselor')} className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="Assign Counselor">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>person_add</span>
            </button>
          </div>
        </div>

        {/* Row 2 */}
        <div onClick={() => alert('View Student Profile')} className="grid grid-cols-12 gap-4 px-6 py-4 items-center border-b border-outline-variant hover:bg-surface-bright transition-colors group cursor-pointer">
          <div className="col-span-3 flex items-center gap-3">
            <img className="w-10 h-10 rounded-full object-cover border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-3G-3vzbc96qFLvqYxWEGP5SDeLW0Cmcr9W5ZoO89adMomK3ZHyCwv142qqjjiosRpOouoBn19iHv6NfXQ8AhpkYdrd-77Fl6QI2UfK6LMkV-bsZ6D-vk1DsQrgBBwWMC0sChr9GhVnASCpHY0YhWAOG53ifOJOCD2bouiJ9xAJKFEcRJIAoxtKCsXXeANzNnpc4nIxIPjcDpOACIJ-rDo0V8As5o_-4blXFW5P36lerYpDKvX6LMce5hloNHBpREbwakeyTAMTO4" alt="Priya Sharma Avatar" />
            <div>
              <div className="font-label-bold text-label-bold text-on-surface">Priya Sharma</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant">Summer 2024 • ID: 8501</div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>school</span>
              Uni Applied
            </div>
            <div className="w-full bg-surface-variant h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-tertiary w-1/2 h-full rounded-full"></div>
            </div>
          </div>
          <div className="col-span-2 flex items-center gap-2 text-on-surface font-body-md text-body-md">
            <span className="material-symbols-outlined text-outline-variant">public</span>
            France
          </div>
          <div className="col-span-2 text-on-surface-variant font-body-md text-body-md">
            Yesterday
          </div>
          <div className="col-span-2 flex justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => alert('Message Student')} className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="Message">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chat</span>
            </button>
            <button onClick={() => alert('Review Docs')} className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="Review Docs">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>folder_open</span>
            </button>
            <button onClick={() => alert('Assign Counselor')} className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="Assign Counselor">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>person_add</span>
            </button>
          </div>
        </div>

        {/* Row 3 */}
        <div onClick={() => alert('View Student Profile')} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-surface-bright transition-colors group cursor-pointer">
          <div className="col-span-3 flex items-center gap-3">
            <img className="w-10 h-10 rounded-full object-cover border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB0NJ2lM01Sc7boLp5hHylXen_woH7qTeH7cZU1Xv7zQc7g0cVFd-BHfnvK0duFSFzUPY3r9GNlVEljptqkQZsdKtTMLz_3ScKPMypoYuqsyTXVzkPBOsAJGOQWSn73VTHyHA8tpOwLuiCP0M8VdNBKyPGk8dSgXVl3IxeDkmr3gD-tn3kRBo4IpZObe5SbSqyFoF7N02IdflQ-UC-f0e7c0EI2LXGg0Itf6M_02eznnKTlCa5-5z2XkVpt0033tjfVMNXZ_PzVSwb" alt="Rohan Desai Avatar" />
            <div>
              <div className="font-label-bold text-label-bold text-on-surface">Rohan Desai</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant">Winter 2024 • ID: 8312</div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-error-container text-on-error-container font-label-sm text-label-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>luggage</span>
              Visa Interview
            </div>
            <div className="w-full bg-surface-variant h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-error w-[85%] h-full rounded-full"></div>
            </div>
          </div>
          <div className="col-span-2 flex items-center gap-2 text-on-surface font-body-md text-body-md">
            <span className="material-symbols-outlined text-outline-variant">public</span>
            Netherlands
          </div>
          <div className="col-span-2 text-on-surface-variant font-body-md text-body-md">
            Oct 24, 2023
          </div>
          <div className="col-span-2 flex justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => alert('Message Student')} className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="Message">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chat</span>
            </button>
            <button onClick={() => alert('Review Docs')} className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="Review Docs">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>folder_open</span>
            </button>
            <button onClick={() => alert('Assign Counselor')} className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded-md transition-colors" title="Assign Counselor">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>person_add</span>
            </button>
          </div>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between">
          <div className="font-body-md text-body-md text-on-surface-variant">
            Showing 1 to 3 of 142 entries
          </div>
          <div className="flex gap-2">
            <button onClick={() => alert('Previous Page')} className="px-3 py-1 border border-outline-variant rounded text-on-surface-variant hover:bg-surface-container disabled:opacity-50" disabled>Previous</button>
            <button onClick={() => alert('Page 1')} className="px-3 py-1 border border-primary bg-primary text-on-primary rounded">1</button>
            <button onClick={() => alert('Page 2')} className="px-3 py-1 border border-outline-variant rounded text-on-surface hover:bg-surface-container">2</button>
            <button onClick={() => alert('Page 3')} className="px-3 py-1 border border-outline-variant rounded text-on-surface hover:bg-surface-container">3</button>
            <span className="px-2 py-1 text-on-surface-variant">...</span>
            <button onClick={() => alert('Next Page')} className="px-3 py-1 border border-outline-variant rounded text-on-surface hover:bg-surface-container">Next</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminStudentDirectory;