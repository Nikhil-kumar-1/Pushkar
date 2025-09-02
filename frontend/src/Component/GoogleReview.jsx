import React, { useState, useEffect, useRef } from "react";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [overallRating, setOverallRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [placeName, setPlaceName] = useState("");
  const [loading, setLoading] = useState(true);
  const [expandedReviews, setExpandedReviews] = useState({});
  const scrollContainerRef = useRef(null);

  // Manual reviews data
  const manualReviews = [
    {
      author_name: "Chhetrapal Singh",
      rating: 5,
      text: "Hello All, I recently gone through the gallbladder stone surgery of my wife. I found doctor Pushkar Anand by Google search, and impressed by reading all the reviews and based on that decided to plan a meeting with Dr Pushkar. He took the time to explain the issue in detail, making us understand the long-term complications of keeping stone. His clarity and guidance helped us make an informed decision.On the day of the operation at SRS hospital, where he is a surgeon, Dr. Pushkar Anand ensured we were relax. Post-surgery, he was very supportive and clear my all doubts. Dr. Pushkar Anand is not only an excellent surgeon but also a compassionate doctor who truly cares for his patients. We are extremely grateful for his expertise and highly recommend him to anyone in need of surgical consultation.Entire clinic Staff is very supportive and calm in nature, they always remind patient for each follow-up and also call frequently just to know the well being of patient. Overall a nice experience with a very humble and down to earth Doctor, who always take care of their patients.Thank you so much",
      time: "3 months ago",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVTaCr-gQvO3dW7XDS6n79YmJIdcgHJMWhu_1bV999rZBia4qSW=w54-h54-p-rp-mo-br100"
    },
    {
      author_name: "Archita Singh",
      rating: 5,
      text: "I recently underwent gallbladder surgery and had a very positive experience with Dr. Pushkar. He was kind, supportive, and explained everything clearly, which really helped ease my anxiety before the procedure. His professional yet warm approach made the entire process smooth and reassuring. I’m truly grateful for his care and expertise. Highly recommended!",
      time: "a month ago",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWzbgtNk7nlZexcFZpZ2tXENXISKWEUFiaTXACHTUcCOiLnO6aX=w54-h54-p-rp-mo-br100"
    },
    {
      author_name: "Shreenivash Sharma",
      rating: 5,
      text: "We recently had my wife's gallbladder stone surgery performed by Dr. Pushkar Anand, and we couldn't have asked for a better doctor. From our very first consultation, he took the time to explain the issue in detail, making us understand the long-term complications of keeping the gallbladder in such a condition. His clarity and guidance helped us make an informed decision.We initially visited him for a second opinion at his clinic, and after discussing the case with him, we felt confident about proceeding with the surgery. On the day of the operation at Apollo Hospital, where he is a surgeon, Dr. Pushkar Anand ensured we were calm and reassured by explaining the entire procedure. Post-surgery, he was extremely supportive, monitoring my wife's recovery and ensuring she was comfortable. Thanks to his care, she was able to return home the very next day.Dr. Pushkar Anand is not only an excellent surgeon but also a compassionate doctor who truly cares for his patients. We are extremely grateful for his expertise and highly recommend him to anyone in need of surgical consultation.",
      time: "2 months ago",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUKy7YZL7T2oTqXkmDcMc24lNW1hORAznrHbrluvlApILIjLBdG=w54-h54-p-rp-mo-ba3-br100"
    },
    {
      author_name: "Shashi Srivastava",
      rating: 5,
      text: "I would like to express my heartfelt gratitude to Dr. Pushkar Anand Singh for the exceptional care and expertise he demonstrated during my gallbladder surgery. His calm demeanor, clear communication, and confidence gave me immense reassurance throughout the entire process. The surgery and recovery were smooth, and I truly appreciate his dedication, skill, and compassionate approach. Thank you, Doctor, for making a difficult experience so much easier with your professionalism and kindness",
      time: "3 weeks ago",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjX2nZbZ6go_Ya1K1Y0Hfpj0_x_HwEpO2lPT5ZL72wJJixqwUzm3=w54-h54-p-rp-mo-br100"
    },
    {
      author_name: "Ramanuj Dwivedi",
      rating: 5,
      text: "I gone through the gallbladder stone surgery of my wife Preeti Dwivedi on 7th August. Dr. Pushkar Anand Singh is a nice human being & highly expert in his profession.We are extremely grateful for his expertise and highly recommend him to anyone in need of surgical consultation.Entire clinic Staff is very supportive and calm in nature, they always remind patient for each follow-up and also call frequently just to know the well being of patient.Overall a nice experience with a very humble and down to earth Doctor, who always take care of their patients.Preeti Dwivedi Ramanuj Dwivedi",
      time: "2 weeks ago",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUxxelIKXK00EqZfA9uRuisPpO4lf8Px7xUPDhzj1wdxHQCnAeboQ=w54-h54-p-rp-mo-br100"
    },

    {
      author_name: "Sanjeet Kumar",
      rating: 5,
      text: "I would like to express my heartfelt gratitude to Dr. Pushkar Anand Sir and their entire team for the outstanding care I received before, during, and after my gallbladder surgery. From the very first consultation, Dr. Pushkar Anand Sir took the time to clearly explain the procedure, answer all my questions, and ease any concerns I had.The surgery itself went smoothly, and I was impressed by the level of professionalism, expertise, and genuine compassion shown throughout the entire process. The recovery was faster and more comfortable than I expected, thanks to the clear post-operative instructions and attentive follow-up care.I truly appreciate the dedication and skill of Dr. Pushkar Anand Sir, and I feel very fortunate to have been under their care. I would highly recommend Dr. Pushkar Anand Singh to anyone in need of gallbladder surgery or similar treatment.Thank you once again for your exceptional service and support.Sincerely,Sanjeet Pandit",
      time:"2 week ago",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjX5C69Ti5urcfJifNA7H4IjEYWlvoFlF4IJWcELY_sLcMCEYPoT=w54-h54-p-rp-mo-br100",
    },
    {
      author_name: "Narinder Kumar",
      rating: 5,
      text: "I reached out to Dr. Pushkar Anand during a weekend for a nail extraction. He responded immediately and gave me an appointment the same day despite his busy schedule.After diagnosis, he performed the procedure the same day allowing me rest and healing during the weekend. His team was professional  and courteous in following up post procedure.The procedure itself was flawless and my problem got solved permanently. I am deeply thankful  to Dr. Anand and would highly recommend  him to anyone.",
      time: "3 weeks ago",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUBZYW7yExhrMHJNF7CxSw0FyR4tg-Wh0rlNH4aCsX0YRaJjlm5=w54-h54-p-rp-mo-br100"
    },
    {
      author_name: "Pranat Prasoon",
      rating: 5,
      text: "I visited for cyst removal.Dr Pushkar Anand Singh is very expert in his field.He made me aware of the whole procedure.The surgery was carried out in a complete caring way.I wish Doctor and his assistants at his clinic a good luck for their kind approach.",
      time: "3 month ago",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjULhlIIPxJV3Fc2QOdDOEkY6b8uDQhboG4lvPNxKcOLfhzcHNg=w54-h54-p-rp-mo-br100",
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      // Duplicate reviews for infinite scroll effect
      setReviews([...manualReviews, ...manualReviews]);
      setOverallRating(5);
      setTotalRatings(427);
      setPlaceName("Dr. Pushkar's Clinic");
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (loading || !scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    let animationFrameId;
    let scrollSpeed = 1; // pixels per frame

    const autoScroll = () => {
      if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
        // Reset to beginning when reaching the end (creates infinite effect)
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll
    animationFrameId = requestAnimationFrame(autoScroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    // Resume when not hovering
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [loading]);

  // Function to render star ratings
  const renderStars = (rating) => {
    return (
      <div className="flex text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "fill-current" : "text-gray-300"}`}
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    );
  };

  // Toggle read more/less for a specific review
  const toggleReadMore = (index) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Function to truncate text to 2-3 lines
  const truncateText = (text, maxLines = 3) => {
    const words = text.split(' ');
    // Approximate number of words per line (this is a rough estimate)
    const wordsPerLine = 10;
    const maxWords = maxLines * wordsPerLine;
    
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="max-w-full mx-auto px-4 py-12 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Patient Reviews</h2>
        <p className="text-gray-600 mb-4">See what our patients are saying about their experience</p>
        
        {placeName && (
          <div className="inline-flex items-center bg-white rounded-full shadow-sm px-4 py-2 border">
            <span className="text-sm text-gray-700 mr-2">{placeName}</span>
            <div className="flex items-center">
              {renderStars(Math.round(overallRating))}
              <span className="ml-2 text-sm font-medium text-gray-900">
                {overallRating} ({totalRatings} reviews)
              </span>
            </div>
          </div>
        )}
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6CCF5F]"></div>
        </div>
      ) : (
        <>
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-hidden py-4 space-x-6 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>
              {`
                .scroll-container::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img 
                      src={review.profile_photo_url} 
                      alt={review.author_name} 
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{review.author_name}</p>
                      <p className="text-sm text-gray-500">{review.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-gray-700 font-medium">{review.rating}.0</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">
                  {expandedReviews[index] ? review.text : truncateText(review.text)}
                </p>
                {review.text.length > 150 && (
                  <button 
                    onClick={() => toggleReadMore(index)}
                    className="text-[#6CCF5F] hover:text-[#4CAF50] font-medium text-sm"
                  >
                    {expandedReviews[index] ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Manual navigation buttons */}
          
        </>
      )}
      
      <div className="text-center mt-10">
        <a
          href="https://www.google.com/maps/place/Dr.+Pushkar+Anand+Singh/@28.6065637,77.4295024,17z/data=!4m8!3m7!1s0x390cef65e1ca4115:0x57cd54fcbd59af05!8m2!3d28.606559!4d77.4320773!9m1!1b1!16s%2Fg%2F11p5j8pkpx?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#6CCF5F] hover:bg-[#5bbd4f] text-white font-medium px-5 py-3 rounded-full transition shadow-md"
        >
          View More Reviews
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>

      {/* Additional CTA Section */}
      <div className="bg-gradient-to-r from-[#6CCF5F] to-[#4CAF50] rounded-xl p-8 text-center text-white mt-16">
        <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
        <p className="mb-6 max-w-2xl mx-auto">Your feedback helps us improve our services and helps other patients make informed decisions about their healthcare.</p>
        <a
          href="https://www.google.com/maps/place/Dr.+Pushkar+Anand+Singh/@28.6065637,77.4295024,17z/data=!3m1!4b1!4m6!3m5!1s0x390cef65e1ca4115:0x57cd54fcbd59af05!8m2!3d28.606559!4d77.4320773!16s%2Fg%2F11p5j8pkpx?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white text-[#6CCF5F] hover:bg-gray-100 font-bold px-6 py-3 rounded-full transition shadow-lg"
        >
          Leave a Google Review
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default GoogleReviews;