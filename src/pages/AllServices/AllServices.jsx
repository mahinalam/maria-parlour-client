import React, { useEffect, useState } from 'react';
import AllServicesCart from './AllServicesCart';

const AllServices = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/services`)
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 items-center gap-5 md:gap-10 mb-10 md:mb-16'>
            {
                services.map(service => <AllServicesCart item={service}></AllServicesCart>)
            }
        </div>
    );
};

export default AllServices;