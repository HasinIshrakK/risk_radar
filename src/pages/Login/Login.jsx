import { House } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signinUser, signinGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signinUser(email, password);
      console.log(result.user);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signinGoogle();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex poppins-regular min-h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-hidden">
      {/* LEFT SIDE: Brand Image and AI Financial Insights Section */}
      <div className="hidden lg:flex lg:w-[60%] relative overflow-hidden bg-[#022c22]">
        {/* hello */}
        {/* Background Image with subtle zoom effect */}
        <img
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000"
          alt="AI Finance Grid"
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay transition-transform duration-[10s] hover:scale-110"
        />

        <div className="relative z-10 flex flex-col justify-between p-16 text-white w-full">
          {/* Logo: Slide Down effect */}
          {/* Logo */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-[#10b981] rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Risk Radar
              </span>
            </div>
            <Link
              className="flex items-center gap-2 opacity-90 transition-all hover:bg-white/30 underline text-white/80 backdrop-blur-md py-3 rounded-full px-5"
              to={"/"}
            >
              <House /> Back to Home
            </Link>
          </div>

          {/* Main Heading: Slide Right effect */}
          <div className="animate-in fade-in slide-in-from-left-10 duration-1000 delay-300 fill-mode-both">
            <div className="mb-6 h-1 w-20 bg-[#10b981]"></div>
            <h1 className="text-6xl font-extrabold leading-[1.1] tracking-tight">
              Predictive <br />
              Wealth Analysis.
            </h1>
            <p className="mt-6 text-xl text-emerald-100/60 max-w-md leading-relaxed">
              Secure and optimize your portfolio with AI-driven insights.
              Institutional-grade security at your fingertips.
            </p>
          </div>

          {/* Trust Factors: Slide Up effect */}
          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 fill-mode-both">
            <div>
              <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-1">
                Security
              </p>
              <p className="text-white text-lg font-semibold">ISO 27001</p>
            </div>
            <div>
              <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-1">
                AI Engine
              </p>
              <p className="text-white text-lg font-semibold">V.2.0 Active</p>
            </div>
            <div>
              <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-1">
                Encrypted
              </p>
              <p className="text-white text-lg font-semibold">End-to-End</p>
            </div>
          </div>
        </div>

        {/* Dark Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] via-transparent to-[#022c22]/50" />
      </div>

      {/* RIGHT SIDE: Login Form Section */}
      <div className="w-full py-16 lg:w-[40%] flex flex-col justify-center px-8 md:px-16 lg:px-20 bg-white animate-in fade-in slide-in-from-right-10 duration-700">
        <div className="max-w-md w-full mx-auto">
          <header className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Secure Access
            </h2>
            <p className="mt-3 text-slate-500 font-medium">
              Login to access your RiskRadar
            </p>
            <Link
              className="hidden max-lg:flex items-center justify-center mt-3 gap-2 opacity-90 transition-all hover:bg-[#059669] hover:text-white underline text-black backdrop-blur-md py-3 rounded-2xl px-5"
              to={"/"}
            >
              <House /> Back to Home
            </Link>
          </header>

          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Input fields with transition on focus */}
            <div className="space-y-2 group">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-emerald-500 transition-colors">
                Client Identifier
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-[#10b981]/10 focus:border-[#10b981] outline-none transition-all duration-300 placeholder:text-slate-300"
              />
            </div>

            <div className="space-y-2 group">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                  Secure Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                placeholder="••••••••••••"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-[#10b981]/10 focus:border-[#10b981] outline-none transition-all duration-300 placeholder:text-slate-300"
              />
            </div>

            {/* Login Button with Hover & Active animation */}
            <button
              type="submit"
              className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold py-4 rounded-2xl shadow-xl shadow-emerald-100 transition-all duration-300 hover:scale-[1.02] active:scale-95 mt-2"
            >
              Login
            </button>
            {/*  ERROR SHOW */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <p className="text-center">
              Don't have an account?
              <Link
                to={"/auth/register"}
                className="ml-1.5 font-medium hover:text-green-600 hover:underline transition-all"
              >
                Sign up
              </Link>
            </p>

            {/* Divider */}
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-slate-100"></div>
              <span className="flex-shrink mx-4 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                or
              </span>
              <div className="flex-grow border-t border-slate-100"></div>
            </div>

            {/* Google Login with Hover effect */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 font-bold py-4 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                {/* SVG Paths here */}
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign in with Google Workspace
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
