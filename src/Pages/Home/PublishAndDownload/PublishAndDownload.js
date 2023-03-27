import React from 'react';
const crownImg = 'https://i.ibb.co/XZ6J6Hy/crown.webp';
const publishedImage = 'https://i.ibb.co/cr5mNqT/man-meditating-in-a-lotus-position-with-a-tie-on-his-shirt-816425-3130.jpg';
const publishedImage2 = 'https://i.ibb.co/7n9nrhW/man-meditating-tie-on-his-shirt-816425-3129.jpg';
const publishedImage3 = 'https://i.ibb.co/JmtnLCW/a-man-in-a-blu-a-lotus-position-816425-3128.jpg';
const publishedImage4 = 'https://i.ibb.co/xj5pyKc/a-cartoon-char-sayschineseon-it-816425-3127.jpg';

const author1 = 'https://i.ibb.co/prWX1H6/default-01.png';
const firstImage = 'https://i.ibb.co/FXVsjjk/islamic-greetin-ith-beautiful-gold-168501-62.jpg';
const author2 = 'https://i.ibb.co/pWf9Crn/AATXAJx-F62-R9he-EJq1-X6-Yf-Bd-S6-Er-VD5-d-Iu-TXNSp656-L-s96-c.jpg'
const secondImage = 'https://i.ibb.co/drqyF3H/3d-colorful-feath-nival-composition-475765-569.jpg';
const author3 = 'https://i.ibb.co/YBGczxQ/25122569-220215121505.jpg'
const thirdImage = 'https://i.ibb.co/vk9924G/social-media-post-mes-carnival-2023-318354-985.jpg';
const author4 = 'https://i.ibb.co/st9csbH/AFd-Zucq1w-YKSYNt-MT7-RZr-JO-znv4-Dbi-Lv-TGW70-Hkrsk-s96-c.jpg';
const fourthImage = 'https://img.freepik.com/free-vector/ramadan-kareem…-wallpaper-design_758894-140.jpg?size=260&ext=jpg';
const PublishAndDownload = () => {
    return (
        <div className='ml-[20px] pb-[.4375rem]'>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {/* Two_card */}
                <div className="border  pt-[0.9375rem] pb-[2.5rem] px-[0.625rem] rounded-[8px] mb-[14px]">
                    <div className="flex mb-[20px] justify-between">
                        <p className='font-bold text-[16px] leading-[24px]'>Published files</p>
                        <div className="flex gap-2 items-center text-[#1273eb] text-[14px] font-bold">
                            <p>All files</p>
                            <span><i class="fa-solid fa-arrow-right-long"></i></span>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-[16px] flex">
                            <table>
                                <thead>
                                    <tr className='leading-[34px] text-[14px] font-normal text-[#869fb2] bg-[#F2F5F7] rounded-t-2xl'>
                                        <th className='w-[200px] rounded-tl-[8px] text-start px-[10px]'>Preview</th>
                                        <th className='w-[200px] text-start'>Last Download</th>
                                        <th className='w-[200px] rounded-tr-[8px]  text-start'>Likes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="relative bg-white">
                                            <div className='publish_main'>
                                                <img src={publishedImage} className="h-[115px] w-[115px] p-[10px]" alt="" />
                                                <div className="absolute top-[-70px] left-[120px]  w-[260px] p-[10px] bg-white publish_big">
                                                    <img src={publishedImage} className="" alt="" />
                                                    <i class="fa-solid fa-caret-left absolute top-[120px] text-[24px] text-[#fff] left-[-8px]"></i>
                                                </div>
                                            </div>
                                            <img src={crownImg} className="absolute w-[28px] h-[28px] top-2 left-2 bg-[#394755] p-[7px] rounded-[6px]" alt="" />
                                        </td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className='bg-[#F2F5F7]'>
                                        <td className="relative">
                                            <div className='publish_main'>
                                                <img src={publishedImage2} className="h-[115px] w-[115px] p-[10px]" alt="" />
                                                <div className="absolute top-[-70px] left-[120px]  w-[260px] p-[10px] bg-white publish_big">
                                                    <img src={publishedImage2} className="" alt="" />
                                                    <i class="fa-solid fa-caret-left absolute top-[120px] text-[24px] text-[#fff] left-[-8px]"></i>
                                                </div>
                                            </div>
                                            <img src={crownImg} className="absolute w-[28px] h-[28px] top-2 left-2 bg-[#394755] p-[7px] rounded-[6px]" alt="" />
                                        </td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td className="relative">
                                            <div className='publish_main'>
                                                <img src={publishedImage3} className="h-[115px] w-[115px] p-[10px]" alt="" />
                                                <div className="absolute top-[-70px] left-[120px]  w-[260px] p-[10px] bg-white publish_big">
                                                    <img src={publishedImage3} className="" alt="" />
                                                    <i class="fa-solid fa-caret-left absolute top-[120px] text-[24px] text-[#fff] left-[-8px]"></i>
                                                </div>
                                            </div>
                                            <img src={crownImg} className="absolute w-[28px] h-[28px] top-2 left-2 bg-[#394755] p-[7px] rounded-[6px]" alt="" />
                                        </td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className='bg-[#F2F5F7]'>
                                        <td className="relative">
                                            <div className='publish_main'>
                                                <img src={publishedImage4} className="h-[115px] w-[115px] p-[10px]" alt="" />
                                                <div className="absolute top-[-70px] left-[120px]  w-[260px] p-[10px] bg-white publish_big">
                                                    <img src={publishedImage4} className="" alt="" />
                                                    <i class="fa-solid fa-caret-left absolute top-[120px] text-[24px] text-[#fff] left-[-8px]"></i>
                                                </div>
                                            </div>
                                            <img src={crownImg} className="absolute w-[28px] h-[28px] top-2 left-2 bg-[#394755] p-[7px] rounded-[6px]" alt="" />
                                        </td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* Two_card */}
                <div className="border pt-[0.9375rem] pb-[2.5rem] px-[0.625rem] rounded-[8px] mb-[14px]">
                    <div className="mb-[20px]">
                        <p className='font-bold text-[16px] leading-[24px]'>Most downloaded in last month</p>
                    </div>
                    <div className="">
                        <div className="text-[16px] flex">
                            <table>
                                <thead>
                                    <tr className='leading-[34px] text-[14px] font-normal text-[#869fb2] bg-[#F2F5F7] rounded-t-2xl'>
                                        <th className='w-[150px] rounded-tl-[8px] text-start px-[10px]'>Author</th>
                                        <th className='w-[220px] text-start'>Preview</th>
                                        <th className='w-[230px] rounded-tr-[8px]  text-start'>Downloads</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="bg-white">
                                            <img src={author1} className="rounded-full w-[50px] h-[50px] ml-[7px] cursor-pointer" alt="" />
                                        </td>
                                        <td>
                                            <div className="relative bg-white">
                                                <div className='publish_main'>
                                                    <img src={firstImage} className="h-[115px] w-[115px] p-[10px]" alt="" />
                                                    <div className="absolute top-[-70px] left-[120px]  w-[260px] bg-white publish_big">
                                                        <img src={firstImage} className="p-[10px]" alt="" />
                                                        <i class="fa-solid fa-caret-left absolute top-[120px] text-[24px] text-[#fff] left-[-8px]"></i>
                                                    </div>
                                                </div>
                                                <img src={crownImg} className="absolute w-[28px] h-[28px] top-2 left-2 bg-[#394755] p-[7px] rounded-[6px]" alt="" />
                                            </div>
                                        </td>

                                        <td>1602</td>
                                    </tr>
                                    <tr className='bg-[#F2F5F7]'>
                                        <td className="">
                                            <img src={author2} className="rounded-full w-[50px] h-[50px] ml-[7px] cursor-pointer" alt="" />
                                        </td>
                                        <td>
                                            <div className="relative">
                                                <div className='publish_main'>
                                                    <img src={secondImage} className="h-[115px] w-[115px] p-[10px]" alt="" />
                                                    <div className="absolute top-[-70px] left-[120px]  w-[260px] bg-white publish_big">
                                                        <img src={secondImage} className="p-[10px]" alt="" />
                                                        <i class="fa-solid fa-caret-left absolute top-[120px] text-[24px] text-[#fff] left-[-8px]"></i>
                                                    </div>
                                                </div>
                                                <img src={crownImg} className="absolute w-[28px] h-[28px] top-2 left-2 bg-[#394755] p-[7px] rounded-[6px]" alt="" />
                                            </div>
                                        </td>

                                        <td>1602</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-white">
                                            <img src={author3} className="rounded-full w-[50px] h-[50px] ml-[7px] cursor-pointer" alt="" />
                                        </td>
                                        <td>
                                            <div className="relative bg-white">
                                                <div className='publish_main'>
                                                    <img src={thirdImage} className="h-[115px] w-[115px] p-[10px]" alt="" />
                                                    <div className="absolute top-[-70px] left-[120px]  w-[260px] bg-white publish_big">
                                                        <img src={thirdImage} className="p-[10px]" alt="" />
                                                        <i class="fa-solid fa-caret-left absolute top-[120px] text-[24px] text-[#fff] left-[-8px]"></i>
                                                    </div>
                                                </div>
                                                <img src={crownImg} className="absolute w-[28px] h-[28px] top-2 left-2 bg-[#394755] p-[7px] rounded-[6px]" alt="" />
                                            </div>
                                        </td>

                                        <td>1258</td>
                                    </tr>
                                    <tr className='bg-[#F2F5F7]'>
                                        <td className="">
                                            <img src={author4} className="rounded-full w-[50px] h-[50px] ml-[7px] cursor-pointer" alt="" />
                                        </td>
                                        <td>
                                            <div className="relative">
                                                <div className='publish_main'>
                                                    <img src={fourthImage} className="h-[115px] w-[115px] p-[10px]" alt="" />
                                                    <div className="absolute top-[-70px] left-[120px]  w-[260px] bg-white publish_big">
                                                        <img src={fourthImage} className="p-[10px]" alt="" />
                                                        <i class="fa-solid fa-caret-left absolute top-[120px] text-[24px] text-[#fff] left-[-8px]"></i>
                                                    </div>
                                                </div>
                                                <img src={crownImg} className="absolute w-[28px] h-[28px] top-2 left-2 bg-[#394755] p-[7px] rounded-[6px]" alt="" />
                                            </div>
                                        </td>
                                        <td>1202</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublishAndDownload;