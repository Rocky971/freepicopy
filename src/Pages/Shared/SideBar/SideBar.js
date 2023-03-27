import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../assets/sidebar/e418cfe53773617e237f15fb02f027ea.svg';
const logo = "https://static-contributor-fp.cdnpk.net/assets/e418cfe53773617e237f15fb02f027ea.svg"


const SideBar = ({ toggleOpen }) => {
    const [open, setOpen] = useState(false);
    const open1 = <i className="fa-solid fa-caret-down dropdown"></i>;
    const close = <i className="fa-solid fa-caret-up dropdown"></i>;
    console.log(toggleOpen)
    return (

        <div className={`lg:w-[280px] w-full h-[100vh] lg:static lg:block absolute top-[75px] bg-[#1d262d] pb-[38px] ${toggleOpen ? '' : 'hidden'}`}>
            <aside className="">
                {/* logo */}
                <div className="sidebar-logo">
                    <img src={logo} className="max-w-[180px] " alt="" />
                </div>
                {/* menu */}
                <nav className='side-bar'>
                    <div className="menu">
                        <div className="item"><a className='rounded-[8px] text-[#bac8d3]' href="#">Dashboard</a></div>
                        <div className="item"><a className='rounded-[8px] text-[#bac8d3]' href="#">Files</a></div>
                        <div className="item item-margin-cutom">
                            <a className={`sub-btn text-white ${open ? 'rounded-t-[8px] bg-[#ffffff1a] ' : 'rounded-[8px] text-[#bac8d3]'}`} onClick={() => setOpen(!open)}>Stats <span>{open ? close : open1}</span></a>
                            <div className={`sub-menu ${open ? 'block' : 'hidden'}`}>
                                <Link to='/general' className='sub-item sub-menu-gen text-[#bac8d3]'>General</Link >
                                <a href="#" className='sub-item sub-menu-cont text-[#bac8d3]'>Contributors ranking</a>
                            </div>
                        </div>
                        <div className="item  mt-[3px]">
                            <Link to='/referral' className='rounded-[8px] text-[#bac8d3]'>Referral Program</Link>
                        </div>
                    </div>
                </nav>
            </aside>
        </div >
    );
};

export default SideBar;