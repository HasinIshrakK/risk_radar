import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroBanner = () => {
  const slides = [
    {
      id: 1,
      tag: "Real-Time Protection",
      title: "The Speed of Memory, The Security of Intelligence",
      subtitle:
        "RiskRadar delivers sub-150ms fraud detection using Redis-powered behavioral windowing. Secure your financial transactions before fraud happens, not after.",
      image:
        "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg",
    },
    {
      id: 2,
      tag: "Ultra-Low Latency",
      title:
        "Stop Fraudulent Transactions in Real-Time with Sub-Millisecond Precision",
      subtitle:
        "Our weighted scoring engine evaluates time, location, and frequency simultaneously to provide an automated 'Go/No-Go' signal without compromising user experience.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
    },
    {
      id: 3,
      tag: "Behavioral Analytics",
      title: "Advanced Velocity Tracking & Impossible Travel Logic Integration",
      subtitle:
        "Identify 'Transaction Bursts' and geographic anomalies instantly. RiskRadar compares GPS/IP data to detect impossible travel, ensuring global account security.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026",
    },
    {
      id: 4,
      tag: "Smart Decisioning",
      title: "Automated Risk Scoring Engine for Modern FinTech Ecosystems",
      subtitle:
        "From Green (Allow) to Red (Block), our intelligent algorithms handle complex patterns like amount anomalies and failed login throttling with absolute reliability.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
    },
    {
      id: 5,
      tag: "Admin Control",
      title:
        "WebSocket-Powered Live Risk Feed & Centralized Admin Control Center",
      subtitle:
        "Monitor incoming risks in real-time with our administrative dashboard. Toggle account statuses, override flags, and adjust risk weights on the fly.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
    },
  ];

  return (
    <div className="relative mt-22 w-full h-[550px] md:h-[650px] lg:h-[90vh] overflow-hidden bg-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center">
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Green-White Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent"></div>
              </div>

              {/* Content Container */}
              <div className="container mx-auto px-6 md:px-12 lg:px-24 z-10">
                <div className="max-w-3xl  mt12 md:mt20 space-y-4 md:space-y-6">
                  {/* Tagline */}
                  <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold uppercase tracking-wider animate-bounce">
                    {slide.tag}
                  </span>

                  {/* Main Title */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                    {slide.title.split(" ").slice(0, -2).join(" ")}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
                      {" "}
                      {slide.title.split(" ").slice(-2).join(" ")}
                    </span>
                  </h1>

                  {/* Subtitle / Description */}
                  <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl border-l-4 border-green-500 pl-6 italic">
                    {slide.subtitle}
                  </p>

                  {/* Call to Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-6">
                    <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-green-200">
                      Live Demo
                    </button>
                    <button className="px-8 py-4 border-2 border-green-600 text-green-700 hover:bg-green-50 font-bold rounded-lg transition-all">
                      View Documentation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Swiper Controls - Ultimate Modern Tech Style */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          top: auto !important;
          bottom: 60px !important;
          width: 80px !important;
          height: 40px !important;
          background: rgba(255, 255, 255, 0.05) !important;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 4px !important;
          color: #10b981 !important;
          transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .swiper-button-prev {
          left: auto !important;
          right: 135px !important;
        }

        .swiper-button-next {
          right: 45px !important;
          left: auto !important;
        }

        .swiper-button-prev:after {
          content: "PREV" !important;
          font-size: 10px !important;
          font-weight: 800;
          letter-spacing: 2px;
        }
        .swiper-button-next:after {
          content: "NEXT" !important;
          font-size: 10px !important;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #10b981 !important;
          color: #fff !important;
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.5);
          width: 100px !important;
        }

        .swiper-pagination {
          top: 50% !important;
          right: 40px !important;
          left: auto !important;
          transform: translateY(-50%) !important;
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: auto !important;
        }

        .swiper-pagination-bullet {
          width: 4px;
          height: 25px;
          background: #10b981 !important;
          border-radius: 2px;
          opacity: 0.2;
          margin: 0 !important;
          transition: all 0.4s ease;
        }

        .swiper-pagination-bullet-active {
          height: 50px;
          opacity: 1;
          box-shadow: 0 0 15px #10b981;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
          .swiper-pagination {
            right: 15px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroBanner;
