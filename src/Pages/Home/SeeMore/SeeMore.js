import React from 'react';

const SeeMore = () => {
    return (
        <div className='ml-[20px]'>
            <div className="content_side_shadow p-[10px] rounded-[8px]  latest_trends cursor-pointer h-[255px]">
                <div className="flex gap-4 items-center justify-center text-[#1273eb] text-[18px] font-bold h-full text-center">
                    <div className="hover:text-[#114b90]">
                        <p>See more</p>
                        <p>articles</p>
                    </div>
                    <span><i class="fa-solid fa-arrow-right-long"></i></span>
                </div>
            </div>
        </div>
    );
};

export default SeeMore;