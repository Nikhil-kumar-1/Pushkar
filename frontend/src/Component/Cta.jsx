import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <motion.button
        onClick={() => navigate("/contact")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#6CCF5F] mt-5 mb-5 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
      >
        Book an Appointment
      </motion.button>
    </div>
  );
}
