import { handler } from 'daisyui';
import React, { useEffect, useState, useRef } from 'react';
import avatar from '../../../assets/avatar/default_03.png';
import UserInfo from './UserInfo';
const toggle = <i className="fa-solid fa-bars"></i>;
const NavBar = ({ toggleOpen, setToggleOpen }) => {
    const [openUser, setOpenUser] = useState(false);
    let menuRef = useRef()
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpenUser(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.addEventListener("mousedown", handler);
        }
    }, [])
    return (
        <div className='py-[15px] px-[20px] flex justify-between nav_border bg-[#fff]' ref={menuRef}>
            <div className="flex gap-1">
                <div onClick={() => setToggleOpen(!toggleOpen)} className="px-[10px] block lg:hidden h-[34px] text-[14px] leading-[32px] bg-[#1273eb] rounded-[3px] text-center font-semibold cursor-pointer text-white">
                    <span>{toggle}</span>
                </div>
                <div className="px-[20px] h-[34px] text-[14px] leading-[32px] bg-[#1273eb] rounded-[3px] text-center font-semibold cursor-pointer text-white">
                    <i className="fa-solid fa-arrow-up-from-bracket text-[16px]"></i>
                    <button className=''><span className='md:block hidden ml-[10px]'>Upload files</span></button>
                </div>
                <div className="px-[20px] h-[34px] text-[14px] leading-[29px] border-2 border-[#1273eb] rounded-[3px] text-center font-semibold cursor-pointer text-[#1273eb] hidden md:block">

                    <button className='ml-[10px]'>Synchronize FTP</button>
                </div>
            </div>
            {/* user */}
            <div onClick={() => setOpenUser(!openUser)} className="flex cursor-pointer">
                <div className="mr-[10px] relative">
                    <i className="fa-regular fa-bell bell p-1 text-[18px] text-[#374957]"></i>
                    <p className='absolute top-[-8px] right-[-11px] text-[11px] bg-[#fca120] text-[#374957] flex items-center justify-center w-[16px] py-[4px] leading-[12px] rounded-[3px] font-medium'>1</p>
                </div>
                <div className="">
                    <img src={avatar} className="w-[34px] h-[34px] rounded-full" alt="" />
                </div>
                <div className="text-[#63829b] ml-[10px] md:block hidden">
                    <h6 className='leading-[1rem] text-[.9375rem]  font-bold ml-[0.2em]'>bestudio...</h6>
                    <p className='text-[.8125rem]
                    leading-[1rem] font-normal ml-[0.2em]'>Level 3</p>
                </div>
            </div>
            <div className={`absolute right-0 ${openUser ? 'block' : 'hidden'}`}>
                <UserInfo />
            </div>
        </div >
    );
};

export default NavBar;