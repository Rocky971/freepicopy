import React from 'react';
import { AiOutlineInfoCircle, AiOutlineBarChart } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
const Perfomance = () => {
    return (
        <div className='ml-[20px] mb-[20px] mt-[24px]'>
            <div className="">
                {/* heading */}
                <div className="flex mb-[20px] justify-between">
                    <p className='font-bold text-[16px] leading-[24px]'>Performance overview</p>
                    <div className="flex gap-2 items-center text-[#1273eb] text-[14px] font-bold">
                        <p>All data</p>
                        <span><i class="fa-solid fa-arrow-right-long"></i></span>
                    </div>
                </div>
                {/* card */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-[10px] mb-[10px]">
                    {/* single */}
                    <div className="border border-[#eff3f6 p-[15px] rounded-[8px]">
                        <div className="text-[14px] font-semibold leading-[22px] text-[#374957] mb-[10px] flex items-center">
                            <p>Estimated earnings</p>
                            <span className='ml-[7px] text-[18px] leading-[24px]'><AiOutlineInfoCircle /></span>
                        </div>
                        <div className="font-bold text-[22px] leading-[30px] text-[#1d262d] mb-[10px]">
                            <h5>22.15 €</h5>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="">
                                <p className='font-semibold text-[12px] leading-[15px] text-[#5f7d95] mb-[2px]'>Last Month</p>
                                <p className='text-[16px] font-bold leading-[24px] text-[#374957]'>3€</p>
                            </div>
                            <p className='text-[24px] text-[#2bc48a]'><AiOutlineBarChart /></p>
                        </div>
                    </div>
                    {/* single */}
                    <div className="border border-[#eff3f6 p-[15px] rounded-[8px]">
                        <div className="text-[14px] font-semibold leading-[22px] text-[#374957] mb-[10px]">
                            <p>Download</p>
                        </div>
                        <div className="font-bold text-[22px] leading-[30px] text-[#1d262d] mb-[10px]">
                            <h5>280</h5>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="">
                                <p className='font-semibold text-[12px] leading-[15px] text-[#5f7d95] mb-[2px]'>Last Month</p>
                                <p className='text-[16px] font-bold leading-[24px] text-[#374957]'>42</p>
                            </div>
                            <p className='text-[24px] text-[#1273eb]'><FiDownload /></p>
                        </div>
                    </div>
                    {/* single */}
                    <div className="border border-[#eff3f6 p-[15px] rounded-[8px]">
                        <div className="text-[14px] font-semibold leading-[22px] text-[#374957] mb-[10px]">
                            <p>Likes</p>
                        </div>
                        <div className="font-bold text-[22px] leading-[30px] text-[#1d262d] mb-[10px]">
                            <h5>20</h5>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="">
                                <p className='font-semibold text-[12px] leading-[15px] text-[#5f7d95] mb-[2px]'>Last Month</p>
                                <p className='text-[16px] font-bold leading-[24px] text-[#374957]'><i class="fa-solid fa-window-minimize"></i></p>
                            </div>
                            <p className='text-[24px] text-[#fb5252]'><i class="fa-regular fa-heart"></i></p>
                        </div>
                    </div>
                    {/* single */}
                    <div className="border border-[#eff3f6 p-[15px] rounded-[8px]">
                        <div className="text-[14px] font-semibold leading-[22px] text-[#374957] mb-[10px]">
                            <p>Files</p>
                        </div>
                        <div className="font-bold text-[22px] leading-[30px] text-[#1d262d] mb-[10px]">
                            <h5>2,649</h5>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="">
                                <p className='font-semibold text-[12px] leading-[15px] text-[#5f7d95] mb-[2px]'>Last Month</p>
                                <p className='text-[16px] font-bold leading-[24px] text-[#374957]'>475</p>
                            </div>
                            <p className='text-[24px] text-[#5f7d95]'><i class="fa-regular fa-images"></i></p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="text-[14px] font-semibold leading-[22px] text-[#374957] mb-[10px] flex items-center">
                        <span className='mr-[7px] text-[18px] leading-[24px]'><AiOutlineInfoCircle /></span>
                        <p>Estimated earnings: This amount is an estimate based on your earnings from last month. Actual earnings will be displayed at the end of the month.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Perfomance;