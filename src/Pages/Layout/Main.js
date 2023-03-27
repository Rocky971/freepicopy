import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
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
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Main;