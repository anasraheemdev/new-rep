import React from 'react';

const AdminPlatformAnalytics: React.FC = () => {
  return (
    <main className="flex-1 pt-6 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto w-full">
      {/* Page Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="font-display-lg text-on-surface mb-2">Growth Dashboard</h2>
          <p className="font-body-md text-on-surface-variant">Monitoring user acquisition and conversion metrics.</p>
        </div>
        <button onClick={() => alert('Export Report')} className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-bold shadow-sm hover:shadow-md transition-shadow flex items-center gap-2 self-start sm:self-auto">
          <span className="material-symbols-outlined text-[20px]">download</span>
          Export Report
        </button>
      </div>

      {/* Key Metrics Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-lg">
        {/* Metric 1: Signups */}
        <div className="col-span-4 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
              <span className="material-symbols-outlined">group_add</span>
            </div>
            <span className="flex items-center text-tertiary font-label-bold bg-tertiary-fixed/30 px-2 py-1 rounded-full">
              <span className="material-symbols-outlined text-[16px] mr-1">trending_up</span>
              +12.4%
            </span>
          </div>
          <div>
            <p className="font-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Total Sign-ups</p>
            <p className="font-headline-md text-on-surface text-3xl">8,429</p>
          </div>
        </div>

        {/* Metric 2: Applications */}
        <div className="col-span-4 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
              <span className="material-symbols-outlined">school</span>
            </div>
            <span className="flex items-center text-tertiary font-label-bold bg-tertiary-fixed/30 px-2 py-1 rounded-full">
              <span className="material-symbols-outlined text-[16px] mr-1">trending_up</span>
              +8.1%
            </span>
          </div>
          <div>
            <p className="font-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Active Applications</p>
            <p className="font-headline-md text-on-surface text-3xl">3,102</p>
          </div>
        </div>

        {/* Metric 3: Visas */}
        <div className="col-span-4 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <span className="flex items-center text-tertiary font-label-bold bg-tertiary-fixed/30 px-2 py-1 rounded-full">
              <span className="material-symbols-outlined text-[16px] mr-1">trending_up</span>
              +15.2%
            </span>
          </div>
          <div>
            <p className="font-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Visas Granted</p>
            <p className="font-headline-md text-on-surface text-3xl">1,245</p>
          </div>
        </div>
      </div>

      {/* Complex Analytics Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Chart: User Growth */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline-sm text-on-surface">User Acquisition Trend</h3>
            <div className="flex gap-2">
              <button onClick={() => alert('Weekly Filter')} className="px-3 py-1 text-label-sm font-label-bold rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors">Weekly</button>
              <button onClick={() => alert('Monthly Filter')} className="px-3 py-1 text-label-sm font-label-bold rounded-full bg-primary-fixed text-primary transition-colors">Monthly</button>
            </div>
          </div>

          {/* Faux Chart Representation */}
          <div className="h-64 flex items-end justify-between gap-2 border-b border-l border-outline-variant pb-2 pl-2 relative">
            {/* Y-axis labels */}
            <div className="absolute -left-8 bottom-0 top-0 flex flex-col justify-between text-label-sm text-on-surface-variant py-2">
              <span>2k</span>
              <span>1.5k</span>
              <span>1k</span>
              <span>500</span>
              <span>0</span>
            </div>
            {/* Bars */}
            <div className="w-full bg-primary-container/20 rounded-t-sm h-[30%] hover:bg-primary-container/40 transition-colors relative group cursor-pointer">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">600</div>
            </div>
            <div className="w-full bg-primary-container/20 rounded-t-sm h-[45%] hover:bg-primary-container/40 transition-colors relative group cursor-pointer"></div>
            <div className="w-full bg-primary-container/20 rounded-t-sm h-[40%] hover:bg-primary-container/40 transition-colors relative group cursor-pointer"></div>
            <div className="w-full bg-primary-container/20 rounded-t-sm h-[60%] hover:bg-primary-container/40 transition-colors relative group cursor-pointer"></div>
            <div className="w-full bg-primary-container/20 rounded-t-sm h-[55%] hover:bg-primary-container/40 transition-colors relative group cursor-pointer"></div>
            <div className="w-full bg-primary-container/20 rounded-t-sm h-[75%] hover:bg-primary-container/40 transition-colors relative group cursor-pointer"></div>
            <div className="w-full bg-primary-container rounded-t-sm h-[90%] hover:bg-primary transition-colors relative group cursor-pointer shadow-[0_0_10px_rgba(26,115,232,0.3)]">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">1,800</div>
            </div>
          </div>
          {/* X-axis labels */}
          <div className="flex justify-between text-label-sm text-on-surface-variant pt-2 pl-2">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <h3 className="font-headline-sm text-on-surface mb-6">Conversion Funnel</h3>
          <div className="flex flex-col gap-4">
            {/* Funnel Step 1 */}
            <div>
              <div className="flex justify-between font-label-bold text-on-surface mb-1">
                <span>1. Sign-ups</span>
                <span>100%</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-3 overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: '100%' }}></div>
              </div>
              <p className="text-label-sm text-on-surface-variant mt-1 text-right">8,429 users</p>
            </div>
            {/* Funnel Step 2 */}
            <div>
              <div className="flex justify-between font-label-bold text-on-surface mb-1">
                <span>2. Profile Completed</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-3 overflow-hidden">
                <div className="bg-primary/80 h-full rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-label-sm text-on-surface-variant mt-1 text-right">5,478 users</p>
            </div>
            {/* Funnel Step 3 */}
            <div>
              <div className="flex justify-between font-label-bold text-on-surface mb-1">
                <span>3. Application Started</span>
                <span>36%</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-3 overflow-hidden">
                <div className="bg-secondary h-full rounded-full" style={{ width: '36%' }}></div>
              </div>
              <p className="text-label-sm text-on-surface-variant mt-1 text-right">3,102 users</p>
            </div>
            {/* Funnel Step 4 */}
            <div>
              <div className="flex justify-between font-label-bold text-on-surface mb-1">
                <span>4. Visa Granted</span>
                <span className="text-tertiary">14%</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-3 overflow-hidden">
                <div className="bg-tertiary h-full rounded-full" style={{ width: '14%' }}></div>
              </div>
              <p className="text-label-sm text-on-surface-variant mt-1 text-right">1,245 users</p>
            </div>
          </div>
        </div>

        {/* Popular Destinations Heatmap */}
        <div className="col-span-12 lg:col-span-6 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline-sm text-on-surface">Top Destinations</h3>
            <span className="material-symbols-outlined text-on-surface-variant">public</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-outline-variant font-label-sm text-on-surface-variant uppercase tracking-wider">
                  <th className="pb-3 font-medium">Country</th>
                  <th className="pb-3 font-medium text-right">Applications</th>
                  <th className="pb-3 font-medium text-right">Success Rate</th>
                </tr>
              </thead>
              <tbody className="font-body-md text-on-surface">
                <tr onClick={() => alert('Germany Stats')} className="border-b border-surface-variant hover:bg-surface-container-lowest transition-colors cursor-pointer">
                  <td className="py-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden bg-surface-variant flex items-center justify-center">
                      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6XjyyIJm_tG3POupROrKxazDnX0Ecp4VzzcZMtQ5mJ3rowrk_sWnOKIHxHQgUIITy50cP2vk6iXn7zxmaGFchytis_wFEU-He9QRhU_XKbOFQEzWhb2j1ZomkSZRQEH8LnK7I2Xtu4RWd0awekww4zHyEu_NVhDa1noPw1oL7hOKktj9gf3b8WqztbCHoprJKF_LpSFFWR6eyC9S16sAm3MWzastiqFmNSkn4aZXS24xDG6nkA9j75xJ-kx7Fa_7BoWS7POYw08Kc" alt="Germany Flag" />
                    </div>
                    Germany
                  </td>
                  <td className="py-3 text-right">1,420</td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 h-2 bg-surface-variant rounded-full overflow-hidden">
                        <div className="bg-tertiary h-full rounded-full" style={{ width: '82%' }}></div>
                      </div>
                      <span className="font-label-bold text-tertiary">82%</span>
                    </div>
                  </td>
                </tr>
                <tr onClick={() => alert('France Stats')} className="border-b border-surface-variant hover:bg-surface-container-lowest transition-colors cursor-pointer">
                  <td className="py-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden bg-surface-variant flex items-center justify-center">
                      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADIDvqO096aOpVjQ3L5vA5GXRsC4cjcd_9nfoToeYFGlffhGm5t9YKQIQvUIuqe8k76hi4CMUUssjlxV1BFI9DuleYDJtGnZEeEuLuvDWWyiEnVn2DlGId5eSvHew2pk1A2OBQqGOmjoln9CZJMc1dqGZPU254h5NqzLMBDbcAE-8Xq2SF9M1ERtRlWmmfAMkwiI6yfyK4Q7J6lgMe5vJddS9hE7abywRg9IV3WAiwUsY_bVrOPDKE7SoAj3ztCMWccx7SmxKR0Gq0" alt="France Flag" />
                    </div>
                    France
                  </td>
                  <td className="py-3 text-right">845</td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 h-2 bg-surface-variant rounded-full overflow-hidden">
                        <div className="bg-tertiary h-full rounded-full" style={{ width: '76%' }}></div>
                      </div>
                      <span className="font-label-bold text-tertiary">76%</span>
                    </div>
                  </td>
                </tr>
                <tr onClick={() => alert('Spain Stats')} className="hover:bg-surface-container-lowest transition-colors cursor-pointer">
                  <td className="py-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden bg-surface-variant flex items-center justify-center">
                      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr7otMHtRdN5nU0yOODW45YtxVV43zQ8k24LafEh_fqa-wbUT9Bhv4C0DEEkgqdwz4FvfpE_0h7h5zz-YmYrFLUmMTEZJWz2I-4u7RMBiUzSUr58qfrJ1EBpkINvMuhzm8izeJwu9n1BgWL-VnoajzGfNwf0Pe0-GaRiY5A12l6UziCfwxifyLZUbglBEP0SHsqUzGLWK_Njp57SWAkTyYVTbYUTm8iWh-udkuFHweUbV2J3eoosgLCkc4yk1nwcb6Jw3aSe7wsCSI" alt="Spain Flag" />
                    </div>
                    Spain
                  </td>
                  <td className="py-3 text-right">532</td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 h-2 bg-surface-variant rounded-full overflow-hidden">
                        <div className="bg-tertiary h-full rounded-full" style={{ width: '68%' }}></div>
                      </div>
                      <span className="font-label-bold text-tertiary">68%</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Feature Usage Heatmap */}
        <div className="col-span-12 lg:col-span-6 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline-sm text-on-surface">Feature Engagement</h3>
            <span className="material-symbols-outlined text-on-surface-variant">mouse</span>
          </div>
          <div className="space-y-4">
            <div className="group cursor-pointer" onClick={() => alert('Blocked Account Insights')}>
              <div className="flex justify-between font-label-bold text-on-surface mb-1">
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-primary">account_balance</span> Blocked Account Setup</span>
                <span>4.2k clicks</span>
              </div>
              <div className="w-full bg-surface-variant rounded-sm h-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-container/20 to-primary/80" style={{ width: '85%' }}></div>
                <span className="absolute inset-y-0 left-2 flex items-center text-label-sm text-on-primary-fixed mix-blend-color-burn">High intent</span>
              </div>
            </div>

            <div className="group cursor-pointer" onClick={() => alert('Visa Check Insights')}>
              <div className="flex justify-between font-label-bold text-on-surface mb-1">
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">article</span> Visa Document Checklist</span>
                <span>3.8k clicks</span>
              </div>
              <div className="w-full bg-surface-variant rounded-sm h-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-container/20 to-secondary/70" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div className="group cursor-pointer" onClick={() => alert('Counselor Chat Insights')}>
              <div className="flex justify-between font-label-bold text-on-surface mb-1">
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-on-surface-variant">forum</span> Counselor Chat</span>
                <span>1.5k clicks</span>
              </div>
              <div className="w-full bg-surface-variant rounded-sm h-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-surface-dim to-outline" style={{ width: '35%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminPlatformAnalytics;