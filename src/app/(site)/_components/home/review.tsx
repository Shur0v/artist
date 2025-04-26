"use client"
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// Custom styles for Swiper pagination
const swiperStyles = `
  .swiper-pagination.swiper-pagination-bullets {
    bottom: -28px !important;
  }
  .swiper-pagination-bullet {
    background: #D9D9D9;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #3d521a !important;
  }
`;

// Review data array
const reviewsData = [
  {
    id: 1,
    review: "We&apos;re really happy to get the services from them. Their services are really good. I highly recommend them to all the people out there.",
    name: "Charlos Angel",
    profession: "Literature",
    rating: 5
  },
  {
    id: 2,
    review: "The quality of work and attention to detail exceeded my expectations. A truly professional service that delivers excellence.",
    name: "Sarah Johnson",
    profession: "Art History",
    rating: 5
  },
  {
    id: 3,
    review: "An incredible experience working with this team. They understand exactly what you need and deliver beyond expectations.",
    name: "Michael Chen",
    profession: "Poetry",
    rating: 5
  },
  {
    id: 4,
    review: "The dedication and passion they bring to their work is remarkable. Still room for improvement.",
    name: "Emma Thompson",
    profession: "Creative Writing",
    rating: 4.5
  },
  {
    id: 5,
    review: "Outstanding service and communication throughout the entire process. Would definitely work with them again.",
    name: "David Rodriguez",
    profession: "Modern Literature",
    rating: 5
  },
  {
    id: 6,
    review: "Their expertise and professionalism made the entire experience smooth and enjoyable. Highly recommended!",
    name: "Lisa Zhang",
    profession: "Classical Studies",
    rating: 5
  },
  {
    id: 7,
    review: "Exceptional quality and attention to detail. They truly care about delivering the best results.",
    name: "James Wilson",
    profession: "Contemporary Art",
    rating: 4
  },
  {
    id: 8,
    review: "A fantastic team that goes above and beyond to ensure client satisfaction. Very impressed!",
    name: "Maria Garcia",
    profession: "Visual Arts",
    rating: 5
  },
  {
    id: 9,
    review: "Their creative approach and technical expertise make them stand out. An absolute pleasure to work with.",
    name: "Robert Kim",
    profession: "Digital Arts",
    rating: 5
  },
  {
    id: 10,
    review: "Consistently delivering high-quality results. They've exceeded my expectations in every way.",
    name: "Sophie Martin",
    profession: "Fine Arts",
    rating: 5
  }
];

