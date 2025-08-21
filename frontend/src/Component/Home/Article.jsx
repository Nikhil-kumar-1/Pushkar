import { motion } from 'framer-motion';
import { FaNewspaper, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Article = () => {
    const navigate = useNavigate();
  const mediaFeatures = [
    {
      title: "Piles, Fistulas and Shame: Why Indians Delay Treatment",
      excerpt: "Dr. Pushkar Singh explains how cultural stigma prevents patients from seeking timely care and how modern techniques can help.",
      link: "https://www.timesnownews.com/health/piles-fistulas-and-shame-why-indians-delay-treatment-and-how-surgeons-can-help-break-the-stigma-article-152344607/amp",
      date: "March 15, 2022",
      outlet: "Times Now",
      image: "https://images.timesnownews.com/thumb/msid-152344605,thumbsize-34772,width-1280,height-720,resizemode-75/152344605.jpg"
    },
    {
      title: "Going for a surgery? Here are 6 things that a surgeon wants you to know",
      excerpt: "From having complete awareness about the procedure to following the pre-operative instructions, here is a guidebook on things to do before having a surgery.",
      link: "https://www.hindustantimes.com/lifestyle/health/going-for-a-surgery-here-are-6-things-that-a-surgeon-wants-you-to-know-101754123400774.html",
      date: "Aug 02, 2025 03:50 pm IST",
      outlet: "Hindustan Times",
      image: "https://www.hindustantimes.com/ht-img/img/2025/08/02/550x309/surgery_1718935157726_1754123491761.jpg"
    },
    {
      title: "Surgery Isn't Always Scary: How New Techniques Help Faster Recovery",
      excerpt: "Laser surgeries are minimally invasive, precise in ablation, and cause negligible bleeding. These advantages have improved patient acceptance and confidence.",
      link: "https://www.news18.com/amp/lifestyle/health-and-fitness/surgery-isnt-always-scary-how-new-techniques-help-faster-recovery-9496203.html",
      date: "August 10, 2025, 11:57 IST",
      outlet: "News18",
      image: "https://images.news18.com/ibnlive/uploads/2025/08/Image-2025-08-648ba7553ee6ad77ff8999c569c21727-16x9.png?im=Resize,width=400,aspect=fit,type=normal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fdf9] to-[#e8f5e6] font-sans py-12">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1F1C] mb-4">
            Media <span className="text-[#6CCF5F]">Articles</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Latest news and publications featuring our work and expertise
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Media Features Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {mediaFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#6CCF5F] text-white text-xs font-semibold px-2 py-1 rounded">
                  {feature.outlet}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <FaCalendarAlt className="mr-2" />
                  <span>{feature.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#1A1F1C] mb-3 line-clamp-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {feature.excerpt}
                </p>
                
                <a
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#6CCF5F] font-medium hover:text-[#5bbd4f] transition-colors"
                >
                  Read full article
                  <FaExternalLinkAlt className="ml-2 text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button onClick={()=> navigate("/achievements")} className="cursor-pointer px-6 py-3 bg-white text-[#1A1F1C] font-medium rounded-lg border border-[#6CCF5F] hover:bg-[#f9fdf9] transition-colors">
            Load More Articles
          </button>
        </div>
      </main>
    </div>
  );
};

export default Article;