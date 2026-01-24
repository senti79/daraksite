
import React from 'react';

const processSteps = [
  { title: '독서 & 문해력 평가', description: '입회 시 개인별 독서 능력을 정밀하게 진단합니다.' },
  { title: '책 한 권 통째로 읽기', description: '선생님의 지도 아래 작품 전체를 깊이 있게 정독합니다.' },
  { title: '내용 이해와 서답형 글쓰기', description: '책의 핵심 내용을 파악하고 질문에 답하며 이해를 확인합니다.' },
  { title: '주제별 서술형 글쓰기', description: '자신의 생각을 논리적으로 풀어내는 심화 글쓰기를 진행합니다.' },
];

const supplementaryLearning = [
  { level: '초등 저학년', skills: '속담, 고사성어', img: 'https://picsum.photos/seed/lowgrade/400/300' },
  { level: '초등 고학년', skills: '고사성어, 관용표현', img: 'https://picsum.photos/seed/highgrade/400/300' },
  { level: '중등', skills: '수능 대비 문학', img: 'https://picsum.photos/seed/middle/400/300' },
]

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-24 bg-[#F8F5F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D3B3A]"><span className="text-highlight">체계적인 학습 과정</span></h2>
          <p className="mt-4 text-lg text-gray-600 ">생각의 근육을 키우는 4단계 프로세스</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-black/80 transform -translate-x-1/2"></div>
          {processSteps.map((step, index) => (
            <div key={index} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-5/12"></div>
              <div className="hidden md:block z-10 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold border-4 border-[#F8F5F2]">{`0${index + 1}`}</div>
              <div className="w-full md:w-5/12 sketch-card bg-white p-8 pt-16 relative overflow-hidden group">
                {/* Notebook Binder Style Accent */}
                <div className="absolute top-0 left-0 w-full h-8 bg-[#BE7E56] flex justify-center items-center gap-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-white border border-[#3D3B3A]/10 shadow-[inner_1px_1px_1px_rgba(0,0,0,0.05)]"></div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-[#3D3B3A] mb-3 relative inline-block">
                  {step.title}
                  <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#BE7E56] rounded-full transform -rotate-0.5 transition-colors"></div>
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-[#3D3B3A]"><span className="text-highlight">어휘력 & 독해력 향상</span></h3>
          <p className="mt-4 text-lg text-gray-600 ">기본기를 탄탄하게 다지는 추가 학습</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {supplementaryLearning.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border-2 border-black overflow-hidden group">
              <div className="p-2">
                <div className="dashed-border">
                  <img src={item.img} alt={item.level} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#BE7E56]">{item.level}</h4>
                <p className="mt-2 text-gray-700">{item.skills}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
