
import React from 'react';

const iconProps = {
  className: "w-8 h-8 text-[#3D3B3A]",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 2,
};

const icons = {
  Book: () => <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  Ban: () => <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>,
  Books: () => <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>,
  NoHomework: () => <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
  Globe: () => <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293a1 1 0 010 1.414L5.414 8l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zM12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>,
  Pen: () => <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>,
  Target: () => <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6.75 6.75 0 000-13.5 6.75 6.75 0 000 13.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a2.75 2.75 0 000-5.5 2.75 2.75 0 000 5.5z" /></svg>,
  Teacher: () => <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
};

const strengthsData = [
  { icon: <icons.Book />, title: '책 한 권, 통째로 읽기', description: '작품의 전체 구성을 파악하고 문장 사이의 숨은 의미를 찾는 힘을 키웁니다.' },
  { icon: <icons.Ban />, title: '발췌독, 요약독 NO', description: '기계적 읽기가 아닌, 이야기 전체를 이해하며 깊은 감동과 체화를 이끌어냅니다.' },
  { icon: <icons.Books />, title: '연 96권, 깊이 있는 다독', description: '주 2회, 월 8권의 꾸준한 정독으로 독서 습관과 이해력을 동시에 잡습니다.' },
  { icon: <icons.NoHomework />, title: '숙제 없는 독서', description: '학원에서 선생님의 지도 아래 함께 읽고 토론하며 온전히 집중합니다.' },
  { icon: <icons.Globe />, title: '편독 없는 균형 독서', description: '인문, 사회, 과학, 예술 등 전 분야를 아우르며 통합적 사고를 기릅니다.' },
  { icon: <icons.Pen />, title: '100% 서답형·서술형', description: '직접 손으로 문장을 쓰며 생각하고, 가슴으로 지식을 익힙니다.' },
  { icon: <icons.Target />, title: '개별 맞춤형 수업', description: '독서 능력 테스트를 통해 개인의 수준과 성향에 맞춘 최적의 교육을 제공합니다.' },
  { icon: <icons.Teacher />, title: '엄선된 최고의 선생님', description: '엄격한 절차를 통과한 탁월한 선생님들이 아이들의 정신적 성장을 이끕니다.' },
];

const Strengths: React.FC = () => {
  return (
    <section id="strengths" className="py-20 md:py-24 bg-white border-y-2 border-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D3B3A]">무엇이 <span className="text-highlight">다를까요?</span></h2>
          <p className="mt-4 text-lg text-gray-600 font-dodum">책읽는 다락서원만의 독서 교육 철학</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengthsData.map((item, index) => (
              <div 
                key={index} 
                className="strength-card sketch-card bg-[#F8F5F2] p-6 pt-16 flex flex-col"
              >
                <div className="absolute top-3 right-5">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-[#3D3B3A]">{item.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed flex-grow">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
