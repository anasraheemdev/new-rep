import React from 'react';

const Settings: React.FC = () => {
  return (
    <main className="flex-1 p-4 md:p-8 max-w-4xl mx-auto w-full pb-24 md:pb-8">
      <div className="mb-8">
        <h1 className="font-headline-md text-headline-md text-on-background mb-2">Settings</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">Manage your account, collaborators, and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-surface-container-highest overflow-hidden">
            <div className="p-6 border-b border-surface-container-high bg-surface-bright flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">person</span>
              <h2 className="font-headline-sm text-headline-sm text-on-background">Profile Details</h2>
            </div>
            <div className="p-6 space-y-6">
              {/* Avatar Upload */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img
                    alt="Current Avatar"
                    className="w-20 h-20 rounded-full border-2 border-surface-container-highest object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd1V-r4TvheFxP7wye4L31aocfXVuKtjis3L_jT1SFh1z7S2lFx3xrw1IQ_YsOom2yh4aO_uMrXvT0ce4nksr2I6v1Ecbx_-LpVGHI7upC-qXtWZLhrrsH0Xk8Q9QwI715EUMbrVCcLL1ge-flv_AdqWAv-briqSiEKlu2jNvV0d9OhU4MAtQyXLvzffxn-2fH8UfU8_zGHEl-mRSp2FOj8s8sjcpX1-ak8f9iPDrrHAYAoLjAmte4DYZJsnl7OD40RZ1-Gevua4qv"
                  />
                  <button className="absolute bottom-0 right-0 bg-primary-container text-on-primary-container p-1.5 rounded-full shadow-md hover:bg-primary-container/90 transition-colors">
                    <span className="material-symbols-outlined text-[16px]">edit</span>
                  </button>
                </div>
                <div>
                  <h3 className="font-label-bold text-label-bold text-on-background">Profile Photo</h3>
                  <p className="text-label-sm text-on-surface-variant mb-2">PNG, JPG up to 5MB</p>
                  <div className="flex gap-3">
                    <button onClick={() => alert('Upload New Profile Photo')} className="text-sm font-label-bold text-primary hover:text-primary/80 transition-colors">Upload New</button>
                    <button onClick={() => alert('Remove Profile Photo')} className="text-sm font-label-bold text-error hover:text-error/80 transition-colors">Remove</button>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-bold text-label-bold text-on-surface mb-1">Full Name</label>
                  <input
                    className="w-full bg-surface text-on-background border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body-md"
                    type="text"
                    defaultValue="Arjun Sharma"
                  />
                </div>
                <div>
                  <label className="block font-label-bold text-label-bold text-on-surface mb-1">Email Address</label>
                  <input
                    className="w-full bg-surface text-on-background border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body-md"
                    type="email"
                    defaultValue="arjun.sharma@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-bold text-label-bold text-on-surface mb-1">Target Country</label>
                  <div className="relative">
                    <select className="w-full bg-surface text-on-background border border-outline-variant rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body-md pr-10" defaultValue="Germany">
                      <option>Germany</option>
                      <option>France</option>
                      <option>Netherlands</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div>
                  <label className="block font-label-bold text-label-bold text-on-surface mb-1">Degree Level</label>
                  <div className="relative">
                    <select className="w-full bg-surface text-on-background border border-outline-variant rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body-md pr-10" defaultValue="Master's">
                      <option>Master's</option>
                      <option>Bachelor's</option>
                      <option>PhD</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button onClick={() => alert('Save Profile Changes')} className="bg-primary-container text-on-primary-container hover:bg-primary-container/90 px-6 py-2.5 rounded-lg font-bold shadow-sm transition-all">Save Changes</button>
              </div>
            </div>
          </section>

          {/* Collaborative Mode */}
          <section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-surface-container-highest overflow-hidden">
            <div className="p-6 border-b border-surface-container-high bg-surface-bright flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-secondary-container/10 p-2 rounded-lg text-secondary">
                  <span className="material-symbols-outlined">family_restroom</span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-on-background">Collaborative Mode</h2>
              </div>
              <span className="bg-tertiary-container/10 text-tertiary px-3 py-1 rounded-full font-label-bold text-xs uppercase tracking-wider">Active</span>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-on-surface-variant font-body-md">Keep your family or consultant updated on your journey. They will have "View Only" access to your progress and documents.</p>

              {/* Invite Action */}
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">mail</span>
                  <input
                    className="w-full bg-surface text-on-background border border-outline-variant rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body-md"
                    placeholder="Enter parent or consultant email..."
                    type="email"
                  />
                </div>
                <button onClick={() => alert('Invite Collaborator')} className="bg-secondary text-on-secondary hover:bg-secondary/90 px-6 py-3 rounded-lg font-bold shadow-sm transition-all whitespace-nowrap">Invite</button>
              </div>

              {/* Active Collaborators */}
              <div className="mt-6">
                <h3 className="font-label-bold text-label-bold text-on-surface mb-3 uppercase tracking-wider text-xs">Active Collaborators (1)</h3>
                <div className="border border-surface-container-highest rounded-lg divide-y divide-surface-container-highest bg-surface-bright">
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-surface-dim flex items-center justify-center text-on-surface font-bold">
                        RS
                      </div>
                      <div>
                        <div className="font-label-bold text-on-background">Rajesh Sharma</div>
                        <div className="text-sm text-on-surface-variant">rajesh.s@example.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-label-bold text-outline border border-outline-variant px-2 py-1 rounded">View Only</span>
                      <button onClick={() => alert('Remove Collaborator Access')} className="text-outline hover:text-error transition-colors" title="Remove Access">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Security & Prefs */}
        <div className="space-y-6">
          {/* Notifications */}
          <section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-surface-container-highest overflow-hidden">
            <div className="p-6 border-b border-surface-container-high bg-surface-bright flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">notifications_active</span>
              <h2 className="font-headline-sm text-headline-sm text-on-background">Notifications</h2>
            </div>
            <div className="p-6 space-y-5">
              {/* WhatsApp Highlight */}
              <div className="bg-tertiary-container/5 border border-tertiary-container/20 rounded-lg p-4 flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary mt-0.5">chat</span>
                <div>
                  <div className="font-label-bold text-on-background mb-1">WhatsApp Alerts</div>
                  <p className="text-sm text-on-surface-variant mb-3">Get real-time visa deadline and document status updates.</p>
                  <button onClick={() => alert('Connect WhatsApp')} className="text-sm font-label-bold text-tertiary hover:text-tertiary/80 flex items-center gap-1 transition-colors">
                    Connect WhatsApp <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-label-bold text-on-background">Email Updates</div>
                  <div className="text-sm text-on-surface-variant">Important milestones only</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-surface-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-label-bold text-on-background">In-App Alerts</div>
                  <div className="text-sm text-on-surface-variant">All activity</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-surface-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </section>

          {/* Preferences */}
          <section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-surface-container-highest overflow-hidden">
            <div className="p-6 border-b border-surface-container-high bg-surface-bright flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">language</span>
              <h2 className="font-headline-sm text-headline-sm text-on-background">Preferences</h2>
            </div>
            <div className="p-6">
              <label className="block font-label-bold text-label-bold text-on-surface mb-2">Display Language</label>
              <p className="text-sm text-on-surface-variant mb-4">Complex terms will be explained in this language.</p>
              <div className="relative">
                <select className="w-full bg-surface text-on-background border border-outline-variant rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body-md pr-10" defaultValue="English">
                  <option>English</option>
                  <option>Urdu</option>
                  <option>Hindi</option>
                  <option>Bengali</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Settings;