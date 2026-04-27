import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UniversityDetails: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="flex-1 w-full pb-24 md:pb-8">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6WJN1OS8KDYUzEAwl-qFEsv1cCubuBKqj-DP63oePb-TflmxxjQb4_jzyCDs1PVnHDNGy5ZxGRAkh5bWvz479bL0zIjTd67KiS4p4ZFMy9WQsKRpFSlVpNDxKCWayoMptrwCRsK0pF6XBo34MORu8puqYhcpiDPKXaTCLrzDTrv1qOK-APypjjtNELlWx5V41UueeM6nnsU1G-TIIFq4Gb7UmlePPHMHQArHx0kkXDBgvqIV1QKKaohreRgA2kPDdxXuemaljGdME"
          alt="Politecnico di Milano Campus"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 md:pl-12">
          <div className="flex flex-col md:flex-row md:items-end gap-6 max-w-5xl mx-auto">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-xl p-2 shadow-lg flex-shrink-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-slate-800">PoliMi</span>
            </div>
            <div className="text-white">
              <h1 className="font-display-lg text-display-lg mb-2">Politecnico di Milano</h1>
              <div className="flex items-center gap-2 text-white/90 font-label-bold text-label-bold">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                <span>Milan, Italy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:pl-12">
        {/* Action Bar Mobile */}
        <div className="md:hidden flex gap-3 mb-6">
          <button onClick={() => navigate('/roadmap')} className="flex-1 bg-primary-container text-on-primary-container font-label-bold py-3 px-4 rounded-xl shadow-sm flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Add to My Journey
          </button>
          <button onClick={() => navigate('/assistant')} className="flex-1 border border-outline-variant text-primary font-label-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2">
            Check Eligibility
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div className="flex overflow-x-auto no-scrollbar border-b border-outline-variant gap-6">
              <button className="pb-3 border-b-2 border-primary text-primary font-label-bold text-label-bold whitespace-nowrap">Overview</button>
              <button className="pb-3 border-b-2 border-transparent text-on-surface-variant font-label-bold text-label-bold whitespace-nowrap hover:text-primary transition-colors">Programs</button>
              <button className="pb-3 border-b-2 border-transparent text-on-surface-variant font-label-bold text-label-bold whitespace-nowrap hover:text-primary transition-colors">Admissions</button>
              <button className="pb-3 border-b-2 border-transparent text-on-surface-variant font-label-bold text-label-bold whitespace-nowrap hover:text-primary transition-colors">Scholarships</button>
              <button className="pb-3 border-b-2 border-transparent text-on-surface-variant font-label-bold text-label-bold whitespace-nowrap hover:text-primary transition-colors">Campus Life</button>
            </div>

            {/* Programs Section */}
            <section className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container">school</span>
                English-Taught Master's
              </h2>
              <div className="space-y-4">
                <div className="p-4 border border-outline-variant rounded-lg hover:border-primary-container transition-colors cursor-pointer group flex items-start justify-between">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 group-hover:text-primary-container transition-colors">Computer Science and Engineering</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">2 Years • Campus Leonardo • Sept Intake</p>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors">chevron_right</span>
                </div>
                <div className="p-4 border border-outline-variant rounded-lg hover:border-primary-container transition-colors cursor-pointer group flex items-start justify-between">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 group-hover:text-primary-container transition-colors">Architecture and Urban Design</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">2 Years • Campus Leonardo • Sept Intake</p>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors">chevron_right</span>
                </div>
                <div className="p-4 border border-outline-variant rounded-lg hover:border-primary-container transition-colors cursor-pointer group flex items-start justify-between">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 group-hover:text-primary-container transition-colors">Mechanical Engineering</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">2 Years • Campus Bovisa • Sept & Feb Intake</p>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors">chevron_right</span>
                </div>
              </div>
            </section>

            {/* Admissions Section */}
            <section className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container">fact_check</span>
                Admissions Checklist (South Asia)
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">check</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-label-bold text-on-surface">Bachelor's Degree</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Relevant field with minimum 3 years duration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">check</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-label-bold text-on-surface">Minimum GPA: 70%+</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">CGPA of 7.0/10 or equivalent from a recognized university.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">check</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-label-bold text-on-surface">English Proficiency</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">IELTS 6.0+ or TOEFL iBT 78+.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-6">
            {/* Action Bar Desktop */}
            <div className="hidden md:flex flex-col gap-3">
              <button onClick={() => navigate('/roadmap')} className="w-full bg-primary-container text-on-primary-container font-label-bold py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">add</span>
                Add to My Journey
              </button>
              <button onClick={() => navigate('/assistant')} className="w-full border border-primary-container text-primary-container hover:bg-primary-fixed transition-colors font-label-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2">
                Check Eligibility
              </button>
            </div>

            {/* Key Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <span className="material-symbols-outlined text-primary-container mb-2 text-[28px]">public</span>
                <div className="font-label-bold text-label-bold text-on-surface-variant">World Ranking</div>
                <div className="font-headline-sm text-headline-sm text-on-surface">#139</div>
                <div className="text-[10px] text-outline mt-1">QS 2024</div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <span className="material-symbols-outlined text-primary-container mb-2 text-[28px]">euro_symbol</span>
                <div className="font-label-bold text-label-bold text-on-surface-variant">Tuition</div>
                <div className="font-headline-sm text-headline-sm text-on-surface">Up to €3,900</div>
                <div className="text-[10px] text-outline mt-1">per year</div>
              </div>
              <div className="col-span-2 bg-surface-container-lowest rounded-xl p-4 border border-outline-variant shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container text-[28px]">calendar_month</span>
                <div>
                  <div className="font-label-bold text-label-bold text-on-surface-variant">Intakes</div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">September & February</div>
                </div>
              </div>
            </div>

            {/* Scholarship Card */}
            <div className="bg-tertiary-fixed rounded-xl p-6 border border-tertiary-fixed-dim shadow-[0_4px_20px_rgba(0,0,0,0.05)] relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-10">
                <span className="material-symbols-outlined text-[100px]">workspace_premium</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-tertiary-fixed mb-2 relative z-10 flex items-center gap-2">
                <span className="material-symbols-outlined">workspace_premium</span>
                Financial Aid
              </h3>
              <p className="font-body-md text-body-md text-on-tertiary-fixed-variant mb-4 relative z-10">
                Eligible for the DSU Regional Scholarship covering tuition, accommodation, and a stipend.
              </p>
              <Link to="/scholarships/1" className="inline-flex items-center gap-1 font-label-bold text-label-bold text-tertiary-container hover:text-tertiary transition-colors relative z-10">
                View DSU Details
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UniversityDetails;