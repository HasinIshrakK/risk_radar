/* eslint-disable no-unused-vars */
// export default ClientReview;
import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Star } from "lucide-react";
import Container from "../SharedUi/Container";

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
    <section className="relative overflow-hidden">
      <Container>
        {/* Modern Header Section */}
        <div className="flex flex-col items-center text-center mb14 md:mb20">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-[0.2em]">
              Security Verified Reviews
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Trusted by the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
              Modern Experts.
            </span>
          </h2>

          <div className="flex items-center gap-6 mt-2">
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

        {/* Swiper Section */}
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
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="pb-16 !overflow-visible"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} className="max-w-95 py-16 sm:max-w-120">
              {({ isActive }) => (
                <div
                  className={`
                    relative p-10 rounded-[3rem] h-full transition-all duration-700 border
                    ${
                      isActive
                        ? "bg-white border-emerald-100 shadow-[0_40px_80px_-15px_rgba(16,185,129,0.12)] scale-100 opacity-100"
                        : "bg-white/40 backdrop-blur-sm border-slate-100 scale-90 opacity-40 blur-[2px]"
                    }
                  `}
                >
                  {/* Glass Quote Badge */}
                  <div
                    className={`
                    absolute -top-6 -left-6 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500
                    ${isActive ? "bg-emerald-600 text-white scale-110" : "bg-slate-100 text-slate-300"}
                  `}
                  >
                    <FaQuoteLeft size={20} />
                  </div>

                  {/* Rating Pips */}
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

                  {/* Profile Section */}
                  <div className="flex items-center justify-between border-t border-slate-50 pt-8">
                    <div className="flex items-center gap-4">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-2xl object-cover ring-4 ring-emerald-50"
                      />
                      <div>
                        <h4 className="font-bold text-slate-900 leading-tight tracking-tight">
                          {t.name}
                        </h4>
                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mt-1">
                          {t.role}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <Sparkles className="text-emerald-200" size={24} />
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default ClientReview;
