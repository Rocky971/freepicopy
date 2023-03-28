import React from 'react';
import logo from '../../../assets/login/freepik-company-gray.721fdfe0.svg';

const Footer = () => {
    const liClass = 'text-[14px] mb-[5px] tracking-[0] leading-[24px] font-medium'
    const footerLast = "text-[#4a6375] text-[14px] font-bold mb-[10px] tracking-[.5px] leading-[17px]"
    return (
        <div className='px-[20px] pt-[60px] bg-[#f8fafb]'>
            <div className="grid grid-cols-1 lg:grid-cols-4 border-b pb-2">
                <div className="">
                    <h4 className='text-[#4a6375] text-[14px] font-bold mb-[10px] tracking-[.5px] leading-[17px]'>CONTRIBUTOR CONTENT</h4>
                    <ul className='text-[#374957]'>
                        <li className={liClass}>Referral Program</li>
                        <li className={liClass}>Become ambassador</li>
                        <li className={liClass}>Contributor terms & conditions</li>
                        <li className={liClass}>About us</li>
                        <li className={liClass}>Blog</li>
                    </ul>
                </div>
                {/* ***** */}
                <div className="">
                    <h4 className='text-[#4a6375] text-[14px] font-bold mb-[10px] tracking-[.5px] leading-[17px]'>LEGAL</h4>
                    <ul className='text-[#374957]'>
                        <li className={liClass}>Terms & Conditions</li>
                        <li className={liClass}>Privacy Policy</li>
                        <li className={liClass}>Referral Program Terms & Conditions</li>
                    </ul>
                </div>
                {/* ***** */}
                <div className="">
                    <h4 className='text-[#4a6375] text-[14px] font-bold mb-[10px] tracking-[.5px] leading-[17px]'>HELP</h4>
                    <ul className='text-[#374957]'>
                        <li className={liClass}>Support</li>
                        <li className={liClass}>Contact</li>
                        <h4 className='text-[#4a6375] text-[14px] font-bold mb-[10px] tracking-[.5px] leading-[17px]'>LEARN</h4>
                        <li className={liClass}>Content submission Requirements</li>
                    </ul>
                </div>
                {/* ***** */}
                <div className="">
                    <h4 className='text-[#4a6375] text-[16px] font-bold mb-[10px] tracking-[.5px] leading-[17px]'>FOLLOW US</h4>
                    <i className="fa-brands fa-square-instagram insta text-white text-[20px] rounded-[3px] p-[9px]"></i>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 mt-[7px] pt-[30px]">
                    <div className="">
                        <img src={logo} className="w-[200px]" alt="" />
                    </div>
                    <div className="text-[14px] font-semibold text-[#4a6375] ">
                        <p>Copyright 2010-2023 Freepik Company S.L. © their respective owners.</p>
                    </div>
                </div>
                <div className="mr-5">
                    <button className='border-2 px-[17px] py-[5px] border-[#4A6375] rounded-[8px] font-semibold text-[20px] text-[#4A6375]'>
                        <i className="fa-solid fa-earth-americas mr-1"></i> EN
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-between mt-[60px] mb-[5px]">
                <div className={footerLast}>
                    <p>Freepikcompany projects</p>
                </div>
                <div className={footerLast}>
                    <ul className='flex gap-4'>
                        <li>Freepik</li>
                        <li>Flaticon</li>
                        <li>Slidesgo</li>
                        <li>Videvo</li>
                        <li>Wepik</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;