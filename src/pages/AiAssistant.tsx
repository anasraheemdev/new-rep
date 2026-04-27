import React from 'react';

const AiAssistant: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col w-full h-[calc(100vh-64px)] md:h-screen bg-[#FAFAFA]">
      {/* Chat Container */}
      <div className="flex-1 flex flex-col max-w-[800px] w-full mx-auto bg-surface-container-lowest md:border-x md:border-outline-variant/30 h-full shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        {/* Chat Header Context */}
        <div className="px-md py-sm bg-surface-bright border-b border-outline-variant/20 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.01)] z-10 sticky top-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
            </div>
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Mentora AI</h2>
              <div className="flex items-center gap-1.5 text-tertiary-container">
                <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                <span className="font-label-sm text-label-sm">Online & ready to help</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-md md:p-lg flex flex-col gap-lg pb-32 md:pb-lg">
          {/* Date Separator */}
          <div className="flex justify-center">
            <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant/30 px-3 py-1 rounded-full">Today</span>
          </div>

          {/* AI Message 1 (Contextual Greeting) */}
          <div className="flex items-start gap-3 max-w-[85%]">
            <div className="w-8 h-8 rounded-full bg-primary-fixed flex-shrink-0 flex items-center justify-center mt-1">
              <span className="material-symbols-outlined text-primary-container text-sm">smart_toy</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl rounded-tl-sm p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  Hi there! 👋 I noticed you just uploaded your IELTS scores. Great job getting that done!
                </p>
              </div>
              <span className="font-label-sm text-label-sm text-outline px-1">10:00 AM</span>
            </div>
          </div>

          {/* AI Message 2 (Actionable Follow-up) */}
          <div className="flex items-start gap-3 max-w-[85%]">
            <div className="w-8 h-8 rounded-full bg-transparent flex-shrink-0 mt-1"></div> {/* Spacer for alignment */}
            <div className="flex flex-col gap-1">
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl rounded-tl-sm p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <p className="font-body-md text-body-md text-on-surface mb-3 leading-relaxed">
                  Since your language requirement is cleared, your next major step is starting the actual university applications. Based on your profile, you're looking at programs in Italy and Germany.
                </p>
                <p className="font-body-md text-body-md text-on-surface font-medium mb-3">
                  What would you like to tackle next?
                </p>
                {/* Suggested Actions (Bento-style chips) */}
                <div className="flex flex-wrap gap-2 mt-2">
                  <button className="flex items-center gap-2 px-3 py-2 bg-primary-fixed/30 hover:bg-primary-fixed/50 text-primary-container rounded-lg border border-primary-fixed transition-colors font-label-bold text-label-bold">
                    <span className="material-symbols-outlined text-[18px]">school</span>
                    Explore Italian Unis
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface-variant rounded-lg border border-outline-variant/30 transition-colors font-label-bold text-label-bold">
                    <span className="material-symbols-outlined text-[18px]">description</span>
                    Prep SOP for Germany
                  </button>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-outline px-1">10:00 AM</span>
            </div>
          </div>

          {/* User Message */}
          <div className="flex items-start justify-end gap-3 w-full pl-12">
            <div className="flex flex-col items-end gap-1 w-full">
              <div className="bg-primary-container text-on-primary rounded-2xl rounded-tr-sm p-4 shadow-[0_4px_12px_rgba(26,115,232,0.15)] max-w-[85%]">
                <p className="font-body-md text-body-md">
                  Actually, I'm a bit confused about the visa process for Germany. How early should I book the appointment?
                </p>
              </div>
              <span className="font-label-sm text-label-sm text-outline px-1">10:05 AM</span>
            </div>
          </div>

          {/* AI Typing Indicator */}
          <div className="flex items-start gap-3 max-w-[85%]">
            <div className="w-8 h-8 rounded-full bg-primary-fixed flex-shrink-0 flex items-center justify-center mt-1">
              <span className="material-symbols-outlined text-primary-container text-sm">smart_toy</span>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl rounded-tl-sm p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center gap-1.5 h-[52px]">
              <div className="w-2 h-2 rounded-full bg-primary-container/40 animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 rounded-full bg-primary-container/60 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-primary-container/80 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-md md:p-lg bg-surface-container-lowest border-t border-outline-variant/20 z-10 relative">
          {/* Quick Prompts Row */}
          <div className="flex overflow-x-auto pb-3 mb-2 gap-2 no-scrollbar -mx-md px-md md:mx-0 md:px-0">
            <button onClick={() => alert('Quick prompt: IELTS requirement for Italy?')} className="whitespace-nowrap flex items-center gap-1.5 px-4 py-2 bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 rounded-full font-label-sm text-label-sm text-on-surface-variant transition-colors flex-shrink-0">
              <span className="material-symbols-outlined text-[16px]">search</span>
              IELTS requirement for Italy?
            </button>
            <button onClick={() => alert('Quick prompt: Book visa appointment for Germany')} className="whitespace-nowrap flex items-center gap-1.5 px-4 py-2 bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 rounded-full font-label-sm text-label-sm text-on-surface-variant transition-colors flex-shrink-0">
              <span className="material-symbols-outlined text-[16px]">event</span>
              Book visa appointment for Germany
            </button>
            <button onClick={() => alert('Quick prompt: Blocked account setup')} className="whitespace-nowrap flex items-center gap-1.5 px-4 py-2 bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 rounded-full font-label-sm text-label-sm text-on-surface-variant transition-colors flex-shrink-0">
              <span className="material-symbols-outlined text-[16px]">euro_symbol</span>
              Blocked account setup
            </button>
          </div>

          {/* Input Field */}
          <div className="relative flex items-end gap-2 bg-surface-bright border border-outline-variant/40 rounded-xl p-2 focus-within:border-primary-container focus-within:ring-2 focus-within:ring-primary-container/20 transition-all shadow-sm">
            <button onClick={() => alert('Attach file triggered')} className="p-2 text-outline hover:text-primary-container rounded-lg transition-colors flex-shrink-0">
              <span className="material-symbols-outlined">attach_file</span>
            </button>
            <textarea
              className="w-full bg-transparent border-none focus:ring-0 resize-none max-h-[120px] min-h-[44px] py-3 px-2 font-body-md text-body-md text-on-surface placeholder:text-outline/70 no-scrollbar"
              placeholder="Ask Mentora anything about your journey..."
              rows={1}
              style={{ height: '48px' }}
            ></textarea>
            <button onClick={() => alert('Send message triggered')} className="p-3 bg-primary-container hover:bg-on-primary-fixed-variant text-on-primary rounded-lg transition-colors shadow-[0_2px_8px_rgba(26,115,232,0.2)] flex-shrink-0 mb-[2px] mr-[2px]">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
          <div className="text-center mt-3">
            <span className="font-label-sm text-[10px] text-outline">Mentora AI can make mistakes. Consider verifying important deadlines.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;