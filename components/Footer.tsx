
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-500 py-12 border-t border-gray-100">
      <div className="container mx-auto px-6 text-sm">
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h4 className="font-bold text-base text-[#065F46] mb-2">책읽는 다락서원 가맹본부</h4>
            <p>대전시 서구 도안동로 77</p>
            <p>사업자 번호: 360-91-00671</p>
            <p>가맹사업등록번호 20250262</p>
          </div>
          <div>
            {/* 상담 및 가맹 문의 섹션 제거됨 */}
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
