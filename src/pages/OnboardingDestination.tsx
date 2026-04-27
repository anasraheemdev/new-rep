import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingDestination: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen font-body-md text-on-background flex flex-col justify-center items-center py-xl px-margin-mobile">
      {/* TopAppBar */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-sm flex justify-between items-center px-4 py-3 w-full max-w-[640px] mx-auto fixed top-0 left-0 right-0 z-50">
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400 font-['Plus_Jakarta_Sans'] font-medium">Mentora</div>
        <div className="flex items-center gap-4">
          <button onClick={() => alert('Need Help triggered')} className="text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors px-3 py-2 rounded-lg font-label-bold text-label-bold">Need Help?</button>
          <button onClick={() => navigate('/login')} className="text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors px-3 py-2 rounded-lg font-label-bold text-label-bold">Sign Out</button>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="w-full max-w-max-width mx-auto flex-grow flex flex-col items-center justify-center pt-[80px] pb-[120px]">
        <div className="w-full bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant p-lg flex flex-col gap-lg">

          {/* Progress & Header */}
          <div className="flex flex-col gap-sm items-center text-center">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Step 1 of 5</span>
            <h1 className="font-headline-md text-headline-md text-on-surface">Where do you want to study?</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">We'll tailor your roadmap based on your dream destination.</p>
          </div>

          {/* Target Countries Grid */}
          <div className="flex flex-col gap-sm">
            <label className="font-label-bold text-label-bold text-on-surface">Target Countries</label>
            <div className="grid grid-cols-2 gap-md">
              <label className="relative cursor-pointer">
                <input className="peer sr-only" name="country" type="radio" value="italy" />
                <div className="flex flex-col items-center gap-sm p-md rounded-lg border border-outline-variant bg-surface-container-lowest peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary peer-checked:bg-primary-fixed hover:bg-surface-container-low transition-colors">
                  <span className="text-4xl">🇮🇹</span>
                  <span className="font-label-bold text-label-bold text-on-surface">Italy</span>
                </div>
              </label>
              <label className="relative cursor-pointer">
                <input className="peer sr-only" name="country" type="radio" value="germany" defaultChecked />
                <div className="flex flex-col items-center gap-sm p-md rounded-lg border border-outline-variant bg-surface-container-lowest peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary peer-checked:bg-primary-fixed hover:bg-surface-container-low transition-colors">
                  <span className="text-4xl">🇩🇪</span>
                  <span className="font-label-bold text-label-bold text-on-surface">Germany</span>
                </div>
              </label>
              <label className="relative cursor-pointer">
                <input className="peer sr-only" name="country" type="radio" value="france" />
                <div className="flex flex-col items-center gap-sm p-md rounded-lg border border-outline-variant bg-surface-container-lowest peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary peer-checked:bg-primary-fixed hover:bg-surface-container-low transition-colors">
                  <span className="text-4xl">🇫🇷</span>
                  <span className="font-label-bold text-label-bold text-on-surface">France</span>
                </div>
              </label>
              <label className="relative cursor-pointer">
                <input className="peer sr-only" name="country" type="radio" value="spain" />
                <div className="flex flex-col items-center gap-sm p-md rounded-lg border border-outline-variant bg-surface-container-lowest peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary peer-checked:bg-primary-fixed hover:bg-surface-container-low transition-colors">
                  <span className="text-4xl">🇪🇸</span>
                  <span className="font-label-bold text-label-bold text-on-surface">Spain</span>
                </div>
              </label>
            </div>
          </div>

          {/* Target Intake Select */}
          <div className="flex flex-col gap-sm">
            <label className="font-label-bold text-label-bold text-on-surface" htmlFor="intake">Target Intake</label>
            <div className="relative">
              <select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md rounded-lg px-md py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary pr-10" id="intake" name="intake" defaultValue="spring2025">
                <option disabled value="">Select your intake</option>
                <option value="fall2024">Fall 2024</option>
                <option value="spring2025">Spring 2025</option>
                <option value="fall2025">Fall 2025</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 fixed bottom-0 left-0 w-full flex flex-col items-center p-6 gap-4 bg-white/80 backdrop-blur-md z-50">
        <div className="w-full max-w-max-width flex justify-between items-center">
          <button onClick={() => navigate('/signup')} className="font-label-bold text-label-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors px-4 py-2 border border-blue-600 rounded-lg">Back</button>
          <div className="font-['Plus_Jakarta_Sans'] text-sm text-slate-500 dark:text-slate-400">Progress: Step 1 of 5</div>
          <button onClick={() => navigate('/onboarding/academic')} className="font-label-bold text-label-bold bg-primary-container text-white hover:opacity-90 shadow-md transition-all px-6 py-2 rounded-xl active:scale-95">Next</button>
        </div>
      </footer>
    </div>
  );
};

export default OnboardingDestination;