
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
import SectionSeparator from './components/SectionSeparator';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // 밑줄 애니메이션 인지용 아주 짧은 진동 (10ms로 통일)
          if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(10);
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
      const elements = document.querySelectorAll('.text-highlight, .scroll-underline, .separator-dot');
      elements.forEach(el => observer.observe(el));
    };

    observeElements();

    // For dynamic content if any
    const timeoutId = setTimeout(observeElements, 1000);

    const handleFirstInteraction = () => {
      if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
        // 진동 API는 사용자의 명확한 '클릭/터치' 액션이 있어야 활성화됩니다.
        // 스크롤은 유효한 액션으로 인정되지 않는 경우가 많으므로 제외합니다.
        window.navigator.vibrate(10);
      }
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('mousedown', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
    };

    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('mousedown', handleFirstInteraction);
    window.addEventListener('click', handleFirstInteraction);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('mousedown', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  // 강력한 자동 업데이트 로직 (버전 체크)
  useEffect(() => {
    const checkForUpdates = async () => {
      // 로컬 개발 환경에서는 실행하지 않음
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') return;

      // 모바일 기기인지 확인 (User Agent 기반)
      const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (!isMobile) return;

      try {
        // 서버에서 최신 index.html을 캐시 없이 가져옴
        const response = await fetch(window.location.href, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });
        const html = await response.text();

        // Vite 빌드 결과물 중 index-*.js 파일의 해시값을 추출
        const match = html.match(/src="\/daraksite\/assets\/index-([a-zA-Z0-9]+)\.js"/);
        if (match && match[1]) {
          const newHash = match[1];
          const oldHash = localStorage.getItem('app-version-hash');

          if (oldHash && oldHash !== newHash) {
            // 버전이 다르면 로컬 스토리지를 갱신하고 페이지를 강제 새로고침
            localStorage.setItem('app-version-hash', newHash);
            window.location.reload();
          } else if (!oldHash) {
            localStorage.setItem('app-version-hash', newHash);
          }
        }
      } catch (error) {
        console.error('업데이트 확인 중 오류 발생:', error);
      }
    };

    // 1. 앱 로드 시 확인
    checkForUpdates();

    // 2. 사용자가 탭을 다시 활성화할 때(다른 앱 보다가 돌아올 때 등) 확인
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkForUpdates();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <Header />
        <main>
          <Hero />
          <SectionSeparator />
          <Strengths />
          <SectionSeparator />
          <Process />
          <SectionSeparator />
          <Programs />
          <SectionSeparator />
          <Branches />
          <SectionSeparator />
          <Publications />
          <SectionSeparator />
          <Franchise />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
