
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
        {
          display: "inline-block",
          stagger: {
            each: 0.1
          },
          ease: "none"
        }
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
      <div className="floating-blob absolute -top-10 -left-10 w-40 h-40 bg-[#D35400]/10 rounded-full blur-3xl -z-10"></div>
      <div className="floating-blob absolute -bottom-10 -right-10 w-32 h-32 bg-[#D35400]/5 rounded-full blur-2xl -z-10"></div>

      <div className="relative group">
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl bg-white">
          <img
            src="/daraksite/read.gif"
            alt="책 읽는 모습"
            className="w-full h-full object-contain aspect-square transform scale-100 group-hover:scale-105 transition-transform duration-1000"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section ref={heroRef} className="relative min-h-[60vh] flex items-center bg-white pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          {/* Desktop Visual Area (Left) */}
          <HeroImage className="hidden lg:block lg:w-2/5 lg:-mt-2" />

          {/* Text Content Area */}
          <div className="w-full lg:w-3/5 text-center lg:text-left z-10">

            <h1 className="text-[#3D3B3A] leading-tight mb-8">
              <span className="hero-line-static block text-4xl md:text-5xl lg:text-6xl font-black mb-2">
                책 한권을
              </span>
              <span className="hero-line-static block text-4xl md:text-5xl lg:text-6xl font-black mb-2">
                온전히 읽는 힘!
              </span>

              {/* Brand name with typing animation */}
              <span className="block text-4xl md:text-5xl lg:text-6xl font-black text-[#D35400] mt-8 flex items-center justify-center lg:justify-start">
                {brandText.split("").map((char, i) => (
                  <span key={i} className="typing-letter" style={{ whiteSpace: char === " " ? "pre" : "normal" }}>
                    {char}
                  </span>
                ))}
                <span className="typing-cursor ml-1 inline-block w-1.5 h-10 md:h-12 lg:h-14 bg-[#D35400]"></span>
              </span>
            </h1>

            {/* Mobile Visual Area (Interleaved: Between Brand and Description) */}
            <HeroImage className="lg:hidden w-full max-w-sm mx-auto mb-12" />

            {/* Description Text */}
            <div className="hero-desc max-w-xl mx-auto lg:mx-0">
              <p className="text-lg md:text-xl text-gray-600  leading-relaxed">
                글자만 읽는 것이 아니라 <br className="md:hidden" />
                <strong className="font-semibold text-[#065F46]">마음으로 이해</strong>하는 독서.<br />
                <br className="md:hidden" />
                아이들의 문해력과 <br className="md:hidden" />
                <strong className="font-semibold text-[#065F46]">사고력의 뿌리</strong>를 단단하게 만듭니다.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Inducer - Centered for both Desktop and Mobile */}
        <div
          onClick={() => document.getElementById('strengths')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-12 lg:mt-32 flex flex-col items-center gap-3 cursor-pointer group animate-fade-in-delayed w-full"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-6 h-10 rounded-full border-2 border-accent-orange/40 flex justify-center p-1.5 transition-colors group-hover:border-accent-orange">
              <div className="w-1 h-2 bg-accent-orange rounded-full animate-scroll-mouse"></div>
            </div>
            <span className="text-xs font-bold text-accent-orange/70 tracking-[0.2em] group-hover:text-accent-orange transition-colors uppercase">
              Scroll to Explore
            </span>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll-mouse {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-scroll-mouse {
          animation: scroll-mouse 1.8s infinite ease-in-out;
        }
        .animate-fade-in-delayed {
          animation: fadeIn 1s ease-out 2.8s both;
        }
      `}</style>
    </section>
  );
};

export default Hero;
