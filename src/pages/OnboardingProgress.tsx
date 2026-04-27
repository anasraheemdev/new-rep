import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingProgress: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-margin-mobile">
      <main className="w-full max-w-max-width">
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 p-lg flex flex-col relative overflow-hidden">
          {/* Progress Indicator */}
          <div className="w-full mb-lg">
            <div className="flex justify-between items-center mb-sm">
              <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest font-bold">Step 3 of 5</span>
              <span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Getting there
              </span>
            </div>
            <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
              <div className="w-[60%] h-full bg-tertiary rounded-full transition-all duration-500"></div>
            </div>
          </div>

          {/* Header */}
          <div className="mb-lg">
            <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center mb-md">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>checklist</span>
            </div>
            <h1 className="font-headline-md text-headline-md text-on-surface mb-xs">Just a few more details.</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">This helps us identify which steps you can skip.</p>
          </div>

          {/* Form/Checklist */}
          <div className="flex flex-col gap-lg mb-xl">
            {/* Passport Toggle */}
            <div className="flex flex-col gap-sm">
              <label className="font-label-bold text-label-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-outline text-[20px]">id_card</span>
                Do you have a valid Passport?
              </label>
              <div className="flex bg-surface-container-low p-1 rounded-lg border border-outline-variant/20">
                <button className="flex-1 py-2.5 rounded-md bg-surface-container-lowest shadow-sm font-label-bold text-label-bold text-primary-container border border-outline-variant/10 transition-colors">Yes</button>
                <button className="flex-1 py-2.5 rounded-md font-label-bold text-label-bold text-on-surface-variant hover:text-on-surface transition-colors">No</button>
              </div>
            </div>

            {/* English Test Toggle */}
            <div className="flex flex-col gap-sm">
              <label className="font-label-bold text-label-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-outline text-[20px]">school</span>
                Have you taken an English Proficiency Test (IELTS/PTE/TOEFL)?
              </label>
              <div className="flex bg-surface-container-low p-1 rounded-lg border border-outline-variant/20">
                <button className="flex-1 py-2.5 rounded-md bg-surface-container-lowest shadow-sm font-label-bold text-label-bold text-primary-container border border-outline-variant/10 transition-colors">Yes</button>
                <button className="flex-1 py-2.5 rounded-md font-label-bold text-label-bold text-on-surface-variant hover:text-on-surface transition-colors">No</button>
              </div>
            </div>

            {/* Score Input */}
            <div className="flex flex-col gap-sm">
              <label className="font-label-bold text-label-bold text-on-surface">What was your overall score?</label>
              <div className="relative">
                <input className="w-full text-body-md font-body-md p-3 px-4 border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent bg-surface-container-lowest text-on-surface placeholder:text-outline/70 transition-shadow" placeholder="e.g. 7.5 or 105" type="text" />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-md mt-auto pt-md border-t border-surface-variant">
            <button onClick={() => navigate('/onboarding/financial')} className="w-full bg-primary-container text-on-primary-container font-label-bold text-label-bold py-3.5 rounded-lg shadow-[0_4px_14px_rgba(26,115,232,0.25)] hover:shadow-[0_6px_20px_rgba(26,115,232,0.4)] hover:bg-primary transition-all flex justify-center items-center gap-2">
              Next
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
            <button onClick={() => navigate('/onboarding/academic')} className="w-full bg-transparent border border-primary text-primary font-label-bold text-label-bold py-3.5 rounded-lg hover:bg-surface-container-low transition-colors">
              Back
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OnboardingProgress;