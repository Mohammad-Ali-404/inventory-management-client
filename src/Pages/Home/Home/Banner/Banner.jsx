import React from 'react';
import Container from '../../../Shared/Container/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.css'
import 'swiper/css';
import 'swiper/css/effect-fade';


import { Autoplay, EffectFade } from 'swiper/modules';
const Banner = () => {
    return (
        <div>
            <Container>
                <>
                    <Swiper
                        effect={'fade'}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectFade, Autoplay]}
                        className="mySwiper"
                    >
                            <SwiperSlide>
                            <img className='sm:h-[450px] h-64 w-full' src="https://i.ibb.co/dmy1vNH/events.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img  className='sm:h-[450px] h-64 w-full' src="https://i.ibb.co/pPnLStt/laptop.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img  className='sm:h-[450px] h-64 w-full' src="https://i.ibb.co/SNRZG1D/offer.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </>
            </Container>
        </div>
    );
};

export default Banner;
