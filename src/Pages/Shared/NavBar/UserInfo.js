import React from 'react';
import avatar from '../../../assets/avatar/default_03.png';

const UserInfo = () => {
    return (
        <div className='w-[320px] border p-[20px] mt-[61px] rounded-[3px] bg-[#fff] text-[16px] users_shadow absolute right-[40px]'>
            <div className="flex justify-between mb-[10px]">
                <div className="flex items-center">
                    <div className="cursor-pointer">
                        <img src={avatar} className="w-[64px] h-[64px] rounded-full" alt="" />
                    </div>
                    <div className="text-[#5f7d95] ml-[10px] cursor-pointer">
                        <h6 className='leading-[24px] text-[16px] font-bold'>bestudiobd</h6>
                        <p className='text-[16px] font-bold'>Level 3</p>
                    </div>
                </div>
                <div className="">
                    <p className='text-[#c0c0c0] font-bold text-[16px]'>#35159</p>
                </div>
            </div>
            <div className="border-b pb-[10px] text-center flex justify-center gap-1">
                <div className="">
                    <p className='opacity-[.5] leading-[24px] text-[16px] font-normal text-[#374957]'>Downloads</p>
                    <span className='font-medium text-[16px] text-[#374957]'>296</span>
                </div>
                <div className="border-r border-l px-7">
                    <p className='opacity-[.5] leading-[24px] text-[16px] font-normal text-[#374957]'>Files</p>
                    <span className='font-medium text-[16px] text-[#374957]'>3k</span>
                </div>
                <div className="">
                    <p className='opacity-[.5] leading-[24px] text-[16px] font-normal text-[#374957]'>Followers</p>
                    <span className='font-medium text-[16px] text-[#374957]'>1</span>
                </div>
            </div>
            <div className="text-[#63829B] text-[16px] font-semibold mt-[20px] border-b pb-[10px]">
                <div className="flex justify-between items-center leading-[34px] cursor-pointer">
                    <h6 className='hover:text-[#1273eb]'>My contributor profile</h6>
                    <i className="fa-regular fa-user"></i>
                </div>
                <div className="flex justify-between items-center leading-[34px] cursor-pointer">
                    <h6 className='hover:text-[#1273eb]'>My billing information</h6>
                    <i className="fa-regular fa-credit-card"></i>
                </div>
                <div className="flex justify-between items-center leading-[34px] cursor-pointer">
                    <h6 className='hover:text-[#1273eb]'>My fiscal information</h6>
                    <i className="fa-solid fa-wand-sparkles"></i>
                </div>
            </div>
            <div className="mt-[20px] text-[#63829B] text-[16px] font-semibold ">
                <div className="flex justify-between items-center leading-[34px] cursor-pointer">
                    <h6 className='hover:text-[#1273eb]'>Logout</h6>
                    <i className="fa-solid fa-power-off"></i>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;