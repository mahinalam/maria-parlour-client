import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const Project = () => {
const [axiosSecure] = useAxiosSecure()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const saveUserInfo = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: parseInt(data.phone),
            message: data.message
        }

        axiosSecure.post(`/save-user-info`,saveUserInfo)
        .then(res => {
            if(res.data.insertedId){
                toast.success("Your Message has been sent!")
                reset()
            }
        })
        .catch(err => {
            console.log(err)
            toast.error("Failed to sent Message")
        })
        
    }

    return (
        <div className='bg-[#FFF8F5] md:px-[200px] py-10 md:py-[100px]'>
            <h2 className='font-bold pb-10 md:text-4xl text-3xl text-center md:mb-16'>Let us hanle Your <br />   Project professionally.</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid md:grid-cols-2 mt-4 gap-5'>
                    <label className="form-control w-full  ">
                        <input type="text" placeholder="First Name"
                            {...register("firstName")}
                            className="input input-bordered border-0 w-full " />
                    </label>
                    <label className="form-control w-full  ">
                        <input type="text" placeholder="Last Name" {...register("lastName")} className="input input-bordered border-0 w-full " />
                    </label>
                    <label className="form-control w-full  ">
                        <input type="email" placeholder="Email Address"
                            {...register("email")}
                            className="input input-bordered border-0 w-full " />
                    </label>
                    <label className="form-control w-full  ">
                        <input type="number" placeholder="Phone Number"
                            {...register("phone")}
                            className="input input-bordered border-0 w-full" />
                    </label>
                </div>
                <section>
                    <textarea {...register("message")} className="textarea w-full mt-5 border-0 h-[120px] md:h-[150px]" placeholder="Your Message"></textarea>
                </section>
                <div className='text-center'>
                    <button type='submit' className='btn btn-md  bg-[#F63E7B] text-white mt-8'>Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default Project;