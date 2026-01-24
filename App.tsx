
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Strengths from './components/Strengths';
import Process from './components/Process';
import Branches from './components/Branches';
import Programs from './components/Programs';
import Publications from './components/Publications';
import Franchise from './components/Franchise';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // 화면에서 사라지면 클래스를 제거하여 다음번에 다시 애니메이션이 실행되도록 함
          entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: 0,
      // 상하단 30%씩을 제외한 중앙 40% 영역에서만 애니메이션 활성화
      rootMargin: '-30% 0px -30% 0px'
    });

    // Initial check and observation
    const observeElements = () => {
      const elements = document.querySelectorAll('.text-highlight, .scroll-underline');
      elements.forEach(el => observer.observe(el));
    };

    observeElements();

    // For dynamic content if any
    const timeoutId = setTimeout(observeElements, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="bg-[#F8F5F2] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <Header />
        <main>
          <Hero />
          <Strengths />
          <Process />
          <Programs />
          <Branches />
          <Publications />
          <Franchise />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
