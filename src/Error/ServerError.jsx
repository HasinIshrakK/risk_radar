import React from "react";

const ServerError = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 sm:px-6">
      
      {/* Container */}
      <div className="max-w-xl w-full">
        
        {/* Icon */}
        <div className="text-5xl sm:text-6xl md:text-7xl mb-4">
          ⚠️
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-2">
          Something Went Wrong
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6">
          Oops! Something unexpected happened. Please try again later or refresh the page.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          
          <button
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition"
          >
            Retry
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="w-full sm:w-auto px-6 py-2 bg-green-500 hover:bg-emerald-600 rounded-lg transition"
          >
            Go Home
          </button>

        </div>
      </div>
    </div>
  );
};

export default ServerError;
