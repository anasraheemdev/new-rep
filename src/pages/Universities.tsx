import React from 'react';
import { Link } from 'react-router-dom';

const Universities: React.FC = () => {
  return (
    <main className="p-4 md:p-8 flex-1 overflow-y-auto max-w-7xl mx-auto w-full pb-32 md:pb-8">
      <div className="mb-8 md:hidden">
        <h1 className="text-headline-md text-on-surface mb-2">Explore Universities</h1>
        <p className="text-body-md text-on-surface-variant">Find the right program to launch your career in Europe.</p>
      </div>

      {/* Filters Section (Top Bar Style) */}
      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-4 mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 w-full relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline-variant bg-surface-bright focus:ring-2 focus:ring-primary focus:border-primary transition-all text-body-md text-on-surface placeholder:text-outline/70"
              placeholder="Search universities or programs..."
              type="text"
            />
          </div>
          <div className="grid grid-cols-2 md:flex gap-3 w-full md:w-auto">
            <select onChange={(e) => alert(`Country filter changed to ${e.target.value}`)} className="py-3 px-4 rounded-lg border border-outline-variant bg-surface-bright focus:ring-2 focus:ring-primary focus:border-primary transition-all text-body-md text-on-surface appearance-none pr-10 relative">
              <option value="">Country</option>
              <option value="de">Germany</option>
              <option value="it">Italy</option>
              <option value="fr">France</option>
            </select>
            <select onChange={(e) => alert(`Degree filter changed to ${e.target.value}`)} className="py-3 px-4 rounded-lg border border-outline-variant bg-surface-bright focus:ring-2 focus:ring-primary focus:border-primary transition-all text-body-md text-on-surface appearance-none pr-10">
              <option value="">Degree</option>
              <option value="bachelor">Bachelor's</option>
              <option value="master">Master's</option>
            </select>
            <select onChange={(e) => alert(`Budget filter changed to ${e.target.value}`)} className="py-3 px-4 rounded-lg border border-outline-variant bg-surface-bright focus:ring-2 focus:ring-primary focus:border-primary transition-all text-body-md text-on-surface appearance-none pr-10">
              <option value="">Budget</option>
              <option value="0">€0 (Public)</option>
              <option value="5k">&lt; €5,000/yr</option>
              <option value="10k">&lt; €10,000/yr</option>
            </select>
          </div>
        </div>
      </div>

      {/* University Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col group relative">
          <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-tertiary-container flex items-center gap-1 shadow-sm border border-tertiary-container/20">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            Verified
          </div>
          <div className="h-32 bg-surface-container relative overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzRKP3TirCiOFWCGCpLi_QVVVgidk_bCk6QjLDUxBSVpNz3QJUl07bYnHkrxbO5bl0s5q2qov99U9qutfnRtGU9SVa4LHSI0TyAD1-ZdQSa3e-BEdx2m07g4lQ8je4m6Q4lRmEGRjZ8xMQcQmisRLsVmLU2k4hgGXl6okOeVpBPOLfSwYwbo2kt3-7UP6aJOOXmxHpDM_04twzQFE2-Ry5yPMuxGDzeb6ydU1Q7c4h74Mq4sS4_7kT03BkWSAHEw59iDASxJT4MOLf"
              alt="Technical University Munich Campus"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-center gap-4 mb-4 relative -mt-10">
              <div className="w-16 h-16 bg-white rounded-lg p-2 shadow-sm border border-outline-variant/20 z-10 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-primary">school</span>
              </div>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 line-clamp-1">Technical University Munich</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mb-4">
              <span className="material-symbols-outlined text-[18px]">location_on</span> Munich, Germany
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6 bg-surface-bright p-3 rounded-lg border border-outline-variant/20">
              <div>
                <p className="font-label-sm text-label-sm text-outline mb-0.5">Tuition (per sem)</p>
                <p className="font-label-bold text-label-bold text-on-surface flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">euro</span> ~€150
                </p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-outline mb-0.5">IELTS Min</p>
                <p className="font-label-bold text-label-bold text-on-surface flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">translate</span> 6.5
                </p>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-outline-variant/20">
              <Link to="/universities/1" className="flex items-center justify-center w-full py-2.5 bg-primary-container text-on-primary-container font-label-bold text-label-bold rounded-lg hover:bg-primary transition-colors shadow-sm">
                View Programs & Apply
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col group relative">
          <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-tertiary-container flex items-center gap-1 shadow-sm border border-tertiary-container/20">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            Verified
          </div>
          <div className="h-32 bg-surface-container relative overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvTc9EJu-zvRgsph2PTXuJrzA_V230NDK-70JYsRsxzLknsoHaQ_ZQUTN0Zab0ycNg2oyIwlhYJbwcpFUfncfwlbbCKP-7O4qMyML5o0XkRuTNMV3ySdAL36yILIGh9QFeG8WVcRdVzO3tswFW3VAD5nnfuXHCkz-gS2Cv43sZ0owzVT6mURCOzpD3sdsoYXHjQzdn9jEZ9in3WM93acmZG498QF7V_VvB6agUXVK6Qi8D_U-XLShtzGQX7jL9SHCX87tN7ypJrb7K"
              alt="Politecnico di Milano Campus"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-center gap-4 mb-4 relative -mt-10">
              <div className="w-16 h-16 bg-white rounded-lg p-2 shadow-sm border border-outline-variant/20 z-10 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-primary">account_balance</span>
              </div>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 line-clamp-1">Politecnico di Milano</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mb-4">
              <span className="material-symbols-outlined text-[18px]">location_on</span> Milan, Italy
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6 bg-surface-bright p-3 rounded-lg border border-outline-variant/20">
              <div>
                <p className="font-label-sm text-label-sm text-outline mb-0.5">Tuition (per yr)</p>
                <p className="font-label-bold text-label-bold text-on-surface flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">euro</span> ~€3,900
                </p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-outline mb-0.5">IELTS Min</p>
                <p className="font-label-bold text-label-bold text-on-surface flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">translate</span> 6.0
                </p>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-outline-variant/20">
              <Link to="/universities/2" className="flex items-center justify-center w-full py-2.5 bg-primary-container text-on-primary-container font-label-bold text-label-bold rounded-lg hover:bg-primary transition-colors shadow-sm">
                View Programs & Apply
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col group relative">
          <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-tertiary-container flex items-center gap-1 shadow-sm border border-tertiary-container/20">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            Verified
          </div>
          <div className="h-32 bg-surface-container relative overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYixz2FAP-VzPmUkd4lxkJE5fkV9WuSc_5OKy0eac9KUlVfFL3-y17C8W-4VN3FO8fbppOP8B16lKzTJPzdb88eud4rSYFIvA_LTMqlNe_3OP9enKQUK0B-hdAMOeLcT_jDW8BUuEEf3k4_U2reZKzXIJk5tJLm4bvwO9OqRhaHLCd6LBegE92H88nytu6v8DIkEtOBE8em8XOry0IXeu3-aJEa7tGDFIXqHfiEG5klGKbdBHc3cvwApniDraEyFLalI9jZ2msj3XY"
              alt="RWTH Aachen Campus"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-center gap-4 mb-4 relative -mt-10">
              <div className="w-16 h-16 bg-white rounded-lg p-2 shadow-sm border border-outline-variant/20 z-10 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-primary">domain</span>
              </div>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 line-clamp-1">RWTH Aachen</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mb-4">
              <span className="material-symbols-outlined text-[18px]">location_on</span> Aachen, Germany
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6 bg-surface-bright p-3 rounded-lg border border-outline-variant/20">
              <div>
                <p className="font-label-sm text-label-sm text-outline mb-0.5">Tuition (per sem)</p>
                <p className="font-label-bold text-label-bold text-on-surface flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">euro</span> ~€300
                </p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-outline mb-0.5">IELTS Min</p>
                <p className="font-label-bold text-label-bold text-on-surface flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">translate</span> 6.5
                </p>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-outline-variant/20">
              <Link to="/universities/3" className="flex items-center justify-center w-full py-2.5 bg-primary-container text-on-primary-container font-label-bold text-label-bold rounded-lg hover:bg-primary transition-colors shadow-sm">
                View Programs & Apply
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Universities;