import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const qualifications = [
  '책과 글쓰기를 사랑하는 분',
  '아이들 교육에 사명감을 가진 분',
  '독서, 논술 교육 경력자 우대',
  '초·중등 교사 경력자 우대',
  '교육청 신고 및 등록에 적격한 분',
];

const faqs = [
  { q: '개원 시 필요한 공간은 어느 정도인가요?', a: '교육청 인가가 가능한 교습소 또는 학원 공간이면 충분합니다. 지역적 특성을 고려해 본부와 긴밀한 협의 후 결정합니다.' },
  { q: '선생님 교육은 어떻게 이루어지나요?', a: '책읽는 다락서원의 선생님이 되기 위해서는 본사에서 정한 일정 시간의 교육 및 실습 과정을 이수해야 합니다.' },
  { q: '초기 개원 비용은 어느 정도인가요?', a: '필독서 1,000여 권 구입 비용, 가맹비 330만 원, 교육비 55만 원이 발생합니다. 합리적인 비용으로 시작할 수 있습니다. (인테리어비 강제 규정 없음)' },
  { q: '가맹비 외 분원이 본사에 지급해야 할 비용 있나요?', a: '원비의 8.5%가량이 교재비입니다. 이외의 다른 비용이 없습니다.' },
  { q: '다락서원 운영의 가장 큰 장점은 무엇인가요?', a: '정해진 시간에만 수업하는 시스템으로 보강 부담이 없으며, 본사 직영점 운영 노하우를 실시간으로 공유받을 수 있습니다. 본사가 직영원을 운영하면서 교재를 지속적으로 업데이트합니다.' },
];

const AccordionItem: React.FC<{ q: string; a: string; isOpen: boolean; onClick: () => void }> = ({ q, a, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          height: isOpen ? 'auto' : 0,
          duration: 0.4,
          ease: 'power2.inOut'
        });
      }
    }, itemRef);

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <div ref={itemRef} className="border-b border-gray-300">
      <button onClick={onClick} className="w-full text-left py-5 px-6 flex justify-between items-center focus:outline-none">
        <span className="text-lg font-semibold text-[#3D3B3A]">{q}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-[#D4A373]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div ref={contentRef} className="overflow-hidden h-0">
        <p className="px-6 pb-5 text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const Franchise: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="franchise" className="py-20 lg:pt-32 lg:pb-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D3B3A]"><span className="text-highlight">가맹 문의</span></h2>

          <div className="mt-8 lg:mt-20 mb-6 lg:mb-8 flex justify-center">
            <img src="/darak.png" alt="책읽는 다락서원 로고" className="h-16 lg:h-32 w-auto opacity-95" />
          </div>

          <p className="mt-4 text-lg text-gray-600 ">
            책읽는 다락서원과 함께 <br className="md:hidden" />
            아이들의 미래를 열어갈 <br className="md:hidden" /> 원장님을 모십니다.
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <a href="tel:010-8428-2478" className="group flex items-center gap-2.5 bg-white border-2 border-[#065F46] px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-[#065F46] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#D35400]/10 group-hover:bg-white/20 animate-jelly-bounce">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#D35400] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
              </span>
              <span className="text-base md:text-lg font-bold">010-8428-2478</span>
            </a>

            <a href="tel:010-3482-2016" className="group flex items-center gap-2.5 bg-white border-2 border-[#065F46] px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-[#065F46] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#D35400]/10 group-hover:bg-white/20 animate-jelly-bounce">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#D35400] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
              </span>
              <span className="text-base md:text-lg font-bold">010-3482-2016</span>
            </a>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="sketch-card bg-white p-5 md:p-8 pt-20 md:pt-24 relative overflow-hidden flex flex-col">
            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 w-full h-10 bg-[#065F46]/25 flex justify-center items-center gap-4 border-b border-[#065F46]/20">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full bg-white border border-[#065F46]/40 shadow-inner"></div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <h3 className="text-2xl font-bold text-[#D35400] uppercase tracking-wider">개원 자격</h3>
              <div className="w-20 h-20 md:w-24 md:h-24">
                <DotLottieReact
                  src="/human-resources.json"
                  loop
                  autoplay
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-start gap-3 md:gap-6">
              {qualifications.map((q, i) => (
                <div key={i} className="flex items-center justify-center md:justify-start bg-white px-4 md:px-5 py-3 rounded-xl border border-gray-200 shadow-sm transition-transform hover:scale-105 w-full md:w-auto">
                  <span className="hidden md:inline text-[#D35400] font-bold mr-3 text-xl">✓</span>
                  <span className="font-semibold text-[#3D3B3A] text-base md:text-lg text-center md:text-left">{q}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="sketch-card bg-white relative overflow-hidden flex flex-col">
            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 w-full h-10 bg-[#065F46]/25 flex justify-center items-center gap-4 border-b border-[#065F46]/20">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full bg-white border border-[#065F46]/40 shadow-inner"></div>
              ))}
            </div>

            <div className="p-6 pt-24 border-b border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4">
              <h3 className="text-2xl font-bold text-[#D35400] uppercase tracking-wider">자주 묻는 질문</h3>
              <div className="w-20 h-20 md:w-24 md:h-24">
                <DotLottieReact
                  src="/q-and-a.json"
                  loop
                  autoplay
                />
              </div>
            </div>
            <div className="pb-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes jelly-bounce {
            0%, 100% { transform: translateY(0) scaleY(1) scaleX(1); }
            20% { transform: translateY(-7px) scaleY(1.2) scaleX(0.85); }
            40% { transform: translateY(0) scaleY(0.8) scaleX(1.2); }
            60% { transform: translateY(-3px) scaleY(1.1) scaleX(0.9); }
            80% { transform: translateY(0) scaleY(0.95) scaleX(1.05); }
          }
          .animate-jelly-bounce {
            animation: jelly-bounce 2s infinite ease-in-out;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Franchise;
