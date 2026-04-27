import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';
import TopBar from '../components/TopBar';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-background text-on-background">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64 relative min-h-screen pb-20 md:pb-0">
        <TopBar />
        <Outlet />
      </div>
      <MobileNav />
    </div>
  );
};

export default MainLayout;