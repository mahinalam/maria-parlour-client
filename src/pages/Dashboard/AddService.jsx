import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const AddService = () => {
    const navigate = useNavigate()
    const [axiosSecure] = useAxiosSecure()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()



    const onSubmit = async (data) => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_SECRET_KEY}`, formData)
            .then(res => {
                if (res.data.success) {
                    const service = { service_name: data.serviceTitle, price: parseInt(data.price), service_details: data.description, image: data.image }
                    console.log(service)
                    axiosSecure.post(`/services`, service)
                        .then(res => {
                            console.log(res.data)
                            if (res.data.insertedId) {
                                toast.success("Item Added Successfully")
                                // reset()
                                // navigate('/')
                            }

                        })
                        .catch(err => {
                           toast.error("Failed to addeed item")
                        })
                }
            })
            .catch(err => {
                console.log(err)
            })



    }
    return (
        <div className='md:mx-16 md:p-10 bg-[#FFFFFF] md:mt-8'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex md:flex-row mx-auto md:mx-0 flex-col gap-6 md:gap-10 items-center  '>
                    <label className="form-control md:mt-0 mt-5 md:w-1/2 w-8/12">
                        <div className="label">
                            <span className="label-text font-semibold">Service Title</span>
                        </div>
                        <input type="text" required {...register("serviceTitle")} className="input input-bordered  " />
                    </label>

                    <label className="form-control md:w-1/2 w-8/12">
                        <div className="label">
                            <span className="label-text">Upload Image</span>
                        </div>
                        <input type="file" required {...register("image")} placeholder="Upload Image" className="  text-black" />
                    </label>
                </div>

                <div className='flex md:flex-row mx-auto md:mx-0 flex-col gap-6 md:gap-10 md:mt-4 items-center md:items-baseline'>
                    <label className="form-control w-8/12 md:mt-0 mt-4 md:w-1/2">
                        <div className="label">
                            <span className="label-text">Price</span>
                        </div>
                        <input type="number" required {...register("price")} placeholder="" className="input input-bordered" />
                    </label>
                    <label className="form-control w-8/12 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-semibold">Description</span>
                        </div>
                        <textarea {...register("description")} required className="textarea  h-[150px]" placeholder="description"></textarea>
                    </label>
                </div>
                <div className='text-center md:text-right mt-10'>
                    <button type='submit' className='py-1 px-4 bg-[#F63E7B] text-white'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;