import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ContentSidebar from '../ContentSideBar/ContentSidebar';
import ContentSuggestions from '../ContentSuggestions/ContentSuggestions';
import DashBoardMain from '../DashBoardMain/DashBoardMain';
import HallOfFame from '../HallOfFame/HallOfFame';
import LatestTrends from '../LatestTrends/LatestTrends';
import Perfomance from '../Perfomance/Perfomance';
import PublishAndDownload from '../PublishAndDownload/PublishAndDownload';
import SeeMore from '../SeeMore/SeeMore';
import ShinyIcons from '../ShinyIcons/ShinyIcons';
import Sliderheading from '../Sliderheading/Sliderheading';

const Home = () => {
    return (
        <div className='bg-[#fff] h-[90vh] '>
            <div className="flex lg:flex-row flex-col">
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
                    <LatestTrends />
                    <ShinyIcons />
                    <SeeMore />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;