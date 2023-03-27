import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const sliderImage1 = 'https://static-contributor-fp.cdnpk.net/assets/0428d11f7c222c50218c0e66112428f9.webp';
const secondImage = '	https://static-contributor-fp.cdnpk.net/assets/b32459cafacc882abba3df53d6f927aa.webp';
const thirdImage = '	https://static-contributor-fp.cdnpk.net/assets/328e1033403337f97c71f52b98ae97e8.png';

const Sliderheading = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     cssEase: "linear",
    //     adaptiveHeight: true,
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 arrows: false,
    //             },
    //         },
    //     ],
    // };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
       <div className='ml-3'>
         <Slider {...settings}>
            <div className="">
                <div className='relative mt-1'>
                    <img src={sliderImage1} className='rounded-[8px] w-full h-[200px]' alt="" />
                    <div className="absolute top-0 py-[35px] px-[40px]">
                        <h5 className='font-normal text-[26px] leading-[32px] mb-[20px] text-[#FFF]'>
                            Download the new Freepik contributor app. <br />
                            Now available in <span className='font-bold'>your country!</span>
                        </h5>
                        <button className='text-[18px] font-semibold bg-[#08192b] h-[44px] leading-[44px] rounded-[3px] text-white px-[30px]'>Get it on Google Play <span><i class="fa-brands fa-google-play ml-2"></i></span></button>
                    </div>
                </div>
            </div>
            <div className="">
                <div className='relative mt-1 mx-[1px] slide-shadow'>
                    <div className="flex slide-shadow justify-between rounded-[8px] h-[200px]">
                        <img src={thirdImage} className='' alt="" />
                        <img src={secondImage} className='' alt="" />
                    </div>
                    <div className="absolute top-0 py-[35px] px-[40px]">
                        <h5 className='font-normal text-[26px] leading-[32px] mb-[20px] text-[#1273EB]'>
                            Discover the most popular search terms <br /> and keywords
                        </h5>
                        <button className='text-[17px] font-semibold bg-transparent border-2 border-[#1273EB] h-[44px] leading-[38px] rounded-[8px] text-[#1273EB] px-[20px]'> Explore trends</button>
                    </div>
                </div>
            </div>
        </Slider>
       </div>
    );
};

export default Sliderheading;