import React from 'react';

const FinanceBlockedAccount: React.FC = () => {
  return (
    <main className="w-full max-w-[480px] mx-auto px-margin-mobile pt-lg pb-[120px] flex flex-col gap-xl">
      {/* Header Section */}
      <section className="flex flex-col gap-sm">
        <h1 className="font-headline-md text-headline-md text-on-surface">German Blocked Account</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">Manage your mandatory financial proof for the student visa.</p>
      </section>

      {/* Total Goal Progress Ring Dashboard */}
      <section className="bg-surface-container-lowest rounded-[24px] p-lg border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center gap-lg relative overflow-hidden">
        {/* Decorative subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed-dim/20 to-transparent opacity-50 pointer-events-none"></div>
        <div className="relative z-10 w-48 h-48 rounded-full flex items-center justify-center shadow-sm" style={{ background: 'conic-gradient(#e7e8e9 0% 100%)' }}>
          {/* Inner circle to create ring effect */}
          <div className="w-[172px] h-[172px] bg-surface-container-lowest rounded-full flex flex-col items-center justify-center shadow-inner">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Goal</span>
            <span className="font-display-lg text-display-lg text-primary tracking-tight mt-1">€11,208</span>
            <span className="font-label-bold text-label-bold text-on-surface-variant mt-2 bg-surface-container px-3 py-1 rounded-full">Required</span>
          </div>
        </div>
        <div className="text-center z-10">
          <p className="font-body-md text-body-md text-on-surface">This amount guarantees your living expenses for your first year in Germany.</p>
        </div>
      </section>

      {/* Journey Breakdown Cards */}
      <section className="flex flex-col gap-md">
        <h2 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Your Action Plan</h2>

        {/* Step 1: Active */}
        <div className="bg-surface-container-lowest rounded-xl p-md border border-primary shadow-[0_4px_12px_rgba(26,115,232,0.1)] flex items-start gap-md relative overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
          <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary">account_balance</span>
          </div>
          <div className="flex-1 flex flex-col gap-xs">
            <div className="flex justify-between items-center">
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Step 1 • Current</span>
            </div>
            <h3 className="font-label-bold text-label-bold text-on-surface">Choose Provider</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Select a German Federal Foreign Office approved bank.</p>
          </div>
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
        </div>

        {/* Step 2: Pending */}
        <div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant opacity-70 flex items-start gap-md">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-surface-variant">euro_symbol</span>
          </div>
          <div className="flex-1 flex flex-col gap-xs">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">Step 2</span>
            <h3 className="font-label-bold text-label-bold text-on-surface">Transfer Funds</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Send €11,208 + setup fees to your new account.</p>
          </div>
          <span className="material-symbols-outlined text-outline-variant">lock</span>
        </div>

        {/* Step 3: Pending */}
        <div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant opacity-70 flex items-start gap-md">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-surface-variant">description</span>
          </div>
          <div className="flex-1 flex flex-col gap-xs">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">Step 3</span>
            <h3 className="font-label-bold text-label-bold text-on-surface">Receive 06A Document</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Download the official confirmation for your visa interview.</p>
          </div>
          <span className="material-symbols-outlined text-outline-variant">lock</span>
        </div>
      </section>

      {/* Bank Comparison */}
      <section className="flex flex-col gap-md">
        <div className="flex justify-between items-end mb-xs">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Provider Comparison</h2>
          <button onClick={() => alert('View Details Provider Comparison')} className="font-label-bold text-label-bold text-primary hover:underline">View Details</button>
        </div>
        <div className="flex gap-md overflow-x-auto no-scrollbar pb-sm snap-x">
          {/* Fintiba */}
          <div className="snap-start shrink-0 w-[160px] bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-sm shadow-sm">
            <div className="h-8 flex items-center">
              <span className="font-label-bold text-label-bold text-[#f75249]">Fintiba</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Initial Fee</span>
              <span className="font-label-bold text-label-bold text-on-surface">€89.00</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Monthly</span>
              <span className="font-label-bold text-label-bold text-on-surface">€4.90</span>
            </div>
          </div>
          {/* Expatrio */}
          <div className="snap-start shrink-0 w-[160px] bg-primary-fixed-dim/20 border-2 border-primary rounded-xl p-md flex flex-col gap-sm shadow-sm relative">
            <div className="absolute -top-3 right-2 bg-primary text-on-primary font-label-sm text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide">Popular</div>
            <div className="h-8 flex items-center">
              <span className="font-label-bold text-label-bold text-[#1a1a1a]">Expatrio</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Initial Fee</span>
              <span className="font-label-bold text-label-bold text-on-surface">€49.00</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Monthly</span>
              <span className="font-label-bold text-label-bold text-on-surface">€5.00</span>
            </div>
          </div>
          {/* Coracle */}
          <div className="snap-start shrink-0 w-[160px] bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-sm shadow-sm">
            <div className="h-8 flex items-center">
              <span className="font-label-bold text-label-bold text-[#00a859]">Coracle</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Initial Fee</span>
              <span className="font-label-bold text-label-bold text-on-surface">€99.00</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Monthly</span>
              <span className="font-label-bold text-label-bold text-on-surface">€0.00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Upload Area */}
      <section className="flex flex-col gap-sm mt-md">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">Secure Document Vault</h2>
        <div onClick={() => alert('Secure Document Upload')} className="border-2 border-dashed border-outline-variant rounded-xl p-lg bg-surface flex flex-col items-center justify-center gap-md text-center hover:bg-surface-container-low transition-colors cursor-pointer group">
          <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_upload</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-label-bold text-label-bold text-primary">Upload Transfer Receipt</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">PDF, JPG, PNG up to 5MB</span>
          </div>
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 justify-center mt-2">
          <span className="material-symbols-outlined text-[16px]">verified_user</span>
          End-to-end encrypted storage
        </p>
      </section>
    </main>
  );
};

export default FinanceBlockedAccount;