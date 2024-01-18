import React from 'react';
import screenWash from '../../../assets/screenwash.png'

const Screenwash = () => {
    return (
        
            <div className='flex md:mt-0 mt-7 md:flex-row flex-col gap-8 md:gap-10 bg-[#FFF8F5] md:p-20'>
                <div className='md:w-1/2'><img className='w-full' src={screenWash} alt="" /></div>
                <div className='md:w-1/2 w-full md:pl-10 md:mt-0 mt-4'>
                    <h2 className='md:text-4xl text-3xl font-bold md:text-left text-center'>Let us handle Your <br /> screen <span className='text-[#F63E7B]'>Professionally</span></h2>
                    <p className='mt-4 md:text-left text-center'>Let us handle your screen professionally. Our dedicatted customer service staff will provide service for 24/7.We wantr to ensure top quality service for our lovely customers.</p>
                    <div className='flex items-center justify-center gap-6 md:gap-16 md:mt-8 my-6'>
                        <div className='md:mr-8'>
                            <p className='font-bold md:text-5xl text-4xl text-[#F63E7B]'>500+</p>
                            <p className='font-medium  mt-6'>Happy Customer</p>
                        </div>
                        <div className=''>
                            <p className='font-bold md:text-5xl text-4xl text-[#F63E7B]'>16+</p>
                            <p className='font-medium mt-6'>Total Service</p>
                        </div>
                    </div>
                </div>
            </div>


    );
};

export default Screenwash;