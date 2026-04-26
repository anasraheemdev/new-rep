import React from 'react';

const ApplicationSteps: React.FC = () => {
  return (
    <main className="flex-1 p-margin-mobile md:p-xl w-full max-w-[800px] mx-auto pb-32">
      {/* Header Section */}
      <header className="mb-xl">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-sm">Your Journey</h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-max-width">
          Follow these curated steps to complete your application and secure your move to Europe. We are with you every step of the way.
        </p>
      </header>

      {/* Progress Overview */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-md mb-xl shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-sm">
          <div className="w-12 h-12 rounded-full border-4 border-tertiary-container flex items-center justify-center bg-surface-bright">
            <span className="font-label-bold text-label-bold text-tertiary-container">2/6</span>
          </div>
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Great progress!</h2>
            <p className="font-label-sm text-label-sm text-on-surface-variant">You're on track for the Fall semester.</p>
          </div>
        </div>
        <button className="hidden sm:flex px-md py-sm bg-surface-container-high hover:bg-surface-dim transition-colors rounded-lg font-label-bold text-label-bold text-on-surface items-center gap-xs">
          <span className="material-symbols-outlined text-sm">visibility</span>
          Overview
        </button>
      </div>

      {/* Vertical Journey Timeline */}
      <div className="relative border-l-2 border-surface-variant ml-4 md:ml-6 space-y-lg pb-xl">
        {/* Step 1: Completed */}
        <div className="relative pl-8 md:pl-10">
          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center border-4 border-background z-10">
            <span className="material-symbols-outlined text-on-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
          </div>
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-md shadow-sm opacity-75 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-between">
            <div className="flex items-center gap-md">
              <div className="p-sm bg-surface-container rounded-lg">
                <span className="material-symbols-outlined text-outline">badge</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface line-through decoration-outline-variant decoration-2">Passport Details</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Verified on Oct 12</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline">expand_more</span>
          </div>
        </div>

        {/* Step 2: Completed */}
        <div className="relative pl-8 md:pl-10">
          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center border-4 border-background z-10">
            <span className="material-symbols-outlined text-on-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
          </div>
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-md shadow-sm opacity-75 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-between">
            <div className="flex items-center gap-md">
              <div className="p-sm bg-surface-container rounded-lg">
                <span className="material-symbols-outlined text-outline">language</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface line-through decoration-outline-variant decoration-2">Language Proficiency</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant">IELTS score submitted</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline">expand_more</span>
          </div>
        </div>

        {/* Step 3: ACTIVE (Expanded Card) */}
        <div className="relative pl-8 md:pl-10">
          {/* Active Indicator Pin */}
          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center border-4 border-background z-10 shadow-[0_0_0_4px_rgba(26,115,232,0.15)]">
            <span className="material-symbols-outlined text-on-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>edit_document</span>
          </div>

          {/* Expanded Detail Card */}
          <div className="bg-surface-container-lowest rounded-xl border-2 border-primary shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
            {/* Card Header */}
            <div className="p-md border-b border-surface-variant bg-surface-bright flex items-start justify-between">
              <div className="flex items-center gap-md">
                <div className="p-sm bg-primary-fixed rounded-lg text-on-primary-fixed">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">University Pre-enrollment</h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Due in 5 days</p>
                </div>
              </div>
              <div className="bg-surface-container-highest text-on-surface px-2 py-1 rounded-md font-label-sm text-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">error</span>
                Action Required
              </div>
            </div>

            {/* Card Body */}
            <div className="p-md space-y-lg">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Register on the official portal to secure your admission slot. You will need your digital admission letter and passport copy ready for upload.
              </p>

              {/* Instructional Video Placeholder */}
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface-container border border-outline-variant group cursor-pointer">
                <img
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKba31elCdF0pdkvTMdYqKNK5cF46eRymTEN4Dl09hesVIw3SOZ98uQZ83gWU3EY5kOS_0WcS7pCzAXb4_IqLdL8HvklNvppWJHNiGzhHKuxn-oexpNEa5kbsFVHZE1zP1DOHTSMMnFLV1y72CnX059psf0Np-uHh52zUMMH7sQCXETBYfaEUc7TP5YAw6SDybP7fHaNR8ztUrZwd1AIQxGvXvtVgyLXo69nCdhH3blUJbO0a3TmWOiRTuDHesu_j96HVEbLWShkSk"
                  alt="Video thumbnail"
                />
                <div className="absolute inset-0 bg-inverse-surface/20 flex items-center justify-center">
                  <div className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 bg-inverse-surface/80 text-inverse-on-surface px-2 py-1 rounded font-label-sm text-label-sm backdrop-blur-sm">
                  2:45 Guide
                </div>
              </div>

              {/* Requirements Checklist & Upload */}
              <div className="bg-surface-container-low rounded-lg p-md border border-outline-variant">
                <h4 className="font-label-bold text-label-bold text-on-surface mb-sm flex items-center gap-xs">
                  <span className="material-symbols-outlined text-sm">checklist</span>
                  Required Documents
                </h4>
                <ul className="space-y-sm mb-md">
                  <li className="flex items-center gap-xs font-body-md text-body-md text-on-surface">
                    <span className="material-symbols-outlined text-tertiary-container text-sm">check_circle</span>
                    Passport Copy (On file)
                  </li>
                  <li className="flex items-center gap-xs font-body-md text-body-md text-on-surface">
                    <span className="material-symbols-outlined text-outline text-sm">radio_button_unchecked</span>
                    Admission Letter PDF
                  </li>
                </ul>

                {/* Dropzone */}
                <div className="border-2 border-dashed border-outline-variant hover:border-primary transition-colors rounded-lg p-md flex flex-col items-center justify-center text-center cursor-pointer bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-outline mb-xs">cloud_upload</span>
                  <p className="font-label-bold text-label-bold text-on-surface">Click to upload or drag and drop</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">PDF, JPG up to 5MB</p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex flex-col sm:flex-row items-center gap-sm pt-sm">
                <button className="w-full sm:w-auto px-lg py-sm bg-primary hover:bg-surface-tint text-on-primary rounded-lg font-label-bold text-label-bold shadow-sm transition-all flex items-center justify-center gap-xs">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Mark as Completed
                </button>
                <button className="w-full sm:w-auto px-lg py-sm border border-outline-variant text-on-surface hover:bg-surface-container rounded-lg font-label-bold text-label-bold transition-all">
                  Need Help?
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Upcoming */}
        <div className="relative pl-8 md:pl-10">
          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border-4 border-background z-10">
            <span className="material-symbols-outlined text-outline text-sm">lock</span>
          </div>
          <div className="bg-surface-bright rounded-xl border border-surface-variant p-md opacity-60 flex items-center justify-between">
            <div className="flex items-center gap-md">
              <div className="p-sm bg-surface-container rounded-lg text-outline">
                <span className="material-symbols-outlined">account_balance</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">Blocked Account Setup</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Complete pre-enrollment first</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5: Upcoming */}
        <div className="relative pl-8 md:pl-10">
          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border-4 border-background z-10">
            <span className="material-symbols-outlined text-outline text-sm">lock</span>
          </div>
          <div className="bg-surface-bright rounded-xl border border-surface-variant p-md opacity-60 flex items-center justify-between">
            <div className="flex items-center gap-md">
              <div className="p-sm bg-surface-container rounded-lg text-outline">
                <span className="material-symbols-outlined">airplane_ticket</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">Visa Appointment</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Unlocks after financial proof</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ApplicationSteps;