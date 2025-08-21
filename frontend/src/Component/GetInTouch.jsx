import { motion } from "framer-motion";
import { useState } from "react";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const mapHover = {
    hover: { scale: 1.03, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#f9fdf9] to-[#e8f5e6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F1C] mb-4">
            Get in <span className="text-[#6CCF5F]">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or need to schedule an appointment? Reach out to us today.
          </p>
        </motion.div>

        {/* Contact Container */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl"
        >
          {/* Contact Form Side */}
          <motion.div 
            variants={item}
            className="p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6CCF5F] focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6CCF5F] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6CCF5F] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6CCF5F] focus:border-transparent"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-[#6CCF5F] text-white py-3 px-6 rounded-lg font-semibold text-lg shadow-md hover:bg-[#5bbd4f] transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Map Side */}
          <motion.div 
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative h-full min-h-[400px]"
          >
            <motion.div
              variants={mapHover}
              whileHover="hover"
              className="absolute inset-0 bg-gray-200 overflow-hidden"
            >
              {/* Embedded Google Map - Replace with your actual embed code */}
             
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7739001078694!2d77.4320773!3d28.606559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef65e1ca4115%3A0x57cd54fcbd59af05!2sDr.%20Pushkar%20Anand%20Singh!5e0!3m2!1sen!2sin!4v1755515254126!5m2!1sen!2sin" width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="absolute inset-0"></iframe>

              {/* Map Overlay Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs"
              >
                <h3 className="font-bold text-[#1A1F1C] mb-2">Our Clinic</h3>
                <p className="text-gray-600 text-sm">
                  123 Medical Drive, Health City<br />
                  New Delhi, DL 110017<br />
                  Phone: +91 98765 43210
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        
      </div>
    </section>
  );
}