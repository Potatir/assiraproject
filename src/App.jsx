import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import Sleep from './pages/dashboard/Sleep';
import Stress from './pages/dashboard/Stress';
import Activity from './pages/dashboard/Activity';
import Reports from './pages/dashboard/Reports';
import Settings from './pages/dashboard/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="sleep" element={<Sleep />} />
          <Route path="stress" element={<Stress />} />
          <Route path="activity" element={<Activity />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
