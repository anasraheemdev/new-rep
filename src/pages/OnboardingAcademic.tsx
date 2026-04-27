import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingAcademic: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col items-center justify-center p-margin-mobile">
      <main className="w-full max-w-max-width mx-auto flex-1 flex flex-col justify-center py-lg">
        <div className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 p-lg sm:p-xl flex flex-col gap-lg relative overflow-hidden">
          {/* Progress Tracker */}
          <div className="flex items-center gap-sm">
            <div className="h-2 flex-1 bg-primary-container rounded-full"></div>
            <div className="h-2 flex-1 bg-primary-container rounded-full"></div>
            <div className="h-2 flex-1 bg-surface-variant rounded-full"></div>
            <span className="font-label-sm text-label-sm text-on-surface-variant ml-sm">Step 2 of 5</span>
          </div>

          {/* Header Section */}
          <header className="flex flex-col gap-sm">
            <div className="w-12 h-12 bg-primary-container/10 text-primary-container rounded-lg flex items-center justify-center mb-xs">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            </div>
            <h1 className="font-headline-md text-headline-md text-on-surface">Let's start with your background.</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Help us understand where you are in your academic journey.</p>
          </header>

          {/* Form Section */}
          <form className="flex flex-col gap-lg mt-sm">
            {/* Field 1: Qualification */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-bold text-label-bold text-on-surface" htmlFor="qualification">What is your highest qualification?</label>
              <div className="relative">
                <select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-shadow" id="qualification" defaultValue="">
                  <option disabled value="">Select an option</option>
                  <option value="high_school">High School</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>

            {/* Field 2: CGPA */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-bold text-label-bold text-on-surface" htmlFor="cgpa">What is your current CGPA or Percentage?</label>
              <input className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-shadow placeholder:text-outline-variant" id="cgpa" placeholder="e.g. 8.5 or 85%" type="text" />
            </div>

            {/* Field 3: Graduation Year */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-bold text-label-bold text-on-surface" htmlFor="grad_year">When did you (or will you) graduate?</label>
              <div className="relative">
                <select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-shadow" id="grad_year" defaultValue="">
                  <option disabled value="">Select year</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                  <span className="material-symbols-outlined">calendar_today</span>
                </div>
              </div>
            </div>
          </form>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-lg pt-md border-t border-outline-variant/30">
            <button onClick={() => navigate('/onboarding/destination')} className="w-full sm:w-1/3 py-3 px-4 rounded-xl border border-primary-container text-primary-container font-label-bold text-label-bold hover:bg-primary-container/5 transition-colors text-center order-2 sm:order-1" type="button">
              Back
            </button>
            <button onClick={() => navigate('/onboarding/progress')} className="w-full sm:w-2/3 py-3 px-4 rounded-xl bg-primary-container text-on-primary-container font-label-bold text-label-bold shadow-md hover:shadow-lg hover:bg-primary transition-all text-center order-1 sm:order-2 flex items-center justify-center gap-sm" type="button">
              Next
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OnboardingAcademic;