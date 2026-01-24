
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
          entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: 0,
      rootMargin: '-10% 0px -40% 0px'
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
