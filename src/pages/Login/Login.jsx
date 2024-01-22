import React, { useContext } from 'react';
import { CgGoogle } from 'react-icons/cg';
import { FaFacebook } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
    const { signInWithGoogle, signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const {
        reset,
    } = useForm()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)

            .then(result => {

               if(result.user){
                toast.success('user Login Successfull')
                navigate(from, { replace: true });
               }

            })
            .catch(err => {
                console.log(err)
                toast.error(err.message)
            })

    }

    const handleGoogleSign = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                const email = result.user.email
                axios.put(`${import.meta.env.VITE_API_URL}/save-user`, { email })
                    .then(res => {
                        console.log(res.data)
                       if(result.user){
                        toast.success('user Login Successfull')
                        navigate(from, { replace: true });
                       }
                    })
                    .catch(err => {
                        console.log(err)
                        toast.error(err.message)
                    })
              
            })
            .catch(err => {
                console.log(err)
                toast.error(err.message)
            })
    }

    return (
        <>
            <div className='md:w-2/5 md:p-8  md:mt-16 mx-auto border-2 border-gray-300 '>
                <div>
                    <h2 className='font-bold text-2xl md:mb-8 mb-4 mt-4 md:pl-0 pl-4'>Login here</h2>
                    <form onSubmit={handleSubmit}>

                        <label className="form-control w-full  md:px-0 px-4">
                            <div className="label">
                                <span className="label-text font-semibold">Email</span>
                            </div>
                            <input type="email" name='email' placeholder='Ex: @gmail.com' className="input input-bordered border-0  " />
                            {/* {errors.firstName?.type === "required" && <span className='text-red-600 mt-1'>First name is required</span>} */}
                        </label>
                        <label className="form-control w-full md:px-0 px-4 ">
                            <div className="label">
                                <span className="label-text font-semibold">Password</span>
                            </div>
                            <input type="password" name='password' placeholder='Ex: ******' className="input input-bordered border-0  " />
                        </label>
                       <div className='px-4 md:px-0'> <button type='submit' className=' md:px-0 btn mt-5 my-4 block text-center w-full text-white bg-[#F63E7B]'>Login</button></div>
                    </form>
                    <p className='font-medium text-center md:mb-0 mb-4'>Don't have an account? <Link to='/signup' className='text-[#F63E7B] underline'>Signup</Link></p>
                </div>
            </div>
            <div className="divider font-medium md:w-2/5 mx-auto ">OR</div>
            <div className='md:w-2/5 mx-auto md:px-16 md:mb-16 text-center mb-8'>
                <div className='border-2 border-gray-400 inline-flex items-center gap-10 rounded-full p-1 '>
                    <FaFacebook className='bg-white text-[#3076FF]' size={30} /> <span className='pr-16 font-medium'>Continue with Facebook</span>
                </div> <br />
                <div onClick={handleGoogleSign} className='border-2 mt-3 border-gray-400 inline-flex items-center gap-10 rounded-full p-1'>
                    <CgGoogle className='bg-white text-red-300' size={30} /> <span className='pr-[80px] font-medium'>Continue with Google</span>
                </div>

            </div>
        </>
    );
};

export default Login;