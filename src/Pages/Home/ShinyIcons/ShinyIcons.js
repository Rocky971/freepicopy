import React from 'react';
const shiny = "https://mediablog.cdnpk.net/sites/7/2023/03/cover-blog-1.png"

const ShinyIcons = () => {
    return (
        <div className='ml-[20px] mb-2'>
            <div className="content_side_shadow p-[10px] rounded-[8px]  latest_trends cursor-pointer">
                <div className="">
                    <img src={shiny} className="rounded-[8px] latest_img" alt="" />
                </div>
                <div className="text-[16px] font-semibold leading-[24px] text-[#374957] mb-[10px]">
                    <p className='py-[10px]'>Shiny icons for shiny people</p>
                    <div className="font-semibold text-[11px] leading-[21px] text-[#869fb2]">
                        <p>2023-03-14</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShinyIcons;