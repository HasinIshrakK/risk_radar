import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-950 text-white text-center px-4 sm:px-6">
      
      {/* Container */}
      <div className="max-w-xl w-full">
        
        {/* 404 Text */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-blue-500 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6">
          Sorry, the page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
          >
            Go Back
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="w-full sm:w-auto px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
          >
            Home Page
          </button>

        </div>
      </div>
    </div>
  );
};

export default NotFound;
