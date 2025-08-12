import React from 'react';
import { FiActivity, FiAlertCircle, FiCamera, FiClock, FiHardDrive, FiHome, FiSettings, FiUsers } from 'react-icons/fi';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <FiCamera className="text-2xl text-primary mr-2" />
            <h1 className="text-xl font-bold text-gray-900">CCTV Pro</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
              <FiClock />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 relative">
              <FiAlertCircle />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-sm font-medium">AD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Active Cameras Card */}
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Active Cameras</p>
                  <p className="text-3xl font-bold mt-1">3/4</p>
                </div>
                <div className="p-3 rounded-lg bg-green-50 text-green-600">
                  <FiCamera className="text-xl" />
                </div>
              </div>
            </div>
            
            {/* Alerts Card */}
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Today's Alerts</p>
                  <p className="text-3xl font-bold mt-1">12</p>
                </div>
                <div className="p-3 rounded-lg bg-red-50 text-red-600">
                  <FiAlertCircle className="text-xl" />
                </div>
              </div>
            </div>
            
            {/* Storage Card */}
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Storage Used</p>
                  <p className="text-3xl font-bold mt-1">65%</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                  <FiHardDrive className="text-xl" />
                </div>
              </div>
            </div>
            
            {/* Uptime Card */}
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">System Uptime</p>
                  <p className="text-3xl font-bold mt-1">99.8%</p>
                </div>
                <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
                  <FiActivity className="text-xl" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Camera Grid */}
          <div className="card mb-6">
            <h2 className="text-lg font-semibold mb-4">Camera Feeds</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-200 h-40 flex items-center justify-center relative">
                    <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded bg-black bg-opacity-50 text-white">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                        Live
                      </span>
                    </div>
                    <FiCamera className="text-4xl text-gray-400" />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Camera {item}</h3>
                    <p className="text-xs text-gray-500">Last activity: 2 mins ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2023 CCTV Pro. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-700">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-700">Terms of Service</Link>
              <Link to="/contact" className="text-sm text-gray-500 hover:text-gray-700">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;