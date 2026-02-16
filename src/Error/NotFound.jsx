import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-950 text-white text-center px-6">
      
      {/* 404 Text */}
      <h1 className="text-7xl font-extrabold text-blue-500 mb-4">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-400 max-w-md mb-6">
        Sorry, the page you're looking for doesn’t exist or has been moved.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
        >
          Go Back
        </button>

        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
        >
          Home Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
