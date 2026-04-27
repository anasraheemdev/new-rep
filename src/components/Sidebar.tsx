import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { path: '/roadmap', label: 'My Journey', icon: 'map' },
  { path: '/universities', label: 'Universities', icon: 'school' },
  { path: '/compare', label: 'Compare Unis', icon: 'compare_arrows' },
  { path: '/scholarships', label: 'Scholarships', icon: 'payments' },
  { path: '/application-steps', label: 'Application Steps', icon: 'assignment' },
  { path: '/documents', label: 'Documents', icon: 'description' },
  { path: '/visa-italy', label: 'Visa Guide', icon: 'receipt_long' },
  { path: '/visa-interview', label: 'Visa Prep', icon: 'assignment_ind' },
  { path: '/finance', label: 'Finance', icon: 'account_balance' },
  { path: '/assistant', label: 'AI Assistant', icon: 'smart_toy' },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="hidden md:flex flex-col gap-2 p-4 fixed left-0 top-0 h-full z-50 w-64 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 font-['Plus_Jakarta_Sans'] text-sm font-medium">
      <div className="px-4 py-6 mb-4">
        <h1 className="text-2xl font-black text-blue-600 dark:text-blue-400">Mentora</h1>
        <p className="text-xs text-slate-500 mt-1">Digital Concierge</p>
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer active:translate-x-1 duration-150 ${
                isActive
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200 dark:border-slate-800 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="mt-auto flex flex-col gap-1 border-t border-slate-200 dark:border-slate-800 pt-4">
        <Link
          to="/settings"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer active:translate-x-1 duration-150 ${
             location.pathname === '/settings'
             ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200 dark:border-slate-800 font-bold'
             : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
          }`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: location.pathname === '/settings' ? "'FILL' 1" : "'FILL' 0" }}>settings</span>
          <span>Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;