import React from 'react';
import { useLocation } from 'react-router-dom';

const AdminTopBar: React.FC = () => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/admin/dashboard': return 'Overview';
      case '/admin/students': return 'Student Directory';
      case '/admin/documents': return 'Document Review Queue';
      case '/admin/content': return 'Content Engine Overview';
      case '/admin/manual-entry': return 'Manual Entry';
      case '/admin/finance': return 'Finance Review Queue';
      case '/admin/marketing': return 'Campaign Management';
      case '/admin/analytics': return 'Platform Analytics';
      case '/admin/counselors': return 'Counselor Management';
      case '/admin/pipeline': return 'Pipeline Monitor';
      default: return 'Admin Console';
    }
  };

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] z-30 h-16 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center px-8 text-blue-600 dark:text-blue-400 font-plus-jakarta-sans text-base focus-within:ring-2 focus-within:ring-blue-500/20">
      <div className="flex-1 flex items-center gap-4">
        <span className="md:hidden font-headline-md text-primary font-extrabold tracking-tight">Mentora</span>
        <h2 className="hidden lg:block font-headline-sm text-on-surface ml-4">{getPageTitle()}</h2>
        <div className="relative w-64 focus-within:ring-2 focus-within:ring-blue-500/20 rounded-full hidden sm:block ml-auto lg:ml-0">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-outline-variant border rounded-full font-body-md text-body-md text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary-container transition-colors" placeholder="Search..." type="text" onChange={() => console.log('Admin search')} />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={() => alert('Admin Notifications')} className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-2 transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <button onClick={() => alert('Admin Help')} className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-2 transition-colors">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
        <img onClick={() => alert('Admin Profile')} alt="Admin Profile Avatar" className="w-9 h-9 rounded-full border border-outline-variant object-cover ml-2 cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHg_BVoBf-IIyllQjnpnEXEoTddsa7Cr16DJRe5rYTB7Xfz9KCXaCDas1DVgtRjj20L_18N1hstRxYIEyqfvxgDnEDP-nqShG_P4VpabKp6l6NwQDC2MBJsQQ5FLheGtYGqJk1HvO50gMw9XwmZ08YXa5McOlARpKWc1gClWAxwbXZBCaaBqpIy05i2tq1F08S_0ukNGLX4TP9fCXRy5ORYD43zoz8BiLS5el3XhXjC7km2yylY0xbGBIDrXXZTnOhyS4iydxkKSY5" />
      </div>
    </header>
  );
};

export default AdminTopBar;