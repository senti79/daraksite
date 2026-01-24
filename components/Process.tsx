
import React, { useEffect } from 'react';

const processSteps = [
  { title: '독서 & 문해력 테스트', description: '입회 시 개인별 독서 능력을 정밀하게 진단합니다.' },
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
          <p className="mt-4 text-lg text-gray-600 ">생각의 근육을 키우는 4단계 프로세스</p>
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/daraksite/training.gif"
                alt="학습 훈련 애니메이션"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-black/80 transform -translate-x-1/2"></div>
          {processSteps.map((step, index) => (
            <div key={index} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-5/12"></div>
              <div className="hidden md:block z-10 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold border-4 border-white">{`0${index + 1}`}</div>
              <div className="w-full md:w-5/12 sketch-card bg-white p-8 pt-24 relative overflow-hidden group">
                {/* Decorative Top Bar */}
                <div className="absolute top-0 left-0 w-full h-10 bg-[#BE7E56]/25 flex justify-center items-center gap-4 border-b border-[#BE7E56]/20">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full bg-white border border-[#BE7E56]/30 shadow-inner"></div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-[#3D3B3A] mb-3 relative inline-block">
                  {step.title}
                  <div className="scroll-underline absolute -bottom-1 left-0 h-1.5 bg-[#BE7E56] rounded-full transform -rotate-0.5 transition-all duration-700"></div>
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-[#3D3B3A]">
            <span className="text-highlight scroll-underline after:animate-none">문해력 테스트</span>
          </h3>
          <p className="mt-4 text-lg text-gray-600 ">
            다락서원에서 개발한 <br className="md:hidden" />
            국내 최초 100% 서술형 테스트로 <br className="md:hidden" />
            문해력을 정확히 진단해드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img src="/daraksite/test2.png" alt="문해력 테스트 샘플 2" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img src="/daraksite/test1.png" alt="문해력 테스트 샘플 1" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
