
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const strengthsData = [
  { lottie: "/daraksite/read.json", title: '책 한 권, 통째로 읽기', description: '작품의 전체 구성을 파악하고 문장 사이의 숨은 의미를 찾는 힘을 키웁니다.' },
  { lottie: "/daraksite/no.json", title: '발췌독, 요약독 NO', description: '기계적 읽기가 아닌, 이야기 전체를 이해하며 깊은 감동과 체화를 이끌어냅니다.' },
  { lottie: "/daraksite/shelves.json", title: '연 96권, 깊이 있는 다독', description: '주 2회, 월 8권의 꾸준한 정독으로 독서 습관과 이해력을 동시에 잡습니다.' },
  { lottie: "/daraksite/favorite-book.json", title: '숙제 없는 독서', description: '학원에서 선생님의 지도 아래 함께 읽고 토론하며 온전히 집중합니다.' },
  { lottie: "/daraksite/books.json", title: '편독 없는 균형 독서', description: '인문, 사회, 과학, 예술 등 전 분야를 아우르며 통합적 사고를 기릅니다.' },
  { lottie: "/daraksite/writing.json", title: '100% 서답형·서술형', description: '직접 손으로 문장을 쓰며 생각하고, 가슴으로 지식을 익힙니다.' },
  { lottie: "/daraksite/layout.json", title: '개별 맞춤형 수업', description: '독서 능력 테스트를 통해 개인의 수준과 성향에 맞춘 최적의 교육을 제공합니다.' },
  { lottie: "/daraksite/teacher.json", title: '엄선된 최고의 선생님', description: '엄격한 절차를 통과한 탁월한 선생님들이 아이들의 정신적 성장을 이끕니다.' },
];

const Strengths: React.FC = () => {
  return (
    <section id="strengths" className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D3B3A]">무엇이 <span className="text-highlight">다를까요?</span></h2>
          <p className="mt-4 text-lg text-gray-600 ">책읽는 다락서원만의 독서 교육 철학</p>
        </div>

        <div className="relative px-2 md:px-20">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.15}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 30
              },
            }}
            className="pt-10 pb-16 !px-4 md:!px-0"
          >
            {strengthsData.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div
                  className="strength-card sketch-card bg-white p-8 pt-28 flex flex-col min-h-[360px] md:min-h-[380px] h-full group mx-1"
                >
                  <div className="absolute top-6 right-8">
                    <div className="relative w-16 h-16 flex items-center justify-center transition-colors duration-300 overflow-hidden">
                      <DotLottieReact
                        src={item.lottie}
                        loop
                        autoplay
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-2xl font-bold mb-4 text-[#3D3B3A]">{item.title}</h3>
                  <p className="text-base md:text-base text-gray-600 leading-relaxed flex-grow">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style>{`
            .swiper-button-next, .swiper-button-prev {
              color: #BE7E56 !important;
              opacity: 0.15 !important;
              transition: all 0.3s;
              display: none !important;
            }
            @media (min-width: 768px) {
              .swiper-button-next, .swiper-button-prev {
                display: flex !important;
              }
            }
            .swiper-button-next:hover, .swiper-button-prev:hover {
              opacity: 0.8 !important;
            }
            .swiper-button-next::after, .swiper-button-prev::after {
              font-size: 18px !important;
              font-weight: 900 !important;
            }
            .swiper-button-prev {
              left: 0px !important;
            }
            .swiper-button-next {
              right: 0px !important;
            }
            .swiper-pagination-bullet-active {
              background: #BE7E56 !important;
            }
            .swiper-slide {
              height: auto !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Strengths;
