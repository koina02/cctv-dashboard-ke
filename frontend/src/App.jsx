import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <main className="flex-1">
        <Routes>
          {/* Auth Pages */}
          <Route path="/" element={
            <div className="flex flex-col items-center justify-center min-h-screen p-6">
              <Login />
            </div>
          } />
          <Route path="/register" element={
            <div className="flex flex-col items-center justify-center min-h-screen p-6">
              <Register />
            </div>
          } />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      {/* Global Footer (exclude on dashboard) */}
      <Routes>
        <Route path="/dashboard" element={null} />
        <Route path="*" element={
          <footer className="bg-gray-800 text-gray-400 py-4 text-center text-sm">
            © {new Date().getFullYear()} CCTV Pro. All rights reserved.
          </footer>
        } />
      </Routes>
    </div>
  );
};

export default App;


