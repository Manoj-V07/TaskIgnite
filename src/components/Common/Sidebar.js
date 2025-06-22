import Logo from '../../assets/logo.jpg'; 
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
    const navigate = useNavigate();

  return (
    <div>
      <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="mt-5" onClick={() => navigate('/')}>
            <a href="#" className="flex items-center ps-2.5 mb-5">
              <img src={Logo} className="h-6 me-3 sm:h-7" alt="Profile Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NAME</span>
            </a>
          </div>
          <div className="mt-20">
            <nav>
              <ul className="space-y-2 font-medium">
                <li>
                  <NavLink to="/" end className={({ isActive }) =>`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group text-gray-900 dark:text-white ${isActive ? "bg-gray-200 dark:bg-gray-900" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-800 dark:text-white">
                      <path d="M3.172 10.828L12 2l8.828 8.828a4 4 0 0 1 1.172 2.828V20a2 2 0 0 1-2 2h-5v-6h-4v6H4a2 2 0 0 1-2-2v-6.344a4 4 0 0 1 1.172-2.828z" />
                    </svg>
                    <span className="ms-3">Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pricelist" className={({ isActive }) => `flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group text-gray-900 dark:text-white ${isActive ? "bg-gray-200 dark:bg-gray-900" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-800 dark:text-white">
                      <path d="M6 5a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2h-2.26c-1.038 0-1.874.52-2.464 1.2H18a1 1 0 1 1 0 2h-6.72a4.496 4.496 0 0 1 2.144 2.376H18a1 1 0 1 1 0 2h-3.26c-.562 1.308-1.852 2.282-3.378 2.552l4.668 4.67a1 1 0 1 1-1.414 1.414l-6.5-6.5a1 1 0 0 1 .707-1.707H10a2.5 2.5 0 0 0 0-5H6Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">Price List</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/report" className={({ isActive }) => `flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group text-gray-900 dark:text-white ${isActive ? "bg-gray-200 dark:bg-gray-900" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-800 dark:text-white">
                      <path d="M3 3a1 1 0 1 1 0 2h1v14h16V5h1a1 1 0 1 1 0-2H3zm5 6a1 1 0 0 1 1 1v7H7v-7a1 1 0 0 1 1-1zm5-4a1 1 0 0 1 1 1v11h-2V6a1 1 0 0 1 1-1zm5 7a1 1 0 0 1 1 1v4h-2v-4a1 1 0 0 1 1-1z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">Reports</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/profile" className={({ isActive }) =>`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group text-gray-900 dark:text-white ${isActive ? "bg-gray-200 dark:bg-gray-900" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-800 dark:text-white">
                      <path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 12c3.87 0 7 2.69 7 6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1c0-3.31 3.13-6 7-6z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    </div>
  );
};