
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
          // 밑줄 애니메이션 인지용 아주 짧은 진동 (기존 2초에서 40ms로 단축)
          if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(40);
          }
        } else {
          // 화면에서 사라지면 클래스를 제거하여 다음번에 다시 애니메이션이 실행되도록 함
          entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: 0,
      // 상단 마진을 0으로 설정하여 최상단에 도달할 때까지 애니메이션 유지 (하단은 30% 지점에서 시작)
      rootMargin: '0px 0px -30% 0px'
    });

    // Initial check and observation
    const observeElements = () => {
      const elements = document.querySelectorAll('.text-highlight, .scroll-underline');
      elements.forEach(el => observer.observe(el));
    };

    observeElements();

    // For dynamic content if any
    const timeoutId = setTimeout(observeElements, 1000);

    // 사용자의 첫 터치 시 진동 권한 획득을 위한 이벤트 리스너
    const handleFirstTouch = () => {
      if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(1); // 아주 짧은 진동으로 권한 획득 유도
      }
      window.removeEventListener('touchstart', handleFirstTouch);
      window.removeEventListener('mousedown', handleFirstTouch);
    };

    window.addEventListener('touchstart', handleFirstTouch);
    window.addEventListener('mousedown', handleFirstTouch);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
      window.removeEventListener('touchstart', handleFirstTouch);
      window.removeEventListener('mousedown', handleFirstTouch);
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
