import React, { useEffect } from 'react';
import SectionSeparator from './SectionSeparator';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const processSteps = [
  { title: '문해력 테스트', description: '입회 후 문해력 및 독서능력을 책읽는 다락서원에서 자체 개발한 서술형 평가 시스템으로 정밀하게 진단합니다.' },
  { title: '책 한 권 통째로 읽기', description: '선생님의 지도 아래 작품 전체를 깊이 있게 정독합니다.' },
  { title: '내용 이해와 서답형 글쓰기', description: '책의 핵심 내용을 파악하고 질문에 답하며 이해를 확인합니다.' },
  { title: '주제별 서술형 글쓰기', description: '자신의 생각을 논리적으로 풀어내는 심화 글쓰기를 진행합니다.' },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D3B3A]"><span className="text-highlight">체계적인 학습 과정</span></h2>
          <p className="mt-4 text-lg text-gray-600 ">책읽는 다락서원 4단계 시스템</p>
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/training.gif"
                alt="학습 훈련 애니메이션"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-black/80 transform -translate-x-1/2"></div>
          {processSteps.map((step, index) => (
            <div key={index} className={`mb-12 ${index === processSteps.length - 1 ? 'md:mb-32' : 'md:mb-12'} flex items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-5/12"></div>
              <div className="hidden md:block z-10 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold border-4 border-white">{`0${index + 1}`}</div>
              <div className="w-full md:w-5/12 sketch-card bg-white p-8 pt-24 relative overflow-hidden group">
                {/* Decorative Top Bar */}
                <div className="absolute top-0 left-0 w-full h-10 bg-[#065F46]/25 flex justify-center items-center gap-4 border-b border-[#065F46]/20">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full bg-white border border-[#065F46]/40 shadow-inner"></div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-[#3D3B3A] mb-3 relative inline-block">
                  {step.title}
                  <div className="scroll-underline absolute -bottom-1 left-0 h-1.5 bg-[#D35400] rounded-full transform -rotate-0.5 transition-all duration-700"></div>
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <SectionSeparator />

        <div className="text-center mt-12 md:mt-20 mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-[#3D3B3A]">
            <span className="text-highlight">문해력 테스트</span>
          </h3>
          <p className="mt-4 text-lg text-gray-600 ">
            책읽는 다락서원에서 개발한 <br className="md:hidden" />
            <span className="font-bold text-[#065F46]">국내 최초 100% 서술형 답안</span>으로 <br />
            문해력을 정확히 진단합니다.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            className="rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          >
            {['test1.png', 'test3.png', 'test2.png', 'test4.png', 'test5.png', 'test6.png'].map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white">
                  <img
                    src={`/${img}`}
                    alt={`문해력 테스트 샘플 ${idx + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style>{`
          #process .swiper-button-next, 
          #process .swiper-button-prev {
              color: #D35400 !important;
              transform: scale(0.6);
          }
          #process .swiper-pagination-bullet-active {
              background: #D35400 !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Process;
