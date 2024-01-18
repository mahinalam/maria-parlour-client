import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../hooks/useadmin';

const MakeAdmin = () => {

    const [isAdmin] = useAdmin()
    console.log(isAdmin)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        console.log(data.email)
        const email = data.email
        //    await axios.patch(`${import.meta.env.VITE_API_URL}/users/make-admin`,email)
        await axios.patch(`${import.meta.env.VITE_API_URL}/users/make-admin?email=${data.email}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    reset()
                    alert(`${data.email} is now admin`)
                    navigate('/')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='bg-[#FFFFFF] md:px-10 md:h-[40vh] md:my-10 md:mx-10 rounded-3xl'>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                <div className='md:flex items-center md:mx-0 mx-10'>
                    <label className="form-control md:w-7/12 w-full mt-4">
                        <div className="label font-semibold">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="email" {...register("email")} placeholder="mahin@gmail.com" className="input input-bordered" />
                    </label>
                   <div className='text-center'>
                   <button type='submit' className='btn mt-4 md:mt-12 ml-2 bg-[#F63E7B] text-white'>Submit</button> 
                   </div>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;