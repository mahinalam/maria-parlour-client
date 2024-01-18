import React from 'react';
import { Link } from 'react-router-dom';


const ServiceCart = ({image,name,price,details,_id}) => {
    return (
        <div className='flex flex-col items-center space-y-2 p-5'>
            <div>
                <img src={image} className='rounded-full w-[80px]' alt="" />
            </div>
            <p className='font-bold text-2xl my-4'>{name}</p>
            <p className='text-[#F63E7B] font-bold'>${price}</p>
            <p className='text-center'>{details}</p>
            <Link to={`/dashboard/services/${_id}`}><button className='btn text-white bg-[#F63E7B] mt-4'>Add to Cart</button></Link>
        </div>
    );
};

export default ServiceCart;