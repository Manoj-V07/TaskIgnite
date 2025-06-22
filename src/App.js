import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import Profile from './components/Profile';
import Pricelist from './components/Pricelist';
import Bill from './components/Pricelist/Bill';

function App() {
  return (
    <div className="text-gray-900 dark:text bg-white dark:bg-gray-900 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} /> {/* 👈 This is your home route */}
            <Route path="report" element={<Reports />} />
            <Route path="profile" element={<Profile />} />
            <Route path="pricelist" element={<Pricelist />} />
            <Route path="bill" element={<Bill />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
