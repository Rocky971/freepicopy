import React from 'react';
const map = 'https://contributor.freepik.com/media/img/calendar.webp'
const card1 = "https://img.freepik.com/free-photo/people-table-enjoying-feast-first-day-passover-seder_23-2150247755.jpg"
const card2 = "https://img.freepik.com/free-photo/covid-still-life-with-vaccine_23-2149079585.jpg";
const card3 = "https://img.freepik.com/free-photo/portrait-little-girl-with-bunny-ears-easter-eggs_169016-3323.jpg";
const card4 = "https://img.freepik.com/free-photo/close-up-green-leaf-nerves_23-2148791141.jpg"
const ContentSidebar = () => {
    const commonClass = "text-[14px] font-semibold leading-[22px] text-[#374957] mb-[10px]"
    return (
        <div className="mb-[30px]">
            <div className="border border-[#eff3f6 p-[15px] rounded-[8px] ml-[20px]">
                <div className="">
                    <div className={commonClass}>
                        <p>Festivities calendar</p>
                    </div>
                    {/* *** */}
                    <div className="text-[14px]">
                        The new Festivities calendar is out.
                        Get your dose of creativity with Freepik
                    </div>
                    {/* *** */}
                    <div className="flex items-center flex-wrap">
                        <button className='border-2 border-[#5f7d95] rounded-[8px] px-[14px] text-[14px] font-semibold text-[#5f7d95] py-[3px]'>
                            <i class="fa-solid fa-arrow-up-right-from-square mr-[5px]"></i>
                            See Calendar
                        </button>
                        <div className="">
                            <img src={map} className="w-[100px]" alt="" />
                        </div>
                    </div>
                    {/* *** */}
                    <div className="">
                        <div className={commonClass}>
                            <p className='mb-4'>Next festivities:</p>
                        </div>
                        {/* card */}
                        <div className="flex gap-3 items-center border rounded-[8px] festive_maincard mb-2">
                            <div className="">
                                <img src={card1} className="w-[200px] h-[70px] rounded-tl-[8px] rounded-bl-[8px]" alt="" />
                            </div>
                            <div className="w-full cursor-pointer">
                                <div className={`${commonClass} flex flex-col gap-[8px] mb-[0px]`}>
                                    <p className='text-[#374957]'>Passover</p>
                                    <div className="flex justify-between">
                                        <div className="flex text-[#869fb2]">
                                            <span><i class="fa-solid fa-magnifying-glass"></i></span>
                                            <p>80 K</p>
                                        </div>
                                        <div className="mr-2">
                                            <span className='festive_card'>
                                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card */}
                        <div className="flex gap-3 items-center border rounded-[8px] festive_maincard mb-2">

                            <div className="">
                                <img src={card2} className="w-[200px] h-[70px] rounded-tl-[8px] rounded-bl-[8px]" alt="" />
                            </div>
                            <div className="w-full cursor-pointer">
                                <div className={`${commonClass} flex flex-col gap-[8px] mb-[0px]`}>
                                    <p className='text-[#374957]'>World Health Day</p>
                                    <div className="flex justify-between">
                                        <div className="flex text-[#869fb2]">
                                            <span><i class="fa-solid fa-magnifying-glass"></i></span>
                                            <p>281,5 K</p>
                                        </div>
                                        <div className="mr-2">
                                            <span className='festive_card'>
                                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card */}
                        <div className="flex gap-3 items-center border rounded-[8px] festive_maincard mb-2">

                            <div className="">
                                <img src={card3} className="w-[200px] h-[70px] rounded-tl-[8px] rounded-bl-[8px]" alt="" />
                            </div>
                            <div className="w-full cursor-pointer">
                                <div className={`${commonClass} flex flex-col gap-[8px] mb-[0px]`}>
                                    <p className='text-[#374957]'>Easter</p>
                                    <div className="flex justify-between">
                                        <div className="flex text-[#869fb2]">
                                            <span><i class="fa-solid fa-magnifying-glass"></i></span>
                                            <p>1,2 M</p>
                                        </div>
                                        <div className="mr-2">
                                            <span className='festive_card'>
                                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card */}
                        <div className="flex gap-3 items-center border rounded-[8px] festive_maincard mb-2">

                            <div className="">
                                <img src={card4} className="w-[200px] h-[70px] rounded-tl-[8px] rounded-bl-[8px]" alt="" />
                            </div>
                            <div className="w-full cursor-pointer">
                                <div className={`${commonClass} flex flex-col gap-[8px] mb-[0px]`}>
                                    <p className='text-[#374957]'>Earth Day</p>
                                    <div className="flex justify-between">
                                        <div className="flex text-[#869fb2]">
                                            <span><i class="fa-solid fa-magnifying-glass"></i></span>
                                            <p>1,1 M</p>
                                        </div>
                                        <div className="mr-2">
                                            <span className='festive_card'>
                                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContentSidebar;