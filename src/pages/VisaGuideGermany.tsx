import React from 'react';

const VisaGuideGermany: React.FC = () => {
  return (
    <main className="max-w-[640px] mx-auto px-margin-mobile pt-8 pb-[100px] flex flex-col gap-xl w-full">
      {/* Hero Section */}
      <header className="flex flex-col gap-sm">
        <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full w-fit mb-2">
          <span className="material-symbols-outlined text-[16px]">flag</span>
          <span className="font-label-sm text-label-sm">Germany Destination</span>
        </div>
        <h1 className="font-headline-md text-headline-md text-on-surface">National Student Visa Guide</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">Your complete roadmap to securing your Type D Visa for studying in Germany. Follow these steps carefully to ensure a smooth application process.</p>
      </header>

      {/* Overview Bento Grid */}
      <section className="grid grid-cols-2 gap-md">
        <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-outline-variant flex flex-col gap-xs">
          <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
          </div>
          <h3 className="font-label-bold text-label-bold text-on-surface">Processing Time</h3>
          <p className="font-body-md text-[14px] leading-[20px] text-on-surface-variant">4 - 8 Weeks average</p>
        </div>
        <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-outline-variant flex flex-col gap-xs">
          <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-primary text-[18px]">payments</span>
          </div>
          <h3 className="font-label-bold text-label-bold text-on-surface">Visa Fee</h3>
          <p className="font-body-md text-[14px] leading-[20px] text-on-surface-variant">€75 payable at interview</p>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="flex flex-col gap-md">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-primary">inventory</span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Document Checklist</h2>
        </div>
        <div className="flex flex-col gap-sm">
          {/* Doc 1 */}
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant flex gap-md items-start">
            <div className="mt-1 flex-shrink-0">
              <span className="material-symbols-outlined text-primary">import_contacts</span>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-label-bold text-label-bold text-on-surface">Valid Passport</h4>
              <p className="font-body-md text-[14px] leading-[20px] text-on-surface-variant">Must be valid for at least 6 months beyond your intended stay with 2 blank pages.</p>
            </div>
          </div>
          {/* Doc 2 */}
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant flex gap-md items-start">
            <div className="mt-1 flex-shrink-0">
              <span className="material-symbols-outlined text-primary">school</span>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-label-bold text-label-bold text-on-surface">University Admission Letter</h4>
              <p className="font-body-md text-[14px] leading-[20px] text-on-surface-variant">Official unconditional offer from a recognized German university.</p>
            </div>
          </div>
          {/* Doc 3 */}
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant flex gap-md items-start">
            <div className="mt-1 flex-shrink-0">
              <span className="material-symbols-outlined text-primary">account_balance</span>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-label-bold text-label-bold text-on-surface">Blocked Account Confirmation</h4>
              <p className="font-body-md text-[14px] leading-[20px] text-on-surface-variant">Proof of financial resources (approx. €11,208 per year) deposited in a German blocked account.</p>
            </div>
          </div>
          {/* Doc 4 */}
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant flex gap-md items-start">
            <div className="mt-1 flex-shrink-0">
              <span className="material-symbols-outlined text-primary">health_and_safety</span>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-label-bold text-label-bold text-on-surface">Health Insurance</h4>
              <p className="font-body-md text-[14px] leading-[20px] text-on-surface-variant">Travel health insurance covering the entire period until you enroll in statutory German health insurance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="flex flex-col gap-md">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-primary">route</span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Step-by-Step Process</h2>
        </div>
        <div className="relative pl-8 ml-2 border-l-2 border-surface-container-high flex flex-col gap-lg">
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-sm">
              <span className="text-white font-label-bold text-[12px]">1</span>
            </div>
            <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant">
              <h4 className="font-label-bold text-label-bold text-on-surface">Fund Blocked Account</h4>
              <p className="font-body-md text-[14px] leading-[20px] text-on-surface-variant mt-1">Open and transfer funds to your German Blocked Account to receive the official confirmation document.</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-8 h-8 bg-surface-container-high rounded-full flex items-center justify-center border-4 border-background">
              <span className="text-on-surface-variant font-label-bold text-[12px]">2</span>
            </div>
            <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant">
              <h4 className="font-label-bold text-label-bold text-on-surface">Book Appointment</h4>
              <p className="font-body-md text-[14px] leading-[20px] text-on-surface-variant mt-1">Schedule your visa interview at the German Embassy or Consulate via VFS Global.</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-8 h-8 bg-surface-container-high rounded-full flex items-center justify-center border-4 border-background">
              <span className="text-on-surface-variant font-label-bold text-[12px]">3</span>
            </div>
            <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant">
              <h4 className="font-label-bold text-label-bold text-on-surface">Attend Interview</h4>
              <p className="font-body-md text-[14px] leading-[20px] text-on-surface-variant mt-1">Submit all printed documents and answer questions about your study plans.</p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-8 h-8 bg-surface-container-high rounded-full flex items-center justify-center border-4 border-background">
              <span className="text-on-surface-variant font-label-bold text-[12px]">4</span>
            </div>
            <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant">
              <h4 className="font-label-bold text-label-bold text-on-surface">Await Decision</h4>
              <p className="font-body-md text-[14px] leading-[20px] text-on-surface-variant mt-1">Track your application. The embassy will notify you to collect your stamped passport.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-secondary-fixed text-on-secondary-fixed p-lg rounded-xl flex flex-col gap-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined">lightbulb</span>
          <h3 className="font-label-bold text-label-bold">Pro Tips for the Interview</h3>
        </div>
        <ul className="list-disc pl-5 font-body-md text-[14px] leading-[22px] flex flex-col gap-1">
          <li>Be prepared to explain why you chose this specific university and course.</li>
          <li>Organize your documents exactly in the order specified by the embassy checklist.</li>
          <li>Bring both original documents and the required number of photocopies.</li>
        </ul>
      </section>
    </main>
  );
};

export default VisaGuideGermany;