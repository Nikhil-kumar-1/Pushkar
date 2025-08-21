import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DocImg from "../../assets/Doctor.webp";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const phone = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  const floatingElements = {
    hidden: { opacity: 0 },
    show: (i) => ({
      opacity: 1,
      y: [0, -15, 0],
      transition: {
        delay: i * 0.3,
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-[#f9fdf9] to-[#e8f5e6] overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Left Side */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-bold text-[#1A1F1C] leading-tight mb-4"
          >
            Dr. Pushkar Anand Singh
          </motion.h1>

          <motion.div variants={item} className="mb-6">
            <p className="text-xl md:text-2xl text-[#6CCF5F] font-medium">
              MBBS, DNB (General Surgery)
            </p>
            <p className="text-xl md:text-2xl text-[#6CCF5F] font-medium">
              FMAS, FIAGES
            </p>
            <p className="text-xl md:text-2xl text-[#1A1F1C] font-medium mt-2">
              General, Laser & Laparoscopic Surgeon
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-4 text-gray-600 max-w-lg text-lg leading-relaxed"
          >
            Renowned surgical specialist with expertise in minimally invasive
            procedures. Providing compassionate care and cutting-edge surgical
            solutions for optimal patient outcomes.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-6 mt-8"
          >
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1A1F1C] cursor-pointer text-white px-8 py-3 rounded-full hover:bg-[#333] transition shadow-lg text-lg font-medium"
            >
              Book Appointment
            </motion.button>
            <div className="flex items-center gap-3 text-gray-600">
              <span className="text-[#6CCF5F] text-2xl">★</span>
              <div>
                <p className="font-medium">Trusted by 10,000+ Patients</p>
                <p className="text-sm">14+ Years of Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side (Phone Mockup) */}
        <motion.div
          variants={phone}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
          className="flex justify-center relative"
        >
          {/* Floating background elements */}
          <motion.div
            custom={0}
            variants={floatingElements}
            animate={isMounted ? "show" : "hidden"}
            className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-[#e0f7de] opacity-70 z-0"
          />
          <motion.div
            custom={1}
            variants={floatingElements}
            animate={isMounted ? "show" : "hidden"}
            className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#e0f7de] opacity-70 z-0"
          />

          {/* Doctor Profile */}
          <div className="relative z-10">
            <div className="w-[350px] h-[450px] bg-white rounded-[2.5rem] shadow-2xl relative overflow-hidden border-8 border-white">
              {/* Screen bezel */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-white rounded-b-lg z-20"></div>

              {/* Doctor Image */}
              <img
                src={DocImg}
                alt="Dr. Pushkar Anand Singh"
                className="w-full h-full object-cover"
              />

              {/* Experience Badge */}
              <motion.div
                custom={1}
                variants={floatingElements}
                animate={isMounted ? "show" : "hidden"}
                className="absolute bottom-6 right-4 bg-white p-3 rounded-xl shadow-lg w-36"
              >
                <p className="text-xs text-gray-500">Experience</p>
                <p className="text-lg font-bold text-[#1A1F1C]">14+ Years</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating animated elements in background */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-[#6CCF5F] opacity-10 -z-10"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-[#6CCF5F] opacity-10 -z-10"
      />
    </section>
  );
}
