import React from 'react';
import { AiOutlineExclamationCircle } from "react-icons/ai";
const DashBoardMain = () => {
    return (
        <div className='ml-3 my-[20px]'>
            {/* error__ */}
            <div className="flex gap-[7px] mb-[20px] bg-[#fff8e9] leading-[22px] p-[16px] rounded-[8px]">
                <div className="text-[#f69110] font-bold leading-[20px]">
                    <span><AiOutlineExclamationCircle /> </span>
                </div>
                <div className="">
                    <h6 className='text-[#1D262D] mb-[5px] text-[14px] font-bold leading-[22px]'>ID submission needed</h6>
                    <p className='text-[14px] font-normal leading-[22px] mb-[10px] text-[#374957]'>Please, upload a valid ID; otherwise, you will not be able to generate invoices or get paid for the generated income from next month onwards.</p>
                    <p className='text-[14px] font-normal leading-[22px] mb-[10px] text-[#374957]'>If you have any doubts about how to upload your ID. <span className='text-[#1273eb] cursor-pointer font-semibold'>Click here</span></p>
                </div>
            </div>
        </div>
    );
};

export default DashBoardMain;