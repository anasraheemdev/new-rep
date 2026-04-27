import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto p-margin-mobile md:p-xl bg-background pb-32">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-lg">
        {/* Center Column: Progress & Journey */}
        <div className="lg:col-span-8 flex flex-col gap-lg">
          {/* Top Progress Tracker */}
          <div className="bg-surface-lowest rounded-lg p-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-[#E2E8F0] bg-white">
            <div className="flex justify-between items-end mb-sm">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Your Journey Progress</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">You're making great time. Keep it up!</p>
              </div>
              <div className="text-right">
                <span className="font-display-lg text-display-lg text-trust-blue">35%</span>
              </div>
            </div>
            <div className="w-full h-3 rounded-full bg-[#E2E8F0] overflow-hidden">
              <div className="h-full rounded-full bg-[#10B981] w-[35%] transition-all duration-1000 ease-in-out"></div>
            </div>
          </div>

          {/* Active Step Hero Card */}
          <div className="bg-trust-blue rounded-lg p-lg shadow-lg relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-md">
            {/* Decorative bg elements */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 text-white max-w-md">
              <div className="flex items-center gap-2 mb-3 bg-white/20 inline-flex px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <span className="font-label-bold text-label-bold">Current Step</span>
              </div>
              <h2 className="font-headline-md text-headline-md mb-2">Ready for your next step?</h2>
              <p className="font-body-md text-body-md text-blue-100 mb-6">Upload your IELTS Test Report Form (TRF) to complete your profile and start applying to universities.</p>
              <button onClick={() => alert('Upload IELTS TRF triggered')} className="bg-white text-trust-blue font-label-bold text-label-bold px-6 py-3 rounded-lg shadow-sm hover:bg-blue-50 transition-colors flex items-center gap-2 active:scale-95 duration-150">
                <span className="material-symbols-outlined">upload_file</span>
                Upload IELTS TRF
              </button>
            </div>
            {/* Illustration / Icon */}
            <div className="relative z-10 hidden sm:flex items-center justify-center p-6 bg-white/10 rounded-full">
              <span className="material-symbols-outlined text-6xl text-white" style={{ fontVariationSettings: "'FILL' 0" }}>history_edu</span>
            </div>
          </div>

          {/* Journey Roadmap (Vertical) */}
          <div className="bg-white rounded-lg p-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-[#E2E8F0] mt-sm">
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">Roadmap</h3>
            <div className="relative pl-8">
              {/* Vertical Line */}
              <div className="absolute top-4 bottom-4 left-[27px] w-[2px] bg-surface-variant z-0"></div>

              {/* Step 1: Completed */}
              <div className="relative z-10 flex items-start gap-4 mb-8 group">
                <div className="w-8 h-8 rounded-full bg-success-green flex items-center justify-center shrink-0 border-4 border-white shadow-sm mt-1">
                  <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <div className="bg-surface-bright rounded-lg p-4 border border-[#E2E8F0] w-full transition-all group-hover:shadow-sm">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-label-bold text-label-bold text-on-surface">Passport & ID</h4>
                    <span className="font-label-sm text-label-sm text-success-green bg-success-green/10 px-2 py-0.5 rounded-sm">Done</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">Verified on Oct 12, 2023</p>
                </div>
              </div>

              {/* Step 2: Active */}
              <div className="relative z-10 flex items-start gap-4 mb-8 group">
                <div className="w-8 h-8 rounded-full bg-trust-blue flex items-center justify-center shrink-0 border-4 border-white shadow-sm mt-1 animate-pulse">
                  <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                </div>
                <div className="bg-primary-fixed rounded-lg p-4 border border-primary-fixed-dim w-full shadow-sm">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-label-bold text-label-bold text-on-primary-fixed">Language Proficiency</h4>
                    <span className="font-label-sm text-label-sm text-trust-blue bg-white/50 px-2 py-0.5 rounded-sm">Action Required</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-primary-fixed-variant">Upload IELTS/TOEFL scores.</p>
                </div>
              </div>

              {/* Step 3: Locked */}
              <div className="relative z-10 flex items-start gap-4 mb-8 opacity-60">
                <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center shrink-0 border-4 border-white mt-1">
                  <span className="material-symbols-outlined text-outline text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                </div>
                <div className="bg-surface-bright rounded-lg p-4 border border-[#E2E8F0] w-full">
                  <h4 className="font-label-bold text-label-bold text-on-surface-variant mb-1">University Applications</h4>
                  <p className="font-body-md text-body-md text-outline">Unlock by completing Language Proficiency.</p>
                </div>
              </div>

              {/* Step 4: Locked */}
              <div className="relative z-10 flex items-start gap-4 opacity-60">
                <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center shrink-0 border-4 border-white mt-1">
                  <span className="material-symbols-outlined text-outline text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                </div>
                <div className="bg-surface-bright rounded-lg p-4 border border-[#E2E8F0] w-full">
                  <h4 className="font-label-bold text-label-bold text-on-surface-variant mb-1">Visa Process</h4>
                  <p className="font-body-md text-body-md text-outline">Requires university acceptance letter.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contextual Widgets */}
        <div className="lg:col-span-4 flex flex-col gap-lg">
          {/* Deadlines Widget */}
          <div className="bg-white rounded-lg p-md shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-[#E2E8F0]">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-soft-amber" style={{ fontVariationSettings: "'FILL' 1" }}>event_upcoming</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Upcoming Deadlines</h3>
            </div>
            <div className="flex flex-col gap-3">
              {/* Deadline Item */}
              <div className="flex justify-between items-center p-3 bg-surface-container-low rounded border border-surface-container-high border-l-4 border-l-soft-amber">
                <div>
                  <h4 className="font-label-bold text-label-bold text-on-surface">TU Munich</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Winter Semester App</p>
                </div>
                <div className="text-right">
                  <span className="block font-label-bold text-label-bold text-soft-amber">14 Days</span>
                  <span className="font-label-sm text-label-sm text-outline">Nov 15</span>
                </div>
              </div>

              {/* Deadline Item */}
              <div className="flex justify-between items-center p-3 bg-surface-container-low rounded border border-surface-container-high border-l-4 border-l-surface-variant">
                <div>
                  <h4 className="font-label-bold text-label-bold text-on-surface">RWTH Aachen</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Document Submission</p>
                </div>
                <div className="text-right">
                  <span className="block font-label-bold text-label-bold text-on-surface-variant">32 Days</span>
                  <span className="font-label-sm text-label-sm text-outline">Dec 03</span>
                </div>
              </div>
            </div>
          </div>

          {/* Motivational / Help Widget */}
          <div className="bg-gradient-to-br from-secondary-fixed to-primary-fixed rounded-lg p-md border border-[#E2E8F0] relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-headline-sm text-headline-sm text-on-secondary-fixed mb-2">Need a hand?</h3>
              <p className="font-body-md text-body-md text-on-secondary-fixed-variant mb-4">Our immigration experts are ready to review your documents.</p>
              <button onClick={() => alert('Book Consultation triggered')} className="bg-white text-secondary-container font-label-bold text-label-bold px-4 py-2 rounded-lg shadow-sm hover:bg-slate-50 transition-colors w-full text-center">
                Book Consultation
              </button>
            </div>
            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-8xl text-white/30 pointer-events-none" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
          </div>
        </div>
      </div>

      {/* Floating AI Sidekick */}
      <Link to="/assistant" className="fixed bottom-20 md:bottom-6 right-6 w-14 h-14 bg-trust-blue rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform active:scale-95 z-50 group">
        <span className="material-symbols-outlined text-white text-2xl group-hover:animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-soft-amber opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-soft-amber border-2 border-white"></span>
        </span>
      </Link>
    </main>
  );
};

export default Dashboard;