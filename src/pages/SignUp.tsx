import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex w-full bg-background text-on-background antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Left Panel: Inspirational Image (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-surface-variant overflow-hidden flex-col justify-end">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj0NJd7WGz0bVuwQmS8P3sDP-ogL9e9rK7Vaf0gIFn0nuc5YJpr8kw17MDZNjnuWyoLKI6awz3lxCP8UpaSo8mUI0xtKMS9y350eahEc2cH_CVMXLO4p-V3mKRfarKDN7toMyEdkDycWTYvVH4MNWyk945-MR1WRAlWlMStftyLqKY2xI73kj-Up1RRcrL2X3YSGXk7sk4FKovy2h9p7f6T2K8Qqfz1ugaLO9G7ssfL8Z2G5seziTjy6cPLpq7gQ0DyY-4v4_9dL_f"
          alt="Inspirational Study Scene"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001a41]/80 via-[#001a41]/30 to-transparent"></div>

        {/* Inspirational Copy */}
        <div className="relative z-10 p-12 lg:p-16 max-w-xl text-white">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md mb-6">
            <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
              flight_takeoff
            </span>
          </div>
          <h2 className="font-display-lg text-display-lg text-white mb-4">Your European Journey Starts Here.</h2>
          <p className="font-body-lg text-body-lg text-white/90">
            Join thousands of ambitious students who have successfully navigated their path to top European universities with Mentora's expert guidance.
          </p>
        </div>
      </div>

      {/* Right Panel: Sign Up Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-margin-mobile py-12 sm:px-12 lg:px-24 xl:px-32 bg-background">
        <div className="w-full max-w-[480px] mx-auto">
          {/* Brand Header */}
          <div className="flex items-center gap-2 mb-10 lg:hidden">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-on-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                school
              </span>
            </div>
            <span className="font-headline-md text-headline-md text-primary font-bold tracking-tight">Mentora</span>
          </div>

          {/* Form Header */}
          <div className="mb-8">
            <h1 className="font-display-lg text-[32px] leading-[40px] font-bold text-on-surface mb-2">Create your account</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Step 1 of your tailored relocation journey.</p>
          </div>

          {/* Form Container */}
          <form className="space-y-6" onSubmit={handleSignUp}>
            {/* Basic Info Section */}
            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block font-label-bold text-label-bold text-on-surface mb-xs" htmlFor="fullName">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-[20px]">person</span>
                  </div>
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                    id="fullName"
                    placeholder="e.g. Ananya Sharma"
                    type="text"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block font-label-bold text-label-bold text-on-surface mb-xs" htmlFor="email">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-[20px]">mail</span>
                  </div>
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block font-label-bold text-label-bold text-on-surface mb-xs" htmlFor="password">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-[20px]">lock</span>
                  </div>
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                    id="password"
                    placeholder="Create a strong password"
                    type="password"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="relative py-2">
              <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-surface-variant"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-background font-label-sm text-label-sm text-outline">Personalization</span>
              </div>
            </div>

            {/* Personalization Section */}
            <div className="space-y-5 bg-surface-container-lowest p-5 rounded-xl border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              {/* Destination Dropdown */}
              <div>
                <label className="block font-label-bold text-label-bold text-on-surface mb-xs" htmlFor="destination">Where do you want to study?</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-[20px]">public</span>
                  </div>
                  <select
                    className="w-full pl-10 pr-10 py-3 bg-surface border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer transition-all"
                    id="destination"
                    defaultValue=""
                    required
                  >
                    <option disabled value="">Select a country</option>
                    <option value="germany">Germany</option>
                    <option value="france">France</option>
                    <option value="italy">Italy</option>
                    <option value="netherlands">Netherlands</option>
                    <option value="spain">Spain</option>
                    <option value="other">Undecided / Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline-variant">expand_more</span>
                  </div>
                </div>
              </div>

              {/* Degree Level Cards */}
              <div>
                <label className="block font-label-bold text-label-bold text-on-surface mb-sm">Current Degree Target</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="relative cursor-pointer group">
                    <input className="peer sr-only" name="degree" type="radio" value="bachelor" required />
                    <div className="p-3 border border-outline-variant rounded-lg bg-surface text-center transition-all peer-checked:border-primary peer-checked:bg-primary-fixed peer-checked:shadow-sm group-hover:bg-surface-container-low">
                      <span className="block font-label-bold text-label-bold text-on-surface peer-checked:text-on-primary-fixed-variant">Bachelor's</span>
                    </div>
                    <div className="absolute top-2 right-2 hidden peer-checked:block">
                      <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                  </label>
                  <label className="relative cursor-pointer group">
                    <input className="peer sr-only" name="degree" type="radio" value="master" required />
                    <div className="p-3 border border-outline-variant rounded-lg bg-surface text-center transition-all peer-checked:border-primary peer-checked:bg-primary-fixed peer-checked:shadow-sm group-hover:bg-surface-container-low">
                      <span className="block font-label-bold text-label-bold text-on-surface peer-checked:text-on-primary-fixed-variant">Master's</span>
                    </div>
                    <div className="absolute top-2 right-2 hidden peer-checked:block">
                      <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 space-y-4">
              <button
                className="w-full bg-primary text-on-primary font-label-bold text-label-bold py-3.5 rounded-xl shadow-[0_4px_14px_rgba(0,91,191,0.25)] hover:bg-on-primary-fixed-variant hover:-translate-y-[1px] transition-all flex items-center justify-center gap-2"
                type="submit"
              >
                Create Account
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              <div className="relative flex items-center py-1">
                <div className="flex-grow border-t border-surface-variant"></div>
                <span className="flex-shrink-0 mx-4 font-label-sm text-label-sm text-outline">or</span>
                <div className="flex-grow border-t border-surface-variant"></div>
              </div>

              <button
                className="w-full bg-surface-container-lowest text-on-surface border border-outline-variant font-label-bold text-label-bold py-3.5 rounded-xl hover:bg-surface-container-low hover:shadow-sm transition-all flex items-center justify-center gap-3"
                type="button"
                onClick={() => alert('Google signup triggered')}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                Sign up with Google
              </button>
            </div>
          </form>

          {/* Footer Link */}
          <p className="text-center font-body-md text-body-md text-on-surface-variant mt-8">
            Already have an account? <Link to="/login" className="text-primary font-label-bold hover:text-on-primary-fixed-variant transition-colors">Log in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;