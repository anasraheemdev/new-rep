import React from 'react';
import { useNavigate } from 'react-router-dom';

const Marketplace: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="flex-1 w-full max-w-screen-xl mx-auto p-margin-mobile md:p-xl pb-24 md:pb-xl">
      <div className="max-w-[800px] mx-auto">
        {/* Header Section */}
        <div className="mb-xl">
          <h1 className="font-display-lg text-on-background mb-sm">Document Translation</h1>
          <p className="font-body-lg text-on-surface-variant">Certified translation and notary services for your official applications.</p>
        </div>

        {/* Secure Upload Bento Card */}
        <div onClick={() => navigate('/documents')} className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 p-lg mb-xl relative overflow-hidden cursor-pointer hover:border-primary-container/50 transition-colors">
          <div className="absolute top-0 right-0 p-md opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
          </div>
          <div className="flex items-start gap-md mb-md relative z-10">
            <div className="bg-primary-container/10 p-sm rounded-lg text-primary-container">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
            </div>
            <div>
              <h2 className="font-headline-md text-on-background">Secure Document Upload</h2>
              <p className="font-body-md text-on-surface-variant mt-xs">Your documents are encrypted and shared only with certified professionals.</p>
            </div>
          </div>
          <div className="border-2 border-dashed border-outline-variant/50 rounded-lg p-xl flex flex-col items-center justify-center bg-surface-bright/50 hover:bg-surface-bright transition-colors relative z-10">
            <span className="material-symbols-outlined text-outline text-display-lg mb-sm">cloud_upload</span>
            <p className="font-label-bold text-primary-container mb-xs">Click to upload or drag and drop</p>
            <p className="font-label-sm text-outline">PDF, JPG, PNG up to 10MB</p>
          </div>
        </div>

        {/* How it Works & Translators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
          {/* How it Works (Side Column) */}
          <div className="md:col-span-1 bg-surface-container-low rounded-xl p-md border border-outline-variant/20 flex flex-col gap-md">
            <h3 className="font-headline-sm text-on-background flex items-center gap-xs">
              <span className="material-symbols-outlined text-tertiary">info</span>
              How it Works
            </h3>
            <div className="flex gap-sm">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-sm text-[10px]">1</div>
                <div className="w-[2px] h-full bg-outline-variant/30 my-xs"></div>
              </div>
              <div className="pb-md">
                <h4 className="font-label-bold text-on-background">Upload</h4>
                <p className="font-label-sm text-on-surface-variant">Securely upload your original documents.</p>
              </div>
            </div>
            <div className="flex gap-sm">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-surface-variant text-on-surface flex items-center justify-center font-label-sm text-[10px]">2</div>
                <div className="w-[2px] h-full bg-outline-variant/30 my-xs"></div>
              </div>
              <div className="pb-md">
                <h4 className="font-label-bold text-on-background">Select Expert</h4>
                <p className="font-label-sm text-on-surface-variant">Choose a certified translator for your target language.</p>
              </div>
            </div>
            <div className="flex gap-sm">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-surface-variant text-on-surface flex items-center justify-center font-label-sm text-[10px]">3</div>
              </div>
              <div>
                <h4 className="font-label-bold text-on-background">Receive Certified Copy</h4>
                <p className="font-label-sm text-on-surface-variant">Get digitally signed and physical copies delivered.</p>
              </div>
            </div>
          </div>

          {/* Official Translators List */}
          <div className="md:col-span-2 flex flex-col gap-md">
            <div className="flex justify-between items-center mb-xs">
              <h3 className="font-headline-sm text-on-background">Official Translators</h3>
              <button onClick={() => alert('Filter translations triggered')} className="font-label-bold text-primary-container flex items-center gap-xs hover:underline">
                Filter by Language <span className="material-symbols-outlined text-[16px]">filter_list</span>
              </button>
            </div>

            {/* Translator Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 p-md flex flex-col sm:flex-row gap-md items-start sm:items-center">
              <img
                className="w-16 h-16 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq6LdjrkR0S7FV3owyO-wT7tHRUwlqTY0KWjamrQRmfejY6g0SEG_rngQNF_1cqTja9t6vIeaEbhCs9szvhIHE4K57kyAJsG5dzRYBNxgcKxHRbW37q4VkHPWx3r0GCXKNKNZ7vWjGUs8zpMN5Q0PYK1kNuPOjXQ3V1E-mZfiwIo7Fvpp-AHX7fIbpRdi0YchnmteA9uxEhRv205MfAQi6EOThcf50tutNLMHnobR0PQKFoOgeTF2q0lMGGUoUyvLxxS-G8IzB52T4"
                alt="Translator Profile"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-label-bold text-on-background text-lg flex items-center gap-xs">
                      Maria Rossi
                      <span className="material-symbols-outlined text-primary-container text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }} title="Verified">verified</span>
                    </h4>
                    <p className="font-label-sm text-on-surface-variant">Certified Italian Legal Translator</p>
                  </div>
                  <div className="flex items-center gap-xs bg-surface-variant px-sm py-xs rounded-full">
                    <span className="material-symbols-outlined text-tertiary-container text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-label-bold text-on-surface text-xs">4.9 (120)</span>
                  </div>
                </div>
                <div className="flex gap-xs mt-sm flex-wrap">
                  <span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-[10px] px-2 py-1 rounded-md">IT to EN</span>
                  <span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-[10px] px-2 py-1 rounded-md">EN to IT</span>
                  <span className="bg-surface-container-high text-on-surface font-label-sm text-[10px] px-2 py-1 rounded-md">24h Delivery</span>
                </div>
              </div>
              <button onClick={() => alert('View Translator Profile 1')} className="w-full sm:w-auto mt-sm sm:mt-0 bg-transparent border-2 border-primary-container text-primary-container font-label-bold py-2 px-md rounded-lg hover:bg-primary-container/5 transition-colors">
                View Profile
              </button>
            </div>

            {/* Translator Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 p-md flex flex-col sm:flex-row gap-md items-start sm:items-center">
              <img
                className="w-16 h-16 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdx0FSv_oruKQZoEEqe2TKKz_pLMIoagBMfZ5sWxo9j2fBg0EMXEBpEIfANtqtrWeZ_5atZjZ4ZEbikt1_5PYq92Y1ezy0DOR1gvPchBCJu3NnbiorRLw8QtWXR2CXkTs0tRL5bpLTD3UYIC1tlrs_gjUgjNlvHFgyUfkDlbtNIVbaFkn8X_nKca7hIm3Pxm2v00dxa_smGcO24qqn_5qXszXsMx9bZxoZGiGFWLcNXfEMVf70bFJeUBQ2TzLvWnk0QcBuNMoWFQaV"
                alt="Translator Profile"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-label-bold text-on-background text-lg flex items-center gap-xs">
                      Lukas Weber
                      <span className="material-symbols-outlined text-primary-container text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }} title="Verified">verified</span>
                    </h4>
                    <p className="font-label-sm text-on-surface-variant">Sworn German Translator & Notary</p>
                  </div>
                  <div className="flex items-center gap-xs bg-surface-variant px-sm py-xs rounded-full">
                    <span className="material-symbols-outlined text-tertiary-container text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-label-bold text-on-surface text-xs">4.8 (85)</span>
                  </div>
                </div>
                <div className="flex gap-xs mt-sm flex-wrap">
                  <span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-[10px] px-2 py-1 rounded-md">DE to EN</span>
                  <span className="bg-surface-container-high text-on-surface font-label-sm text-[10px] px-2 py-1 rounded-md">Notarization</span>
                  <span className="bg-surface-container-high text-on-surface font-label-sm text-[10px] px-2 py-1 rounded-md">48h Delivery</span>
                </div>
              </div>
              <button className="w-full sm:w-auto mt-sm sm:mt-0 bg-transparent border-2 border-primary-container text-primary-container font-label-bold py-2 px-md rounded-lg hover:bg-primary-container/5 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Marketplace;