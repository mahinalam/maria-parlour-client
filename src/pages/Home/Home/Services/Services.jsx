import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';
import img1 from '../../../../assets/img1.png'
import img2 from '../../../../assets/img2.png'
import img3 from '../../../../assets/img3.png'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Services = () => {
    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/services`)
            return res.data
        }
    })
    return (
        <div className='bg-[#FFFFFF] md:p-20'>
            <h2 className='text-2xl font-bold text-center md:mt-0 mt-12'>Our Awesome <span className='text-[#F63E7B]'>Services</span></h2>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-6 mt-5'>
                {
                    services.map((service, index) => <ServiceCart
                        key={index}
                        details={service.service_details}
                        image={img1}
                        name={service.service_name}
                        price={service.price}
                        _id={service._id}

                    ></ServiceCart>)
                }
            </div>
            <section className='text-center md:mt-10 mt-10'>
                <button className='btn md:mb-0 mb-6 btn-md bg-white text-[#F63E7B]'>Explore More</button>
            </section>

        </div>
    );
};

export default Services;