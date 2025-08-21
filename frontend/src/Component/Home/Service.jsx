import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Laparoscopic Surgery for Fibroid/Pelvic Tumour/Cyst",
    description: "Minimally invasive removal of uterine fibroids, ovarian cysts, and pelvic tumors with faster recovery and minimal scarring.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwYXJvc2NvcGljJTIwc3VyZ2VyeXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Laparoscopic Surgery for Appendicitis",
    description: "Advanced keyhole appendectomy procedure with reduced pain and quicker return to normal activities.",
    image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwZW5kaWNpdGlzfGVufDB8fDB8fHww"
  },
  {
    title: "Laparoscopic Surgery for Gall Bladder Stone",
    description: "Safe and effective removal of gallstones through tiny incisions with minimal hospital stay.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FsbGJsYWRkZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Laparoscopic Surgery for Hernia",
    description: "Innovative mesh repair techniques for various hernias with lower recurrence rates.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVybmlhfGVufDB8fDB8fHww"
  },
  {
    title: "Laser Surgery for Small Tumour/Cyst/Lipoma",
    description: "Precision laser removal of benign growths with minimal bleeding and excellent cosmetic results.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFzZXIlMjBzdXJnZXJ5fGVufDB8fDB8fHww"
  },
  {
    title: "Laser Surgery for Piles/Fistula/Fissure",
    description: "Painless treatment for hemorrhoids, anal fistulas, and fissures with quick healing time.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGlsZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Laser Surgery for Pilonidal Sinus",
    description: "Advanced laser treatment for pilonidal sinus with minimal discomfort and faster recovery.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2ludXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Laser Surgery for Circumcision",
    description: "Bloodless circumcision procedure with precision laser technique and reduced healing time.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2lyY3VtY2lzaW9ufGVufDB8fDB8fHww"
  }
];

export default function Services() {
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-[#f9fdf9]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F1C] mb-4">
            Advanced Surgical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Offering cutting-edge laparoscopic and laser procedures with precision and care
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A1F1C] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="cursor-pointer text-[#6CCF5F] font-medium hover:text-[#5bbd4f] transition">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isMounted ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-[#6CCF5F] to-[#1A1F1C] rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Personalized Surgical Care</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Schedule a consultation to discuss the best treatment options for your condition
          </p>
          <button className="bg-white cursor-pointer text-[#1A1F1C] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
            Book an Appointment
          </button>
        </motion.div>
      </div>
    </section>
  );
}