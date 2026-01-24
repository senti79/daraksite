
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
      <div className="floating-blob absolute -top-10 -left-10 w-40 h-40 bg-[#BE7E56]/10 rounded-full blur-3xl -z-10"></div>
      <div className="floating-blob absolute -bottom-10 -right-10 w-32 h-32 bg-[#BE7E56]/5 rounded-full blur-2xl -z-10"></div>

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
    <section ref={heroRef} className="relative min-h-[60vh] flex items-center bg-[#F8F5F2] pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Desktop Visual Area (Left) */}
          <HeroImage className="hidden lg:block lg:w-2/5" />

          {/* Text Content Area */}
          <div className="w-full lg:w-3/5 text-center lg:text-left z-10">
            <div className="hero-line-static inline-block mb-6 px-4 py-1.5 rounded-full bg-white border border-[#BE7E56]/30 text-[#BE7E56] font-bold text-xs tracking-widest shadow-sm">
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
              <span className="block text-4xl md:text-5xl lg:text-6xl font-black text-[#BE7E56] mt-8 flex items-center justify-center lg:justify-start">
                {brandText.split("").map((char, i) => (
                  <span key={i} className="typing-letter" style={{ whiteSpace: char === " " ? "pre" : "normal" }}>
                    {char}
                  </span>
                ))}
                <span className="typing-cursor ml-1 inline-block w-1.5 h-10 md:h-12 lg:h-14 bg-[#BE7E56]"></span>
              </span>
            </h1>

            {/* Mobile Visual Area (Interleaved: Between Brand and Description) */}
            <HeroImage className="lg:hidden w-full max-w-sm mx-auto mb-12" />

            {/* Description Text */}
            <div className="hero-desc max-w-xl mx-auto lg:mx-0">
              <p className="text-lg md:text-xl text-gray-600  leading-relaxed">
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
