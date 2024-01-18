import React from 'react';
import ServiceCart from '../Home/Home/Services/ServiceCart';
import { Link } from 'react-router-dom';

const AllServicesCart = ({ item }) => {
const {service_details,image,price,service_name,_id} = item;
    return (
        <div>
            <div className='flex flex-col items-center  space-y-2 p-5'>
                <div>
                    <img src={image} className='rounded-full w-[80px]' alt="" />
                </div>
                <p className='font-bold text-2xl my-4'>{service_name}</p>
                <p className='text-[#F63E7B] font-bold text-xl'>${price}</p>
                <p className='md:text-left text-center'>{service_details}</p>
            </div>
            <div className='text-center'>
               <Link to={`dashboard/services/${_id}`}> <button className='btn bg-[#F63E7B] text-white'>Add Service</button></Link>
            </div>
        </div>
    );
};

export default AllServicesCart;