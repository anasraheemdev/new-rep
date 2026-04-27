import React from 'react';

const AdminManualEntry: React.FC = () => {
  return (
    <main className="flex-1 p-margin-mobile md:p-lg lg:p-xl max-w-5xl mx-auto w-full pb-24">
      {/* Page Header */}
      <div className="mb-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-headline-md text-on-surface">Add New University</h2>
          <p className="font-body-md text-on-surface-variant mt-1">Enter comprehensive details for platform listing.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => alert('Save Draft')} className="px-4 py-2 rounded-lg border border-primary-container text-primary-container font-label-bold hover:bg-primary-container/5 transition-colors">
            Save Draft
          </button>
          <button onClick={() => alert('Publish to Platform')} className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-bold hover:bg-primary shadow-sm transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">publish</span>
            Publish to Platform
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        {/* Left Column: Navigation/Stepper */}
        <div className="lg:col-span-1">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-md sticky top-24">
            <h3 className="font-label-bold text-on-surface-variant uppercase tracking-wider mb-4 text-xs">Entry Sections</h3>
            <nav className="space-y-1 relative">
              {/* Progress Line */}
              <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-surface-variant -z-10"></div>

              <a href="#basic-info" className="flex items-center gap-3 p-2 rounded-lg bg-primary-container/5 text-primary-container font-label-bold group">
                <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-xs ring-4 ring-surface-container-lowest">1</div>
                Basic Info
              </a>
              <a href="#academic-details" className="flex items-center gap-3 p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-bold group">
                <div className="w-6 h-6 rounded-full bg-surface-variant text-outline flex items-center justify-center text-xs ring-4 ring-surface-container-lowest">2</div>
                Academic Details
              </a>
              <a href="#requirements" className="flex items-center gap-3 p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-bold group">
                <div className="w-6 h-6 rounded-full bg-surface-variant text-outline flex items-center justify-center text-xs ring-4 ring-surface-container-lowest">3</div>
                Requirements
              </a>
              <a href="#financials" className="flex items-center gap-3 p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-bold group">
                <div className="w-6 h-6 rounded-full bg-surface-variant text-outline flex items-center justify-center text-xs ring-4 ring-surface-container-lowest">4</div>
                Financials
              </a>
            </nav>
          </div>
        </div>

        {/* Right Column: Form Sections */}
        <div className="lg:col-span-2 space-y-lg">
          {/* Section 1: Basic Info */}
          <section id="basic-info" className="bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm">
            <div className="flex items-center gap-3 mb-6 border-b border-outline-variant pb-4">
              <span className="material-symbols-outlined text-primary-container">account_balance</span>
              <h3 className="font-headline-sm text-on-surface">Basic Info</h3>
            </div>
            <div className="space-y-6">
              {/* Logo Upload */}
              <div className="flex items-start gap-4">
                <div onClick={() => alert('Upload Logo')} className="w-24 h-24 rounded-lg border-2 border-dashed border-outline-variant bg-surface-container-low flex flex-col items-center justify-center text-outline cursor-pointer hover:border-primary-container hover:text-primary-container transition-colors">
                  <span className="material-symbols-outlined text-2xl mb-1">add_photo_alternate</span>
                  <span className="text-[10px] font-label-bold">Upload Logo</span>
                </div>
                <div className="flex-1">
                  <p className="font-label-bold text-on-surface mb-1">Institution Logo</p>
                  <p className="text-label-sm text-on-surface-variant mb-3">Recommended size: 400x400px. PNG or SVG preferred.</p>
                  <input type="file" id="logo-upload" className="hidden" />
                  <label htmlFor="logo-upload" onClick={(e) => { e.preventDefault(); alert('Choose File'); }} className="inline-flex px-3 py-1.5 rounded-md border border-outline-variant text-label-sm font-label-bold cursor-pointer hover:bg-surface-container-low">Choose File</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block font-label-bold text-on-surface mb-2">Institution Name</label>
                  <input type="text" className="w-full rounded-lg border border-outline-variant px-md py-3 font-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all placeholder:text-outline bg-surface-container-lowest" placeholder="e.g. Technical University of Munich" />
                </div>
                <div>
                  <label className="block font-label-bold text-on-surface mb-2">Country</label>
                  <select className="w-full rounded-lg border border-outline-variant px-md py-3 font-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all bg-surface-container-lowest appearance-none" defaultValue="">
                    <option value="" disabled>Select Country</option>
                    <option value="de">Germany</option>
                    <option value="nl">Netherlands</option>
                    <option value="fr">France</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-bold text-on-surface mb-2">City</label>
                  <input type="text" className="w-full rounded-lg border border-outline-variant px-md py-3 font-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all placeholder:text-outline bg-surface-container-lowest" placeholder="e.g. Munich" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Academic Details */}
          <section id="academic-details" className="bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm">
            <div className="flex items-center gap-3 mb-6 border-b border-outline-variant pb-4">
              <span className="material-symbols-outlined text-primary-container">school</span>
              <h3 className="font-headline-sm text-on-surface">Academic Details</h3>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-bold text-on-surface mb-2">Global Ranking</label>
                  <input type="number" className="w-full rounded-lg border border-outline-variant px-md py-3 font-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all placeholder:text-outline bg-surface-container-lowest" placeholder="e.g. 50" />
                </div>
                <div>
                  <label className="block font-label-bold text-on-surface mb-2">Intake Dates</label>
                  <div className="flex gap-2">
                    <label className="flex-1 border border-outline-variant rounded-lg p-3 flex items-center justify-center gap-2 cursor-pointer hover:bg-surface-container-low has-[:checked]:border-primary-container has-[:checked]:bg-primary-container/5">
                      <input type="checkbox" className="w-4 h-4 text-primary-container rounded border-outline focus:ring-primary-container" />
                      <span className="font-label-bold text-sm">Winter</span>
                    </label>
                    <label className="flex-1 border border-outline-variant rounded-lg p-3 flex items-center justify-center gap-2 cursor-pointer hover:bg-surface-container-low has-[:checked]:border-primary-container has-[:checked]:bg-primary-container/5">
                      <input type="checkbox" className="w-4 h-4 text-primary-container rounded border-outline focus:ring-primary-container" />
                      <span className="font-label-bold text-sm">Summer</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-label-bold text-on-surface mb-2">Available Programs (Tags)</label>
                <div className="w-full rounded-lg border border-outline-variant p-3 bg-surface-container-lowest min-h-[60px] flex flex-wrap gap-2 items-center">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full text-sm font-label-bold">
                    Computer Science <span onClick={() => alert('Remove tag')} className="material-symbols-outlined text-[16px] cursor-pointer hover:text-error">close</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full text-sm font-label-bold">
                    Mechanical Engineering <span onClick={() => alert('Remove tag')} className="material-symbols-outlined text-[16px] cursor-pointer hover:text-error">close</span>
                  </span>
                  <input type="text" className="flex-1 min-w-[120px] bg-transparent border-none outline-none font-body-md placeholder:text-outline focus:ring-0 p-0 text-sm" placeholder="Add program..." />
                </div>
              </div>
            </div>
          </section>

          {/* Continue to Next Step Action (Visual Only) */}
          <div className="flex justify-end">
            <button onClick={() => alert('Next Section')} className="px-6 py-3 rounded-lg bg-surface-container-high text-on-surface font-label-bold hover:bg-surface-variant transition-colors flex items-center gap-2">
              Next Section
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminManualEntry;