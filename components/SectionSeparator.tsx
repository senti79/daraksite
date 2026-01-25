
import React from 'react';

const SectionSeparator: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10 md:py-16 gap-3">
            <svg width="10" height="10" viewBox="0 0 100 100" className="opacity-30">
                <path fill="#3D3B3A" d="M50,15 C25,15 15,35 15,50 C15,65 30,85 50,85 C70,85 85,65 85,50 C85,35 75,15 50,15 Z" />
            </svg>
            <svg width="10" height="10" viewBox="0 0 100 100" className="opacity-30">
                <path fill="#3D3B3A" d="M50,18 C28,18 18,34 20,52 C22,70 38,82 52,80 C68,78 82,64 80,48 C78,32 72,18 50,18 Z" />
            </svg>
            <svg width="11" height="11" viewBox="0 0 100 100" className="opacity-30">
                <path fill="#3D3B3A" d="M48,16 C30,14 16,28 16,46 C16,64 32,78 50,84 C68,88 84,74 84,56 C84,38 70,18 48,16 Z" />
            </svg>
        </div>
    );
};

export default SectionSeparator;
