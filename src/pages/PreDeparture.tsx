import React from 'react';

const PreDeparture: React.FC = () => {
  return (
    <main className="flex-1 w-full max-w-max-width mx-auto px-margin-mobile py-xl pb-24 md:pb-xl space-y-xl">
      {/* Hero / Milestone Section */}
      <section className="space-y-md">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Almost there, Aryan!</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Your journey to Munich begins in just 3 days. Let's make sure everything is perfect.</p>
        </div>

        {/* Progress Card */}
        <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant flex flex-col gap-sm">
          <div className="flex justify-between items-center">
            <span className="font-label-bold text-label-bold text-on-surface">Departure Readiness</span>
            <span className="font-label-bold text-label-bold text-primary">85%</span>
          </div>
          <div className="w-full bg-surface-variant rounded-full h-2 overflow-hidden">
            <div className="bg-primary h-full rounded-full" style={{ width: '85%' }}></div>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-xs mt-1">
            <span className="material-symbols-outlined text-[14px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            Visa approved & tickets booked
          </p>
        </div>
      </section>

      {/* Flight Tracker Widget */}
      <section className="space-y-sm">
        <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">flight_takeoff</span>
          Upcoming Flight
        </h2>
        <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant relative overflow-hidden">
          {/* Decorative subtle background gradient */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container opacity-5 rounded-bl-full pointer-events-none"></div>

          <div className="flex justify-between items-center mb-md">
            <div className="flex items-center gap-2">
              <img
                className="w-6 h-6 rounded-sm object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLMpPtAigsIYaSavjgMr7XTqLwGcReYBsnvrjvxw06FSp3s9AGMuww7NtqPSgr3iNBoEnb2Av-dSeOqgpZI7vFQrgXSBdV6m3oVeIvrVu-h0Tw6OeAvMf3ZCqZFDD1kcWSIBbrdt8UirDW299MnMRtjBmhj3hFAoQPca44jEBqWYtZn2ooOh9AEh3PS0KFQbIozuHbZsVSET4e7bFIG8t6FoW5bAaLDk3q8YKlWDl1VFV3a-DaJgAfqEoDZKl9I7FMlQOpC5SU4UU1"
                alt="Airline Logo"
              />
              <span className="font-label-bold text-label-bold text-on-surface-variant">Lufthansa LH 763</span>
            </div>
            <span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm px-2 py-1 rounded-md">On Time</span>
          </div>

          <div className="flex justify-between items-center relative z-10">
            {/* Origin */}
            <div className="flex flex-col">
              <span className="font-display-lg text-display-lg text-on-surface">DEL</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">New Delhi</span>
              <span className="font-label-bold text-label-bold text-on-surface mt-1">23:50</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Oct 12</span>
            </div>

            {/* Path */}
            <div className="flex-1 mx-4 flex flex-col items-center justify-center relative">
              <span className="font-label-sm text-label-sm text-on-surface-variant mb-1">8h 45m</span>
              <div className="w-full border-t-2 border-dashed border-outline-variant relative flex items-center justify-center">
                <span className="material-symbols-outlined text-primary bg-surface-container-lowest px-1 absolute" style={{ fontVariationSettings: "'FILL' 1" }}>flight</span>
              </div>
              <span className="font-label-sm text-label-sm text-primary mt-1">Terminal 3</span>
            </div>

            {/* Destination */}
            <div className="flex flex-col text-right">
              <span className="font-display-lg text-display-lg text-on-surface">MUC</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Munich</span>
              <span className="font-label-bold text-label-bold text-on-surface mt-1">05:05</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Oct 13</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Checklist */}
      <section className="space-y-sm">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">Final Checklist</h2>
        <div className="space-y-unit">
          {/* Completed Item */}
          <div className="bg-surface-container-lowest rounded-lg p-md border border-outline-variant flex items-start gap-md opacity-70">
            <button className="mt-1 flex-shrink-0 text-tertiary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </button>
            <div>
              <h3 className="font-label-bold text-label-bold text-on-surface line-through">Activate Health Insurance</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">TK public insurance confirmed and active.</p>
            </div>
          </div>

          {/* Active Action Item */}
          <div className="bg-surface-container-lowest rounded-lg p-md border border-primary flex items-start gap-md shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
            <button className="mt-1 flex-shrink-0 text-outline">
              <span className="material-symbols-outlined">radio_button_unchecked</span>
            </button>
            <div className="flex-1">
              <h3 className="font-label-bold text-label-bold text-on-surface">Confirm Airport Pickup</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">Your buddy, Felix, needs your exact terminal arrival to coordinate.</p>
              <button onClick={() => alert('Message Felix triggered')} className="mt-sm bg-primary-container text-on-primary-container font-label-bold text-label-bold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">Message Felix</button>
            </div>
          </div>

          {/* Pending Item */}
          <div className="bg-surface-container-lowest rounded-lg p-md border border-outline-variant flex items-start gap-md">
            <button className="mt-1 flex-shrink-0 text-outline">
              <span className="material-symbols-outlined">radio_button_unchecked</span>
            </button>
            <div>
              <h3 className="font-label-bold text-label-bold text-on-surface">Pack Essential Documents</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">Passport, Visa copy, University acceptance letter, and Blocked Account confirmation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Tips (First 24 Hours) */}
      <section className="space-y-sm">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">First 24 Hours in Munich</h2>
        <div className="grid grid-cols-1 gap-md">
          {/* Tip Card 1 */}
          <div onClick={() => alert('View Tip: Get Connected')} className="bg-secondary-fixed/30 rounded-xl p-md flex items-center gap-md cursor-pointer hover:shadow-sm transition-shadow">
            <div className="bg-secondary-container text-on-secondary-container w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">sim_card</span>
            </div>
            <div>
              <h4 className="font-label-bold text-label-bold text-on-surface">Get Connected</h4>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Grab a prepaid ALDI Talk SIM card from any supermarket for immediate data.</p>
            </div>
          </div>

          {/* Tip Card 2 */}
          <div onClick={() => alert('View Tip: Download MVG Fahrinfo')} className="bg-primary-fixed/40 rounded-xl p-md flex items-center gap-md cursor-pointer hover:shadow-sm transition-shadow">
            <div className="bg-primary-container text-on-primary-container w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">directions_subway</span>
            </div>
            <div>
              <h4 className="font-label-bold text-label-bold text-on-surface">Download MVG Fahrinfo</h4>
              <p className="font-label-sm text-label-sm text-on-surface-variant">The official app for Munich public transport. Your student ID covers basic zones initially.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PreDeparture;