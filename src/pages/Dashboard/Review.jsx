import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Review = () => {
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
        console.log(image)
        const formData = new FormData()
        formData.append('image', image)
        await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_SECRET_KEY}`, formData)
            .then(res => {
                if (res.data.success) {
                    const review = { name: data.name, profession: data.companyName, details: data.description, rating: parseInt(data.rate) }
                    console.log(review)
                    axiosSecure.post(`/review`, review)
                        .then(res => {
                            console.log(res.data)
                            if (res.data.insertedId) {
                                alert("Item Review successfull")
                                navigate('/')
                            }

                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            })
            .catch(err => {
                console.log(err)
            })



    }
    return (
        <div className='md:mt-6 md:mx-0   md:px-10 md:py-6 '>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full  mt-6 space-y-5 md:text-left text-center'>
                <input type="text" placeholder="Your Name"
                    {...register("name")}
                    className="input input-bordered border-0 md:w-1/2 w-8/12" /> <br />
                <input type="text" placeholder="Company's Name"
                    {...register("companyName")}
                    className="input input-bordered border-0 md:w-1/2 w-8/12 " /> <br />
                <input type="text" placeholder="Description"
                    {...register("description")}
                    className="input input-bordered border-0 md:w-1/2 w-8/12 " /> <br />
                <input type="number" placeholder="Rate Us"
                    {...register("rate")}
                    className="input input-bordered border-0 md:w-1/2 w-8/12 " /> <br />
                <label className="form-control md:w-1/2 w-8/12 md:mx-0 mx-auto">
                    <div className="label md:w-1/2 w-8/12">
                        <span className="label-text">Upload Image</span>
                    </div>
                    <input type="file" {...register("image")} placeholder="Upload Image" className=" " />
                </label>

                <button type='submit' className='btn bg-[#F63E7B] text-white'>Submit</button>
            </form>
        </div>
    );
};

export default Review;