import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimionals = () => {

    const { data: review = [] } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/reviews`)
            console.log(res.data)
            return res.data
        }

    })
    return (
        <div className='md:my-16 md:px-10 my-10'>
            <h2 className='md:text-4xl text-3xl font-bold text-center md:mb-0 mb-10'> Testimionals</h2>
            <div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    centeredSlides={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >


                    {
                        review.map((item,index) => <SwiperSlide key={index}>
                            <div className='md:p-16'>

                                <div className='flex gap-4'>
                                    <img className='w-[60px] rounded-full' src={item.image} alt="" />
                                    <div className='font-semibold'>
                                        <p>{item.name}</p>
                                        <p>{item.profession}</p>
                                    </div>
                                </div>
                                <p className='my-5'>{item.details}</p>
                                <div>
                                    <Rating style={{ maxWidth: 150 }} value={item.rating} />
                                </div>
                            </div>

                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimionals;