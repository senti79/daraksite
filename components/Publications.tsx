
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const publications = [
    {
        title: '다락서원 동시집',
        tagline: '아이들이 시인이 되는 곳',
        description: '초등 저학년 아이들이 직접 쓴 동시와 그림을 모았습니다. 아이들의 순수한 마음이 종이에 그대로 담겨, 그 자체가 하나의 아름다운 시가 됩니다.',
        images: Array.from({ length: 8 }, (_, i) => `poem_${i}.png`)
    },
    {
        title: '다락서원 독후감',
        tagline: '아이들이 작가가 되는 곳',
        description: '일 년에 한 번, 아이들이 쓴 최고의 글을 모아 출판합니다. 자신의 글이 책이 되는 놀라운 경험을 통해 작가의 꿈을 키울 수 있습니다.',
        images: Array.from({ length: 12 }, (_, i) => `review_${i}.png`)
    }
];

const Publications: React.FC = () => {
    const baseUrl = import.meta.env.BASE_URL || '/';

    return (
        <section id="publications" className="py-20 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3D3B3A]"><span className="text-highlight">다락서원 출판 도서</span></h2>
                    <p className="mt-4 text-lg text-gray-600 ">아이들의 상상력과 글솜씨가 책으로 피어납니다.</p>
                </div>
                <div className="space-y-20 md:space-y-24">
                    {publications.map((pub, index) => (
                        <div key={index} className="grid md:grid-cols-5 gap-10 md:gap-12 items-center">
                            <div className={`md:col-span-2 px-2 md:px-0 w-full ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    loop={true}
                                    touchReleaseOnEdges={true}
                                    passiveListeners={true}
                                    touchStartPreventDefault={false}
                                    className="rounded-2xl shadow-xl border-4 border-[#BE7E56]/10 overflow-hidden w-full aspect-[3/4]"
                                >
                                    {pub.images.map((img, i) => {
                                        const fullSrc = baseUrl.endsWith('/') ? `${baseUrl}${img}` : `${baseUrl}/${img}`;
                                        return (
                                            <SwiperSlide key={i}>
                                                <div className="bg-white flex items-center justify-center w-full h-full">
                                                    <img
                                                        src={fullSrc}
                                                        alt={`${pub.title} image ${i + 1}`}
                                                        className="w-full h-full object-contain"
                                                        loading="eager"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                            <div className={`md:col-span-3 text-center md:text-left ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                                <span className=" text-[#D4A373] font-semibold text-sm md:text-base">{pub.tagline}</span>
                                <h3 className="text-2xl md:text-4xl font-black my-2 md:my-3 text-[#3D3B3A]">{pub.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{pub.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                #publications .swiper-button-next, 
                #publications .swiper-button-prev {
                    color: #BE7E56 !important;
                    transform: scale(0.7);
                }
                #publications .swiper-pagination-bullet-active {
                    background: #BE7E56 !important;
                }
                /* Swiper touch behavior fix */
                .swiper {
                    touch-action: pan-y !important;
                }
            `}</style>
        </section>
    );
};

export default Publications;
