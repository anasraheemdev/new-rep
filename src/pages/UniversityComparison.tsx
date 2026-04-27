import React from 'react';

const UniversityComparison: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-surface pb-32 md:pb-8 w-full max-w-7xl mx-auto">
      {/* Page Header */}
      <section className="px-margin-mobile pt-lg pb-md md:px-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full mb-3">
          <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>compare_arrows</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Compare up to 3</span>
        </div>
        <h1 className="font-headline-md text-headline-md text-on-surface mb-2">University Comparison</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">Evaluate your top choices side-by-side to make the best decision for your future.</p>
      </section>

      {/* Comparison Cards Container (Horizontal Scroll) */}
      <section className="w-full pb-xl">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-gutter px-margin-mobile md:px-8 pb-6 no-scrollbar">
          {/* Card 1: Polimi */}
          <article className="flex-none w-[85%] sm:w-[340px] snap-center bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col h-full">
            <div className="h-32 bg-surface-container relative">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_5TwHZufTnXZ4xsvsd0VjBp5SUOwdROgFPsz3pY0FbZiYGUBY5H6_1HyIlj76gYNBUTHjiUosF-mo_RuG7Th5wonsj36wwvaPEuKkI1sXhcRtoVZF1_TJzN7cpweir6rmS3ga6_TpJqwOqOfbY2XI-fThOdE9o2UTULN3HxMgVK7N77Y_LMgWkjvVM1QvGNQ8SbeO0CV1XndNc7Ta0RlpHQv1ifJzzDg0UfUF2w_Vs9L5WZ2x009X2SiUzn6IoTuPCDwzBowSSD8Y"
                alt="Politecnico di Milano"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-on-surface flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span> #1 Italy
              </div>
              <h2 className="absolute bottom-3 left-4 font-headline-sm text-headline-sm text-on-primary drop-shadow-md pr-4 leading-tight">Politecnico di Milano</h2>
            </div>
            <div className="p-4 flex flex-col gap-4 flex-grow bg-surface-container-lowest">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-surface-container-low rounded-lg text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>euro</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-xs">Tuition Fees</div>
                  <div className="font-body-md text-body-md text-on-surface font-medium">€3,900 / year</div>
                  <div className="font-label-sm text-label-sm text-outline mt-xs">Non-EU Standard</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-surface-container-low rounded-lg text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>public</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-xs">World Ranking</div>
                  <div className="font-body-md text-body-md text-on-surface font-medium">#111 QS World</div>
                  <div className="font-label-sm text-label-sm text-outline mt-xs">Top 10 in Engineering</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-surface-container-low rounded-lg text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>verified_user</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-xs">Visa Success Rate</div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-surface-variant rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary w-[92%]"></div>
                    </div>
                    <span className="font-label-bold text-label-bold text-tertiary">92%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-surface-container-low rounded-lg text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_month</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-xs">Next Intake</div>
                  <div className="font-body-md text-body-md text-on-surface font-medium">September 2024</div>
                  <div className="font-label-sm text-label-sm text-error mt-xs">Deadline in 45 days</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-surface-container-low rounded-lg text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>description</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-xs">Key Documents</div>
                  <div className="font-label-sm text-label-sm text-on-surface flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-1 bg-surface-variant rounded-md">IELTS 6.0</span>
                    <span className="px-2 py-1 bg-surface-variant rounded-md">DOV</span>
                    <span className="px-2 py-1 bg-surface-variant rounded-md">Portfolio</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-surface-container-lowest border-t border-outline-variant mt-auto">
              <button onClick={() => alert('Proceed with Application (Polimi)')} className="w-full py-3 bg-primary-container text-on-primary-container font-label-bold text-label-bold rounded-lg shadow-sm hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Proceed with Application
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </article>

          {/* Card 2: TUM */}
          <article className="flex-none w-[85%] sm:w-[340px] snap-center bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col h-full opacity-90 hover:opacity-100 transition-opacity">
            <div className="h-32 bg-surface-container relative">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2IeAM8j_q8g-dvn6hyphmOs1Z-avXrlsb5IPHkOWVL4m1V7FK6Ylw-zt5UppLalADNjKkmrookR3NPXdIyQDo_Gkn8DTaoSLbt9USFNnGTlWtNd68A0bCj8BY04dComJRuUBJ31z5gYJ5YPlZLvuWbtIeWGa3Lyw43E62VZVyLE3Fn6FBafUpNFpCDfJgRpJVsrMsqDP9e4-ngrVB7gM0f6VN60n1LbD0F5_D9O6i8bSp4DXt-va9EhvTOmFgt7XyVjg6JGs6nrbZ"
                alt="Technical University of Munich"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-on-surface flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span> #1 Germany
              </div>
              <h2 className="absolute bottom-3 left-4 font-headline-sm text-headline-sm text-on-primary drop-shadow-md pr-4 leading-tight">TU Munich</h2>
            </div>
            <div className="p-4 flex flex-col gap-4 flex-grow bg-surface-container-lowest">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-surface-container-low rounded-lg text-outline">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>euro</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-xs">Tuition Fees</div>
                  <div className="font-body-md text-body-md text-on-surface font-medium">€0 - €6,000 / sem</div>
                  <div className="font-label-sm text-label-sm text-outline mt-xs">Varies by program</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-surface-container-low rounded-lg text-outline">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>public</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-xs">World Ranking</div>
                  <div className="font-body-md text-body-md text-on-surface font-medium">#37 QS World</div>
                  <div className="font-label-sm text-label-sm text-outline mt-xs">Elite University Status</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-surface-container-low rounded-lg text-outline">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>verified_user</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-xs">Visa Success Rate</div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-surface-variant rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary w-[88%]"></div>
                    </div>
                    <span className="font-label-bold text-label-bold text-tertiary">88%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-surface-container-low rounded-lg text-outline">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_month</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-xs">Next Intake</div>
                  <div className="font-body-md text-body-md text-on-surface font-medium">Winter 2024</div>
                  <div className="font-label-sm text-label-sm text-outline mt-xs">Deadline in 60 days</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-surface-container-low rounded-lg text-outline">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>description</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-xs">Key Documents</div>
                  <div className="font-label-sm text-label-sm text-on-surface flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-1 bg-surface-variant rounded-md">IELTS 6.5</span>
                    <span className="px-2 py-1 bg-surface-variant rounded-md">VPD</span>
                    <span className="px-2 py-1 bg-surface-variant rounded-md">Motivation Ltr</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-surface-container-lowest border-t border-outline-variant mt-auto">
              <button onClick={() => alert('Proceed with Application (TUM)')} className="w-full py-3 bg-surface text-primary-container font-label-bold text-label-bold rounded-lg border border-primary-container hover:bg-surface-container-low active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Proceed with Application
              </button>
            </div>
          </article>

          {/* Add More Card */}
          <article onClick={() => alert('Add University to Comparison')} className="flex-none w-[85%] sm:w-[340px] snap-center bg-surface rounded-xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center h-[auto] min-h-[500px] cursor-pointer hover:bg-surface-container-low transition-colors group">
            <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[32px] text-on-primary-fixed-variant" style={{ fontVariationSettings: "'FILL' 0" }}>add</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Add University</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-center px-6">Select one more university to compare side-by-side.</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default UniversityComparison;