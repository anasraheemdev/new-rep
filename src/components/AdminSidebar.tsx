import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/admin/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { path: '/admin/students', label: 'Students', icon: 'group' },
  { path: '/admin/applications', label: 'Applications', icon: 'school' },
  { path: '/admin/documents', label: 'Documents', icon: 'description' },
  { path: '/admin/finance', label: 'Finance', icon: 'payments' },
  { path: '/admin/support', label: 'Support', icon: 'confirmation_number' },
  { path: '/admin/analytics', label: 'Analytics', icon: 'analytics' },
  { path: '/admin/marketing', label: 'Marketing', icon: 'campaign' },
  { path: '/admin/counselors', label: 'Counselors', icon: 'diversity_3' },
  { path: '/admin/pipeline', label: 'Pipeline Monitor', icon: 'data_thresholding' },
];

const AdminSidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="bg-white dark:bg-gray-900 h-screen w-64 border-r fixed left-0 top-0 border-r border-gray-200 dark:border-gray-800 shadow-sm flex flex-col h-full py-6 z-40 hidden md:flex">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>admin_panel_settings</span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400 font-headline-sm text-headline-sm">Mentora Admin</h1>
          <p className="font-label-sm text-label-sm text-on-surface-variant">Management Portal</p>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ease-in-out font-plus-jakarta-sans text-sm font-medium ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 font-bold'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600'
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="px-6 mt-auto border-t border-outline-variant pt-4 space-y-4">
        <button onClick={() => alert('Invite Counselor triggered')} className="w-full bg-primary-container text-on-primary-container font-label-bold text-label-bold py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center gap-2 mb-2">
          <span className="material-symbols-outlined">person_add</span>
          Invite Counselor
        </button>
        <div className="space-y-1">
          <button onClick={() => alert('Admin Settings triggered')} className="w-full flex items-center gap-3 px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 transition-colors duration-200 ease-in-out font-plus-jakarta-sans text-sm font-medium rounded-lg">
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </button>
          <Link to="/login" className="flex items-center gap-3 px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 transition-colors duration-200 ease-in-out font-plus-jakarta-sans text-sm font-medium rounded-lg">
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;