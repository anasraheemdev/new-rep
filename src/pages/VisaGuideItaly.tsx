import React from 'react';

const VisaGuideItaly: React.FC = () => {
  return (
    <main className="max-w-[640px] mx-auto px-margin-mobile py-lg flex flex-col gap-xl pb-32 md:pb-8 w-full">
      {/* Hero Section */}
      <section className="flex flex-col gap-md">
        <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-sm">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoWWlCMMm-ActaKOlKV88iFiHwhPh5Fjz0F-N3T5nsFBaAcak6UN_NVrWJMv_mf1wAe3CklvtYshUFZpq8kxCQ4n4PdpiG4VKte9KKblWAiCS5jX6DRTbUmkrFvUKhyKBRO8jyN86LKr17KjikfeH5BYVP56lbWcbpRzdnJpExvZy2wZmzlSRes7iI2aVhzfc6aRQ9ES7qq39lJX-fOj9_Qk0C5smlkbq0mPg5TicmkvQ-eLhiyBNxDgnghSFl5oDCWFWy6aVL_EOf"
            alt="Cinque Terre, Italy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-md w-full">
            <span className="inline-block bg-primary-container text-on-primary-container font-label-sm text-label-sm px-2 py-1 rounded mb-2">D-Type National Visa</span>
            <h1 className="font-headline-md text-headline-md text-white">Italy Visa Guide</h1>
          </div>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Your structured path to securing an Italian student visa. This guide is tailored for South Asian applicants, covering critical prerequisites like Universitaly and DOV.
        </p>
      </section>

      {/* Key Facts Bento */}
      <section className="flex flex-col gap-md">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">Critical Prerequisites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          <div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col gap-sm">
            <div className="flex items-center gap-sm text-primary">
              <span className="material-symbols-outlined">school</span>
              <h3 className="font-label-bold text-label-bold text-on-surface">Universitaly Portal</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              Mandatory pre-enrollment step for all non-EU students. The Italian embassy will not process your visa without a validated summary from this portal.
            </p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col gap-sm">
            <div className="flex items-center gap-sm text-secondary">
              <span className="material-symbols-outlined">verified</span>
              <h3 className="font-label-bold text-label-bold text-on-surface">DOV or CIMEA</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              You must verify your previous degrees. Obtain a Declaration of Value (DOV) via the embassy or a Statement of Comparability via CIMEA. Start this early.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline / Concierge Path */}
      <section className="flex flex-col gap-md">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">The Application Timeline</h2>
        <div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="relative pl-6 border-l-2 border-surface-variant flex flex-col gap-lg py-2">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[35px] top-0 bg-surface-container-lowest border-2 border-primary rounded-full w-6 h-6 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <h4 className="font-label-bold text-label-bold text-on-surface">1. Universitaly Pre-enrollment</h4>
              <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">March - July</span>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Submit your admission letter and details to the Universitaly portal. Wait for your university to validate it.</p>
            </div>
            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-[35px] top-0 bg-surface-container-lowest border-2 border-surface-variant rounded-full w-6 h-6 flex items-center justify-center"></div>
              <h4 className="font-label-bold text-label-bold text-on-surface">2. Document Authentication</h4>
              <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">May - August</span>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Legalize your academic documents (Apostille) and apply for DOV or CIMEA.</p>
            </div>
            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[35px] top-0 bg-surface-container-lowest border-2 border-surface-variant rounded-full w-6 h-6 flex items-center justify-center"></div>
              <h4 className="font-label-bold text-label-bold text-on-surface">3. VFS / Embassy Appointment</h4>
              <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">July - September</span>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Book your visa slot as soon as Universitaly is validated. Prepare financial and accommodation proofs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Cards */}
      <section className="flex flex-col gap-md">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Essential Document Checklist</h2>
          <span className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded text-xs font-medium">9 Items</span>
        </div>
        <div className="flex flex-col gap-sm">
          {/* Checklist Item */}
          <div className="bg-surface-container-lowest rounded-lg p-md border border-outline-variant shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-start gap-md">
            <span className="material-symbols-outlined text-primary mt-1">description</span>
            <div>
              <h4 className="font-label-bold text-label-bold text-on-surface">Universitaly Summary</h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Printed copy of the validated summary from the portal.</p>
            </div>
          </div>
          {/* Checklist Item */}
          <div className="bg-surface-container-lowest rounded-lg p-md border border-outline-variant shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-start gap-md">
            <span className="material-symbols-outlined text-primary mt-1">account_balance</span>
            <div>
              <h4 className="font-label-bold text-label-bold text-on-surface">Proof of Economic Means</h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Approx. €6,000/year. Required: Bank statements for the last 6 months, ITRs, and sponsorship affidavit if applicable.</p>
            </div>
          </div>
          {/* Checklist Item */}
          <div className="bg-surface-container-lowest rounded-lg p-md border border-outline-variant shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-start gap-md">
            <span className="material-symbols-outlined text-primary mt-1">home</span>
            <div>
              <h4 className="font-label-bold text-label-bold text-on-surface">Accommodation Proof</h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Lease agreement, hotel booking (min 30 days), or declaration of hospitality in Italy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="flex flex-col gap-md mb-xl">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">South Asian Applicant FAQs</h2>
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant divide-y divide-outline-variant overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <details className="group">
            <summary className="flex justify-between items-center font-label-bold text-label-bold p-md cursor-pointer list-none text-on-surface hover:bg-surface-bright transition-colors">
              What if my CIMEA is delayed?
              <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="p-md pt-0 font-body-md text-body-md text-on-surface-variant text-sm">
              You can often submit proof of your CIMEA application receipt to the embassy during your visa appointment. However, check specific consulate rules as policies change frequently.
            </div>
          </details>
          <details className="group">
            <summary className="flex justify-between items-center font-label-bold text-label-bold p-md cursor-pointer list-none text-on-surface hover:bg-surface-bright transition-colors">
              Can I show an education loan as proof of funds?
              <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="p-md pt-0 font-body-md text-body-md text-on-surface-variant text-sm">
              Yes, a sanctioned education loan letter from a recognized bank is accepted. Ensure the loan explicitly covers your living expenses in Italy, not just tuition fees.
            </div>
          </details>
        </div>
      </section>
    </main>
  );
};

export default VisaGuideItaly;