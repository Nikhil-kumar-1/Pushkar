import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiFileText, FiLogOut, FiSettings, FiUser, FiBarChart2 } from "react-icons/fi";
import ArticleForm from "./ArticleForm";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const navigate = useNavigate();
  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // On desktop, sidebar should be open
      // On mobile, sidebar should be closed
      if (!mobile) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobile && isOpen && !e.target.closest(".sidebar") && !e.target.closest(".menu-button")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, isOpen]);

  // Function to handle menu item clicks
  const handleMenuItemClick = (page) => {
    setActivePage(page);
    if (isMobile) {
      setIsOpen(false); // Close sidebar after selection on mobile
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Mobile overlay */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`sidebar fixed md:relative z-20 w-64 bg-gradient-to-b from-indigo-800 to-indigo-900 shadow-2xl h-full transform ${
          isOpen ? "translate-x-0" : "-translate-x-64 md:translate-x-0"
        } transition-all duration-300 ease-in-out flex flex-col`}
      >
        <div className="p-5 border-b border-indigo-700 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <span className="text-indigo-800 font-bold">A</span>
            </div>
            <h1 className="text-white font-bold text-lg">Admin Panel</h1>
          </div>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            <li
              className={`cursor-pointer p-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${
                activePage === "/" 
                  ? "bg-indigo-700 text-white shadow-lg" 
                  : "text-indigo-200 hover:bg-indigo-700 hover:text-white"
              }`}
              onClick={() => navigate("/")}
            >
              <FiHome size={18} />
              <span>Home</span>
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${
                activePage === "dashboard" 
                  ? "bg-indigo-700 text-white shadow-lg" 
                  : "text-indigo-200 hover:bg-indigo-700 hover:text-white"
              }`}
              onClick={() => handleMenuItemClick("dashboard")}
            >
              <FiHome size={18} />
              <span>Dashboard</span>
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${
                activePage === "articles" 
                  ? "bg-indigo-700 text-white shadow-lg" 
                  : "text-indigo-200 hover:bg-indigo-700 hover:text-white"
              }`}
              onClick={() => handleMenuItemClick("articles")}
            >
              <FiFileText size={18} />
              <span>Articles</span>
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${
                activePage === "analytics" 
                  ? "bg-indigo-700 text-white shadow-lg" 
                  : "text-indigo-200 hover:bg-indigo-700 hover:text-white"
              }`}
              onClick={() => handleMenuItemClick("analytics")}
            >
              <FiBarChart2 size={18} />
              <span>Analytics</span>
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${
                activePage === "users" 
                  ? "bg-indigo-700 text-white shadow-lg" 
                  : "text-indigo-200 hover:bg-indigo-700 hover:text-white"
              }`}
              onClick={() => handleMenuItemClick("users")}
            >
              <FiUser size={18} />
              <span>Users</span>
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${
                activePage === "settings" 
                  ? "bg-indigo-700 text-white shadow-lg" 
                  : "text-indigo-200 hover:bg-indigo-700 hover:text-white"
              }`}
              onClick={() => handleMenuItemClick("settings")}
            >
              <FiSettings size={18} />
              <span>Settings</span>
            </li>
          </ul>
        </div>
        
        <div className="p-4 border-t border-indigo-700">
          <button className="w-full flex items-center space-x-3 text-indigo-200 hover:text-white p-3 rounded-lg transition-colors duration-200">
            <FiLogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <div className="flex items-center justify-between bg-white shadow-sm p-4">
          <button
            className="menu-button md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <h1 className="text-xl font-semibold text-gray-800 capitalize">{activePage}</h1>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-medium">
              A
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activePage === "dashboard" && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome to Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Stats Cards */}
                {[
                  { title: "Total Articles", value: "128", color: "bg-blue-500" },
                  { title: "Users", value: "542", color: "bg-green-500" },
                  { title: "Page Views", value: "24.8K", color: "bg-purple-500" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-500 text-sm">{stat.title}</p>
                        <h3 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h3>
                      </div>
                      <div className={`w-12 h-12 rounded-full ${stat.color} bg-opacity-20 flex items-center justify-center`}>
                        <div className={`w-8 h-8 rounded-full ${stat.color} flex items-center justify-center`}>
                          <span className="text-white text-xs">+12%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activePage === "articles" && <ArticleForm />}
          {activePage === "analytics" && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Analytics</h2>
              <div className="bg-white rounded-xl shadow-md p-5 h-64 flex items-center justify-center">
                <p className="text-gray-500">Analytics charts will be displayed here</p>
              </div>
            </div>
          )}
          {activePage === "users" && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">User Management</h2>
              <div className="bg-white rounded-xl shadow-md p-5 h-64 flex items-center justify-center">
                <p className="text-gray-500">User management interface will be displayed here</p>
              </div>
            </div>
          )}
          {activePage === "settings" && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
              <div className="bg-white rounded-xl shadow-md p-5 h-64 flex items-center justify-center">
                <p className="text-gray-500">Settings options will be displayed here</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}