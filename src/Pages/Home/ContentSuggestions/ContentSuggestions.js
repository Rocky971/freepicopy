import React from 'react';


const ContentSuggestions = () => {
    const manyButton = ' text-[#869fb2] px-[20px] text-[14px] mr-[10px] mb-[10px] border border-[#869fb2] rounded-[3px] leading-[34px] font-semibold cursor-pointer'
    return (
        <div className="pb-[.9375rem]">
            <div className="">
                <div className="border border-[#eff3f6 py-[0.9375rem] px-[0.625rem] rounded-[8px] ml-[20px]">
                    <div className="">
                        <div className="text-[14px] font-semibold leading-[22px] text-[#374957] mb-[10px]">
                            <p>Content suggestions:</p>
                        </div>
                        <div className="text-[14px] mb-[20px]">
                            Check out our content suggestions and get inspiration on what to upload next.
                        </div>
                    </div>
                    {/* button */}
                    <div className=" font-semibold cursor-pointer ">
                        <button className='text-[#1273eb] border-2 border-[#1273eb] rounded-[3px] px-[30px] h-[44px] text-[16px]'><i class="fa-solid fa-fire-flame-curved mr-[10px]"></i> Search trends</button>
                    </div>
                    {/* more_button */}
                    <div className="mt-[30px]">
                        <ul className='flex flex-wrap'>
                            <li className={manyButton}>World Press Freedom Day</li>
                            <li className={manyButton}>Buddha Purnima</li>
                            <li className={manyButton}>World Laughter Day</li>
                            <li className={manyButton}>Dia de la madre</li>
                            <li className={manyButton}>Class of 2023</li>
                            <li className={manyButton}>Graduation</li>
                            <li className={manyButton}>Dia del maestro</li>
                            <li className={manyButton}>Revolucion de mayo</li>
                            <li className={manyButton}>Africa day</li>
                            <li className={manyButton}>Pentecost</li>
                            <li className={manyButton}>Memorial day</li>
                            <li className={manyButton}>World hypertension day</li>
                            <li className={manyButton}>No tobacco day</li>
                            <li className={manyButton}>LGBT Pride</li>
                            <li className={manyButton}>Anti terrorism day</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSuggestions;