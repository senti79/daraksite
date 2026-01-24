
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const programData = {
  '초등 저학년': [
    { name: '초등 봄 1 (10단계)', description: '우리말의 아름다움을 담은 책 80여 권을 읽고 씁니다.', color: 'border-[#BE7E56]' },
    { name: '초등 봄 2 (10단계)', description: '인문을 넘어 사회로 시각을 확장하는 책 80여 권을 읽고 씁니다.', color: 'border-[#BE7E56]' },
    { name: '초등 여름 1 (10단계)', description: '인문, 사회, 과학 등 다양한 분야의 책 80여 권을 읽고 씁니다.', color: 'border-[#BE7E56]' },
  ],
  '초등 고학년': [
    { name: '초등 여름 2 (9단계)', description: '인문, 사회, 과학, 예술, 철학 등 72여 권을 읽고 씁니다.', color: 'border-[#BE7E56]' },
    { name: '초등 가을 (10단계)', description: '물, 화, 생, 지, 경제, 법 등 심화 분야 80여 권을 읽고 씁니다.', color: 'border-[#BE7E56]' },
    { name: '초등 겨울 (9단계)', description: '중등 교과 연계 도서 위주로 72여 권을 읽고 씁니다.', color: 'border-[#BE7E56]' },
  ],
  '중등': [
    { name: '중등 봄 (9단계)', description: '중·고등 교과 수록 인문, 사회, 과학 도서 70여 권을 읽습니다.', color: 'border-[#BE7E56]' },
    { name: '중등 여름 (6단계)', description: '고등 내신 및 수능 독서 완벽 대비를 위한 40여 권을 읽습니다.', color: 'border-[#BE7E56]' },
  ],
  '역사': [
    { name: '초등 한국사', description: '구석기부터 근현대사까지 책 50여 권으로 한국사 흐름을 잡습니다.', color: 'border-[#BE7E56]' },
    { name: '중등 한국사', description: '선사시대부터 근현대까지, 중등 한국사를 한 번에 끝냅니다.', color: 'border-[#BE7E56]' },
    { name: '중등 세계사', description: '선사시대부터 근현대사까지, 중·고등 세계사를 한 번에 끝냅니다.', color: 'border-[#BE7E56]' },
  ],
};

type Category = keyof typeof programData;

const Programs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('초등 저학년');
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.program-card',
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );
    }, cardsRef);
    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section id="programs" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D3B3A]">성장 단계별 교육 프로그램</h2>
          <p className="mt-4 text-lg text-gray-600 ">"현장의 경험으로 매년 더 좋은 책을 발굴하고 문항을 만듭니다."</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {Object.keys(programData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as Category)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${activeTab === tab ? 'bg-[#BE7E56] text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programData[activeTab].map((program, index) => (
            <div key={index} className={`program-card p-8 rounded-2xl bg-[#F8F5F2] border-l-4 ${program.color} flex flex-col shadow-sm hover:shadow-md transition-shadow`}>
              <h3 className="text-xl font-bold text-[#3D3B3A] mb-2">{program.name}</h3>
              <p className="text-gray-700 flex-grow">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
