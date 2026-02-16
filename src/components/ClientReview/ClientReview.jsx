import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

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
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by fintech and banking leaders for fraud detection
          </p>
        </div>

        {/* 3D Coverflow Carousel */}
        <Swiper
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="py-8"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-green-50 rounded-3xl p-6 sm:p-8 shadow-xl h-full flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                <FaQuoteLeft className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-3" />

                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-green-200 shadow-lg object-cover mb-4"
                />

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                  {t.text}
                </p>

                <FaQuoteRight className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-4" />

                <h4 className="font-bold text-base sm:text-lg text-green-700 mb-1">
                  {t.name}
                </h4>
                <p className="text-sm text-green-600 font-semibold mb-2">{t.role}</p>

                <div className="flex justify-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientReview;
