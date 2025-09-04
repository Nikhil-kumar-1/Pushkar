import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import DrImage from "../../assets/Profile.webp";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  // Professional statistics
  const stats = [
    { value: "16+", label: "Years of Experience" },
    { value: "1000+", label: "Surgeries in Remote Areas" },
    { value: "5000+", label: "Successful Procedures" },
    { value: "100%", label: "Patient Satisfaction Rate" },
  ];

  // Education and certifications
  const education = [
    {
      degree: "MBBS",
      institution: "Dr. D. Y. Patil Medical College, Pune",
      year: "2009",
    },
    {
      degree: "DNB (General Surgery)",
      institution: "National Board of Examination, New Delhi",
      year: "2013",
    },
  ];

  const fellowships = [
    {
      degree: "FIAGES",
      institution: "Indian Association of Gastrointestinal Endo-Surgeons",
      description: "Fellowship in Minimal Access Surgery"
    },
    {
      degree: "FMAS",
      institution: "Association of Minimal Access Surgeons of India",
      description: "Fellowship in Minimal Access Surgery"
    },
    {
      degree: "Fellowship in Endoscopy",
      institution: "World Laparoscopic Hospital",
      description: "Fellowship in Upper and Lower GI Endoscopy"
    },
    {
      degree: "Fellowship in Hernia Surgery",
      institution: "Max Institute of Minimal Access Surgery, New Delhi",
      description: "Fellowship in Laparoscopic Hernia Surgery"
    },
  ];

  const certifications = [
    "40th Laparoscopy-Hernia Surgery Course at AIMS, New Delhi",
    "Thesis on 'Clinical and Bacteriological Course of Infection in Diabetic Foot Ulcers'"
  ];

  // Work experience
  const experience = [
    {
      position: "Consultant",
      hospital: "Shri Ram Singh Hospital, Sec-70, Noida",
      duration: "2018 - Present"
    },
    {
      position: "Consultant",
      hospital: "Laxmi Hospital, Bulandshehar",
      duration: "2017 - 2024"
    },
    {
      position: "Consultant",
      hospital: "Metro Multispecialty Hospital, Noida",
      duration: "2017 - 2018"
    },
    {
      position: "Consultant",
      hospital: "Mahveer Arogya Hospital, Patna",
      duration: "2014 - 2017"
    },
    {
      position: "Consultant",
      hospital: "Jaypee Hospital, Noida",
      duration: "2017"
    },
    {
      position: "Senior Resident",
      hospital: "Jaipur Golden Hospital, Rohini, Delhi",
      duration: "2013 - 2014"
    },
  ];

  // Specializations
  const laparoscopicProcedures = [
    "Lap Choleycystectomy (Gall bladder Surgery)",
    "Lap Ventral & Inguinal Hernia",
    "Lap Appendectomy (Appendix Removal)",
    "Lap Hysterectomy (Uterus Removal)",
    "Lap Ectopic Salpingectomy (Surgery for Ectopic Pregnancy)",
    "Lap Ovarian Cystectomy (Surgery for Ovarian Cyst)",
    "Stapler Haemorrhoidectomy (Stapler Surgery for Piles)"
  ];

  const laserProcedures = [
    "Piles",
    "Fissures",
    "Fistulas",
    "Pilonidal Sinus",
    "Circumcision"
  ];

  const otherExpertise = [
    "All Open Abdominal Surgeries"
  ];

  // Professional memberships
  const memberships = [
    "Delhi Medical Council",
    "Association of Minimal Access Surgeons of India (AMASI)",
    "Indian Association of Gastrointestinal Endosurgeons (IAGES)",
    "Association of Surgeons of India (ASI)"
  ];

  // Medical philosophy
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
        "Utilizing advanced laparoscopic and laser techniques to ensure minimally invasive procedures with optimal outcomes and faster recovery.",
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
      title: "Accessibility",
      description:
        "Setting up laparoscopic compatible operation theatres in remote villages to provide advanced surgical care to underserved communities.",
    },
  ];

  return (
    <>
      <Helmet>
              <title>About Dr. Pushkar Anand Singh | Trusted Laparoscopic Surgeon </title>
              <meta name="description" content="Learn about Dr. Pushkar Anand Singh, MBBS, DNB, with 14+ years of surgical expertise. Renowned for laparoscopic and laser treatments, combining skill, compassion, and patient care." />
           <meta name="keywords" content="About Dr Pushkar Anand Singh, Experienced Surgeon, Laparoscopic Expertise, Laser Surgery Specialist, Noida Surgeon, Greater Noida Healthcare, Medical Experience, Patient Care"/>

              
              {/* Open Graph / Facebook */}
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://www.drpushkaranandsingh.com/about" />
              <meta property="og:title" content="Dr. Pushkar Anand Singh | Best Laparoscopic Surgeon in Noida" />
              <meta property="og:description" content="Renowned laparoscopic and laser surgeon in Noida with 16+ years of experience. Specialized in gallbladder stones, hernia, piles, and fissure treatment." />
              <meta property="og:image" content="https://www.drpushkaranandsingh.com/images/og-image.jpg" />
              
              {/* Twitter */}
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="https://www.drpushkaranandsingh.com/" />
              <meta property="twitter:title" content="Dr. Pushkar Anand Singh | Best Laparoscopic Surgeon in Noida" />
              <meta property="twitter:description" content="Renowned laparoscopic and laser surgeon in Noida with 16+ years of experience. Specialized in gallbladder stones, hernia, piles, and fissure treatment." />
              <meta property="twitter:image" content="https://www.drpushkaranandsingh.com/images/twitter-image.jpg" />
              
              {/* Canonical URL */}
              <link rel="canonical" href="https://www.drpushkaranandsingh.com/about" />
            </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 h-[90vh] min-h-[600px] max-h-[800px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 ">
          <img
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Surgical Background"
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
              Renowned Laparoscopic & Laser Surgeon with 16+ Years of Surgical Excellence
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

      {/* Main Content Section */}
      <section
        id="about-content"
        className="overflow-hidden py-20 bg-gradient-to-b from-[#f9fdf9] to-[#e8f5e6]"
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
                Dr. Pushkar Anand Singh is a distinguished surgical specialist with extensive expertise in minimally invasive laparoscopic and laser procedures. With qualifications including MBBS, DNB in General Surgery, and multiple fellowships in minimal access surgery, Dr. Singh combines academic excellence with specialized training to deliver the highest standard of healthcare.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                His commitment to expanding access to quality surgical care is demonstrated by his initiative to set up laparoscopic compatible operation theatres in remote villages of Uttar Pradesh and Bihar, where he has performed over a thousand surgeries for underserved communities.
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
              <div className="p-3 bg-gradient-to-br from-[#6CCF5F] to-[#1A1F1C] rounded-2xl shadow-xl">
                <img
                  src={DrImage}
                  alt="Dr. Pushkar Anand Singh - Laparoscopic Surgeon"
                  className="w-full h-100 rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
              
            </motion.div>
          </div>

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

          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-[#1A1F1C] mb-8 text-center">Areas of Expertise</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Laparoscopic Surgery */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#6CCF5F] rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1F1C]">Laparoscopic Surgery</h3>
                </div>
                <ul className="space-y-2">
                  {laparoscopicProcedures.map((procedure, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[#6CCF5F] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{procedure}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Laser Surgery */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#6CCF5F] rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1F1C]">Laser Surgeries</h3>
                </div>
                <ul className="space-y-2">
                  {laserProcedures.map((procedure, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[#6CCF5F] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{procedure}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Other Expertise */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#6CCF5F] rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1F1C]">Other Expertise</h3>
                </div>
                <ul className="space-y-2">
                  {otherExpertise.map((expertise, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[#6CCF5F] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{expertise}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
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
                  Dr. Pushkar Anand Singh is a distinguished surgical specialist with extensive expertise in minimally invasive procedures. With qualifications including MBBS from Dr. D. Y. Patil Medical College, Pune (2009) and DNB in General Surgery from the National Board of Examination, New Delhi (2013), Dr. Singh combines academic excellence with specialized training to deliver the highest standard of healthcare.
                </p>
                <p>
                  His surgical journey includes prestigious positions at leading hospitals across North India, including his current role as Consultant at Shri Ram Singh Hospital, Sector 70, Noida since 2018. Previously, he served as Consultant at Laxmi Hospital, Bulandshehar (2017-2024), Metro Multispecialty Hospital, Noida (2017-2018), Mahveer Arogya Hospital, Patna (2014-2017), and Jaypee Hospital, Noida (2017). He also served as Senior Resident at Jaipur Golden Hospital, Rohini, Delhi from 2013 to 2014.
                </p>
                <p>
                  Beyond clinical practice, Dr. Singh is committed to expanding access to quality surgical care. He has set up laparoscopic compatible operation theatres in remote villages of Uttar Pradesh and Bihar, performing over a thousand surgeries in these underserved areas. This initiative demonstrates his dedication to making advanced surgical techniques available to all communities.
                </p>
                <p>
                  Dr. Singh's patient-centric approach emphasizes personalized care, ensuring each patient receives tailored treatment plans and compassionate support throughout their surgical journey. His dedication to surgical innovation and exceptional patient outcomes has earned him recognition as one of Noida's top laparoscopic surgeons.
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
                  Education & Qualifications
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
                  Fellowships & Advanced Training
                </h3>
                <ul className="space-y-4">
                  {fellowships.map((item, index) => (
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
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-[#1A1F1C] mb-8 text-center">Professional Experience</h2>
            
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-[#6CCF5F] transform -translate-x-1/2"></div>
              
              {/* Experience Items */}
              <div className="space-y-12">
                {experience.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="md:w-1/2 mb-4 md:mb-0"></div>
                    
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#6CCF5F] rounded-full"></div>
                    
                    <div className={`md:w-1/2 p-6 bg-white rounded-xl shadow-md ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <h3 className="text-xl font-bold text-[#1A1F1C] mb-2">{exp.position}</h3>
                      <p className="text-gray-600 mb-2">{exp.hospital}</p>
                      <p className="text-sm text-[#6CCF5F] font-semibold">{exp.duration}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications & Memberships */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#1A1F1C] mb-4">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <svg className="w-5 h-5 text-[#6CCF5F] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#1A1F1C] mb-4">Professional Memberships</h3>
              <ul className="space-y-3">
                {memberships.map((membership, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <svg className="w-5 h-5 text-[#6CCF5F] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{membership}</span>
                  </motion.li>
                ))}
              </ul>
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
              Schedule a consultation with Dr. Pushkar Anand Singh to receive personalized surgical care from an experienced specialist.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={() => navigate("/contact")}
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