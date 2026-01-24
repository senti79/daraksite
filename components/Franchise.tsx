
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const qualifications = [
  '책과 글쓰기를 사랑하는 분',
  '아이들 교육에 사명감을 가진 분',
  '독서, 논술 교육 경력자 우대',
  '초·중등 교사 경력자 우대',
  '교육청 신고 및 등록에 적격한 분',
];

const faqs = [
  { q: '개원 시 필요한 공간은 어느 정도인가요?', a: '교육청 인가가 가능한 교습소 또는 학원 공간이면 충분합니다. 지역적 특성을 고려해 본부와 긴밀한 협의 후 결정합니다.' },
  { q: '선생님 교육은 어떻게 이루어지나요?', a: '책읽는 다락서원의 선생님이 되기 위해선, 기본적으로 50시간의 체계적인 교육 및 실습 과정을 이수해야 합니다.' },
  { q: '초기 개원 비용은 어느 정도인가요?', a: '필독서 1,000여 권 구입 비용, 가맹비 330만 원, 교육비 55만 원이 발생합니다. 합리적인 비용으로 시작할 수 있습니다.' },
  { q: '회비 및 교재비는 어떻게 되나요?', a: '월 회비는 지역 교육청 기준에 맞춰 15~20만원 사이에서 자율 결정합니다. 다락서원은 아이들에게 별도의 교재비를 받지 않아 학부모 부담을 덜었습니다.' },
  { q: '다락서원 운영의 가장 큰 장점은 무엇인가요?', a: '정해진 시간에만 수업하는 시스템으로 보강 부담이 없으며, 본사 직영점 운영 노하우를 실시간으로 공유받을 수 있습니다. 교재비 외 추가 비용이 없어 안정적인 수입이 가능합니다.' },
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
    <section id="franchise" className="py-20 md:py-32 bg-[#F8F5F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D3B3A]"><span className="text-highlight">가맹 문의</span></h2>
          <p className="mt-4 text-lg text-gray-600 ">책읽는 다락서원과 함께 아이들의 미래를 열어갈 원장님을 모십니다.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="sketch-card bg-white p-8 pt-24 relative overflow-hidden">
            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 w-full h-10 bg-[#BE7E56]/10 flex justify-center items-center gap-4 border-b border-[#BE7E56]/20">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full bg-white border border-[#BE7E56]/30 shadow-inner"></div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#BE7E56] mb-6">개원 자격</h3>
            <ul className="space-y-3">
              {qualifications.map((q, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#BE7E56] mr-3 mt-1">✓</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sketch-card bg-white relative overflow-hidden">
            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 w-full h-10 bg-[#BE7E56] flex justify-center items-center gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/30 border border-white/20"></div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#BE7E56] p-6 pt-24 border-b border-gray-300 text-center">자주 묻는 질문</h3>
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
      </div>
    </section>
  );
};

export default Franchise;
