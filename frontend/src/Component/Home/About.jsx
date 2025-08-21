import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Profile from "../../assets/Profile.webp";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Doctor Image */}
          <motion.div variants={item} className="relative">
            <div className="bg-gradient-to-br from-[#6CCF5F] to-[#1A1F1C] p-1 rounded-2xl shadow-xl">
              <div className="bg-white p-2 rounded-xl overflow-hidden">
                <img
                  src={Profile}
                  alt="Dr. Pushkar Anand Singh"
                  className="w-full h-150 rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -right-6 bg-[#1A1F1C] text-white px-6 py-3 rounded-xl shadow-lg"
            >
              <p className="text-sm">Medical Experience</p>
              <p className="text-2xl font-bold">14+ Years</p>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <div>
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-[#1A1F1C] mb-4"
            >
              Dr. Pushkar Anand Singh
            </motion.h2>

            <motion.div variants={item} className="mb-6">
              <p className="text-xl text-[#6CCF5F] font-medium">
                MBBS, DNB (General Surgery), FMAS, FIAGES
              </p>
              <p className="text-xl text-[#1A1F1C] font-medium">
                General, Laser and Laparoscopic Surgeon
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="text-gray-600 text-lg leading-relaxed mb-6"
            >
              Dr. Pushkar Anand Singh is a distinguished surgeon who combines
              academic excellence, specialized training, and a compassionate
              approach to deliver the highest standard of healthcare.
            </motion.p>

            <motion.p
              variants={item}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              His commitment to research, patient care, and community service
              underscores his role as a respected figure in the medical field.
              Dr. Pushkar remains dedicated to advancing surgical practices
              while extending his expertise to benefit patients and communities
              alike.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => navigate("/about")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#6CCF5F] cursor-pointer text-white px-6 py-3 rounded-full hover:bg-[#5bbd4f] transition shadow-md"
              >
                View Full Profile
              </motion.button>
              <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 cursor-pointer border-[#1A1F1C] text-[#1A1F1C] px-6 py-3 rounded-full hover:bg-gray-100 transition"
              >
                Book Consultation
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          <motion.div
            variants={item}
            className="bg-[#f9fdf9] p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl text-[#6CCF5F] font-bold mb-3">
              10,000+
            </div>
            <h3 className="text-xl font-semibold mb-2">Successful Surgeries</h3>
            <p className="text-gray-600">Performed with precision and care</p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-[#f9fdf9] p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl text-[#6CCF5F] font-bold mb-3">50+</div>
            <h3 className="text-xl font-semibold mb-2">Research Papers</h3>
            <p className="text-gray-600">Published in medical journals</p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-[#f9fdf9] p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl text-[#6CCF5F] font-bold mb-3">100%</div>
            <h3 className="text-xl font-semibold mb-2">Patient Satisfaction</h3>
            <p className="text-gray-600">Dedicated to exceptional care</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
