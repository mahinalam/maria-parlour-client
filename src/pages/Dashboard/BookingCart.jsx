import React from 'react';

const BookingCart = ({ item }) => {
    const { image, status, serviceDetails, service_name,
    } = item
    return (

        <div className='bg-[#FFFFFF] px-8 py-6 '>
            <div className='flex flex-col space-y-2'>
                <div className='flex justify-between items-center'>
                    <img src={image} className='w-[70px]' alt="" />
                    <button className={`${status === 'pending' ? 'btn  bg-[#FFE3E3] text-[#FF4545]' : 'btn  bg-[#C6FFE0] text-[#009444]'}`}>{status}</button>
                </div>
                <p className='font-semibold text-xl'>{service_name}</p>
                <p>{serviceDetails}</p>
            </div>
        </div>
        // </div>
    );
};

export default BookingCart;