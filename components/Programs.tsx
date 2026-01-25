
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const programData = {
  '초등': [
    { name: '초등 새봄(10단계)', description: '우리말의 어휘와 문장, 이야기를 담은 책 80권을 읽고 글을 씁니다.', color: 'border-[#BE7E56]' },
    { name: '초등 봄(10단계)', description: '인문을 넘어 사회로 확장한 80권을 읽고 글을 씁니다.', color: 'border-[#BE7E56]' },
    { name: '초등 여름(10단계)', description: '인문, 사회, 과학 등 다양한 분야의 책 80권을 읽고 글을 씁니다.', color: 'border-[#BE7E56]' },
    { name: '초등 가을(9단계)', description: '인문, 사회, 과학, 예술, 철학 등 다양한 분야의 책 72권을 읽고 글을 씁니다.', color: 'border-[#BE7E56]' },
    { name: '초등 겨울(9단계)', description: '인문, 과학, 사회, 경제, 예술, 법, 철학, 역사 분야의 책 72권을 읽고 글을 씁니다.', color: 'border-[#BE7E56]' },
    { name: '초등 한국사(6단계)', description: '구석기에서 근현대사까지 책 50권을 읽고 글을 씁니다.', color: 'border-[#BE7E56]' },
    { name: '예비 중등 교과 연계(12단계)', description: '국어, 인문, 사회, 과학 등 중등 교과에 수록된 책 위주로 65권을 읽고 글을 씁니다.', color: 'border-[#BE7E56]' },
  ],
  '중등': [
    { name: '국어 연계(중등 2, 3학년)', description: '2022년 개정 교육 국어 작품을 이해, 글쓰기까지 완성합니다.', color: 'border-[#BE7E56]' },
    { name: '중등 봄(8단계)', description: '중.고등 교과에 수록된 인문, 사회, 과학 분야 책 50여 권을 읽고 글을 씁니다.', color: 'border-[#BE7E56]' },
    { name: '중등 여름(5단계)', description: '고등 내신 및 모의고사 대비, 수능 완벽 대비 책 30여 권을 읽고 글을 씁니다.', color: 'border-[#BE7E56]' },
    { name: '중등 한국사', description: '중학교 한국사 한 번에 완성합니다. (한국사 편지 전권)', color: 'border-[#BE7E56]' },
    { name: '중등 세계사', description: '중학교 세계사 한 번에 완성합니다. (공부가 되는 세계사 전권)', color: 'border-[#BE7E56]' },
  ],
  '고등': [
    { name: '고등 국어 연계(5권)', description: '2022년 개정 고등 국어 작품 30여 작품을 이해, 글쓰기까지 완성합니다.', color: 'border-[#BE7E56]' },
    { name: '고전을 읽다(2권)', description: '『총균쇠』, 『사피엔스』, 『죽음의 수용소에서』, 『흠흠신서』 등 동서양 고전 (고등학교 생기부에 활용)', color: 'border-[#BE7E56]' },
    { name: '고등 봄(5단계)', description: '고등 심화 내신 및 모의고사 수록 작품 위주의 책 25권을 읽고 글을 씁니다.', color: 'border-[#BE7E56]' },
    { name: '고등 여름(5단계)', description: '청소년 토지 12권을 비롯한 인문, 철학 위주의 책 30여 권을 읽고 글을 씁니다.', color: 'border-[#BE7E56]' },
  ],
};

type Category = keyof typeof programData;

const Programs: React.FC = () => {
  const categories = Object.keys(programData) as Category[];
  const [activeTab, setActiveTab] = useState<Category>(categories[0]);
  const cardsRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (window.innerWidth < 768) return; // Disable on mobile
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = categories.indexOf(prev);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex];
      });
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade out current cards
      gsap.fromTo('.program-card',
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
    }, cardsRef);
    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section id="programs" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D3B3A]"><span className="text-highlight">단계별 교육 프로그램</span></h2>
          <p className="mt-4 text-lg text-gray-600 ">
            "현장의 경험으로 매년 더 좋은 책을 <br className="md:hidden" />
            발굴하고 문항을 만듭니다."
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/daraksite/study.gif"
                alt="학습 모습 애니메이션"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                startAutoPlay(); // Reset timer on manual click
              }}
              className={`relative px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 overflow-hidden ${activeTab === tab ? 'bg-[#BE7E56] text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              <span className="relative z-10">{tab}</span>
              {activeTab === tab && (
                <div
                  className="absolute bottom-0 left-0 h-1 bg-white/40 hidden md:block"
                  style={{
                    animation: 'progress 3s linear forwards'
                  }}
                />
              )}
            </button>
          ))}
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {programData[activeTab].map((program, index) => (
            <div key={`${activeTab}-${index}`} className={`program-card p-8 rounded-2xl bg-white border-l-4 ${program.color} flex flex-col shadow-sm hover:shadow-md transition-shadow`}>
              <h3 className="text-xl font-bold text-[#3D3B3A] mb-2">{program.name}</h3>
              <p className="text-gray-700 flex-grow">{program.description}</p>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Programs;
