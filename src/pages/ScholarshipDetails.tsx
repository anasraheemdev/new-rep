import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScholarshipDetails: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="flex-1 overflow-y-auto p-margin-mobile md:p-8 flex justify-center pb-24 md:pb-8 w-full">
      <div className="w-full max-w-4xl flex flex-col gap-lg">
        {/* Header Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/10 text-secondary-container font-label-sm border border-secondary-container/20">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJJhuP_p1eIylckNEO4m8qh7IYY2AQxG8kiPJpp9jIId5J_bNdmZu9MJXNE3FZelZBfi50wY1KxxABFBAewVoxSmUa99FrhPzW_T9X_tOVgUc4PImRlHmFKv2aTgHkLePn7Ivlba6V9TW4n6OBm0GptcjS_Z971ljBtMkua4EjEq_TkDBEMUEy5dKx0tbVsswxYK4m_0759HEAqIfQDbUXHJkZjtV8VqbsdyLKOzjrAXGEc_IMsQehZD4K9eS4Y-2gFH96W2kk_dSP"
                alt="Italy Flag"
                className="w-4 h-3 object-cover rounded-sm border border-outline-variant"
              />
              Italy
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-container/10 text-tertiary-container font-label-sm border border-tertiary-container/20">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              Official Source
            </span>
          </div>
          <h1 className="font-display-lg text-on-surface">DSU Scholarship (Regional Excellence)</h1>
          <p className="font-body-lg text-on-surface-variant">
            A comprehensive regional scholarship covering full tuition, living expenses, and meals for international students pursuing higher education in Italy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg mt-4">
          {/* Left Column: Details (lg: 2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-lg">
            {/* Key Benefits Bento Box */}
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/30 rounded-bl-full -z-0"></div>
              <h2 className="font-headline-md text-on-surface relative z-10 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                <div className="bg-surface-container-low rounded-lg p-4 flex flex-col gap-2 border border-surface-variant/50">
                  <span className="material-symbols-outlined text-tertiary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                  <h3 className="font-label-bold text-on-surface">Full Tuition Waiver</h3>
                  <p className="font-label-sm text-on-surface-variant">100% coverage for university fees</p>
                </div>
                <div className="bg-surface-container-low rounded-lg p-4 flex flex-col gap-2 border border-surface-variant/50">
                  <span className="material-symbols-outlined text-secondary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>euro_symbol</span>
                  <h3 className="font-label-bold text-on-surface">€600/month</h3>
                  <p className="font-label-sm text-on-surface-variant">Annual stipend of up to €7,200</p>
                </div>
                <div className="bg-surface-container-low rounded-lg p-4 flex flex-col gap-2 border border-surface-variant/50">
                  <span className="material-symbols-outlined text-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
                  <h3 className="font-label-bold text-on-surface">Free Meal Plan</h3>
                  <p className="font-label-sm text-on-surface-variant">1-2 free daily meals at uni canteen</p>
                </div>
              </div>
            </div>

            {/* Eligibility */}
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col gap-4">
              <h2 className="font-headline-sm text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-on-surface-variant">checklist</span>
                Eligibility Criteria
              </h2>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container mt-0.5">check_circle</span>
                  <div>
                    <p className="font-label-bold text-on-surface">Academic Level</p>
                    <p className="font-body-md text-on-surface-variant">Enrolling or enrolled in a Bachelor's, Master's, or PhD program at a recognized Italian university.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container mt-0.5">check_circle</span>
                  <div>
                    <p className="font-label-bold text-on-surface">Financial Status</p>
                    <p className="font-body-md text-on-surface-variant">Family income (ISEE-U equivalent) must be under €23,000 annually. Asset limits also apply.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container mt-0.5">check_circle</span>
                  <div>
                    <p className="font-label-bold text-on-surface">Nationality</p>
                    <p className="font-body-md text-on-surface-variant">Open to all international students, including South Asian nationalities.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Required Documents */}
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col gap-4">
              <h2 className="font-headline-sm text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-on-surface-variant">folder_open</span>
                Required Documents
              </h2>
              <p className="font-body-md text-on-surface-variant mb-2">Prepare these documents well in advance. All financial documents must be legalized and translated.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-surface-variant/50">
                  <span className="material-symbols-outlined text-on-surface-variant bg-surface-container-high p-2 rounded-md">badge</span>
                  <span className="font-label-bold text-on-surface">Valid Passport</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-surface-variant/50">
                  <span className="material-symbols-outlined text-on-surface-variant bg-surface-container-high p-2 rounded-md">euro</span>
                  <span className="font-label-bold text-on-surface">Income Certificate (Translated)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-surface-variant/50">
                  <span className="material-symbols-outlined text-on-surface-variant bg-surface-container-high p-2 rounded-md">home</span>
                  <span className="font-label-bold text-on-surface">Family Composition Doc</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-surface-variant/50">
                  <span className="material-symbols-outlined text-on-surface-variant bg-surface-container-high p-2 rounded-md">history_edu</span>
                  <span className="font-label-bold text-on-surface">Academic Transcripts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline & Actions (lg: 1 col) */}
          <div className="flex flex-col gap-lg">
            {/* CTA Sticky Box */}
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-surface-variant shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col gap-4 sticky top-6 z-20">
              <div className="flex flex-col gap-1 text-center mb-2">
                <p className="font-label-sm text-error font-bold tracking-wide uppercase">Deadline Approaching</p>
                <p className="font-headline-sm text-on-surface">Closes: Sep 06, 2024</p>
              </div>
              <button onClick={() => navigate('/application-steps')} className="w-full py-3.5 px-4 bg-primary-container text-on-primary-container rounded-xl font-label-bold text-base hover:opacity-90 hover:shadow-md transition-all shadow-sm flex justify-center items-center gap-2">
                Apply Now
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
              <button onClick={() => alert('Save for Later triggered')} className="w-full py-3 px-4 bg-transparent text-primary-container border-2 border-primary-container/20 rounded-xl font-label-bold hover:bg-primary-container/5 transition-colors flex justify-center items-center gap-2">
                <span className="material-symbols-outlined text-lg">bookmark_border</span>
                Save for Later
              </button>
            </div>

            {/* Timeline */}
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col gap-6">
              <h2 className="font-headline-sm text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-on-surface-variant">timeline</span>
                Application Timeline
              </h2>
              <div className="relative pl-4 border-l-2 border-surface-variant/50 flex flex-col gap-6">
                {/* Step 1 */}
                <div className="relative">
                  <div className="absolute -left-[25px] top-1 w-3 h-3 bg-tertiary-container rounded-full ring-4 ring-surface-container-lowest"></div>
                  <p className="font-label-sm text-tertiary-container font-bold mb-0.5">July - August</p>
                  <p className="font-label-bold text-on-surface">Get ISEE-U Certificate</p>
                  <p className="font-body-md text-on-surface-variant text-sm mt-1">Legalize and translate financial docs to calculate your Italian equivalent income.</p>
                </div>
                {/* Step 2 */}
                <div className="relative">
                  <div className="absolute -left-[25px] top-1 w-3 h-3 bg-primary-container rounded-full ring-4 ring-surface-container-lowest shadow-[0_0_8px_rgba(26,115,232,0.4)]"></div>
                  <p className="font-label-sm text-primary-container font-bold mb-0.5">August - September</p>
                  <p className="font-label-bold text-on-surface">Online Application</p>
                  <p className="font-body-md text-on-surface-variant text-sm mt-1">Submit the regional DSU portal application before the deadline.</p>
                </div>
                {/* Step 3 */}
                <div className="relative">
                  <div className="absolute -left-[25px] top-1 w-3 h-3 bg-surface-variant rounded-full ring-4 ring-surface-container-lowest"></div>
                  <p className="font-label-sm text-outline font-bold mb-0.5">Late October</p>
                  <p className="font-label-bold text-on-surface">Ranking List Published</p>
                  <p className="font-body-md text-on-surface-variant text-sm mt-1">Provisional and final lists released indicating winner or eligible status.</p>
                </div>
                {/* Step 4 */}
                <div className="relative">
                  <div className="absolute -left-[25px] top-1 w-3 h-3 bg-surface-variant rounded-full ring-4 ring-surface-container-lowest"></div>
                  <p className="font-label-sm text-outline font-bold mb-0.5">December</p>
                  <p className="font-label-bold text-on-surface">Scholarship Disbursement</p>
                  <p className="font-body-md text-on-surface-variant text-sm mt-1">First installment of cash stipend transferred to your Italian bank account.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ScholarshipDetails;