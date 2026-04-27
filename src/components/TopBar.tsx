import React from 'react';
import { useLocation } from 'react-router-dom';

const TopBar: React.FC = () => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard': return 'Dashboard';
      case '/roadmap': return 'My Journey';
      case '/universities': return 'Universities';
      case '/scholarships': return 'Scholarships';
      case '/application-steps': return 'Application Steps';
      case '/documents': return 'Documents Hub';
      case '/visa-italy': return 'Italy Visa Guide';
      case '/visa-germany': return 'Germany Visa Guide';
      case '/assistant': return 'AI Assistant';
      case '/settings': return 'Settings';
      default:
        if (location.pathname.startsWith('/universities/')) return 'University Details';
        if (location.pathname.startsWith('/scholarships/')) return 'Scholarship Details';
        return 'Mentora';
    }
  };

  return (
    <header className="flex justify-between items-center h-16 px-6 w-full z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm docked full-width top-0 sticky font-['Plus_Jakarta_Sans'] antialiased">
      <div className="flex items-center gap-2">
        <span className="md:hidden text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">Mentora</span>
        <h2 className="hidden md:block font-headline-sm text-headline-sm text-on-surface">{getPageTitle()}</h2>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={() => alert('Search clicked')} className="text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors active:scale-95 duration-200 p-2 rounded-full hidden md:block">
          <span className="material-symbols-outlined">search</span>
        </button>
        <button onClick={() => alert('Notifications clicked')} className="text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors active:scale-95 duration-200 p-2 rounded-full">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div onClick={() => alert('Profile clicked')} className="h-8 w-8 rounded-full bg-slate-200 border border-slate-300 overflow-hidden cursor-pointer shadow-sm">
           <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh5pReFo24a2xO4_KrvKbuShF8iOVNiO5BwtH_zkC0uG_bOFzpZ8uJK20wqkH3EWmmvEaUqN48G04czGob4yIH07SdqQejuVm65Zix69TLs9UWknTyxK7BDgvjD7AIOuFmhFeLT1UgnXoXykz5OZcY48Wz7THLkneuIpD5wrIG_RWjPQ0gHzwq7QxGSdN_piN5QeVEoUTk3F7aPHxnUTFuVnSEr_DJiEpt7BVYJc_LZp_YBGJt3uKvNFFrLRBDZWH8fnFVBpf8W-M0" />
        </div>
      </div>
    </header>
  );
};

export default TopBar;