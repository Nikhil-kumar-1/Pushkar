import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../../assets/logo.webp"

const MotionLink = motion(Link);

export default function Navbar() {
  const number = "919205111477";
  const message = "Hello! I want to book an appointment.";
  const whatsappLink = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu
  const handleNavClick = () => {
    if (open) setOpen(false);
  };

  return (
    <motion.nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ height: "80px" }} // Fixed height for navbar
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-full">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={Logo}   // Your logo path here
              alt="Dr. Pushkar Anand Logo" 
              className="h-30 w-auto object-contain" // Increased logo size
              style={{ maxHeight: "300px" }} // Limits logo height
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center h-full">
          <MotionLink
            to="/"
            className="relative px-3 py-2 text-[#1A1F1C] hover:text-[#6CCF5F] transition-colors font-medium flex items-center h-full"
            whileHover={{ scale: 1.05 }}
          >
            Home
            <motion.span
              className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#6CCF5F]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </MotionLink>

          <MotionLink
            to="/about"
            className="relative px-3 py-2 text-[#1A1F1C] hover:text-[#6CCF5F] transition-colors font-medium flex items-center h-full"
            whileHover={{ scale: 1.05 }}
          >
            About
            <motion.span
              className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#6CCF5F]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </MotionLink>

          <MotionLink
            to="/services"
            className="relative px-3 py-2 text-[#1A1F1C] hover:text-[#6CCF5F] transition-colors font-medium flex items-center h-full"
            whileHover={{ scale: 1.05 }}
          >
            Services
            <motion.span
              className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#6CCF5F]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </MotionLink>

          <MotionLink
            to="/achievements"
            className="relative px-3 py-2 text-[#1A1F1C] hover:text-[#6CCF5F] transition-colors font-medium flex items-center h-full"
            whileHover={{ scale: 1.05 }}
          >
            Achievements
            <motion.span
              className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#6CCF5F]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </MotionLink>

           <MotionLink
            to="/gallery"
            className="relative px-3 py-2 text-[#1A1F1C] hover:text-[#6CCF5F] transition-colors font-medium flex items-center h-full"
            whileHover={{ scale: 1.05 }}
          >
            Gallery
            <motion.span
              className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#6CCF5F]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </MotionLink>

          <MotionLink
            to="/blogs"
            className="relative px-3 py-2 text-[#1A1F1C] hover:text-[#6CCF5F] transition-colors font-medium flex items-center h-full"
            whileHover={{ scale: 1.05 }}
          >
            Blogs
            <motion.span
              className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#6CCF5F]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </MotionLink>

          <MotionLink
            to="/contact"
            className="relative px-3 py-2 text-[#1A1F1C] hover:text-[#6CCF5F] transition-colors font-medium flex items-center h-full"
            whileHover={{ scale: 1.05 }}
          >
            Contact
            <motion.span
              className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#6CCF5F]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </MotionLink>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] cursor-pointer text-white px-4 py-2 rounded-full hover:bg-[#1ebe5d] transition-all font-medium shadow-md"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(37, 211, 102, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp size={20} />
            Chat on WhatsApp
          </motion.a>
        </div>

        {/* Mobile Toggle Button */}
        <motion.button
      type="button"
      className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1F1C]"
      whileTap={{ scale: 0.9 }}
      onClick={() => setOpen(!open)}
      aria-label={open ? "Close main menu" : "Open main menu"}
      aria-expanded={open}
      aria-controls="mobile-nav"   // the id of the menu <nav> you’re toggling
    >
      {open ? (
        <X size={28} className="text-[#1A1F1C]" aria-hidden="true" />
      ) : (
        <Menu size={28} className="text-[#1A1F1C]" aria-hidden="true" />
      )}
    </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-4 flex flex-col">
              <MotionLink
                to="/"
                className="block py-3 px-4 text-[#1A1F1C] hover:text-[#6CCF5F] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={handleNavClick}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                Home
              </MotionLink>

              <MotionLink
                to="/about"
                className="block py-3 px-4 text-[#1A1F1C] hover:text-[#6CCF5F] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={handleNavClick}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                About
              </MotionLink>

              <MotionLink
                to="/services"
                className="block py-3 px-4 text-[#1A1F1C] hover:text-[#6CCF5F] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={handleNavClick}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                Services
              </MotionLink>

              <MotionLink
                to="/achievements"
                className="block py-3 px-4 text-[#1A1F1C] hover:text-[#6CCF5F] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={handleNavClick}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                Achievements
              </MotionLink>

              <MotionLink
                to="/blogs"
                className="block py-3 px-4 text-[#1A1F1C] hover:text-[#6CCF5F] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={handleNavClick}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                Blogs
              </MotionLink>

              <MotionLink
                to="/contact"
                className="block py-3 px-4 text-[#1A1F1C] hover:text-[#6CCF5F] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={handleNavClick}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                Contact
              </MotionLink>

              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] cursor-pointer text-white px-4 py-3 rounded-full hover:bg-[#1ebe5d] transition-all font-medium shadow-md"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(37, 211, 102, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp size={20} />
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}