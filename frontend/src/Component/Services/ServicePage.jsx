import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const ServicePage = () => {

  const navigate = useNavigate();
  const service = [
    {
      title: "Laparoscopic Surgery for Gall Bladder Stone",
      description: "Minimally invasive removal of gallstones through small abdominal incisions using advanced laparoscopic techniques. This procedure offers reduced pain, minimal scarring, and faster recovery compared to traditional open surgery.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FsbGJsYWRkZXJ8ZW58MHx8MHx8fDA%3D",
      benefits: [
        "98% success rate",
        "1-2 day hospital stay",
        "Return to normal activities in 7-10 days",
        "Nearly invisible scars"
      ]
    },
    {
      title: "Laparoscopic Surgery for Hernia",
      description: "Advanced repair of inguinal, umbilical, and ventral hernias using mesh reinforcement through tiny incisions. Our technique reduces recurrence rates to less than 1% with minimal postoperative discomfort.",
      image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVybmlhfGVufDB8fDB8fHww",
      benefits: [
        "Day care procedure",
        "95% reduced recurrence risk",
        "Virtually painless recovery",
        "3 small (5mm) incisions"
      ]
    },
    {
      title: "Laparoscopic Surgery for Appendicitis",
      description: "Emergency removal of inflamed appendix through keyhole surgery, preventing rupture and life-threatening complications. Our same-day discharge protocol gets you home faster.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwYXJvc2NvcGljJTIwc3VyZ2VyeXxlbnwwfHwwfHx8MA%3D%3D",
      benefits: [
        "30-45 minute procedure",
        "Discharge within 24 hours",
        "Scarless technique available",
        "Immediate pain relief"
      ]
    },
    {
      title: "Laparoscopic Surgery for Pelvic Tumour/Cyst",
      description: "Precision removal of ovarian cysts and pelvic masses with fertility-preserving techniques. Our gynecologic laparoscopy specialists ensure optimal outcomes with minimal tissue damage.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3ZhcmlhbiUyMGN5c3R8ZW58MHx8MHx8fDA%3D",
      benefits: [
        "Fertility preservation",
        "2mm hidden incisions",
        "Hormonal balance maintenance",
        "Same-day discharge"
      ]
    },
    {
      title: "Laparoscopic Surgery for Fibroid",
      description: "Uterus-preserving myomectomy for symptomatic fibroids causing heavy bleeding or infertility. Our bloodless surgical technique eliminates fibroids while protecting healthy tissue.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXRlcmluZSUyMGZpYnJvaWR8ZW58MHx8MHx8fDA%3D",
      benefits: [
        "Uterus preservation",
        "Normal menstrual recovery",
        "Pregnancy possible post-surgery",
        "Blood loss <50ml"
      ]
    },
    {
      title: "Laser Surgery for Piles",
      description: "Painless, bloodless hemorrhoid treatment using advanced laser technology. Our 15-minute procedure eliminates piles permanently with zero hospital stay.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVtb3JyaG9pZHN8ZW58MHx8MHx8fDA%3D",
      benefits: [
        "No stitches or cuts",
        "Walk-in walk-out procedure",
        "Zero recurrence when done properly",
        "Normal diet same day"
      ]
    },
    {
      title: "Laser Surgery for Fistula",
      description: "Precision fistula closure using laser energy that seals the tract while preserving sphincter muscles. Our technique has 98% success rate with no incontinence risk.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzdHVsYXxlbnwwfHwwfHx8MA%3D%3D",
      benefits: [
        "No cutting of muscles",
        "Single session treatment",
        "No dressing required",
        "Normal bowel movements next day"
      ]
    },
    {
      title: "Laser Surgery for Fissure",
      description: "Pain relief and healing of chronic anal fissures with laser treatment that avoids muscle cutting. Our patients report immediate pain relief and complete healing in 7 days.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmlzc3VyZXxlbnwwfHwwfHx8MA%3D%3D",
      benefits: [
        "No sphincter damage",
        "Bloodless procedure",
        "Immediate pain relief",
        "No hospitalization"
      ]
    },
    {
      title: "Laser Surgery for Pilonidal Sinus",
      description: "Minimally invasive laser treatment for pilonidal disease that eliminates sinus tracts permanently. Our technique has 95% success rate with no wound care needed.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGlsb25pZGFsJTIwc2ludXN8ZW58MHx8MHx8fDA%3D",
      benefits: [
        "No open wound",
        "Single sitting procedure",
        "Sitting possible next day",
        "Recurrence rate <5%"
      ]
    },
    {
      title: "Laser Surgery for Circumcision",
      description: "Bloodless, stitchless circumcision using laser technology for adults and children. Our painless technique takes just 20 minutes with immediate return to normal activities.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2lyY3VtY2lzaW9ufGVufDB8fDB8fHww",
      benefits: [
        "No bleeding",
        "No stitches to remove",
        "Bathing allowed next day",
        "Perfect cosmetic results"
      ]
    },
    {
      title: "Laser Surgery for Cyst",
      description: "Non-invasive removal of sebaceous, ganglion, and other cysts using laser ablation. Our scarless technique prevents recurrence while preserving surrounding tissue.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3lzdHN8ZW58MHx8MHx8fDA%3D",
      benefits: [
        "No surgical scars",
        "5-minute procedure",
        "No recurrence",
        "No dressings needed"
      ]
    },
    {
      title: "Laser Surgery for Small Tumour",
      description: "Precision removal of benign skin tumors like lipomas without incisions or stitches. Our laser excision leaves no visible marks with complete tumor clearance.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHVtb3VyfGVufDB8fDB8fHww",
      benefits: [
        "No knife used",
        "Margin-free excision",
        "Cosmetically superior",
        "No recurrence"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Surgical Services | Dr. Pushkar Anand Singh</title>
        <meta 
          name="description" 
          content="Comprehensive laparoscopic and laser surgical treatments for gallstones, hernia, piles, fistula and more. Minimally invasive procedures with faster recovery." 
        />
        <meta 
          name="keywords" 
          content="laparoscopic surgery, laser surgery, gallstone treatment, hernia repair, piles laser treatment, fistula surgery, Dr. Pushkar Singh" 
        />
        <meta property="og:title" content="Advanced Surgical Services | Dr. Pushkar Anand Singh" />
        <meta property="og:description" content="Minimally invasive laparoscopic and laser surgical treatments with faster recovery times and better outcomes" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.drpushkarsingh.com/services" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwYXJvc2NvcGljJTIwc3VyZ2VyeXxlbnwwfHwwfHx8MA%3D%3D" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advanced Surgical Services | Dr. Pushkar Anand Singh" />
        <meta name="twitter:description" content="Minimally invasive surgical treatments with faster recovery times" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwYXJvc2NvcGljJTIwc3VyZ2VyeXxlbnwwfHwwfHx8MA%3D%3D" />
        <link rel="canonical" href="https://www.drpushkarsingh.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-[#1A1F1C] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwYXJvc2NvcGljJTIwc3VyZ2VyeXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Laparoscopic Surgery"
            className="w-full h-full object-cover opacity-50"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F1C] to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Advanced <span className="text-[#6CCF5F]">Surgical Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Minimally invasive laparoscopic and laser procedures for faster recovery and better outcomes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button onClick={()=> navigate('/contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6CCF5F] cursor-pointer text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#5bbd4f] transition"
              >
                Book Consultation
              </motion.button>
              <motion.button onClick={()=> navigate('/about')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                About Us
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
            document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' });
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

      {/* Services Grid Section */}
      <section id="services-grid" className="py-20 bg-gradient-to-b from-[#f9fdf9] to-[#e8f5e6]">
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
              Our <span className="text-[#6CCF5F]">Specialized Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge surgical procedures performed with precision and care
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* ... (keep your existing service card JSX exactly as is) ... */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A1F1C] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#6CCF5F] mb-2">Key Benefits:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 text-[#6CCF5F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <button className="text-[#6CCF5F] font-medium hover:text-[#5bbd4f] transition flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button> */}
                </div>
              
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-[#6CCF5F] to-[#1A1F1C] rounded-xl p-8 text-center text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Personalized Surgical Care</h3>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Schedule a consultation to discuss the best treatment options for your condition
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button onClick={()=>navigate('/contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white cursor-pointer text-[#1A1F1C] px-8 py-3 rounded-full font-semibold"
              >
                Book an Appointment
              </motion.button>
              <motion.button
  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.location.href = "tel:+919876543210"}
  className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-full font-semibold"
>
  Call: +91 98765 43210
</motion.button>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;