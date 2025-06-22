import { Sidebar } from '../components/Common/Sidebar';
import { Header } from '../components/Common/Header';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation(); 

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4">
          <Outlet key={location.pathname} />
        </main>
      </div>
    </div>
  );
};

export default Layout;
