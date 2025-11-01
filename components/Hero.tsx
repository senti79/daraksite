
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-title-line", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.2 }
      );
      gsap.fromTo(".hero-subtitle", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-[80vh] flex items-center justify-center bg-[#F8F5F2]">
      <div className="text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#3D3B3A] leading-tight md:leading-snug transform -rotate-2">
          <span className="hero-title-line block"><span className="text-highlight">생각의 깊이를</span> 더하고,</span>
          <span className="hero-title-line block"><span className="text-highlight">세상을 읽는 힘을</span> 키우는 곳.</span>
        </h1>
        <p className="hero-subtitle mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-dodum">
          책읽는 다락서원은 한 권의 책을 온전히 읽어내는 경험을 통해 아이들의 문해력과 사고력을 함께 성장시킵니다.
        </p>
      </div>
    </section>
  );
};

export default Hero;