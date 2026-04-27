import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import AdminTopBar from '../components/AdminTopBar';

const AdminLayout = () => {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex overflow-hidden">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-h-screen md:ml-64 w-full overflow-hidden">
        <AdminTopBar />
        <div className="flex-1 overflow-y-auto mt-16 bg-background">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;