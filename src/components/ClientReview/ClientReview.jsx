/* eslint-disable no-unused-vars */
import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Star } from "lucide-react";
import Container from "../SharedUi/Container";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
    rating: 5,
    text: "RiskRadar reduced suspicious transactions by 80%. Alerts are fast and precise, giving us complete control over our operations.",
  },
  {
    name: "Tanvir Hasan",
    role: "Fintech Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    rating: 5,
    text: "The speed of memory (Redis) is the real game-changer here. Sub-150ms decisions prevent fraud before the money leaves the bank.",
  },
  {
    name: "Nusrat Jahan",
    role: "Security Analyst",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
    rating: 5,
    text: "The system is reliable and accurate. Impossible travel logic and behavioral windowing make compliance simple and efficient.",
  },
  {
    name: "Mahmudul Islam",
    role: "CTO, PaySecure",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
    rating: 5,
    text: "Real-time WebSocket alerts and dashboards provide deep insights into suspicious activities. Truly a high-performance infrastructure.",
  },
];

const ClientReview = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       
        <div className="flex flex-col items-center text-center mb-16">
          
          
          <div className="relative group mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative flex items-center gap-3 bg-white border border-slate-200 px-5 py-2.5 rounded-full shadow-sm">
              <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                   </div>
                 ))}
              </div>
              <div className="h-4 w-[1px] bg-slate-200 mx-1"></div>
              <span className="flex items-center gap-1.5 text-slate-700 font-bold text-xs uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                Verified Reviews
              </span>
              <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-pulse" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Trusted by the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
              Modern Experts.
            </span>
          </h2>

          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={14}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="ml-2 text-slate-900 font-bold">4.9/5</span>
            </div>

            <div className="h-4 w-[1px] bg-slate-200" />

            <p className="text-slate-500 font-medium">
              500+ Financial Entities
            </p>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          // pagination={{ clickable: true, dynamicBullets: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="pb-16 !overflow-visible"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide
              key={idx}
              className="max-w-[380px] py-16 sm:max-w-[480px]"
            >
              {({ isActive }) => (
                <div
                  className={`relative p-10 rounded-[3rem] h-full transition-all duration-700 border ${
                    isActive
                      ? "bg-white border-emerald-100 shadow-[0_40px_80px_-15px_rgba(16,185,129,0.12)] scale-100 opacity-100"
                      : "bg-white/40 backdrop-blur-sm border-slate-100 scale-90 opacity-40 blur-[2px]"
                  }`}
                >
                  {/* Quote Icon */}
                  <div
                    className={`absolute -top-6 -left-6 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 ${
                      isActive
                        ? "bg-emerald-600 text-white scale-110"
                        : "bg-slate-100 text-slate-300"
                    }`}
                  >
                    <FaQuoteLeft size={20} />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-8">
                    {[...Array(t.rating)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-1 rounded-full bg-emerald-500/20"
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          className="h-full bg-emerald-500 rounded-full"
                        />
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-700 text-lg leading-relaxed font-medium mb-10 italic">
                    "{t.text}"
                  </p>

                  {/* Profile */}
                  <div className="flex items-center justify-between border-t border-slate-50 pt-8">
                    <div className="flex items-center gap-4">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-2xl object-cover ring-4 ring-emerald-50"
                      />
                      <div>
                        <h4 className="font-bold text-slate-900">{t.name}</h4>
                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mt-1">
                          {t.role}
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:block">
                      <Sparkles className="text-emerald-200" size={24} />
                    </div>
                  </div>

                  
                  <div className="flex gap-1 mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>

                  
                  <p className="text-slate-600 text-base leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        .swiper-pagination-bullet { 
          background: #94a3b8 !important; 
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active { 
          background: #16a34a !important; 
          width: 30px !important; 
          border-radius: 8px !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default ClientReview;
