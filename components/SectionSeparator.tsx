
import React from 'react';

const SectionSeparator: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center py-6 md:py-10 gap-20">
            <svg width="15" height="15" viewBox="0 0 100 100" className="separator-dot opacity-30 transition-all duration-700">
                <path fill="currentColor" d="M50,15 C25,15 15,35 15,50 C15,65 30,85 50,85 C70,85 85,65 85,50 C85,35 75,15 50,15 Z" />
            </svg>
            <svg width="15" height="15" viewBox="0 0 100 100" className="separator-dot opacity-30 transition-all duration-700">
                <path fill="currentColor" d="M50,18 C28,18 18,34 20,52 C22,70 38,82 52,80 C68,78 82,64 80,48 C78,32 72,18 50,18 Z" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 100 100" className="separator-dot opacity-30 transition-all duration-700">
                <path fill="currentColor" d="M48,16 C30,14 16,28 16,46 C16,64 32,78 50,84 C68,88 84,74 84,56 C84,38 70,18 48,16 Z" />
            </svg>

            <style>{`
                .separator-dot {
                    color: #3D3B3A;
                }
                .separator-dot.active {
                    color: #BE7E56;
                    opacity: 0.8;
                    animation: dot-jelly 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                }
                @keyframes dot-jelly {
                    0% { transform: scale(1, 1) translateY(0); }
                    30% { transform: scale(0.8, 1.3) translateY(-15px); }
                    50% { transform: scale(1.1, 0.8) translateY(0); }
                    70% { transform: scale(0.9, 1.1) translateY(-5px); }
                    100% { transform: scale(1, 1) translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default SectionSeparator;
