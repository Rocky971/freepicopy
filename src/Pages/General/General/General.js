import React from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";

const General = () => {
    return (
        <div className=''>
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
        </div>
    );
};

export default General;