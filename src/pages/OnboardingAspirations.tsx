import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingAspirations: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center p-margin-mobile md:p-lg antialiased">
      <main className="w-full max-w-max-width bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-variant overflow-hidden flex flex-col">
        {/* Header & Progress */}
        <header className="px-md pt-lg pb-md flex flex-col gap-sm">
          {/* Progress Tracker */}
          <div className="flex items-center gap-md mb-xs">
            <button onClick={() => navigate('/onboarding/financial')} aria-label="Go back" className="text-outline hover:text-on-surface transition-colors flex items-center justify-center w-8 h-8 rounded-full hover:bg-surface-container-low">
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <div className="flex-1 h-unit bg-surface-variant rounded-full overflow-hidden flex">
              <div className="h-full bg-primary w-full rounded-full transition-all duration-500"></div>
            </div>
            <span className="text-label-sm font-label-sm text-outline whitespace-nowrap">Step 5 of 5</span>
          </div>
          {/* Titles */}
          <div>
            <h1 className="text-headline-md font-headline-md text-on-surface mb-xs">Your Aspirations</h1>
            <p className="text-body-md font-body-md text-on-surface-variant">Tell us a bit about your professional background and goals.</p>
          </div>
        </header>

        {/* Form Content */}
        <div className="px-md pb-lg flex flex-col gap-lg">
          {/* Work Experience Text Area */}
          <div className="flex flex-col gap-xs">
            <label className="text-label-bold font-label-bold text-on-surface flex items-center gap-xs" htmlFor="work-experience">
              <span className="material-symbols-outlined text-[18px] text-outline">work</span>
              Work Experience / Internships
            </label>
            <textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-[12px] text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none shadow-sm" id="work-experience" placeholder="Briefly describe any relevant experience..." rows={3}></textarea>
          </div>

          {/* Career Goal Dropdown */}
          <div className="flex flex-col gap-xs">
            <label className="text-label-bold font-label-bold text-on-surface flex items-center gap-xs" htmlFor="career-goal">
              <span className="material-symbols-outlined text-[18px] text-outline">flag</span>
              Career Goal
            </label>
            <div className="relative">
              <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-[12px] pr-10 text-body-md font-body-md text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" id="career-goal" defaultValue="">
                <option disabled value="">Select your primary goal</option>
                <option value="research">Research/Academia</option>
                <option value="corporate">Corporate Job in Europe</option>
                <option value="entrepreneurship">Entrepreneurship</option>
                <option value="return">Return to Home Country</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
            </div>
          </div>

          {/* Special Interests Chips */}
          <div className="flex flex-col gap-sm">
            <div>
              <label className="text-label-bold font-label-bold text-on-surface flex items-center gap-xs mb-xs">
                <span className="material-symbols-outlined text-[18px] text-outline">stars</span>
                Special Interests
              </label>
              <p className="text-label-sm font-label-sm text-on-surface-variant">Select all topics that match your focus.</p>
            </div>
            <div className="flex flex-wrap gap-sm">
              <button className="px-4 py-2 rounded-full border border-outline-variant bg-surface-container-lowest text-label-bold font-label-bold text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" type="button">
                Data Science
              </button>
              <button className="px-4 py-2 rounded-full border border-primary bg-primary text-label-bold font-label-bold text-on-primary shadow-sm hover:bg-primary/90 transition-colors flex items-center gap-1" type="button">
                Sustainability
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
              </button>
              <button className="px-4 py-2 rounded-full border border-outline-variant bg-surface-container-lowest text-label-bold font-label-bold text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" type="button">
                Arts
              </button>
              <button className="px-4 py-2 rounded-full border border-outline-variant bg-surface-container-lowest text-label-bold font-label-bold text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" type="button">
                Healthcare
              </button>
              <button className="px-4 py-2 rounded-full border border-outline-variant bg-surface-container-lowest text-label-bold font-label-bold text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" type="button">
                Engineering
              </button>
              <button className="px-4 py-2 rounded-full border border-outline-variant bg-surface-container-lowest text-label-bold font-label-bold text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" type="button">
                Social Sciences
              </button>
            </div>
          </div>
        </div>

        {/* Sticky Footer Action */}
        <div className="px-md py-md bg-surface-container-lowest border-t border-surface-variant">
          <button onClick={() => navigate('/dashboard')} className="w-full bg-primary text-on-primary text-label-bold font-label-bold py-[14px] px-md rounded-xl shadow-[0_4px_12px_rgba(26,115,232,0.25)] hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-sm">
            Complete Profile
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default OnboardingAspirations;