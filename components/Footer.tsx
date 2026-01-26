
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-500 py-12 border-t border-gray-100">
      <div className="container mx-auto px-6 text-sm text-center">
        <div className="flex flex-col items-center mb-8">
          <h4 className="font-bold text-base text-[#065F46] mb-2">책읽는 다락서원 가맹본부</h4>
          <p>대전시 서구 도안동로 77</p>
          <p>사업자 번호: 360-91-00671</p>
          <p>가맹사업등록번호 20250262</p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a href="tel:010-8428-2478" className="flex items-center gap-3 px-5 py-2 border-2 border-[#065F46] rounded-full bg-white hover:bg-gray-50 transition-all shadow-sm group">
              <div className="w-8 h-8 rounded-full bg-[#FFF7ED] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-[#EA580C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
                </svg>
              </div>
              <span className="font-bold text-gray-800 text-base">010-8428-2478</span>
            </a>
            <a href="tel:010-3482-2016" className="flex items-center gap-3 px-5 py-2 border-2 border-[#065F46] rounded-full bg-white hover:bg-gray-50 transition-all shadow-sm group">
              <div className="w-8 h-8 rounded-full bg-[#FFF7ED] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-[#EA580C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
                </svg>
              </div>
              <span className="font-bold text-gray-800 text-base">010-3482-2016</span>
            </a>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 pt-6 border-t border-gray-200">
          <p>© {new Date().getFullYear()} 책읽는 다락서원. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
