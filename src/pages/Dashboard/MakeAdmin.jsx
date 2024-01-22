import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAdmin from '../../hooks/useadmin';
import toast from 'react-hot-toast';
import ReUsuable from '../../somponents/ReUsuable';

const MakeAdmin = () => {

   const [notAdmin,setNotAdmin] = useState(false)
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
                console.log(res.data.result1)
                if (res.data.result2.modifiedCount > 0) {
                    setNotAdmin(false)
                    reset()
                    toast.success(`${data.email} is Admin now`)
                    navigate('/')
                }

                else {
                   setNotAdmin(true)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='bg-[#FFFFFF] md:px-10 h-[50vh] md:h-[40vh] md:pb-[300px] md:mt-10 md:mx-10 rounded-3xl'>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                <div className='md:flex items-center md:mx-0 mx-10'>
                    <label className="form-control md:w-7/12 w-full mt-4">
                        <div className="label font-semibold">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="email" required {...register("email")} placeholder="mahin@gmail.com" className="input input-bordered" />
                    </label>
                    <div className='text-center'>
                        <button type='submit' className='btn mt-4 md:mt-12 ml-2 bg-[#F63E7B] text-white'>Submit</button>
                    </div>
                </div>
            </form>
           <div className='text-center md:mt-10 mt-8'>
           {notAdmin && <ReUsuable isHeightFull={false} title={"No user Matched"} heading="Go Back" address='/' > </ReUsuable>}
           </div>

        </div>
    );
};

export default MakeAdmin;