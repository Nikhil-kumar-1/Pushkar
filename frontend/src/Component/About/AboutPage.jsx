import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import DrImage from "../../assets/Profile.webp";

const AboutPage = () => {
  const stats = [
    { value: "14+", label: "Years of Experience" },
    { value: "10,000+", label: "Successful Surgeries" },
    { value: "50+", label: "Research Papers Published" },
    { value: "98%", label: "Patient Satisfaction Rate" },
  ];

  const education = [
    {
      degree: "MBBS",
      institution: "All India Institute of Medical Sciences, New Delhi",
      year: "1995-2000",
    },
    {
      degree: "DNB (General Surgery)",
      institution: "Sir Ganga Ram Hospital, New Delhi",
      year: "2002-2005",
    },
    {
      degree: "FMAS",
      institution: "Minimal Access Surgery Training",
      year: "2007",
    },
    {
      degree: "FIAGES",
      institution: "Indian Association of Gastrointestinal Endo-Surgeons",
      year: "2009",
    },
  ];

  const specializations = [
    "Laparoscopic Surgery",
    "Laser Surgery",
    "Hernia Repair",
    "Gallbladder Surgery",
    "Piles Treatment",
    "Fistula Surgery",
    "Appendix Surgery",
    "Lipoma Removal",
  ];

  const philosophies = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Precision",
      description:
        "Utilizing advanced surgical techniques and technology to ensure millimeter-perfect procedures with optimal outcomes.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Compassion",
      description:
        "Treating each patient with empathy, respect, and personalized attention throughout their healthcare journey.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "Continuously adopting and refining cutting-edge surgical methods to provide the most effective treatments available.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          About Dr. Pushkar Anand Singh | Renowned Laparoscopic Surgeon in Delhi
        </title>
        <meta
          name="description"
          content="Dr. Pushkar Anand Singh is a highly experienced MBBS, DNB surgeon specializing in laparoscopic and laser surgeries with 14+ years of expertise in Delhi."
        />
        <meta
          name="keywords"
          content="Dr. Pushkar Singh, Laparoscopic Surgeon Delhi, Laser Surgery Specialist, Hernia Surgery, Gallbladder Stone Treatment, Piles Laser Treatment"
        />
        <meta
          property="og:title"
          content="About Dr. Pushkar Anand Singh | Top Laparoscopic Surgeon"
        />
        <meta
          property="og:description"
          content="Meet Dr. Pushkar Anand Singh, a distinguished laparoscopic and laser surgery specialist with 14+ years of surgical experience in Delhi."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.drpushkarsingh.com/about"
        />
        <meta property="og:image" content={DrImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.drpushkarsingh.com/about" />
      </Helmet>

      {/* Hero Section with proper spacing from navbar */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 h-[90vh] min-h-[600px] max-h-[800px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Medical Background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#1A1F1C]/70"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Meet{" "}
              <span className="text-[#6CCF5F]">Dr. Pushkar Anand Singh</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Renowned laparoscopic and laser surgery specialist with over two
              decades of surgical excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(108, 207, 95, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6CCF5F] cursor-pointer text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                Book Consultation
              </motion.button>
              <motion.button
                onClick={() => navigate("/services")}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 cursor-pointer border-white text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                View Services
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scrolling Indicator */}
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
          onClick={() => {
            const nextSection = document.getElementById("about-content");
            nextSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </section>

      {/* Main Content Section with ID for scrolling */}
      <section
        id="about-content"
        className="py-20 bg-gradient-to-b from-[#f9fdf9] to-[#e8f5e6]"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Doctor Introduction Section */}
          <div className="overflow-hidden grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F1C] mb-6">
                About <span className="text-[#6CCF5F]">Dr. Pushkar</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Dr. Pushkar Anand Singh is a distinguished surgical specialist
                with extensive expertise in minimally invasive procedures. With
                qualifications including MBBS, DNB in General Surgery, FMAS, and
                FIAGES, Dr. Singh combines academic excellence with specialized
                training to deliver the highest standard of healthcare.
              </p>
              <motion.button
                onClick={() => {
                  const element = document.getElementById("biography");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#6CCF5F] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#5bbd4f] transition"
              >
                View Full Biography
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-3 bg-gradient-to-br from-[#6CCF5F] to-[#1A1F1C]  rounded-2xl shadow-xl">
                <img
                  src={DrImage}
                  alt="Dr. Pushkar Anand Singh - Laparoscopic Surgeon"
                  className="w-full h-100 rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-0 -right-0 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <p className="text-sm text-gray-500">Medical Experience</p>
                <p className="text-xl font-bold text-[#1A1F1C]">14+ Years</p>
              </div>
            </motion.div>
          </div>

          {/* Rest of your content sections remain the same */}
          {/* ... (Stats, Biography, Philosophy, CTA sections) ... */}
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                whileHover={{ y: -5 }}
              >
                <p className="text-4xl font-bold text-[#6CCF5F] mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Biography Section */}
          <div id="biography" className="grid md:grid-cols-3 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <h2 className="text-3xl font-bold text-[#1A1F1C] mb-6">
                Professional Biography
              </h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  Dr. Pushkar Anand Singh is a distinguished surgical specialist
                  with extensive expertise in minimally invasive procedures.
                  With qualifications including MBBS, DNB in General Surgery,
                  FMAS, and FIAGES, Dr. Singh combines academic excellence with
                  specialized training to deliver the highest standard of
                  healthcare.
                </p>
                <p>
                  His surgical journey began at the prestigious All India
                  Institute of Medical Sciences (AIIMS), New Delhi, followed by
                  specialized training in laparoscopic techniques. Dr. Singh has
                  since performed over 10,000 successful surgeries, establishing
                  himself as a leading authority in advanced laparoscopic and
                  laser procedures.
                </p>
                <p>
                  Beyond clinical practice, Dr. Singh is committed to advancing
                  surgical knowledge through research and education. He has
                  authored numerous publications in peer-reviewed journals and
                  regularly participates in national and international surgical
                  conferences as a keynote speaker and faculty member.
                </p>
                <p>
                  Dr. Singh's patient-centric approach emphasizes personalized
                  care, ensuring each patient receives tailored treatment plans
                  and compassionate support throughout their surgical journey.
                  His dedication to surgical innovation and exceptional patient
                  outcomes has earned him recognition as one of Delhi's top
                  laparoscopic surgeons.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#1A1F1C] mb-4">
                  Education & Training
                </h3>
                <ul className="space-y-4">
                  {education.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#6CCF5F]"
                    >
                      <p className="font-semibold text-[#1A1F1C]">
                        {item.degree}
                      </p>
                      <p className="text-gray-600">{item.institution}</p>
                      <p className="text-sm text-gray-500">{item.year}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1A1F1C] mb-4">
                  Specializations
                </h3>
                <ul className="grid grid-cols-2 gap-3">
                  {specializations.map((specialization, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-white p-3 rounded-lg shadow-xs text-center text-sm font-medium hover:bg-[#6CCF5F]/10 transition"
                    >
                      {specialization}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1A1F1C] rounded-3xl p-8 md:p-12 text-white mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              Medical Philosophy
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {philosophies.map((philosophy, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4 text-center"
                >
                  <div className="w-12 h-12 bg-[#6CCF5F] rounded-full flex items-center justify-center mx-auto">
                    {philosophy.icon}
                  </div>
                  <h3 className="text-xl font-bold">{philosophy.title}</h3>
                  <p className="text-gray-300">{philosophy.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-[#1A1F1C] mb-6">
              Ready to Discuss Your Surgical Options?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Schedule a consultation with Dr. Pushkar Anand Singh to receive
              personalized surgical care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 5px 15px rgba(108, 207, 95, 0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#6CCF5F] cursor-pointer text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#5bbd4f] transition"
              >
                Book Appointment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 cursor-pointer border-[#1A1F1C] text-[#1A1F1C] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Call Now: +91 92051 11477
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
