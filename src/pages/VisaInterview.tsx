import React from 'react';

const VisaInterview: React.FC = () => {
  return (
    <main className="flex-grow flex flex-col md:flex-row w-full max-w-7xl mx-auto pt-lg px-margin-mobile md:px-lg gap-lg pb-32 md:pb-lg">
      {/* Left Column: Guide & Questions */}
      <div className="w-full md:w-1/2 flex flex-col gap-lg">
        <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-variant">
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-primary-container bg-primary-fixed p-2 rounded-lg">assignment_ind</span>
            <h1 className="font-headline-md text-on-surface">Visa Interview Prep</h1>
          </div>
          <p className="font-body-md text-on-surface-variant mb-md">Master your student visa interview with our interactive simulation. Practice common questions and receive AI feedback to build confidence.</p>
          <div className="mb-lg">
            <div className="flex justify-between items-center mb-xs">
              <span className="font-label-sm text-on-surface-variant">Preparation Readiness</span>
              <span className="font-label-bold text-primary-container">65%</span>
            </div>
            <div className="w-full bg-surface-variant rounded-full h-2">
              <div className="bg-primary-container h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-md overflow-y-auto pr-sm" style={{ maxHeight: 'calc(100vh - 350px)' }}>
          <h2 className="font-headline-sm text-on-surface mt-sm">Question Bank</h2>

          {/* Question Card 1 (Active) */}
          <div className="bg-primary-fixed rounded-xl p-md border border-primary-container shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-sm">
              <h3 className="font-label-bold text-on-primary-fixed">1. Why did you choose this university?</h3>
              <span className="bg-surface-container-lowest text-primary-container font-label-sm px-2 py-1 rounded-md">Current</span>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-sm mt-sm">
              <div className="flex items-center gap-xs mb-xs text-secondary">
                <span className="material-symbols-outlined text-sm">lightbulb</span>
                <span className="font-label-bold">Cheat Sheet Tip</span>
              </div>
              <p className="font-body-md text-on-surface-variant text-sm">Mention specific professors, research facilities, or unique courses. Avoid generic answers about the country's culture.</p>
            </div>
          </div>

          {/* Question Card 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-md border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer hover:border-outline-variant transition-colors">
            <h3 className="font-label-bold text-on-surface">2. How will you fund your studies?</h3>
          </div>

          {/* Question Card 3 */}
          <div className="bg-surface-container-lowest rounded-xl p-md border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer hover:border-outline-variant transition-colors">
            <h3 className="font-label-bold text-on-surface">3. What are your post-graduation plans?</h3>
          </div>
        </div>
      </div>

      {/* Right Column: Simulation Area */}
      <div className="w-full md:w-1/2 flex flex-col h-full">
        <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-variant flex-grow flex flex-col items-center justify-center text-center relative overflow-hidden h-full min-h-[500px]">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed rounded-full mix-blend-multiply filter blur-2xl opacity-70 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-fixed rounded-full mix-blend-multiply filter blur-2xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

          <div className="z-10 w-full max-w-md flex flex-col items-center gap-lg">
            <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-md relative">
              {/* Placeholder for interviewer avatar/animation */}
              <img
                className="w-full h-full rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8MnEZ-zD6pvRu_ebn8ceoUDVluUn9-Rqhd979bv6r9yOmDN63Glqzk2mX-d0l83f8IMV6EwHnzK5H2By72L1SmeJoEoWeoAlRlm2nYwgpjh13CsQ4pvEGLKYTclaE-hpKw_MQyiJIKAl-O1a9Ok3ffrctLXDa8TR6C4tXTw4VSAfrgQzjg9HgY3uARi71FK1bUxoWUDFEhV_jV2VyXReMTb1ieSwknbEl2hHwDn2vQnGHi78IsGQsTpvsATPDBB4Ve-MzQOhB0TqL"
                alt="Professional interviewer"
              />
              <div className="absolute -bottom-2 -right-2 bg-tertiary text-on-tertiary rounded-full p-1 border-2 border-surface-container-lowest">
                <span className="material-symbols-outlined text-sm">record_voice_over</span>
              </div>
            </div>

            <h2 className="font-headline-md text-on-surface">"Why did you choose this university?"</h2>
            <p className="font-body-md text-on-surface-variant">Take a deep breath and answer clearly. We're here to help you practice.</p>

            <div className="flex flex-col w-full gap-md mt-lg">
              <button onClick={() => alert('Record Response')} className="w-full bg-primary-container text-on-primary-container font-label-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-primary shadow-md transition-all">
                <span className="material-symbols-outlined">mic</span>
                Record Response
              </button>
              <div className="flex gap-md w-full">
                <button onClick={() => alert('Ask AI')} className="flex-1 bg-surface-container-lowest border border-primary-container text-primary-container font-label-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-fixed transition-colors">
                  <span className="material-symbols-outlined">auto_awesome</span>
                  Ask AI
                </button>
                <button onClick={() => alert('Skip Question')} className="flex-1 bg-surface-container border border-surface-variant text-on-surface font-label-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-surface-variant transition-colors">
                  Skip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VisaInterview;