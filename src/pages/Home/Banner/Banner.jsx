import React from 'react';
import img from '../../../assets/women.png'

const Banner = () => {
    return (
        <div className='bg-[#FFF8F5]  md:px-20  '>
            <div className='flex mt-10 flex-col md:flex-row justify-between gap-10 items-center'>
                <div className='md:w-1/2 order-1 text-center md:text-left'>
                    <h2 className='uppercase font-bold md:text-4xl text-3xl'>Beauty Salon <br /> for every women</h2>
                    <p className='mt-5 '>Our Aim to provide top quality <br /> service for our pretty customers </p>
                    <button className='btn md:mb-4 mb-12 mt-5 my-4 text-white bg-[#F63E7B]'>Get An Appionment</button>
                </div>
                <div className='md:w-1/2 md:order-1 '>
                    <img className='md:w-2/3 w-full ' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;