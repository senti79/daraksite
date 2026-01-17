
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const brandText = "책읽는 다락서원";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main text entrance for static lines
      gsap.fromTo(".hero-line-static", 
        { x: 40, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.2 }
      );

      // Typing animation for the brand name
      const tl = gsap.timeline({ delay: 0.8 });
      tl.fromTo(".typing-letter", 
        { display: "none" }, 
        { display: "inline-block", stagger: 0.1, ease: "none" }
      );

      // Blinking cursor animation
      gsap.to(".typing-cursor", {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "power2.inOut"
      });

      // Visual area entrance (Targeting all visual blocks)
      gsap.fromTo(".hero-visual-area", 
        { opacity: 0, scale: 0.95, y: 30 }, 
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 1.2 }
      );

      // Subtitle reveal
      gsap.fromTo(".hero-desc", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 2.2 }
      );

      // Floating decoration
      gsap.to(".floating-blob", {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        duration: "random(4, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  // Shared Image Component to avoid repetition logic issues
  const HeroImage = ({ className = "" }: { className?: string }) => (
    <div className={`hero-visual-area relative ${className}`}>
      <div className="floating-blob absolute -top-10 -left-10 w-40 h-40 bg-[#92400E]/10 rounded-full blur-3xl -z-10"></div>
      <div className="floating-blob absolute -bottom-10 -right-10 w-32 h-32 bg-[#D97706]/5 rounded-full blur-2xl -z-10"></div>
      
      <div className="relative group">
        <div className="absolute -inset-4 border-2 border-[#3D3B3A] rounded-[3rem] transform rotate-3 group-hover:rotate-0 transition-transform duration-700 -z-10"></div>
        <div className="absolute -inset-4 bg-white rounded-[3rem] shadow-lg -z-20"></div>
        
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-2 border-[#92400E]/20">
          <img 
            src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=800" 
            alt="책 읽는 아이" 
            className="w-full h-auto object-cover aspect-[4/5] transform scale-100 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#92400E]/30 to-transparent opacity-60"></div>
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-md transform -rotate-12 border border-[#92400E]/10">
            <span className="text-[#92400E] font-dodum text-sm font-bold tracking-tight">Deep Reading Center</span>
          </div>
        </div>
        <svg className="absolute -bottom-8 -left-8 w-20 h-20 text-[#D97706]/30" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="8 8" />
        </svg>
      </div>
    </div>
  );

  return (
    <section ref={heroRef} className="relative min-h-[85vh] flex items-center bg-[#F8F5F2] py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10 -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Desktop Visual Area (Left) */}
          <HeroImage className="hidden lg:block lg:w-2/5" />

          {/* Text Content Area */}
          <div className="w-full lg:w-3/5 text-center lg:text-left z-10">
            <div className="hero-line-static inline-block mb-6 px-4 py-1.5 rounded-full bg-white border border-[#92400E]/30 text-[#92400E] font-bold text-xs tracking-widest shadow-sm">
              PREMIUM READING ACADEMY
            </div>
            
            <h1 className="text-[#3D3B3A] leading-tight mb-8">
              <span className="hero-line-static block text-4xl md:text-5xl lg:text-6xl font-black mb-2">
                책 한권을
              </span>
              <span className="hero-line-static block text-4xl md:text-5xl lg:text-6xl font-black mb-2">
                온전히 읽는 힘!
              </span>
              
              {/* Brand name with typing animation */}
              <span className="block text-4xl md:text-5xl lg:text-6xl font-black text-[#92400E] mt-8 flex items-center justify-center lg:justify-start">
                {brandText.split("").map((char, i) => (
                  <span key={i} className="typing-letter" style={{ whiteSpace: char === " " ? "pre" : "normal" }}>
                    {char}
                  </span>
                ))}
                <span className="typing-cursor ml-1 inline-block w-1.5 h-10 md:h-12 lg:h-14 bg-[#92400E]"></span>
              </span>
            </h1>

            {/* Mobile Visual Area (Interleaved: Between Brand and Description) */}
            <HeroImage className="lg:hidden w-full max-w-sm mx-auto mb-12" />

            {/* Description Text */}
            <div className="hero-desc max-w-xl mx-auto lg:mx-0">
              <p className="text-lg md:text-xl text-gray-600 font-dodum leading-relaxed">
                글자만 읽는 것이 아니라 마음으로 이해하는 독서.<br className="hidden md:block" /> 
                아이들의 문해력과 사고력의 뿌리를 단단하게 만듭니다.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
