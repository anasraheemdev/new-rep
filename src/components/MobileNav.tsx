import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center px-4 py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t z-50 border-gray-100 dark:border-gray-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] font-['Plus_Jakarta_Sans'] text-[10px] font-medium md:hidden rounded-t-2xl">
      <Link
        to="/dashboard"
        className={`flex flex-col items-center justify-center transition-transform duration-150 p-2 rounded-xl w-16 ${
          location.pathname === '/dashboard'
            ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
            : 'text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-300 active:scale-90'
        }`}
      >
        <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: location.pathname === '/dashboard' ? "'FILL' 1" : "'FILL' 0" }}>home</span>
        <span>Home</span>
      </Link>
      <Link
        to="/roadmap"
        className={`flex flex-col items-center justify-center transition-transform duration-150 p-2 rounded-xl w-16 ${
          location.pathname === '/roadmap'
            ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
            : 'text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-300 active:scale-90'
        }`}
      >
        <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: location.pathname === '/roadmap' ? "'FILL' 1" : "'FILL' 0" }}>map</span>
        <span>Journey</span>
      </Link>
      <Link
        to="/universities"
        className={`flex flex-col items-center justify-center transition-transform duration-150 p-2 rounded-xl w-16 ${
          location.pathname.startsWith('/universities')
            ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
            : 'text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-300 active:scale-90'
        }`}
      >
        <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: location.pathname.startsWith('/universities') ? "'FILL' 1" : "'FILL' 0" }}>school</span>
        <span>Unis</span>
      </Link>
      <Link
        to="/finance"
        className={`flex flex-col items-center justify-center transition-transform duration-150 p-2 rounded-xl w-16 ${
          location.pathname === '/finance'
            ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
            : 'text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-300 active:scale-90'
        }`}
      >
        <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: location.pathname === '/finance' ? "'FILL' 1" : "'FILL' 0" }}>account_balance</span>
        <span>Finance</span>
      </Link>
      <Link
        to="/settings"
        className={`flex flex-col items-center justify-center transition-transform duration-150 p-2 rounded-xl w-16 ${
          location.pathname === '/settings'
            ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
            : 'text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-300 active:scale-90'
        }`}
      >
        <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: location.pathname === '/settings' ? "'FILL' 1" : "'FILL' 0" }}>settings</span>
        <span>Settings</span>
      </Link>
    </nav>
  );
};

export default MobileNav;