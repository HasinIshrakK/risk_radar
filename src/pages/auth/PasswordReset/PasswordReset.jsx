import React, { useState } from "react";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email");
      return;
    }
    // TODO: Integrate API for sending reset email
    setMessage(`Reset link sent to ${email}`);
    setEmail("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 my-20 rounded-3xl">
      <div className="w-full max-w-md bg-green-700 p-8 rounded-xl shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white ">
            Reset Your Password
          </h1>
          <p className="text-white  mt-2">
            Enter your email to receive a reset link
          </p>
        </div>
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-white  mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          {message && (
            <p className="text-sm text-red-500 dark:text-red-400">
              {message}
            </p>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Send Reset Link
          </button>
        </form>
        <div className="text-center mt-4">
          <a
            href="/login"
            className="text-sm text-purple-600 hover:underline dark:text-purple-400 cursor-pointer"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
