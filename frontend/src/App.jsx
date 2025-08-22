import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Component/Home/Navbar";
import HOME from "./Component/Home/Home.jsx";
import Footer from "./Component/Home/Footer/Footer";
import HeroSection from "./Component/Home/Hero";
import AboutPage from "./Component/About/AboutPage";
import ServicePage from "./Component/Services/ServicePage";
import ContactPage from "./Component/Contact/ContactPage";
import AchievementPage from "./Component/Achievement/Achievement.jsx";
import ScrollToTop from "./Component/ScrollToTop.jsx";
import AdminDashboard from "./Component/Admin/AdminDashboard.jsx";
import AllVideos from "./Component/AllVideos/AllVideos.jsx";

const AppContent = () => {
  const location = useLocation();

  // check agar route "/admin" se start ho raha hai
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/hero" element={<HeroSection />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/achievements" element={<AchievementPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/all-videos" element={<AllVideos />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
