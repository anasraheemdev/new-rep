import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AiAssistant from './pages/AiAssistant';
import DocumentsHub from './pages/DocumentsHub';
import Universities from './pages/Universities';
import UniversityDetails from './pages/UniversityDetails';
import ApplicationSteps from './pages/ApplicationSteps';
import Roadmap from './pages/Roadmap';
import Scholarships from './pages/Scholarships';
import ScholarshipDetails from './pages/ScholarshipDetails';
import VisaGuideItaly from './pages/VisaGuideItaly';
import VisaGuideGermany from './pages/VisaGuideGermany';
import Settings from './pages/Settings';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import OnboardingDestination from './pages/OnboardingDestination';
import OnboardingAcademic from './pages/OnboardingAcademic';
import OnboardingProgress from './pages/OnboardingProgress';
import OnboardingFinancial from './pages/OnboardingFinancial';
import OnboardingAspirations from './pages/OnboardingAspirations';
import UniversityComparison from './pages/UniversityComparison';
import VisaInterview from './pages/VisaInterview';
import FinanceBlockedAccount from './pages/FinanceBlockedAccount';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/onboarding/destination" element={<OnboardingDestination />} />
        <Route path="/onboarding/academic" element={<OnboardingAcademic />} />
        <Route path="/onboarding/progress" element={<OnboardingProgress />} />
        <Route path="/onboarding/financial" element={<OnboardingFinancial />} />
        <Route path="/onboarding/aspirations" element={<OnboardingAspirations />} />

        {/* Routes with Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assistant" element={<AiAssistant />} />
          <Route path="/documents" element={<DocumentsHub />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/universities/:id" element={<UniversityDetails />} />
          <Route path="/application-steps" element={<ApplicationSteps />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/scholarships/:id" element={<ScholarshipDetails />} />
          <Route path="/visa-italy" element={<VisaGuideItaly />} />
          <Route path="/visa-germany" element={<VisaGuideGermany />} />
          <Route path="/visa-interview" element={<VisaInterview />} />
          <Route path="/finance" element={<FinanceBlockedAccount />} />
          <Route path="/compare" element={<UniversityComparison />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
