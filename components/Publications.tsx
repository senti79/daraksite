
import React from 'react';

const publications = [
    {
        title: '다락서원 동시집',
        tagline: '아이들이 시인이 되는 곳',
        description: '초등 저학년 아이들이 직접 쓴 동시와 그림을 모았습니다. 아이들의 순수한 마음이 종이에 그대로 담겨, 그 자체가 하나의 아름다운 시가 됩니다.',
        img: 'https://picsum.photos/seed/poem/600/800'
    },
    {
        title: '다락서원 독후감',
        tagline: '아이들이 작가가 되는 곳',
        description: '일 년에 한 번, 아이들이 쓴 최고의 글을 모아 출판합니다. 자신의 글이 책이 되는 놀라운 경험을 통해 작가의 꿈을 키울 수 있습니다.',
        img: 'https://picsum.photos/seed/essay/600/800'
    }
];

const Publications: React.FC = () => {
    return (
        <section id="publications" className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3D3B3A]"><span className="text-highlight">다락서원 출판 도서</span></h2>
                    <p className="mt-4 text-lg text-gray-600 ">아이들의 상상력과 글솜씨가 책으로 피어납니다.</p>
                </div>
                <div className="space-y-20">
                    {publications.map((pub, index) => (
                        <div key={index} className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
                            <div className={`md:col-span-2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                <div className="dashed-border bg-white">
                                    <img src={pub.img} alt={pub.title} className="w-full h-auto object-cover aspect-[3/4]" />
                                </div>
                            </div>
                            <div className={`md:col-span-3 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                                <span className=" text-[#D4A373] font-semibold">{pub.tagline}</span>
                                <h3 className="text-3xl md:text-4xl font-black my-3 text-[#3D3B3A]">{pub.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{pub.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
