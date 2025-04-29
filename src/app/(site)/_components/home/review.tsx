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
    review: "Her writing is steeped in symbolism… is  made of different terrains of meanings that paint with words where the poet makes the unraveling of the third person pronoun a spiritual rebirth that reaches deep flight into existence and one’s being; as the poet comments: “It’s important to write in the first person pronoun, the pronoun of the historian, the witness, the documentarian, the analyst, the creator, the one who defies the pains of silence or its comforts.",
    name: "Dr. Fatma Lakhdhar",
    profession: "Writer, literary Critic, University of Tunis",
    rating: 5
  },
  {
    id: 2,
    review: "نوع الكتابة التي توختها الشاعرة موغل في الرمزية... يتكون من تضاريس معنوية مختلفة... فهو شعر يستكشف أغوارالذات والنّفسيات ويعمد إلى رسم بالكلمات، لتجعل فيها من انسلاخها عن ضمير الغائب انبعاثا روحيّا يحقّق لها التحليق بعيدا في الكون وفي الكيان كما تضيف الشاعرة: الكتابة بالانا ضمير الحاضر المؤرخ الشاهِد، الموثِق، المحلِل، المبدِع، المتحدِي لعذاب الصمت أو راحته",
    name: "د. فاطمة الأخضر",
    profession: "",
    rating: 5
  },
  {
    id: 3,
    review: "Her poetic writing is fresh, powerful... it commands attention and mandates its own articulations of verb and meaning. It establishes an innovation in the emotional and the esthetic in this North American context. But her writing goes beyond [this context] thanks to her quest for the universal... Pearls of Love... Her reflections on Poetry are sublime...A warrior for light...",
    name: "",
    profession: "",
    rating: 5
  },
  {
    id: 4,
    review: "Son écriture poétique est fraiche et forte qui force l’attention et exige ses propres articulations compréhensives verbales. C’est une mise au point affectif et esthétique dans ce contexte nord-américain. Mais son écriture va plus loin grâce à cette quête de l’universel ... perles d’Amour... sa réflexion sur la poésie est sublime...une guerrière de la lumière... C’est une grande joie et un immense honneur d’avoir cette écrivaine dans Le Maghreb Littéraire...",
    name: "Najib Redouane",
    profession: "Literary critic Chief editor of the international Le Maghreb Littéraire",
    rating: 5
  },
  {
    id: 5,
    review: "Gharbi’s visuals read like poems and her poems read like poems. She dissects meaning and reinstates it in a narrative context that embraces forces of an intuitive nature...”“L’art visuel de Gharbi se lit comme des poèmes et ses poèmes se lisent comme de l’art visuel… Elle dissèque le sens et le réintègre dans un contexte de récit qui embrasse des forces d’une nature intuitive…",
    name: "Joe Fedderson",
    profession: "American Artist",
    rating: 5
  },
  {
    id: 6,
    review: "...Tunisian-born artist/poet Rajaa A. Gharbi enthralled the audience at her poetry reading and book signing... L'artiste et poète d'origine Tunisienne Rajaa Gharbi a emerveillé l'audience pendant sa lecture et signature de livre à l'espace culturel de l'ambassade de Tunisie...",
    name: "The Washington Report on Middle East Affairs",
    profession: "",
    rating: 5
  },
  {
    id: 7,
    review: "…In I-dentity”, the poetic voice employs an image – metaphor – that comes back to haunt the fortunate reader. This successful metaphor is but one of many in this delightful book of words and images",
    name: "James Wilson",
    profession: "Contemporary Art",
    rating: 5
  },
  {
    id: 8,
    review: "...Dans le poème “I-Dentity” la voix poetique emploie une image-métaphore qui revient pour hanter le chanceux lecteur",
    name: "Dena Bugel-Shunra Literary and Judiciary Hebrew Translator",
    profession: "Proteus publication",
    rating: 5
  },
  {
    id: 9,
    review: "...I was moved by both the scope and depth of her work.  Her strength of expression in the English language is extraordinary",
    name: "",
    profession: "",
    rating: 5
  },
  {
    id: 10,
    review: "...J’étais touchée aussi bien par l’étendue que par la profondeur de son travail.  La force de son expression dans la langue anglaise est extraordinaire.",
    name: "Malti Greenberg",
    profession: "Reader",
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
