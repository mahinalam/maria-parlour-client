import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { CgGoogle } from "react-icons/cg";
import { useForm } from 'react-hook-form';
import { TbFidgetSpinner } from "react-icons/tb";
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';

const Signup = () => {

    const { createUser, loading, signInWithGoogle } = useContext(AuthContext)
    // const navigate = useNavigate()
    // const location = useLocation()
    // const from = locaton.state?.from?.pathname || '/'

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const email = data.email;
        const firstName = data.firstName
        const lastName = data.lastName
        const password = data.password

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                axios.put(`${import.meta.env.VITE_API_URL}/save-user`, { email })
                    .then(res => {
                        if (res.data.insertedId) {
                            alert("User created successfully")
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })



            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleGoogleSign = () => {
        signInWithGoogle()
            .then(result => {
                const email = result.user.email
                axios.put(`${import.meta.env.VITE_API_URL}/save-user`, { email })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <div className='md:w-2/5 md:p-8 md:mt-0 mt-10  md:mt-16 mx-auto border-2 border-gray-300 '>
                <div>
                    <h2 className='font-bold text-2xl md:mb-8 mb-4 mt-4 md:pl-0 pl-4'>Create an Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label className="form-control w-full m:ml-0 md:px-0 px-4 ">
                            <div className="label">
                                <span className="label-text font-semibold">First Name</span>
                            </div>
                            <input type="text"  {...register("firstName", { required: true })} placeholder='Ex: abcdef' className="input input-bordered border-0  " />
                            {errors.firstName?.type === "required" && <span className='text-red-600 mt-1'>First name is required</span>}
                        </label>
                        <label className="form-control w-full md:px-0 px-4 ">
                            <div className="label">
                                <span className="label-text font-semibold">Last Name</span>
                            </div>
                            <input type="text"  {...register("lastName", { required: true })} placeholder='Ex: abcdef' className="input input-bordered border-0  " />
                            {errors.lastName?.type === "required" && <span className='text-red-600 mt-1'>Last name is required</span>}
                        </label>
                        <label className="form-control w-full md:px-0 px-4">
                            <div className="label">
                                <span className="label-text font-semibold">Username or Email</span>
                            </div>
                            <input type="email"  {...register("email", { required: true })} placeholder='Ex: @gmail.com' className="input input-bordered border-0  " />
                            {errors.email?.type === "required" && <span className='text-red-600 mt-1'>Username or email is required</span>}
                        </label>
                        <label className="form-control w-full md:px-0 px-4 ">
                            <div className="label">
                                <span className="label-text font-semibold">Password</span>
                            </div>
                            <input type="password"  {...register("password", { required: true, maxLength: 16, minLength: 6 })} placeholder='Ex: ******' className="input input-bordered border-0  " />
                            {errors.password?.type === "required" && <span className='text-red-600 mt-1'>Username or email is required</span>}
                            {errors.password?.type === "maxLength" && <span className='text-red-600 mt-1'>Password must be 16 characters or less</span>}
                            {errors.password?.type === "minLength" && <span className='text-red-600 mt-1'>Password must have 6 characters</span>}
                        </label>

                       <div className='md:px-0 px-4'>
                       <button type='submit' className='btn mt-5 my-4 block text-center w-full text-white bg-[#F63E7B]'>Create an Account</button>
                       </div>
                    </form>
                    <p className='font-medium text-center md:mb-0 mb-4'>Already have an account? <Link to='/login' className='text-[#F63E7B]'>Login</Link></p>
                </div>
            </div>
            <div className="divider font-medium md:w-2/5 mx-auto ">OR</div>
            <div className='md:w-2/5 mx-auto md:px-16 md:mb-16 text-center mb-8'>
                <div className='border-2 border-gray-400 inline-flex items-center gap-10 rounded-full p-1'>
                    <FaFacebook className='bg-white text-[#3076FF]' size={30} /> <span className='pr-16 font-medium'>Continue with Facebook</span>
                </div> <br />
                <div onClick={handleGoogleSign} className='border-2 mt-3 border-gray-400 inline-flex items-center gap-10 rounded-full p-1'>
                    <CgGoogle className='bg-white text-red-300' size={30} /> <span className='pr-[80px] font-medium'>Continue with Google</span>
                </div>

            </div>
        </>
    );
};

export default Signup;