
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
        description: (
            <>
                <span className="md:hidden">
                    초등 저학년 아이들이<br />
                    직접 쓴 동시와 그림을 모았습니다.<br /><br />
                    아이들의 순수한 마음이 종이에 그대로 담겨,<br />
                    한 권의 시집이 됩니다.
                </span>
                <span className="hidden md:inline">
                    초등 저학년 아이들이 직접 쓴 동시와 그림을 모았습니다. 아이들의 순수한 마음이 종이에 그대로 담겨, 한 권의 시집이 됩니다.
                </span>
            </>
        ),
        images: ['poem_0.png', 'poem_1.png', 'poem_3.png', 'poem_4.png', 'poem_5.png', 'poem_6.png', 'poem_7.png', 'poem_8.png']
    },
    {
        title: '다락서원 독후감',
        tagline: '아이들이 작가가 되는 곳',
        description: (
            <>
                <span className="md:hidden">
                    일 년에 한 번, 아이들이 쓴<br />
                    글을 모아 출판합니다.<br /><br />
                    자신의 글이 책이 되는 놀라운 경험을 통해<br />
                    작가의 꿈을 키울 수 있습니다.
                </span>
                <span className="hidden md:inline">
                    일 년에 한 번, 아이들이 쓴 글을 모아 출판합니다. 자신의 글이 책이 되는 놀라운 경험을 통해 작가의 꿈을 키울 수 있습니다.
                </span>
            </>
        ),
        images: ['review_0.png', 'review_1.png', 'review_2.png', 'review_3.png', 'review_4.png', 'review_5.png', 'review_6.png', 'review_7.png', 'review_8.png', 'review_9.png', 'review_10.png', 'review_11.png', 'review_12.png', 'review_13.png']
    }
];

const Publications: React.FC = () => {
    const base = import.meta.env.BASE_URL;
    const cleanBase = base.endsWith('/') ? base : `${base}/`;

    return (
        <section id="publications" className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3D3B3A]"><span className="text-highlight">다락서원 출판 도서</span></h2>
                    <p className="mt-4 text-lg text-gray-600 ">
                        아이들의 상상력과 글솜씨가 <br className="md:hidden" />
                        책으로 피어납니다.
                    </p>
                </div>
                <div className="space-y-20 md:space-y-24">
                    {publications.map((pub, index) => (
                        <div key={index} className="grid md:grid-cols-5 gap-10 md:gap-12 items-center">
                            <div className={`md:col-span-2 w-full ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                                <div className="max-w-[80%] mx-auto md:max-w-none rounded-2xl shadow-xl border-2 md:border-4 border-[#D35400]/10 overflow-hidden relative bg-white"
                                    style={{ touchAction: 'pan-y' }}>
                                    <div className="relative w-full pb-[133.33%]">
                                        <div className="absolute inset-0">
                                            <Swiper
                                                modules={[Navigation, Pagination, Autoplay]}
                                                spaceBetween={0}
                                                slidesPerView={1}
                                                navigation
                                                pagination={{ clickable: true }}
                                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                                loop={true}
                                                touchStartPreventDefault={false}
                                                touchMoveStopPropagation={false}
                                                touchReleaseOnEdges={true}
                                                className="w-full h-full"
                                            >
                                                {pub.images.map((img, i) => (
                                                    <SwiperSlide key={i} className="flex items-center justify-center bg-white h-full">
                                                        <img
                                                            src={`${cleanBase}${img}`}
                                                            alt={`${pub.title} image ${i + 1}`}
                                                            className="w-full h-full object-contain"
                                                            loading="eager"
                                                            decoding="async"
                                                        />
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`md:col-span-3 text-center md:text-left ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                                <span className=" text-[#065F46] font-semibold text-sm md:text-base">{pub.tagline}</span>
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
                    color: #D35400 !important;
                    transform: scale(0.6);
                }
                #publications .swiper-pagination-bullet-active {
                    background: #D35400 !important;
                }
                .swiper {
                    touch-action: pan-y !important;
                }
            `}</style>
        </section>
    );
};

export default Publications;
