import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const avatart1 = "https://avatar.freepik.com/2199844-210728105124.jpg"

const HallOfFame = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='border border-[#eff3f6 py-[0.9375rem] px-[0.625rem] rounded-[8px] ml-[20px]'>
            <div className="">
                <div className="text-[14px] font-semibold leading-[22px] text-[#374957] mb-[10px]">
                    <p>Hall of fame</p>
                </div>
                <div className="text-[14px] mb-[20px] flex justify-between items-center">
                    <p>These artists are on the top of the ranking</p>
                    <i className="fa-solid fa-chevron-right bg-[#0161cd] p-[10px] rounded-[3px] text-white cursor-pointer"></i>
                </div>
            </div>
            <div className='ml-3'>
                <Slider {...settings}>
                    <div className="">
                        <div className="">

                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default HallOfFame;