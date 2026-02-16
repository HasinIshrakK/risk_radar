import React from "react";

const ServerError = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-950 text-white text-center px-6">
      
      {/* Icon */}
      <div className="text-6xl mb-4">⚠️</div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-red-400 mb-2">
        Something Went Wrong
      </h1>

      {/* Description */}
      <p className="text-gray-400 max-w-md mb-6">
        Oops! Something unexpected happened. Please try again later or refresh the page.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
        >
          Retry
        </button>

        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ServerError;
