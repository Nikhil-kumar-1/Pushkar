import { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../../config/config";
import { FiUpload, FiTrash2, FiImage, FiCheckCircle } from "react-icons/fi";

function Image() {
  const [image, setImage] = useState(null); // selected file
  const [preview, setPreview] = useState(null); // image preview
  const [images, setImages] = useState([]); // fetched images
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Backend se saari images fetch karna
  const fetchImages = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${backendUrl}/api/images`);
      setImages(res.data);
      setError("");
    } catch (err) {
      console.error("Error fetching images:", err);
      setError("Failed to load images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Handle file selection with preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Check file type
    if (!file.type.startsWith('image/')) {
      setError("Please select an image file (JPEG, PNG, etc.)");
      return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size should be less than 5MB");
      return;
    }
    
    setImage(file);
    setError("");
    setSuccess("");
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Direct upload to Cloudinary
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) {
      setError("Please select an image");
      return;
    }

    try {
      setUploading(true);
      setError("");

      // Step 1: Get upload signature from backend
      const signatureResponse = await axios.get(`${backendUrl}/api/images/signature`);
      const { signature, timestamp, apiKey, cloudName } = signatureResponse.data;

      // Step 2: Prepare form data for Cloudinary upload
      const formData = new FormData();
      formData.append("file", image);
      formData.append("api_key", apiKey);
      formData.append("timestamp", timestamp);
      formData.append("signature", signature);
      formData.append("folder", "myUploads");

      // Step 3: Upload directly to Cloudinary
      const cloudinaryResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { secure_url, public_id } = cloudinaryResponse.data;

      // Step 4: Save image details to our database
      await axios.post(`${backendUrl}/api/images/save`, {
        url: secure_url,
        publicId: public_id,
      });

      setImage(null);
      setPreview(null);
      setSuccess("Image uploaded successfully!");
      fetchImages(); // refresh after upload
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      console.error("Upload failed:", err);
      if (err.response && err.response.status === 413) {
        setError("File is too large. Please select a smaller image.");
      } else {
        setError("Upload failed. Please try again.");
      }
    } finally {
      setUploading(false);
    }
  };

  // Delete image handler
  const handleDelete = async (id, publicId) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;
    
    try {
      await axios.delete(`${backendUrl}/api/images/${id}`, {
        data: { publicId }
      });
      setSuccess("Image deleted successfully!");
      fetchImages(); // refresh after delete
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      console.error("Delete failed:", err);
      setError("Failed to delete image. Please try again.");
    }
  };

  // Clear selection
  const handleCancel = () => {
    setImage(null);
    setPreview(null);
    setError("");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">Image Management</h1>
      <p className="text-gray-600 mb-6">Upload and manage images on Cloudinary</p>

      {/* Status Messages */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg border border-red-200">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg border border-green-200 flex items-center">
          <FiCheckCircle className="mr-2" />
          {success}
        </div>
      )}

      {/* Upload Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Upload New Image</h2>
        
        <form onSubmit={handleUpload}>
          <div className="flex flex-col md:flex-row gap-6">
            {/* File Input & Preview */}
            <div className="flex-1">
              {preview ? (
                <div className="relative">
                  <img 
                    src={preview} 
                    alt="Preview" 
                    className="w-full h-64 object-contain rounded-lg border border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FiUpload className="w-10 h-10 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                  </div>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange}
                    className="hidden" 
                  />
                </label>
              )}
            </div>
            
            {/* Upload Button */}
            <div className="flex flex-col justify-center">
              <button
                type="submit"
                disabled={!image || uploading}
                className={`px-6 py-3 rounded-lg flex items-center justify-center ${
                  !image || uploading
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                } transition-colors`}
              >
                {uploading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Uploading...
                  </>
                ) : (
                  <>
                    <FiUpload className="mr-2" />
                    Upload Image
                  </>
                )}
              </button>
              
              {image && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="mt-3 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Gallery Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Image Gallery</h2>
          <span className="text-sm text-gray-500">
            {images.length} {images.length === 1 ? 'image' : 'images'}
          </span>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-10">
            <FiImage className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No images</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by uploading a new image.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img) => (
              <div key={img._id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative group">
                  <img 
                    src={img.url} 
                    alt="Uploaded" 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => handleDelete(img._id, img.publicId)}
                      className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      title="Delete image"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-500 truncate">
                    {img.publicId}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Uploaded: {new Date(img.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Image;