import React, { useState } from "react";
import axios from "axios";
import { FiLink, FiImage, FiTag, FiFileText, FiSend, FiCheckCircle } from "react-icons/fi";
import { backendUrl } from "../../config/config";
export default function ArticleForm() {
  const [form, setForm] = useState({
    title: "",
    link: "",
    summary: "",
    imageUrl: "",
    tags: "",
  });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setIsSuccess(false);
    
    try {
      const res = await axios.post(`${backendUrl}/api/articles`, {
        ...form,
        tags: form.tags.split(",").map((tag) => tag.trim()),
      });
      
      setMessage(res.data.message);
      setIsSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setForm({ title: "", link: "", summary: "", imageUrl: "", tags: "" });
        setIsSubmitting(false);
      }, 1500);
      
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Error creating article");
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-2xl w-full mx-auto transform transition-all duration-300 hover:shadow-2xl">
      <div className="flex items-center mb-6">
        <div className="bg-indigo-100 p-3 rounded-xl mr-4">
          <FiFileText className="text-indigo-600 text-xl" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Create New Article</h2>
          <p className="text-gray-500">Share valuable content with your audience</p>
        </div>
      </div>
      
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            name="title"
            placeholder="Article Title"
            className="w-full border border-gray-200 p-4 rounded-xl pl-12 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            value={form.title}
            onChange={handleChange}
            required
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <FiFileText className="text-gray-400" />
          </div>
        </div>
        
        <div className="relative">
          <input
            type="text"
            name="link"
            placeholder="Article URL"
            className="w-full border border-gray-200 p-4 rounded-xl pl-12 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            value={form.link}
            onChange={handleChange}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <FiLink className="text-gray-400" />
          </div>
        </div>
        
        <div className="relative">
          <textarea
            name="summary"
            placeholder="Article Summary"
            rows="4"
            className="w-full border border-gray-200 p-4 rounded-xl pl-12 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            value={form.summary}
            onChange={handleChange}
          />
          <div className="absolute top-4 left-4">
            <FiFileText className="text-gray-400" />
          </div>
        </div>
        
        <div className="relative">
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            className="w-full border border-gray-200 p-4 rounded-xl pl-12 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            value={form.imageUrl}
            onChange={handleChange}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <FiImage className="text-gray-400" />
          </div>
        </div>
        
        <div className="relative">
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma separated, e.g.: tech, design, development)"
            className="w-full border border-gray-200 p-4 rounded-xl pl-12 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            value={form.tags}
            onChange={handleChange}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <FiTag className="text-gray-400" />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-xl font-medium flex items-center justify-center transition-all duration-300 ${
            isSubmitting 
              ? "bg-indigo-400 cursor-not-allowed" 
              : "bg-indigo-600 hover:bg-indigo-700 transform hover:-translate-y-1"
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            <>
              <FiSend className="mr-2" />
              Publish Article
            </>
          )}
        </button>
      </form>
      
      {message && (
        <div className={`mt-6 p-4 rounded-xl border-l-4 ${
          isSuccess 
            ? "bg-green-50 border-green-500 text-green-700 animate-fadeIn" 
            : "bg-red-50 border-red-500 text-red-700 animate-shake"
        }`}>
          <div className="flex items-start">
            {isSuccess && <FiCheckCircle className="text-green-500 text-xl mr-3 mt-0.5" />}
            <p>{message}</p>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}