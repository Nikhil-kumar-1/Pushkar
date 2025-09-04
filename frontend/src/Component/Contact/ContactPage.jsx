import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";
import { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  
  const navigate = useNavigate();

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-[#6CCF5F]" />,
      title: "Phone",
      description: "+91 92051 11477",
      link: "tel:+919205111477",
    },
    {
      icon: <Mail className="w-6 h-6 text-[#6CCF5F]" />,
      title: "Email",
      description: "drpushkaranandsingh@gmail.com",
      link: "mailto:drpushkaranandsingh@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#6CCF5F]" />,
      title: "Clinic Address",
      description:
        "Shop No. LGA 2 & 3 Galaxy Diamond Plaza Sector-4 Greater Noida West, Extension, Noida, Greater Noida, Uttar Pradesh 201009",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#6CCF5F]" />,
      title: "Working Hours",
      description: "Mon-Sat: 9:00 AM - 6:00 PM",
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#6CCF5F]" />,
      title: "Appointments",
      description: "Available on prior booking",
    },
  ];

   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      "service_eqfl4xl",
      "template_fbcjgxc",
      form.current,
      "smPZST4i7DGoyeYwM"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Dr. Pushkar Anand Singh | Book Consultation in Delhi NCR
        </title>
        <meta
          name="description"
          content="Reach Dr. Pushkar Anand Singh for consultations. Visit Galaxy Diamond Plaza clinic, Sector 4 Greater Noida West, or call +91 92051 11477 for appointments and expert care."
        />
        <meta name="keywords" content="Contact Dr Pushkar Anand Singh, Appointment Booking, Clinic Location, Phone Number, Email, Noida Clinic Address, Greater Noida Surgery Center"/>

        <meta
          property="og:title"
          content="Advanced Surgical Services | Dr. Pushkar Anand Singh"
        />
        <meta
          property="og:description"
          content="Minimally invasive laparoscopic and laser surgical treatments with faster recovery times and better outcomes"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.drpushkarsingh.com/contact"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwYXJvc2NvcGljJTIwc3VyZ2VyeXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Advanced Surgical Services | Dr. Pushkar Anand Singh"
        />
        <meta
          name="twitter:description"
          content="Minimally invasive surgical treatments with faster recovery times"
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwYXJvc2NvcGljJTIwc3VyZ2VyeXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://www.drpushkarsingh.com/contact" />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] min-h-[400px] flex items-center bg-[#1A1F1C]"
      >
        <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1681487748082-839c7c0ee0c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center w-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Contact <span className="text-[#6CCF5F]">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch to schedule your consultation or ask any questions
              about our services
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(108, 207, 95, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6CCF5F] cursor-pointer text-white px-5 py-2 rounded-full text-lg font-semibold"
              >
                Book Consultation
              </motion.button>
              <motion.button
                onClick={() => navigate("/services")}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 cursor-pointer border-white text-white px-5 py-2 rounded-full text-lg font-semibold"
              >
                View Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        className="py-20 bg-gradient-to-b from-[#f9fdf9] to-[#e8f5e6]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 overflow-hidden">
            {/* Contact Information */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#1A1F1C] mb-8">
                Our <span className="text-[#6CCF5F]">Contact</span> Details
              </h2>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <div className="p-2 bg-[#6CCF5F]/10 rounded-full">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1A1F1C]">
                        {method.title}
                      </h3>
                      {method.link ? (
                        <a
                          href={method.link}
                          className="text-gray-600 hover:text-[#6CCF5F] transition"
                        >
                          {method.description}
                        </a>
                      ) : (
                        <p className="text-gray-600">{method.description}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="mt-10 bg-[#FFF8F0] border-l-4 border-[#FFA500] p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-[#1A1F1C] mb-2">
                  Emergency Cases
                </h3>
                <p className="text-gray-600 mb-4">
                  For urgent medical attention outside working hours:
                </p>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#FFA500]" />
                  <a
                    href="tel:+919205111477"
                    className="text-lg font-semibold text-[#1A1F1C] hover:text-[#6CCF5F] transition"
                  >
                    +91 92051 11477
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold cursor-pointer text-[#1A1F1C] mb-8">
                Send Us a <span className="text-[#6CCF5F]">Message</span>
              </h2>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                  onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6CCF5F] focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                  onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6CCF5F] focus:border-transparent"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                  onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6CCF5F] focus:border-transparent"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div>
                  
                  
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                  onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6CCF5F] focus:border-transparent"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#6CCF5F] text-white px-6 py-4 rounded-lg font-semibold shadow-md hover:bg-[#5bbd4f] transition"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 rounded-2xl overflow-hidden shadow-xl"
          >
            <h2 className="text-3xl font-bold text-[#1A1F1C] mb-8 text-center">
              Our <span className="text-[#6CCF5F]">Location</span>
            </h2>
            <div className="h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7739001078694!2d77.4320773!3d28.606559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef65e1ca4115%3A0x57cd54fcbd59af05!2sDr.%20Pushkar%20Anand%20Singh!5e0!3m2!1sen!2sin!4v1755515254126!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Clinic Location Map"
              ></iframe>
            </div>
            <div className="bg-white p-6 text-center">
              <p className="text-gray-600">
                <MapPin className="inline-block w-5 h-5 text-[#6CCF5F] mr-2" />
                Shop No. LGA 2 & 3 Galaxy Diamond Plaza Sector-4 Greater Noida
                West, Extension, Noida, Greater Noida, Uttar Pradesh 201009
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold text-[#1A1F1C] mb-6">
              Ready to Book Your{" "}
              <span className="text-[#6CCF5F]">Appointment</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Contact us today to schedule your consultation with Dr. Pushkar
              Anand Singh
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#6CCF5F] cursor-pointer text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#5bbd4f] transition"
              >
                Book Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => (window.location.href = "tel:+919205111477")}
                className="border-2 cursor-pointer border-[#1A1F1C] text-[#1A1F1C] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Call: +91 92051 11477
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default ContactPage;