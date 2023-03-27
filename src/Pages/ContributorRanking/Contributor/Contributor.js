import React from 'react';
import { FiDownload } from "react-icons/fi";
import { RiUserHeartLine } from "react-icons/ri";
const rankingData = [
    { id: 35208, avatar: 'https://avatar.cdnpk.net/default_03.png', user: 'bstudiobd@gmail.com', files: 3, download: 343, followers: 1 },
    { id: 1, avatar: 'https://avatar.freepik.com/2199844-210728105124.jpg', user: 'rawpixel.com', files: 175, download: 237, followers: 121 },
    { id: 2, avatar: 'https://profile.freepik.com/accounts/avatar/737579.jpg', user: 'StarLine', files: 42, download: 252, followers: 77 },
    { id: 3, avatar: 'https://avatar.cdnpk.net/1684710.jpg', user: 'brgfx', files: 131, download: 61, followers: 49 },
    { id: 4, avatar: 'https://avatar.freepik.com/13115374-220407115921.jpg', user: 'upklyak', files: 19, download: 40, followers: 60 },
    { id: 5, avatar: 'https://avatar.cdnpk.net/14787228-220806032820.jpg', user: 'Vectorium', files: 2, download: 20, followers: 16 },
    { id: 6, avatar: 'https://avatar.freepik.com/474714-220317102808.jpg', user: 'BiZkettE1', files: 4, download: 63, followers: 35 },
    { id: 7, avatar: 'https://profile.freepik.com/accounts/avatar/1601695.jpg', user: 'benzoix', files: 155, download: 14, followers: 11 },
    { id: 8, avatar: 'https://profile.freepik.com/accounts/avatar/938508.jpg', user: 'kjpargeter', files: 18, download: 60, followers: 15 },
    { id: 9, avatar: '	https://profile.freepik.com/accounts/avatar/858392.jpg', user: 'harryarts', files: 25, download: 62, followers: 16 },
    { id: 10, avatar: 'https://profile.freepik.com/accounts/avatar/1580866.jpg', user: 'kues1', files: 536, download: 7, followers: 5 },
    { id: 11, avatar: 'https://profile.freepik.com/accounts/avatar/7455584.jpg', user: 'xvector', files: 15, download: 4, followers: 8 },
    { id: 12, avatar: 'https://avatar.freepik.com/default_04.png', user: 'vector_corp', files: 3, download: 24, followers: 13 },
    { id: 13, avatar: 'https://profile.freepik.com/accounts/avatar/default_05.png', user: 'creative_hat', files: 17, download: 27, followers: 9 },
    { id: 14, avatar: 'https://avatar.freepik.com/14322889.jpg', user: 'graphicforest', files: 3, download: 7, followers: 13 },
]

const Contributor = () => {
    return (
        <div className='p-[18px]'>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
                {/* *** */}
                {
                    rankingData.map(rank =>
                        <div className="content_side_shadow p-[15px] rounded-[3px] relative  latest_trends cursor-pointer">
                            <div className="flex items-center">
                                <img src={rank.avatar} className="rounded-full w-[64px] mr-[10px]" alt="" />
                                <div className='text-[16px] font-semibold whitespace-nowrap text-ellipsis overflow-hidden'>{rank.user}</div>
                            </div>
                            <div className="py-[20px] px-[16px] flex justify-between">
                                <div className="text-[16px] flex flex-col items-center">
                                    <i class="fi fi-rr-resources"></i>
                                    <p className='font-semibold'>{rank.files}3k</p>
                                </div>
                                <div className="text-[16px] flex justify-center flex-col items-center">
                                    <FiDownload className='mb-[6px]' />
                                    <p className='font-semibold'>{rank.files}3k</p>
                                </div>
                                <div className="text-[16px] flex flex-col items-center">
                                    <RiUserHeartLine className='mb-[6px]' />
                                    <p className='font-semibold'>{rank.files}3k</p>
                                </div>
                            </div>
                            <p className='absolute top-0 right-0 m-[14px] font-bold text-[16px]'># {rank.id}</p>
                        </div>
                    )
                }



            </div>
            <div className="py-[20px]">
                <ul className='flex gap-1 items-center justify-center'>
                    <li className='py-[5px] px-[10px] text-[#1273eb] font-semibold text-[16px] cursor-pointer opacity-[.4]'>First</li>
                    <li className='px-[20px] py-[12px] text-white font-normal bg-[#1273eb]  opacity-[.4] rounded-[3px] text-[16px]'><i class="fa-solid fa-chevron-left"></i></li>
                    <li className='px-[20px] py-[12px] text-white font-normal bg-[#0353a7] rounded-[3px] text-[16px]'>1</li>
                    <li className='px-[20px] py-[12px] text-white font-normal bg-[#1273eb] rounded-[3px] text-[16px]'>2</li>
                    <li className='px-[20px] py-[12px] text-white font-normal bg-[#1273eb] rounded-[3px] text-[16px]'>3</li>
                    <li className='px-[20px] py-[12px] text-white font-normal bg-[#1273eb] rounded-[3px] text-[16px]'><i class="fa-solid fa-chevron-right"></i></li>
                    <li className='py-[5px] px-[10px] text-[#1273eb] font-semibold text-[16px] cursor-pointer'>Last</li>
                </ul>
            </div>
        </div>
    );
};

export default Contributor;