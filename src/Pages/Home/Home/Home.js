import React from 'react';
import ContentSidebar from '../ContentSideBar/ContentSidebar';
import ContentSuggestions from '../ContentSuggestions/ContentSuggestions';
import DashBoardMain from '../DashBoardMain/DashBoardMain';
import HallOfFame from '../HallOfFame/HallOfFame';
import Perfomance from '../Perfomance/Perfomance';
import PublishAndDownload from '../PublishAndDownload/PublishAndDownload';
import Sliderheading from '../Sliderheading/Sliderheading';

const Home = () => {
    return (
        <div className='bg-[#fff] h-[90vh] overflow-x-scroll hide-scroll-bar'>
            <div className="flex">
                <div className="main-dashboard">
                    <DashBoardMain />
                    <Sliderheading />
                    <Perfomance />
                    <PublishAndDownload />
                    <ContentSuggestions />
                    {/* <HallOfFame /> */}
                </div>
                <div className="w-[340px] px-[15px] py-[13px]">
                    <ContentSidebar />
                </div>
            </div>
        </div>
    );
};

export default Home;