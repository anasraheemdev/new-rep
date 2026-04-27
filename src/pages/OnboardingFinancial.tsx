import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingFinancial: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background font-body-md text-body-md min-h-screen flex flex-col items-center justify-center p-margin-mobile antialiased">
      <main className="w-full max-w-max-width">
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-variant overflow-hidden flex flex-col">
          {/* Progress Section */}
          <div className="px-lg pt-lg pb-sm">
            <div className="flex justify-between items-center mb-sm">
              <span className="font-label-sm text-label-sm text-outline">Step 4 of 5</span>
              <span className="font-label-sm text-label-sm text-primary">80%</span>
            </div>
            <div className="h-unit w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[80%] rounded-full transition-all duration-500 ease-in-out"></div>
            </div>
          </div>

          {/* Header Content */}
          <div className="px-lg pb-md">
            <div className="flex items-center gap-sm mb-xs">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
              <h1 className="font-headline-md text-headline-md text-on-surface">Financial Readiness</h1>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              This helps us suggest universities and scholarships that fit your budget.
            </p>
          </div>

          {/* Form Content */}
          <div className="px-lg pb-lg flex flex-col gap-lg">
            {/* Input 1: Annual Budget Range */}
            <div className="flex flex-col gap-sm">
              <label className="font-label-bold text-label-bold text-on-surface" htmlFor="budget">Annual Budget Range</label>
              <div className="relative">
                <select className="w-full appearance-none bg-surface border border-outline-variant rounded-lg py-3 px-4 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" id="budget" name="budget" defaultValue="">
                  <option disabled value="">Select an option</option>
                  <option value="<5k">&lt;€5k</option>
                  <option value="5k-10k">€5k-€10k</option>
                  <option value="10k-20k">€10k-€20k</option>
                  <option value="20k+">€20k+</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[20px]">expand_more</span>
                </div>
              </div>
            </div>

            {/* Input 2: Funding Source */}
            <div className="flex flex-col gap-sm">
              <label className="font-label-bold text-label-bold text-on-surface">Funding Source <span className="text-outline font-body-md text-label-sm">(Select all that apply)</span></label>
              <div className="grid grid-cols-1 gap-sm">
                <label className="relative flex items-center p-md border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors has-[:checked]:bg-primary-fixed has-[:checked]:border-primary">
                  <div className="flex items-center h-5">
                    <input className="w-5 h-5 text-primary bg-surface border-outline-variant rounded focus:ring-primary focus:ring-2" type="checkbox" />
                  </div>
                  <div className="ml-sm flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant">savings</span>
                    <span className="font-body-md text-body-md text-on-surface">Self-funded</span>
                  </div>
                </label>
                <label className="relative flex items-center p-md border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors has-[:checked]:bg-primary-fixed has-[:checked]:border-primary">
                  <div className="flex items-center h-5">
                    <input className="w-5 h-5 text-primary bg-surface border-outline-variant rounded focus:ring-primary focus:ring-2" type="checkbox" />
                  </div>
                  <div className="ml-sm flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant">family_home</span>
                    <span className="font-body-md text-body-md text-on-surface">Family Support</span>
                  </div>
                </label>
                <label className="relative flex items-center p-md border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors has-[:checked]:bg-primary-fixed has-[:checked]:border-primary">
                  <div className="flex items-center h-5">
                    <input className="w-5 h-5 text-primary bg-surface border-outline-variant rounded focus:ring-primary focus:ring-2" type="checkbox" />
                  </div>
                  <div className="ml-sm flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant">account_balance</span>
                    <span className="font-body-md text-body-md text-on-surface">Educational Loan</span>
                  </div>
                </label>
                <label className="relative flex items-center p-md border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors has-[:checked]:bg-primary-fixed has-[:checked]:border-primary">
                  <div className="flex items-center h-5">
                    <input className="w-5 h-5 text-primary bg-surface border-outline-variant rounded focus:ring-primary focus:ring-2" type="checkbox" />
                  </div>
                  <div className="ml-sm flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant">school</span>
                    <span className="font-body-md text-body-md text-on-surface">Seeking Full Scholarship</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Input 3: Need for Part-time Work? */}
            <div className="flex flex-col gap-sm">
              <label className="font-label-bold text-label-bold text-on-surface">Need for Part-time Work?</label>
              <div className="flex p-1 bg-surface-container-high rounded-lg border border-surface-variant">
                <label className="flex-1 text-center relative">
                  <input className="peer sr-only" name="part_time" type="radio" value="yes" defaultChecked />
                  <div className="py-2 rounded-md font-label-bold text-label-bold text-on-surface-variant cursor-pointer peer-checked:bg-surface-container-lowest peer-checked:text-primary peer-checked:shadow-sm transition-all">
                    Yes
                  </div>
                </label>
                <label className="flex-1 text-center relative">
                  <input className="peer sr-only" name="part_time" type="radio" value="no" />
                  <div className="py-2 rounded-md font-label-bold text-label-bold text-on-surface-variant cursor-pointer peer-checked:bg-surface-container-lowest peer-checked:text-primary peer-checked:shadow-sm transition-all">
                    No
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-lg py-md border-t border-surface-variant bg-surface-bright flex justify-between items-center rounded-b-xl">
            <button onClick={() => navigate('/onboarding/progress')} className="font-label-bold text-label-bold text-primary px-4 py-2 rounded-lg hover:bg-primary-fixed transition-colors flex items-center gap-xs">
              Back
            </button>
            <button onClick={() => navigate('/onboarding/aspirations')} className="font-label-bold text-label-bold text-on-primary bg-primary px-6 py-3 rounded-lg shadow-sm hover:shadow-md hover:bg-on-primary-fixed-variant transition-all flex items-center gap-sm">
              Continue
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OnboardingFinancial;