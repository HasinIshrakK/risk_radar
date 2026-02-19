import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { MessageSquareQuote, ShieldCheck, Sparkles } from 'lucide-react'; // Using Lucide for the badge icon

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
    rating: 5,
    text: "This fraud detection system reduced suspicious transactions by 80%. Alerts are fast and precise, giving us complete control over our operations.",
  },
  {
    name: "Tanvir Hasan",
    role: "Fintech Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    rating: 5,
    text: "AI-based monitoring works flawlessly. Real-time alerts help us prevent fraud before it impacts our users.",
  },
  {
    name: "Nusrat Jahan",
    role: "Security Analyst",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
    rating: 5,
    text: "The system is reliable and accurate. Fraud rules and reports are easy to manage, making compliance simple and efficient.",
  },
  {
    name: "Mahmudul Islam",
    role: "CTO, PaySecure",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
    rating: 5,
    text: "Integration was smooth. Alerts and dashboards provide deep insights into suspicious activities. Truly a game-changer for our security.",
  },
  {
    name: "Sabbir Ahmed",
    role: "Digital Banking Lead",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop",
    rating: 5,
    text: "We noticed immediate improvement in fraud detection. Easy to use and very effective in preventing losses.",
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

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight italic">
            What Experts <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Think.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl font-medium">
            Join 500+ fintech companies securing their transactions with our AI-driven engine.
          </p>
        </div>

        <Swiper
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          effect="coverflow"
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="pb-20 pt-10 !overflow-visible"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} className="max-w-[340px] sm:max-w-[420px]">
              {({ isActive }) => (
                <div className={`
                  relative p-8 rounded-[2.5rem] h-full transition-all duration-500 border
                  ${isActive 
                    ? 'bg-white border-green-100 shadow-[0_40px_60px_-15px_rgba(22,163,74,0.15)] scale-105 opacity-100 blur-0' 
                    : 'bg-white/60 border-slate-100 scale-90 blur-[1px] opacity-40'
                  }
                `}>
                  {/* Floating Quote Icon */}
                  <div className={`absolute -top-5 -right-2 p-4 rounded-2xl shadow-lg transition-all duration-500
                    ${isActive ? 'bg-green-600 text-white rotate-0' : 'bg-slate-200 text-slate-400 rotate-12'}`}>
                    <FaQuoteLeft size={24} />
                  </div>

                  {/* Profile Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-16 h-16 rounded-2xl object-cover ring-4 ring-green-50 shadow-sm"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-sm font-semibold text-green-600">
                        {t.role}
                      </p>
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