import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { TbFiles } from "react-icons/tb";
const firstImage = 'https://contributor.freepik.com/media/img/referral/megaphone.svg';
const secondImage = 'https://contributor.freepik.com/media/img/referral/diamond.svg';
const thirdImage = "https://contributor.freepik.com/media/img/referral/graphics.svg";
const RefarelProggram = () => {
    const [filter, setFilter] = useState(false);
    const menuRef = useRef();
    useEffect(() => {
        let handler = e => {
            if (!menuRef.current.contains(e.target)) {
                setFilter(false);
            }
        }
        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    })
    return (
        <div className='flex md:flex-row flex-col gap-20 p-[30px]'>
            <div className='md:w-[51%] w-full'>
                <div className='text-[#374957]'>
                    <h2 className='text-[26px] font-bold leading-[31px] mb-[10px]'>Contributor Referral</h2>
                    <p className='text-[20px] font-medium mb-1'>Refer a friend and <strong>earn 10% commission</strong> on every referral</p>
                    <p className='text-[16px]'>*From April 2021 onwards, Referral Program is subject to new <strong className='text-[#1273eb]'>terms and conditions.</strong></p>
                </div>
                <div className='mt-8'>
                    <div className='w-full'>
                        <label htmlFor="" className='text-[#374957] font-bold text-[16px] '>Invite via email</label>
                        <div className='flex mt-1'>
                            <input type="email" className='border w-full rounded-[3px] px-4 outline-none placeholder:text-[14px]' placeholder='example@example.com' />
                            <button className=' w-[250px] bg-[#1273eb] py-[10px] rounded-[3px] font-[600] text-white text-[16px]'>Send invitaiton</button>
                        </div>
                    </div>
                    <div className='my-8'>
                        <label htmlFor="" className='text-[#374957] text-[16px] font-[700] '>Share the link</label>
                        <div className='flex items-center gap-5 justify-between'>
                            <div className='flex mt-1 w-full'>
                                <input type="email" className='border rounded-[4px] px-4 outline-none text-[14px] text-[#63829b] w-full' value='https://contributor.freepik.com?utm_campaign=bstudiobd&utm_medium=referral-content&utm_source=referral' />
                                <button className=' w-[155px] border-2 border-[#1273eb] py-[9px] rounded-[4px] text-[#1273eb] flex items-center justify-center gap-2 font-[600] text-[16px]'> <TbFiles className='text-[22px]' /> Copy link</button>
                            </div>
                            <div className='w-[160px] flex gap-3'>
                                <div className='socila-icon-shadow transition-all duration-300 hover:bg-[#3749570a]'>
                                    <i class="fa-brands fa-facebook text-[#1273eb] cursor-pointer"></i>
                                </div>
                                <div className='socila-icon-shadow transition-all duration-300 hover:bg-[#3749570a]'>
                                    <i class="fa-brands fa-whatsapp text-[#25D366] cursor-pointer"></i>
                                </div>
                                <div className='socila-icon-shadow transition-all duration-300 hover:bg-[#3749570a]'>
                                    <i class="fa-brands fa-linkedin text-[#0A66C2] cursor-pointer"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-[#374957] font-[500] text-[16px] mb-5'>How does it work?</p>
                    <div className='flex gap-8 items-center'>
                        <div>
                            <img className='w-[80px]' src={firstImage} alt="" />
                        </div>
                        <div>
                            <p className='text-[#374957] font-[700] mb-1 text-[16px]'>Share</p>
                            <p className='text-[#374957] text-[14px] leading-6'>Your friend has to <strong>register</strong> through your referral link and get <strong>content published.</strong></p>
                        </div>
                    </div>
                    <div className='flex gap-8 items-center my-6'>
                        <div>
                            <img className='w-[80px]' src={secondImage} alt="" />
                        </div>
                        <div>
                            <p className='text-[#374957] font-[700] text-[16px] mb-1'>Earn</p>
                            <p className='text-[#374957] text-[14px] leading-6'>Receive 10% commission from the earnings generated by each referral during a year.</p>
                        </div>
                    </div>
                    <div className='flex gap-8 items-center'>
                        <div>
                            <img src={thirdImage} className='w-[80px]' alt="" />
                        </div>
                        <div>
                            <p className='text-[#374957] font-[700] text-[16px] mb-1'>Grow</p>
                            <p className='text-[#374957] text-[14px] leading-6'>The more friends you have, the more money you earn.</p>
                        </div>
                    </div>
                </div>
                <p className='text-[#5f7d95] text-[13px] mt-8'>Do you have any questions? Check our <strong className='text-[#1273eb]'>FAQ</strong></p>
            </div>
            <div className='md:w-[50%] w-full'>
                <div ref={menuRef}>
                    <div className='flex items-center relative ml-52'>
                        <p className='text-[#374957] font-[700]'>Filter</p>
                        <p onClick={() => setFilter(!filter)} className={`border w-[80px] py-1 flex justify-center gap-4 text-[#374957] rounded-lg ${filter && 'border-[#1273eb]'} cursor-pointer`}><span className='text-[14px] font-[700]'>All</span> <span>{!filter && <i className="fa-solid fa-caret-down text-[#374957]"></i>}</span></p>
                        <div className={`absolute z-0 bg-white top-11 -left-20 ${filter ? 'block' : 'hidden'}`}>
                            <div className='relative'>
                                <i class="fa-solid fa-caret-up absolute -top-3 right-4 text-white text-[22px] z-50"></i>
                                <div className='relative appBarTollTipShadow h-[220px] w-[200px] overflow-y-scroll '>
                                    <ul className='filter-toltip'><li data-v-cad3f6d2="" className='' data-value="all" class="">
                                        All
                                    </li><li data-v-cad3f6d2="" className='' data-value="2023-02-01" class="">
                                            February 2023
                                        </li><li data-v-cad3f6d2="" className='' data-value="2023-01-01" class="">
                                            January 2023
                                        </li><li data-v-cad3f6d2="" className='' data-value="2022-12-01" class="">
                                            December 2022
                                        </li><li data-v-cad3f6d2="" className='' data-value="2022-11-01" class="">
                                            November 2022
                                        </li><li data-v-cad3f6d2="" className='' data-value="2022-10-01" class="">
                                            October 2022
                                        </li><li data-v-cad3f6d2="" className='' data-value="2022-09-01" class="">
                                            September 2022
                                        </li><li data-v-cad3f6d2="" className='' data-value="2022-08-01" class="">
                                            August 2022
                                        </li><li data-v-cad3f6d2="" className='' data-value="2022-07-01" class="">
                                            July 2022
                                        </li><li data-v-cad3f6d2="" className='' data-value="2022-06-01" class="">
                                            June 2022
                                        </li><li data-v-cad3f6d2="" className='' data-value="2022-05-01" class="">
                                            May 2022
                                        </li><li data-v-cad3f6d2="" className='' data-value="2022-04-01" class="">
                                            April 2022
                                        </li><li data-v-cad3f6d2="" className='' data-value="2022-03-01" class="">
                                            March 2022
                                        </li><li data-v-cad3f6d2="" className='' data-value="2022-02-01" class="">
                                            February 2022
                                        </li><li data-v-cad3f6d2="" className='' data-value="2022-01-01" class="">
                                            January 2022
                                        </li><li data-v-cad3f6d2="" className='' data-value="2021-12-01" class="">
                                            December 2021
                                        </li><li data-v-cad3f6d2="" className='' data-value="2021-11-01" class="">
                                            November 2021
                                        </li><li data-v-cad3f6d2="" className='' data-value="2021-10-01" class="">
                                            October 2021
                                        </li><li data-v-cad3f6d2="" className='' data-value="2021-09-01" class="">
                                            September 2021
                                        </li><li data-v-cad3f6d2="" className='' data-value="2021-08-01" class="">
                                            August 2021
                                        </li><li data-v-cad3f6d2="" className='' data-value="2021-07-01" class="">
                                            July 2021
                                        </li><li data-v-cad3f6d2="" className='' data-value="2021-06-01" class="">
                                            June 2021
                                        </li><li data-v-cad3f6d2="" className='' data-value="2021-05-01" class="">
                                            May 2021
                                        </li><li data-v-cad3f6d2="" className='' data-value="2021-04-01" class="">
                                            April 2021
                                        </li><li data-v-cad3f6d2="" className='' data-value="2021-03-01" class="">
                                            March 2021
                                        </li><li data-v-cad3f6d2="" className='' data-value="2021-02-01" class="">
                                            February 2021
                                        </li><li data-v-cad3f6d2="" className='' data-value="2021-01-01" class="">
                                            January 2021
                                        </li><li data-v-cad3f6d2="" className='' data-value="2020-12-01" class="">
                                            December 2020
                                        </li><li data-v-cad3f6d2="" className='' data-value="2020-11-01" class="">
                                            November 2020
                                        </li><li data-v-cad3f6d2="" className='' data-value="2020-10-01" class="">
                                            October 2020
                                        </li><li data-v-cad3f6d2="" className='' data-value="2020-09-01" class="">
                                            September 2020
                                        </li><li data-v-cad3f6d2="" className='' data-value="2020-08-01" class="">
                                            August 2020
                                        </li><li data-v-cad3f6d2="" className='' data-value="2020-07-01" class="">
                                            July 2020
                                        </li><li data-v-cad3f6d2="" className='' data-value="2020-06-01" class="">
                                            June 2020
                                        </li><li data-v-cad3f6d2="" className='' data-value="2020-05-01" class="">
                                            May 2020
                                        </li><li data-v-cad3f6d2="" className='' data-value="2020-04-01" class="">
                                            April 2020
                                        </li><li data-v-cad3f6d2="" className='' data-value="2020-03-01" class="">
                                            March 2020
                                        </li><li data-v-cad3f6d2="" className='' data-value="2020-02-01" class="">
                                            February 2020
                                        </li><li data-v-cad3f6d2="" className='' data-value="2020-01-01" class="">
                                            January 2020
                                        </li><li data-v-cad3f6d2="" className='' data-value="2019-12-01" class="">
                                            December 2019
                                        </li><li data-v-cad3f6d2="" className='' data-value="2019-11-01" class="">
                                            November 2019
                                        </li><li data-v-cad3f6d2="" className='' data-value="2019-10-01" class="">
                                            October 2019
                                        </li><li data-v-cad3f6d2="" className='' data-value="2019-09-01" class="">
                                            September 2019
                                        </li><li data-v-cad3f6d2="" className='' data-value="2019-08-01" class="">
                                            August 2019
                                        </li><li data-v-cad3f6d2="" className='' data-value="2019-07-01" class="">
                                            July 2019
                                        </li><li data-v-cad3f6d2="" className='' data-value="2019-06-01" class="">
                                            June 2019
                                        </li><li data-v-cad3f6d2="" className='' data-value="2019-05-01" class="">
                                            May 2019
                                        </li><li data-v-cad3f6d2="" className='' data-value="2019-04-01" class="">
                                            April 2019
                                        </li><li data-v-cad3f6d2="" className='' data-value="2019-03-01" class="">
                                            March 2019
                                        </li><li data-v-cad3f6d2="" className='' data-value="2019-02-01" class="">
                                            February 2019
                                        </li><li data-v-cad3f6d2="" className='' data-value="2019-01-01" class="">
                                            January 2019
                                        </li></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border rounded-md mt-5'>
                    <div className='text-center py-6'>
                        <h1 className='text-[26px] text-[#1273eb] font-[700] mb-2'>0 €</h1>
                        <p className='text-[#869fb2] text-[14px] font-[600]'>EARNINGS*</p>
                    </div>
                </div>
                <p className='text-[#5f7d95] text-[13px] text-right my-3'>*The Referral Program’s earnings will be included in your monthly invoice.</p>
                <div className='border rounded-md px-10 py-24'>
                    <div>
                        <div className='flex justify-center'>
                            <img src="https://static-contributor-fp.cdnpk.net/assets/eff9626468a6ec890d4c2c4a2196a776.svg" alt="" />
                        </div>
                        <div className='text-center'>
                            <p className='text-[#374957] font-[600] leading-[24px] mt-5'>No referrals to show</p>
                            <p className='text-[#374957] leading-[1.8] mt-3'>As soon as your referred friends content is published, they will appear here</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RefarelProggram;