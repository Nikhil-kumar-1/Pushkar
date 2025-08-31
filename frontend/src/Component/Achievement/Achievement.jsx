import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FaAward, FaUserMd, FaCalendarAlt, FaNewspaper, FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { backendUrl } from '../../config/config';

const AchievementPage = () => {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const achievements = [
        {
            title: "Pioneer in Painless Piles Treatment",
            description: "Developed a revolutionary laser technique for piles treatment that reduces recovery time from weeks to just 2-3 days with minimal discomfort.",
            icon: <FaAward className="text-3xl text-[#6CCF5F]" />,
            year: "2018",
            source: "Indian Journal of Proctology"
        },
        {
            title: "Breaking Stigma Around Fistula Treatment",
            description: "Led awareness campaigns across rural India to educate about early fistula treatment, increasing patient turnout by 300% in participating regions.",
            icon: <FaUserMd className="text-3xl text-[#6CCF5F]" />,
            year: "2020",
            source: "Times Now Health Feature"
        },
        {
            title: "1000+ Successful Laser Surgeries",
            description: "Performed over 1000 minimally invasive laser procedures for piles, fistula, and fissures with 98% success rate and zero cases of incontinence.",
            icon: <FaUserMd className="text-3xl text-[#6CCF5F]" />,
            year: "2022",
            source: "Medical Excellence Awards"
        },
        {
            title: "Featured in National Media",
            description: "Recognized by Times Now, The Hindu, and India Today for contributions to making proctology treatments more accessible and stigma-free.",
            icon: <FaNewspaper className="text-3xl text-[#6CCF5F]" />,
            year: "2021",
            source: "Times Now Health"
        }
    ];

    // Sample data to use as fallback
    const sampleArticles = [
        {
            _id: "1",
            title: "Piles, Fistulas and Shame: Why Indians Delay Treatment",
            link: "https://www.timesnownews.com/health/piles-fistulas-and-shame-why-indians-delay-treatment-and-how-surgeons-can-help-break-the-stigma-article-152344607/amp",
            summary: "Dr. Pushkar Singh explains how cultural stigma prevents patients from seeking timely care and how modern techniques can help.",
            imageUrl: "https://images.timesnownews.com/thumb/msid-152344605,thumbsize-34772,width-1280,height-720,resizemode-75/152344605.jpg",
            tags: ["Piles", "Stigma", "Treatment"],
            createdAt: "2022-03-15T00:00:00.000Z"
        },
        {
            _id: "2",
            title: "Going for a surgery? Here are 6 things that a surgeon wants you to know",
            link: "https://www.hindustantimes.com/lifestyle/health/going-for-a-surgery-here-are-6-things-that-a-surgeon-wants-you-to-know-101754123400774.html",
            summary: "From having complete awareness about the procedure to following the pre-operative instructions, here is a guidebook on things to do before having a surgery.",
            imageUrl: "https://www.hindustantimes.com/ht-img/img/2025/08/02/550x309/surgery_1718935157726_1754123491761.jpg",
            tags: ["Surgery", "Preparation", "Health"],
            createdAt: "2025-08-02T03:50:00.000Z"
        },
        {
            _id: "3",
            title: "Surgery Isn't Always Scary: How New Techniques Help Faster Recovery",
            link: "https://www.news18.com/amp/lifestyle/health-and-fitness/surgery-isnt-always-scary-how-new-techniques-help-faster-recovery-9496203.html",
            summary: "Laser surgeries are minimally invasive, precise in ablation, and cause negligible bleeding. These advantages have improved patient acceptance and confidence.",
            imageUrl: "https://images.news18.com/ibnlive/uploads/2025/08/Image-2025-08-648ba7553ee6ad77ff8999c569c21727-16x9.png?im=Resize,width=400,aspect=fit,type=normal",
            tags: ["Laser Surgery", "Recovery", "Technology"],
            createdAt: "2025-08-10T11:57:00.000Z"
        }
    ];

    // Fetch articles from your API
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setLoading(true);
                // Replace with your actual API endpoint
                const response = await fetch(`${backendUrl}/api/articles`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Only set articles if we get data from the backend
                if (data && data.length > 0) {
                    setArticles(data);
                } else {
                    // If backend returns empty array, use sample data
                    setArticles(sampleArticles);
                }
            } catch (err) {
                console.error('Error fetching articles:', err);
                setError('Failed to load articles from server. Using sample data.');
                
                // Use sample data if API fails
                setArticles(sampleArticles);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    // Format date to display
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    // Extract domain from URL for displaying source
    const getDomainFromUrl = (url) => {
        try {
            const domain = new URL(url).hostname.replace('www.', '');
            return domain;
        } catch (e) {
            return 'Unknown Source';
        }
    };

    return (
        <>
            <Helmet>
                <title>Achievements & Media | Dr. Pushkar Anand Singh</title>
                <meta 
                    name="description" 
                    content="Recognitions, awards and media features highlighting Dr. Pushkar Singh's contributions to laparoscopic and laser surgery." 
                />
                <meta 
                    name="keywords" 
                    content="Dr. Pushkar Singh achievements, piles laser treatment, fistula surgery, laparoscopic surgeon awards, medical recognition" 
                />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center bg-[#1A1F1C] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://plus.unsplash.com/premium_photo-1682309712356-bf909c90c02d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFjaGlldmVtZW50fGVufDB8fDB8fHww"
                        alt="Doctor receiving award"
                        className="w-full h-full object-cover opacity-70"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F1C] to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-white text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="text-[#6CCF5F]">Recognitions</span> & Media
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                            Celebrating milestones in surgical innovation and patient care advocacy
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4 mt-10">
                        <motion.button onClick={() => navigate('/services')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#6CCF5F] cursor-pointer text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#5bbd4f] transition"
                        >
                            Services
                        </motion.button>
                        <motion.button onClick={() => navigate('/about')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
                        >
                            About Us
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-20 bg-gradient-to-b from-[#f9fdf9] to-[#e8f5e6]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F1C] mb-4">
                            Professional <span className="text-[#6CCF5F]">Achievements</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Achievements measured not in awards, but in the trust and well-being of people served.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
                            >
                                <div className="flex items-start mb-4">
                                    <div className="mr-4">
                                        {achievement.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1A1F1C]">{achievement.title}</h3>
                                        <div className="flex items-center text-gray-500 text-sm mt-1">
                                            <FaCalendarAlt className="mr-1" />
                                            <span className="mr-3">{achievement.year}</span>
                                            <span>•</span>
                                            <span className="ml-3 font-medium">{achievement.source}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600">{achievement.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Breaking Stigma Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-[#1A1F1C] rounded-xl p-8 md:p-12 text-white mb-20"
                    >
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">
                                    Breaking the <span className="text-[#6CCF5F]">Stigma</span>
                                </h2>
                                <p className="text-gray-300 mb-6 text-lg">
                                    "Cultural taboos around conditions like piles and fistulas cause unnecessary suffering. 
                                    My mission is to normalize these medical conversations and make advanced treatments 
                                    accessible without shame or fear."
                                </p>
                                <p className="text-gray-300 text-lg">
                                    Through media appearances, community workshops, and patient education initiatives, 
                                    Dr. Singh has helped thousands overcome embarrassment to seek proper treatment.
                                </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <img 
                                    src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yJTIwaW50ZXJ2aWV3fGVufDB8fDB8fHww"
                                    alt="Dr. Singh in interview"
                                    className="w-full h-auto rounded-lg"
                                    loading="lazy"
                                />
                                <p className="text-gray-500 text-sm mt-2 text-center">
                                    Dr. Singh discussing proctology health awareness on national television
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Media Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-[#1A1F1C] mb-8 text-center">
                            In The <span className="text-[#6CCF5F]">Media</span>
                        </h2>
                        
                        {error && (
                            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6 text-center">
                                {error}
                            </div>
                        )}
                        
                        {loading ? (
                            <div className="flex justify-center items-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6CCF5F]"></div>
                            </div>
                        ) : articles.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No articles found.</p>
                            </div>
                        ) : (
                            <div className="space-y-8 overflow-hidden">
                                {articles.map((article, index) => (
                                    <motion.div
                                        key={article._id || index}
                                        initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
                                    >
                                        <div className="flex flex-col md:flex-row">
                                            <div className="md:w-1/3">
                                                <img 
                                                    src={article.imageUrl} 
                                                    alt={article.title}
                                                    className="w-full h-48 md:h-full object-cover"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
                                                    }}
                                                />
                                            </div>
                                            <div className="md:w-2/3 p-6">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-[#1A1F1C] mb-2">{article.title}</h3>
                                                        <div className="flex items-center text-gray-500 text-sm mb-3">
                                                            <FaNewspaper className="mr-2" />
                                                            <span className="font-medium mr-4">{getDomainFromUrl(article.link)}</span>
                                                            <FaCalendarAlt className="mr-2" />
                                                            <span>{formatDate(article.createdAt)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-gray-600 mb-4">{article.summary}</p>
                                                {article.tags && article.tags.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {article.tags.map((tag, i) => (
                                                            <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                                <a 
                                                    href={article.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center bg-[#6CCF5F] text-white px-5 py-2 rounded-full font-medium hover:bg-[#5bbd4f] transition"
                                                >
                                                    Read Article
                                                    <FaExternalLinkAlt className="ml-2 text-sm" />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4 mt-10">
                        <motion.button onClick={() => navigate('/contact')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#6CCF5F] cursor-pointer text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#5bbd4f] transition"
                        >
                            Book Consultation
                        </motion.button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AchievementPage;