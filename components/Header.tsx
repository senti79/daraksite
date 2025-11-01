import React, { useState } from 'react';

const navLinks = [
  { href: '#strengths', label: '특장점' },
  { href: '#process', label: '학습 과정' },
  { href: '#programs', label: '프로그램' },
  { href: '#branches', label: '분원 현황' },
  { href: '#publications', label: '출판' },
  { href: '#franchise', label: '가맹' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="bg-[#F8F5F2] border-b-2 border-black">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} className="font-logo text-3xl text-[#3D3B3A]">책읽는 다락서원</a>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-gray-700 hover:text-[#D4A373] transition-colors duration-300 font-semibold">{link.label}</a>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="z-[60] relative header-btn">
            <div className="relative w-6 h-4">
                 <span className={`block absolute w-full h-0.5 bg-gray-800 left-0 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-0'}`}></span>
                 <span className={`block absolute w-full h-0.5 bg-gray-800 left-0 top-1/2 -translate-y-1/2 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
                 <span className={`block absolute w-full h-0.5 bg-gray-800 left-0 transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-0'}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#F8F5F2] z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-2xl text-gray-800 hover:text-[#D4A373] transition-colors duration-300">{link.label}</a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;