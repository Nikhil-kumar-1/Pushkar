import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logorecreate.webp";

export default function Footer() {
  const services = [
    "Laparoscopic Surgery for Gall Bladder Stone",
    "Laparoscopic Surgery for Hernia",
    "Laparoscopic Surgery for Appendicitis",
    "Laparoscopic Surgery for Pelvic Tumour/Cyst",
    "Laparoscopic Surgery for Fibroid",
    "Laser Surgery for Piles",
    "Laser Surgery for Fistula",
    "Laser Surgery for Fissure",
    "Laser Surgery for Pilonidal Sinus",
    "Laser Surgery for Circumcision",
    "Laser Surgery for Cyst",
    "Laser Surgery for Small Tumour",
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Gallery", path: "/gallery" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:drpushkaranandsingh@gmail.com";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9205111477", "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919205111477";
  };

  return (
    <footer className="bg-[#1A1F1C] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Clinic Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/" className="flex items-center">
                <img 
                  src={Logo}
                  alt="Dr. Pushkar Anand Logo" 
                  className="h-20 w-auto object-contain"
                />
              </Link>
            </motion.div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Advanced laparoscopic and laser surgical care with 16 years of
              expertise. Providing cutting-edge medical solutions with compassion and excellence.
            </p>
            
            <div className="flex items-center space-x-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleWhatsAppClick}
                className="cursor-pointer bg-[#25D366] p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePhoneClick}
                className="bg-[#6CCF5F] cursor-pointer p-3 rounded-full text-white shadow-md hover:shadow-lg transition-shadow"
                aria-label="Call"
              >
                <Phone className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleEmailClick}
                className="bg-gray-600 cursor-pointer p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Services Menu */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  className="space-y-6"
>
  <h3 className="text-xl font-bold text-[#6CCF5F] border-b border-gray-700 pb-2">
    Our Services
  </h3>

  <ul
    className="
      space-y-3
      max-h-80 
      overflow-y-auto 
      pr-2
      [scrollbar-width:none]          /* Firefox */
      [-ms-overflow-style:none]       /* IE/Edge */
      [&::-webkit-scrollbar]:hidden   /* Chrome, Safari */
    "
  >
    {services.map((service, index) => (
      <li key={index}>
        <Link to="/services">
          <motion.div
            whileHover={{ x: 5, color: "#6CCF5F" }}
            className="text-gray-300 hover:text-[#6CCF5F] transition cursor-pointer text-sm py-1 flex items-start"
          >
            <span className="text-[#6CCF5F] mr-2">•</span>
            {service}
          </motion.div>
        </Link>
      </li>
    ))}
  </ul>
</motion.div>


          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-[#6CCF5F] border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.div whileHover={{ x: 5, color: "#6CCF5F" }}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-[#6CCF5F] transition block py-1.5 text-sm"
                    >
                      <span className="text-[#6CCF5F] mr-2">→</span>
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-[#6CCF5F] border-b border-gray-700 pb-2">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#6CCF5F] mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Shop No. LGA 2 & 3 Galaxy Diamond Plaza Sector-4 Greater Noida
                  West, Extension, Noida, Greater Noida, Uttar Pradesh 201009
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#6CCF5F] flex-shrink-0" />
                <motion.div
                  whileHover={{ color: "#6CCF5F" }}
                  className="text-gray-300 hover:text-[#6CCF5F] transition cursor-pointer text-sm"
                  onClick={handlePhoneClick}
                >
                  +91 92051 11477
                </motion.div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#6CCF5F] flex-shrink-0" />
                <motion.div
                  whileHover={{ color: "#6CCF5F" }}
                  className="text-gray-300 hover:text-[#6CCF5F] transition cursor-pointer text-sm"
                  onClick={handleEmailClick}
                >
                  drpushkaranandsingh@gmail.com
                </motion.div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#6CCF5F] flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Mon-Sat: 8:00 AM - 6:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            
           
          </motion.div>
        </div>

        {/* Copyright and Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dr. Pushkar Anand Singh Clinic. All Rights Reserved.
          </p>
          
          <div className="flex space-x-5">
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="https://www.facebook.com/drpushkaranand/"
              className="text-gray-400 hover:text-[#6CCF5F] transition"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </motion.a>
           

<motion.a
  whileHover={{ scale: 1.2, color: "#6CCF5F" }}
  href="https://in.pinterest.com/DrPushkarAnandSingh/"
  className="text-gray-400 hover:text-[#6CCF5F] transition"
  aria-label="Pinterest"
>
  {/* Pinterest icon */}
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.04 2C6.6 2 4 5.34 4 9.03c0 2.19.83 4.13 2.61 4.85.29.12.55 0 .64-.31.06-.21.2-.74.26-.97.08-.31.05-.41-.18-.68-.51-.6-.84-1.37-.84-2.46 0-3.17 2.37-6.02 6.17-6.02 3.36 0 5.21 2.05 5.21 4.8 0 3.61-1.6 6.66-3.98 6.66-1.31 0-2.29-1.09-1.98-2.42.38-1.6 1.12-3.33 1.12-4.49 0-1.03-.55-1.88-1.68-1.88-1.34 0-2.42 1.39-2.42 3.24 0 1.18.4 1.98.4 1.98l-1.59 6.73c-.47 2.01-.07 4.47-.04 4.72.02.16.23.2.33.08.14-.19 1.93-2.4 2.54-4.6.17-.64.98-3.96.98-3.96.48.91 1.9 1.71 3.41 1.71 4.47 0 7.49-4.17 7.49-8.74C20.01 5.02 16.68 2 12.04 2z" />
  </svg>
</motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="https://www.instagram.com/drpushkaranand/?hl=en"
              className="text-gray-400 hover:text-[#6CCF5F] transition"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="#"
              className="text-gray-400 hover:text-[#6CCF5F] transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}