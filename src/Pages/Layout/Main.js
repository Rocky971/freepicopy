import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import SideBar from '../Shared/SideBar/SideBar';

const Main = () => {
    const [toggleOpen, setToggleOpen] = useState(false);
    return (
        <div className='flex'>
            <div className="">
                <SideBar toggleOpen={toggleOpen} />
            </div>
            <div className="w-full">
                <NavBar toggleOpen={toggleOpen} setToggleOpen={setToggleOpen} />
                <div className="overflow-x-scroll outlet_footer hide-scroll-bar">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Main;