const StarRating = ({ rating, isMiddleCard }: { rating: number; isMiddleCard: boolean }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="relative">
          {/* Background star (empty) */}
          <FaStar 
            className={`w-5 h-5 ${isMiddleCard ? 'text-white/30' : 'text-gray-300'}`}
          />
          {/* Foreground star (filled) - handles both full and half stars */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{
              width: `${Math.min(100, Math.max(0, (rating - index) * 100))}%`
            }}
          >
            <FaStar 
              className={`w-5 h-5 ${
                isMiddleCard 
                  ? 'text-white' 
                  : 'text-[#3d521a]'
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviewsData.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviewsData.length - 3 : prevIndex - 1
    );
  };

  const visibleReviews = reviewsData.slice(currentIndex, currentIndex + 3);

  return (
    <div className="main py-20 mx-4 lg:mx-0 overflow-x-hidden md:overflow-x-visible ">
      {/* Add style tag for custom Swiper styles */}
      <style>{swiperStyles}</style>
      
      <div className="container">
        <div className="content relative">
          <div className="self-stretch inline-flex flex-col justify-start items-start gap-6 mb-10">
            <div className="w-[135px] flex flex-col justify-start items-start gap-2">
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <div className="justify-start text-[#4a4c56] text-base font-normal font-['Poppins'] leading-tight">Reviews</div>
                <div className="w-[63px] h-0 outline-[1.50px] outline-offset-[-0.75px] outline-[#3d521a]"></div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="justify-center">
                <span className="text-[#1d1f2c] text-[40px] font-bold font-['Poppins'] leading-[46px]">Reviews That Makes </span>
                <span className="text-[#3d521a] text-[40px] font-bold font-['Poppins'] leading-[46px]">Even More Special</span>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------- */}
          <div className="relative hidden md:block">
            <div className="flex justify-start items-stretch gap-6 transition-all duration-300 ease-in-out">
              {visibleReviews.map((review, index) => (
                <div 
                  key={review.id}
                  className={`w-[384px] min-h-[300px] p-8 ${
                    index === 1 
                      ? 'bg-gradient-to-l from-[#3d521a] to-[#3d521a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]' 
                      : 'opacity-70 bg-white'
                  } rounded-md shadow-md flex flex-col justify-between items-start`}
                >
                  <div className="self-stretch">
                    <div className={`text-lg font-normal font-['Poppins'] leading-[28.80px] ${
                      index === 1 ? 'text-white' : 'text-[#4a4c56]'
                    }`}>
                      &quot;{review.review}&quot;
                    </div>
                  </div>
                  <div className="self-stretch flex justify-between items-start mt-8">
                    <div className="flex flex-col justify-center items-start gap-1">
                      <div className={`text-lg font-medium font-['Poppins'] leading-[28.80px] ${
                        index === 1 ? 'text-white' : 'text-[#1d1f2c]'
                      }`}>
                        {review.name}
                      </div>
                      <div className={`text-base font-normal font-['Poppins'] leading-relaxed ${
                        index === 1 ? 'text-white' : 'text-[#4a4c56]'
                      }`}>
                        {review.profession}
                      </div>
                    </div>
                    <StarRating rating={review.rating} isMiddleCard={index === 1} />
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={prevSlide}
              className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-[#3d521a] text-white rounded-full p-2 hover:bg-[#2a3912] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button 
              onClick={nextSlide}
              className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-[#3d521a] text-white rounded-full p-2 hover:bg-[#2a3912] transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          {/* --------------------------------------------------- */}

          {/* Mobile Version Container - Shows only on screens smaller than 'md' breakpoint */}
          <div className="block md:hidden overflow-hidden">
            {/* Swiper Component for Mobile Carousel */}
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              spaceBetween={20}
              pagination={{ 
                clickable: true
              }}
              modules={[Pagination]}
              className="w-full py-6 pb-12 !overflow-visible"
            >
              {reviewsData.map((review) => (
                <SwiperSlide key={review.id}>
                  {/* Individual Review Card Container
                      - Clean, focused card design
                      - Consistent sizing and spacing
                      - Elegant shadow for depth */}
                  <div 
                    className="min-h-[280px] p-6 bg-white rounded-xl shadow-lg flex flex-col justify-between items-start mx-auto max-w-[380px]"
                    style={{
                      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {/* Star Rating Section - Positioned at the top */}
                    <div className="self-stretch mb-4">
                      <StarRating rating={review.rating} isMiddleCard={false} />
                    </div>

                    {/* Review Text Section - Takes up flexible space in the middle */}
                    <div className="self-stretch flex-grow">
                      <div className="text-base font-normal font-['Poppins'] leading-relaxed text-[#4a4c56]">
                        &quot;{review.review}&quot;
                      </div>
                    </div>

                    {/* Author Information Section - Positioned at the bottom */}
                    <div className="self-stretch mt-4 pt-4 border-t border-gray-100">
                      <div className="flex flex-col justify-center items-start gap-0.5">
                        <div className="text-lg font-medium font-['Poppins'] leading-relaxed text-[#1d1f2c]">
                          {review.name}
                        </div>
                        <div className="text-sm font-normal font-['Poppins'] leading-relaxed text-[#4a4c56]">
                          {review.profession}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* ------------------------------------------------ */}
        </div>
      </div>
    </div>
  );
}
