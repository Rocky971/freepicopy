import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";

const General = () => {
    const [select, setSelect] = useState(false);

    let menuRef = useRef()
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setSelect(false)
                console.log(menuRef.current)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, [])

    return (
        <div className='' ref={menuRef}>
            <div className="border-b">
                <div className="flex justify-between items-center px-[20px]">
                    <h6 className='py-[12px] pr-[25px] font-bold text-[18px] text-[#1d262d] border-b border-black'>Stats</h6>
                    <div className="font-semibold text-[14px] text-[#5f7d95]">
                        <p>Avg.price per download:</p>
                        <div className="flex items-center justify-end">
                            <p className='text-[18px] text-[#1d262d] font-semibold leading-[26px]'>0.079€</p>
                            <span className='ml-[10px] text-[16px] leading-[16px] text-[#1273eb]'><AiOutlineInfoCircle /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between px-[20px] bg-[#F8FAFB]">
                <div className="mt-[25px]">
                    <h6 className='font-bold text-[18px] leading-[26px] text-[#1d262d] mb-[5px]'>Performance</h6>
                    <p className='font-normal text-[16px] leading-[24px] text-[#374957]'>Earnings for this month are an estimate based on data from previous months. Actual earnings will be displayed at the end of the month.</p>
                </div>
                <div className="relative" >
                    <div onClick={() => setSelect(!select)} className='border w-[80px] px-[3px] rounded-[8px] bg-slate-100 text-[#5F7D95] text-[16px] font-medium py-[5px] flex justify-between items-center cursor-pointer' >
                        <p className='ml-[5px]'>All</p>
                        <i className="fa-solid fa-caret-down mr-[10px]"></i>
                    </div>
                    <div className={`absolute right-[0px] top-[50px] font-normal text-[16px] border rounded-[8px] w-[200px] px-[20px] py-[8px] shadow_select ${select ? 'block' : 'hidden'}`}>
                        <ul className='text-[#5F7D95]'>
                            <div className="flex items-center">
                                <i className="fa-solid fa-check mr-[9px]"></i>
                                <li className='cursor-pointer'>All</li>
                            </div>
                            <li className='ml-[21px] my-[20px] cursor-pointer'>Photo</li>
                            <li className='ml-[21px] my-[20px] cursor-pointer'>Vectors</li>
                            <li className='ml-[21px] my-[20px] cursor-pointer'>PSD</li>
                        </ul>
                        <i className="fa-solid fa-caret-up absolute top-[-15px] text-[24px] right-[10px] text-white"></i>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default General;