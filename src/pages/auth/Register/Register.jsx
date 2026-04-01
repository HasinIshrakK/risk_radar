import { House } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";

const Register = () => {
  const { registerUser, signinGoogle, signinGithub, user, loading } = useAuth();

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const axiosInstance = useAxios();

  useEffect(() => {
    if (user && !loading) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   setError("");

  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;

  //   const newUser = { name, email };

  //   try {
  //     const result = await registerUser(email, password);
  //     console.log(result.user);
  //     const response = await fetch("http://localhost:5000/users", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(newUser),
  //     });

  //     const data = await response.json();

  //     if (data.insertedId) {
  //       alert("User registered and saved to DB successfully!");
  //       navigate("/");
  //     }
  //     // ====================
  //     // navigate("/");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  // const handleGoogleRegister = async () => {
  //   try {
  //     const result = await signinGoogle();
  //     // -------
  //     const googleUser = {
  //       name: result.user.displayName,
  //       email: result.user.email,
  //       photo: result.user.photoURL,
  //     };
  //     // ----------
  //     await fetch("http://localhost:5000/users", {
  //       method: "POST",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify(googleUser),
  //     });
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  // const handleGithubRegister = async () => {
  //   try {
  //     const result = await signinGithub();

  //     const githubUser = {
  //       name: result.user.displayName,
  //       email: result.user.email,
  //       photo: result.user.photoURL,
  //     };

  //     await fetch("http://localhost:5000/users", {
  //       method: "POST",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify(githubUser),
  //     });
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { name, email };

    try {
      const result = await registerUser(email, password);
      console.log(result.user);
      const { data } = await axiosInstance.post("/api/users", newUser);
      if (data.insertedId) {
        alert("User registered and saved to DB successfully!");
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const result = await signinGoogle();
      const googleUser = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      };

      const { data } = await axiosInstance.post("/api/users", googleUser);
      console.log(data);

      navigate("/");
      // if (data.insertedId) {}
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGithubRegister = async () => {
    try {
      const result = await signinGithub();
      const githubUser = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      };

      const { data } = await axiosInstance.post("/api/users", githubUser);
      if (data.insertedId) {
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="flex poppins-regular min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      {/* LEFT SIDE: Brand Image and AI Features Section */}
      <div className="hidden lg:flex lg:w-[60%] relative overflow-hidden bg-[#022c22]">
        {/* High-Quality Abstract Tech Image */}
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4638ef7a6?auto=format&fit=crop&q=80&w=2000"
          alt="AI Neural Network"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        />

        <div className="relative z-10 flex flex-col justify-between p-16 text-white w-full">
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

          <div>
            <div className="mb-6 h-1 w-20 bg-[#10b981]"></div>
            <h1 className="text-6xl font-extrabold leading-[1.1] tracking-tight">
              Predictive <br />
              Wealth Analysis.
            </h1>
            <p className="mt-6 text-xl text-emerald-100/60 max-w-md leading-relaxed">
              Register now to harness AI-driven insights for your financial
              future. Institutional-grade security tailored for you.
            </p>
          </div>

          {/* Trust Factors */}
          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
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

      {/* RIGHT SIDE: Registration Form Section */}
      <div className="w-full py-16 lg:w-[40%] flex flex-col justify-center px8 md:px-16 lg:px-20 bg-white">
        <div className="max-w-md w-full mx-auto">
          <header className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Create Account
            </h2>
            <p className="mt-3 text-slate-500 font-medium">
              Join AI.Finance today and start your journey.
            </p>
            <Link
              className="hidden max-lg:flex items-center justify-center mt-3 gap-2 opacity-90 transition-all hover:bg-[#059669] hover:text-white underline text-black backdrop-blur-md py-3 rounded-2xl px-5"
              to={"/"}
            >
              <House /> Back to Home
            </Link>
          </header>

          <form className="space-y-6" onSubmit={handleRegister}>
            {/* Input 1: Full Name */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-[#10b981]/10 focus:border-[#10b981] outline-none transition-all placeholder:text-slate-300"
              />
            </div>
            {/* Input 2: Email */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-[#10b981]/10 focus:border-[#10b981] outline-none transition-all placeholder:text-slate-300"
              />
            </div>
            {/* Input 3: Password */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                Secure Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••••••"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-[#10b981]/10 focus:border-[#10b981] outline-none transition-all placeholder:text-slate-300"
              />
            </div>
            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold py-4 rounded-2xl shadow-xl shadow-emerald-100 transition-all duration-300 hover:scale-[1.02] active:scale-95 mt-2"
            >
              Register Now
            </button>
            {/* ERROR SHOW */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <p className="text-center">
              Already have an account?
              <Link
                to={"/auth/login"}
                className="ml-1.5 font-medium hover:text-green-600 hover:underline"
              >
                Sign In
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
            {/* Google Register Button */}
            <button
              type="button"
              onClick={handleGoogleRegister}
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
              Register with Google
            </button>

            <button
              type="button"
              onClick={handleGithubRegister}
              className="w-full flex items-center justify-center gap-3 bg-[#1e293b] text-white font-bold py-4 rounded-2xl hover:bg-black transition-all active:scale-95 mt-4 shadow-lg shadow-slate-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Continue with GitHub
            </button>
          </form>

          {/* Terms and Conditions */}
          <footer className="mt-8 text-center text-[12px] text-slate-400 leading-relaxed">
            By registering, you agree to our
            <a
              href="#"
              className="mx-1 font-bold text-slate-600 hover:text-emerald-600 underline decoration-slate-200"
            >
              Terms of Service
            </a>
            and
            <a
              href="#"
              className="mx-1 font-bold text-slate-600 hover:text-emerald-600 underline decoration-slate-200"
            >
              Privacy Policy
            </a>
            .
          </footer>
        </div>
      </div>
    </div>
  );
};
export default Register;
