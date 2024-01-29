import React from 'react';
import Container from '../../../Shared/Container/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.css'
import 'swiper/css';
import 'swiper/css/effect-fade';
import { GiLaptop } from "react-icons/gi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { LuRefrigerator } from "react-icons/lu";


import { Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='my-4'>
            <Container>
                <div>
                    <Swiper
                        effect={'fade'}
                        navigation={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectFade, Autoplay]}
                        className="mySwiper"
                    >
                            <SwiperSlide>
                                <img className='sm:h-[450px]  h-64 w-full' src="https://i.ibb.co/dmy1vNH/events.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img  className='sm:h-[450px] h-64 w-full' src="https://i.ibb.co/ySN0cNz/electronics.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img  className='sm:h-[450px] h-64 w-full' src="https://i.ibb.co/pPnLStt/laptop.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img  className='sm:h-[450px] h-64 w-full' src="https://i.ibb.co/SNRZG1D/offer.jpg" />
                            </SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <section className="p-6 my-1">
                        <div className="container grid grid-cols-2 gap-6 mx-auto xl:grid-cols-4">
                            <Link>
                                <div className="flex items-center sm:p-4 p-2 space-x-4 rounded-lg md:space-x-6 bg-gradient-to-r from-[#dee2fa] to-[#e2ecbf]">
                                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
                                        <GiLaptop className='sm:text-4xl text-2xl'/>
                                    </div>
                                    <div className="flex flex-col justify-center align-middle">
                                        <p className="sm:text-2xl text-base font-semibold leadi">Get Your Laptop</p>
                                        <p className="capitalize hidden sm:block">Get Your Laptop Easily</p>
                                    </div>
                                </div>
                            </Link>
                            <Link>
                                <div className="flex items-center sm:p-4 p-2 space-x-4 rounded-lg md:space-x-6 bg-gradient-to-r from-[#dee2fa] to-[#c8ecbf]">
                                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                                        <LuRefrigerator className='sm:text-4xl text-2xl' />
                                    </div>
                                    <div className="flex flex-col justify-center align-middle">
                                        <p className="sm:text-2xl text-base font-semibold leadi">Get Best Electronics</p>
                                        <p className="capitalize hidden sm:block">Explore More Experience</p>
                                    </div>
                                </div>
                            </Link>
                            <Link>
                                <div className="flex items-center sm:p-4 p-2 space-x-4 rounded-lg md:space-x-6 bg-gradient-to-r from-[#dee2fa] to-[#d3ecbf]">
                                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
                                        <FaRegQuestionCircle className='sm:text-4xl text-2xl'/>
                                    </div>
                                    <div className="flex flex-col justify-center align-middle">
                                        <p className="sm:text-2xl text-base font-semibold leadi">Online Support</p>
                                        <p className="capitalize hidden sm:block">Get Online Support</p>
                                    </div>
                                </div>
                            </Link>
                            <Link>
                                <div className="flex items-center sm:p-4 p-2 space-x-4 rounded-lg md:space-x-6 bg-gradient-to-r from-[#dee2fa] to-[#c6ecbf]">
                                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
                                        <FiSettings className='sm:text-4xl text-2xl'/>
                                    </div>
                                    <div className="flex flex-col justify-center align-middle">
                                        <p className="sm:text-2xl text-base font-semibold leadi">Servicing Center</p>
                                        <p className="capitalize hidden sm:block">Repair Your Device</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </section>
                </div>
            </Container>
        </div>
    );
};

export default Banner;
