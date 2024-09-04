// src/components/BannerCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

const banners = [
    {
        id: 1,
        image: 'https://file.hstatic.net/200000317829/file/1920x760-1_d3d9fccab54d4f55ab0d29832636827c.png',
        alt: 'Giảm giá mùa hè 50%',
        link: '/promotion1',
        smallDeviceImage: 'https://file.hstatic.net/200000317829/file/600x700-1_095e2bf774764045ab3ce8c228b3a803.png',
    },
    {
        id: 2,
        image: 'https://file.hstatic.net/200000317829/file/1920x760_ee544232a6f9431eb8ea916de1104cf1.png',
        alt: 'Sản phẩm mới nhất',
        link: '/promotion2',
        smallDeviceImage: 'https://file.hstatic.net/200000317829/file/600x700-2_775a287a437f48769de6b6037674dc64.png'
    },
    {
        id: 3,
        image: 'https://file.hstatic.net/200000317829/file/1920x760-2_d3e17f4a0c27445b9b7209a74daa6691.png',
        alt: 'Ưu đãi đặc biệt',
        link: '/promotion3',
        smallDeviceImage: 'https://file.hstatic.net/200000317829/file/600x700_528ffec18ea74b4786039ba95f79c937.png'
    },
    // Thêm các banner khác tại đây
];

const BannerCarousel = ({ className }) => {

    const [isSmallDevice, setIsSmallDevice] = React.useState(false);

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 1000) {
            setIsSmallDevice(true);
        } else {
            setIsSmallDevice(false);
        }
    });

    return (
        <div className={"h-full w-full flex justify-center items-center " + className}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }} // tự động chuyển slide sau 5s, không bị dừng khi người dùng chạm vào slide, dừng khi rê chuột vào slide
                loop
                effect="cube"
                className="mySwiper flex justify-center items-center"
            >
                {banners.map(banner => (
                    <SwiperSlide key={banner.id} className='flex justify-center items-center'>
                        <a href={banner.link} className='w-full flex justify-center items-center content-center'>
                            <img
                                src={isSmallDevice ? banner.smallDeviceImage : banner.image}
                                alt={banner.alt}
                                className={` h-full w-auto max-h-[400px] object-cover flex items-center justify-center content-center`}
                                z-index={1}
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerCarousel;
