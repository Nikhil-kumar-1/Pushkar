import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiFileText, FiLogOut, FiSettings, FiUser, FiBarChart2, FiVideo, FiImage, FiBook } from "react-icons/fi";
import ArticleForm from "./ArticleForm";
import YoutubeForm from "./YoutubForm";
import Image from "./Image";
import BlogForm from "./BlogForm";
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

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    navigate("/login"); // Redirect to the login page
  };

  // Navigation items - Replaced Analytics with Blog
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <FiHome size={18} /> },
    { id: "articles", label: "Articles", icon: <FiFileText size={18} /> },
    { id: "blog", label: "Blog", icon: <FiBook size={18} /> },
    { id: "youtube", label: "YouTube", icon: <FiVideo size={18} /> },
    { id: "image", label: "Images", icon: <FiImage size={18} /> },
    { id: "users", label: "Users", icon: <FiUser size={18} /> },
    { id: "settings", label: "Settings", icon: <FiSettings size={18} /> },
  ];

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
        className={`sidebar fixed md:relative z-20 w-64 bg-gradient-to-b from-indigo-700 to-indigo-800 shadow-2xl h-full transform ${
          isOpen ? "translate-x-0" : "-translate-x-64 md:translate-x-0"
        } transition-all duration-300 ease-in-out flex flex-col`}
      >
        <div className="p-5 border-b border-indigo-600 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-md">
              <span className="text-indigo-800 font-bold text-lg">A</span>
            </div>
            <h1 className="text-white font-bold text-xl">Admin Panel</h1>
          </div>
          <button 
            className="md:hidden text-white hover:text-indigo-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={20} />
          </button>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                    activePage === item.id 
                      ? "bg-white text-indigo-700 shadow-md" 
                      : "text-indigo-100 hover:bg-indigo-600 hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Logout Button */}
        <div className="p-4 border-t border-indigo-600">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 text-indigo-200 hover:text-white p-3 rounded-lg transition-colors duration-200 hover:bg-indigo-600"
          >
            <FiLogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white shadow-sm p-4">
          <button
            className="menu-button md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <h1 className="text-xl font-semibold text-gray-800 capitalize">
            {navItems.find(item => item.id === activePage)?.label || activePage}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-medium shadow-sm">
              A
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {activePage === "dashboard" && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  { title: "Total Articles", value: "128", change: "+12%", color: "bg-blue-500", icon: <FiFileText className="text-white" /> },
                  { title: "Blog Posts", value: "56", change: "+18%", color: "bg-green-500", icon: <FiBook className="text-white" /> },
                  { title: "Users", value: "542", change: "+8%", color: "bg-purple-500", icon: <FiUser className="text-white" /> },
                  { title: "Page Views", value: "24.8K", change: "+23%", color: "bg-indigo-500", icon: <FiBarChart2 className="text-white" /> },
                  { title: "YouTube Videos", value: "42", change: "+5%", color: "bg-red-500", icon: <FiVideo className="text-white" /> },
                  { title: "Images", value: "367", change: "+15%", color: "bg-yellow-500", icon: <FiImage className="text-white" /> }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                        <h3 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h3>
                        <p className="text-xs font-medium text-green-600 mt-2">{stat.change}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center shadow-md`}>
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Recent Activity Section */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    { action: "Published new article", time: "2 hours ago", user: "Admin" },
                    { action: "Added new blog post", time: "4 hours ago", user: "Content Team" },
                    { action: "Uploaded YouTube video", time: "5 hours ago", user: "Content Team" },
                    { action: "Updated user permissions", time: "Yesterday", user: "Admin" },
                    { action: "Added new images", time: "2 days ago", user: "Design Team" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-indigo-700 text-xs font-bold">{activity.user.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium">{activity.action}</p>
                        <p className="text-gray-500 text-sm">{activity.time} • by {activity.user}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activePage === "articles" && <ArticleForm />}
          {activePage === "blog" && <BlogForm />}
          {activePage === "youtube" && <YoutubeForm />}
          {activePage === "image" && <Image />}
          
          {activePage === "users" && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">User Management</h2>
              <div className="bg-white rounded-xl shadow-md p-6 h-96 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <FiUser className="text-indigo-600 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">User Management Interface</h3>
                <p className="text-gray-500 text-center max-w-md">
                  User management features will be implemented here to manage admin and user accounts.
                </p>
              </div>
            </div>
          )}

          {activePage === "settings" && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">System Settings</h2>
              <div className="bg-white rounded-xl shadow-md p-6 h-96 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <FiSettings className="text-indigo-600 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Configuration Panel</h3>
                <p className="text-gray-500 text-center max-w-md">
                  System settings and configuration options will be available here in the next update.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        /* Custom scrollbar for sidebar */
        .sidebar::-webkit-scrollbar {
          width: 4px;
        }
        
        .sidebar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        .sidebar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        
        .sidebar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}