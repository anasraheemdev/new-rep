import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-margin-mobile antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main className="w-full max-w-[420px] flex flex-col items-center">
        {/* Brand Header */}
        <div className="flex flex-col items-center justify-center gap-sm mb-lg">
          <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-on-primary-container text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              school
            </span>
          </div>
          <span className="font-headline-sm text-headline-sm text-primary tracking-tight">Mentora</span>
        </div>

        {/* Login Card */}
        <div className="w-full bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/40 p-lg md:p-xl flex flex-col gap-lg">
          {/* Heading */}
          <div className="text-center space-y-xs">
            <h1 className="font-headline-md text-headline-md text-on-surface">Welcome back to your journey.</h1>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-md" onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-bold text-label-bold text-on-surface-variant" htmlFor="email">Email</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">
                  mail
                </span>
                <input
                  className="w-full h-12 pl-[44px] pr-md rounded-lg border border-outline-variant bg-surface-container-lowest font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  id="email"
                  placeholder="name@example.com"
                  required
                  type="email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-xs">
              <div className="flex items-center justify-between">
                <label className="font-label-bold text-label-bold text-on-surface-variant" htmlFor="password">Password</label>
                <button type="button" onClick={() => alert('Forgot password flow triggered')} className="font-label-bold text-label-bold text-primary hover:text-primary-container transition-colors">Forgot Password?</button>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">
                  lock
                </span>
                <input
                  className="w-full h-12 pl-[44px] pr-md rounded-lg border border-outline-variant bg-surface-container-lowest font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  id="password"
                  placeholder="••••••••"
                  required
                  type="password"
                />
              </div>
            </div>

            {/* Primary Action */}
            <button
              className="w-full h-12 mt-sm bg-primary text-on-primary rounded-lg font-label-bold text-label-bold shadow-sm hover:shadow-md hover:bg-on-primary-fixed-variant transition-all active:scale-[0.98]"
              type="submit"
            >
              Sign In as Student
            </button>
            <button
              className="w-full h-12 mt-sm bg-surface-container-high text-on-surface rounded-lg font-label-bold text-label-bold shadow-sm hover:shadow-md hover:bg-surface-dim transition-all active:scale-[0.98]"
              type="button"
              onClick={() => navigate('/admin/dashboard')}
            >
              Sign In as Admin
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-md">
            <div className="flex-1 h-[1px] bg-surface-variant"></div>
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">or continue with</span>
            <div className="flex-1 h-[1px] bg-surface-variant"></div>
          </div>

          {/* Social Action */}
          <button
            className="w-full h-12 bg-surface-container-lowest border border-outline-variant text-on-surface rounded-lg font-label-bold text-label-bold flex items-center justify-center gap-sm hover:bg-surface-container-low transition-colors"
            type="button"
            onClick={() => alert('Google login triggered')}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            Sign in with Google
          </button>
        </div>

        {/* Secondary Action */}
        <p className="mt-lg font-body-md text-body-md text-on-surface-variant">
          Don't have an account?{' '}
          <Link to="/signup" className="font-label-bold text-label-bold text-primary hover:text-primary-container transition-colors">Sign up</Link>
        </p>
      </main>
    </div>
  );
};

export default Login;