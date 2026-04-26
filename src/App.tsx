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

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

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
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
