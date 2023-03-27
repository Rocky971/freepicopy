import React from 'react';

const latest = "https://mediablog.cdnpk.net/sites/7/2023/03/cover-EN.gif"
const LatestTrends = () => {
    return (
        <div className='ml-[20px] mb-2'>
            <div className="font-bold text-[#5f7d95] text-[18px] leading-[26px] mb-[10px]">
                <p>Latest trends</p>
            </div>
            <div className="content_side_shadow p-[10px] rounded-[8px]  latest_trends cursor-pointer">
                <div className="">
                    <img src={latest} className="rounded-[8px] latest_img" alt="" />
                </div>
                <div className="text-[16px] font-semibold leading-[24px] text-[#374957] mb-[10px]">
                    <p className='py-[10px]'>Tag your assets with the new AI tool</p>
                    <div className="font-semibold text-[11px] leading-[21px] text-[#869fb2]">
                        <p>2023-03-22</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LatestTrends;