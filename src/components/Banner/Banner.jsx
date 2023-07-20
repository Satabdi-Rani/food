import React from 'react';
import banner_image from '../../images/banner_image.jpg';

const Banner = () => {
    return (
        <>
         <div className="banner_content">
            <div className="banner_image flex flex-row p-5 gap-4 pl-12">
                <img src={banner_image} alt="" className='h-48 w-98'/>
                <img src={banner_image} alt="" className='h-48 w-98'/>
                <img src={banner_image} alt="" className='h-48 w-98'/>
            </div>
            </div>   
        </>
    );
};

export default Banner;