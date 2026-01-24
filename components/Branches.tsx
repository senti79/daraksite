
import React from 'react';

const branchesData = {
    '대전 서구': [
        { name: '도안 18블럭', phone: '010-3482-2016' },
        { name: '도안 15블럭', phone: '010-7560-9889' },
        { name: '도안 갑천 3블럭', phone: '010-2007-1909' },
        { name: '도안 상대원', phone: '010-4825-9387' },
        { name: '도안 복용원', phone: '010-3290-1645' },
        { name: '내동원', phone: '010-5565-1029' },
        { name: '용문원', phone: '010-2474-6279' },
        { name: '갈마원', phone: '010-8848-4198' },
    ],
    '대전 유성구': [
        { name: '노은 지족원', phone: '010-5241-8173' },
        { name: '반석원', phone: '010-2023-5095' },
        { name: '죽동원', phone: '010-6565-0368' },
        { name: '용산원', phone: '010-3212-6313' },
    ],
    '대전 중구 / 동구': [
        { name: '용두원', phone: '010-3055-8945' },
        { name: '가오원', phone: '010-8428-2478' },
    ]
};

const Branches: React.FC = () => {
    return (
        <section id="branches" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3D3B3A]"><span className="text-highlight">가까운 다락서원 찾기</span></h2>
                    <p className="mt-4 text-lg text-gray-600 ">우리 동네 독서 전문 교육원</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {Object.entries(branchesData).map(([district, branches]) => (
                        <div key={district} className="sketch-card bg-white p-8 pt-24 relative overflow-hidden">
                            {/* Decorative Top Bar */}
                            <div className="absolute top-0 left-0 w-full h-10 bg-[#BE7E56]/25 flex justify-center items-center gap-4 border-b border-[#BE7E56]/20">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="w-2.5 h-2.5 rounded-full bg-white border border-[#BE7E56]/30 shadow-inner"></div>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold text-[#BE7E56] mb-6 border-b-2 border-[#BE7E56] pb-2">{district}</h3>
                            <ul className="space-y-4">
                                {branches.map(branch => (
                                    <li key={branch.name} className="flex justify-between items-center">
                                        <span className="text-gray-800 font-semibold">{branch.name}</span>
                                        <a href={`tel:${branch.phone}`} className="text-gray-600 hover:text-[#BE7E56] transition-colors">{branch.phone}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Branches;
