import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="font-body-md text-body-md antialiased min-h-screen flex flex-col bg-background text-on-background">
      {/* TopAppBar */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-blue-600 dark:text-blue-400 font-['Plus_Jakarta_Sans'] antialiased docked full-width top-0 sticky border-b border-slate-200 dark:border-slate-800 shadow-sm flex justify-between items-center h-16 px-6 w-full z-40">
        <div className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">Mentora</div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="font-label-bold text-label-bold text-primary hover:text-primary-container transition-colors">Log In</Link>
          <Link to="/signup" className="px-4 py-2 bg-primary-container text-on-primary-container font-label-bold text-label-bold rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95">Sign Up</Link>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-margin-mobile md:px-8 py-8 flex flex-col gap-12 lg:gap-24 relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden pointer-events-none opacity-40">
          <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-primary-fixed/30 blur-[120px]"></div>
          <div className="absolute top-[40%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-secondary-fixed/20 blur-[100px]"></div>
        </div>

        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12 pt-8 lg:pt-16">
          <div className="flex-1 flex flex-col gap-6 lg:pr-8 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-fixed/50 text-on-primary-fixed rounded-full text-label-sm font-label-sm w-fit mx-auto lg:mx-0 border border-primary-fixed-dim/50">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span>Trusted by 10,000+ South Asian Students</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-background">
              Study in Europe <br className="hidden lg:block" />
              <span className="text-primary-container relative inline-block">
                Made Simple.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-tertiary-fixed-dim opacity-70" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0 5 Q 50 10 100 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
                </svg>
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto lg:mx-0">
              Your digital concierge for European higher education. From finding the perfect course in Germany to navigating visa requirements for France, we guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto mx-auto lg:mx-0">
              <Link to="/signup" className="w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary-container font-label-bold text-label-bold rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 flex justify-center items-center gap-2 group">
                Get Started for Free
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link to="/universities" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-primary-container text-primary-container font-label-bold text-label-bold rounded-xl hover:bg-primary-container/5 transition-all active:scale-95 text-center">
                Explore Universities
              </Link>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto z-10">
            {/* Abstract Hero Visual using Bento Grid concept */}
            <div className="grid grid-cols-2 gap-4 auto-rows-[160px]">
              <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] relative group">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQYc6cBYg2mIZ3cJkDMN0UIW7jBIxH8wfrvbX57YxZhn3bKfhyB9WBWdTG3v4Kn-8GGvgSqoDwhNwN_UApfNeGK5lRn6lu2rh2LpuVQzjNJmNoJGl_iYq3LY5Px5d9CbFWUfgmEspE0YKF-h34nSxE-EYvUjxpVLHLYwWrLraOCZyeX05tqxRoh7I8cGWMuqYHzGJG9fJ29pFCZuuAZbIncVR9HEu4DlVDUR0p82lWCCcbdr3_La8qMt4TWyRU2I512l3r90RTEbtO"
                  alt="Students walking on European campus"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg flex items-center gap-3">
                    <div className="bg-primary-container text-on-primary-container p-1.5 rounded-md">
                      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                    </div>
                    <div>
                      <p className="font-label-bold text-label-bold text-on-surface text-sm">Admitted</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant text-xs">Technical Univ. Munich</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 row-span-1 bg-surface-container-lowest rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-variant flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-outline">Today</span>
                </div>
                <div>
                  <p className="font-headline-sm text-headline-sm text-on-surface">Visa Approved</p>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">France Student Visa</p>
                </div>
              </div>
              <div className="col-span-1 row-span-1 bg-secondary-container text-on-secondary-container rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-20">
                  <span className="material-symbols-outlined text-[100px]">euro</span>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <p className="font-body-lg text-body-lg opacity-90">Scholarships found</p>
                  <p className="font-display-lg text-display-lg">€12k+</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 'How it Works' Workflow Journey */}
        <section className="py-12 flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-3">Your Journey, Simplified.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">We break down the overwhelming process into manageable, actionable steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-surface-variant -translate-y-1/2 z-0"></div>

            {/* Step 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-variant relative z-10 flex flex-col gap-4 hover:shadow-[0_8px_24px_rgba(26,115,232,0.15)] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                <span className="material-symbols-outlined">search</span>
              </div>
              <div>
                <div className="font-label-bold text-label-bold text-outline text-sm mb-1">Step 1</div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface text-[18px]">Choose Program</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-2">Filter top European universities by English-taught courses and budget.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-variant relative z-10 flex flex-col gap-4 hover:shadow-[0_8px_24px_rgba(26,115,232,0.15)] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                <span className="material-symbols-outlined">assignment</span>
              </div>
              <div>
                <div className="font-label-bold text-label-bold text-outline text-sm mb-1">Step 2</div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface text-[18px]">Apply Smartly</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-2">Manage documents, motivation letters, and deadlines in one dashboard.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-variant relative z-10 flex flex-col gap-4 hover:shadow-[0_8px_24px_rgba(26,115,232,0.15)] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                <span className="material-symbols-outlined">contact_page</span>
              </div>
              <div>
                <div className="font-label-bold text-label-bold text-outline text-sm mb-1">Step 3</div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface text-[18px]">Visa Process</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-2">Step-by-step guidance for blocked accounts, insurance, and embassy prep.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-variant relative z-10 flex flex-col gap-4 hover:shadow-[0_8px_24px_rgba(26,115,232,0.15)] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                <span className="material-symbols-outlined">flight_takeoff</span>
              </div>
              <div>
                <div className="font-label-bold text-label-bold text-outline text-sm mb-1">Step 4</div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface text-[18px]">Fly & Settle</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-2">Pre-departure checklists, accommodation tips, and local student networks.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;