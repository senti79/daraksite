
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-500 py-12 border-t border-gray-100">
      <div className="container mx-auto px-6 text-sm">
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h4 className="font-bold text-base text-[#3D3B3A] mb-2">책읽는 다락서원</h4>
            <p>본원: 대전시 서구 도안동로 77</p>
            <p>가맹본부: 대전시 동구청로 89-2 제이타워 604호</p>
          </div>
          <div>
            <h4 className="font-bold text-base text-[#3D3B3A] mb-2">상담 및 가맹 문의</h4>
            <p>Tel: 010-3482-2016 / 010-8428-2478</p>
            <p>사업자 번호: 360-91-00671</p>
            <p>가맹사업등록번호 20250262</p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 pt-6 border-t border-gray-300">
          <p>© {new Date().getFullYear()} 책읽는 다락서원. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
