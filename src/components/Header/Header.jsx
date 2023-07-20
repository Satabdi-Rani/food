import React from 'react';
import logo from '../../images/logo.jpg';
import {RiArrowDropLeftLine} from 'react-icons/ri';

const Header = () => {
    return (
        <>
        <div className="header_content grid grid-cols-2">
          <div className="logo_content flex flex-row">
            <div className="left_arrow">
                <span className='text-white'>{RiArrowDropLeftLine}</span> 
            </div>
            <div className="logo">
                <img src={logo} alt="" className='w-24 ml-12'/>
            </div>
            <div className="search_content">
                <input className='bg-sky-800 px-7 py-2 rounded-3xl text-white font-medium mt-7' type="text" placeholder='What are you looking for?' />
            </div>
            </div> 

            <div className="login_content flex flex-row flex-end ml-32">
                <div className="login">
                    <h3 className='text-white text-xl mt-5'>Login</h3>
                </div>
                <div className="download_app">
                    <button className='ml-4 mt-5 px-5 py-2 rounded-3xl text-white font-medium bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500'>DOWNLOAD APP</button>
                </div>
                </div> 
        </div> 
        </>
    );
};

export default Header;