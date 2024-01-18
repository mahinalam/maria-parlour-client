import React, { useContext, useState } from 'react';
import icon from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [open, setIsOpen] = useState(false)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        // <div className="navbar bg-base-100">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </div>
        //             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                 <li><a>Item 1</a></li>
        //                 <li>
        //                     <a>Parent</a>
        //                     <ul className="p-2">
        //                         <li><a>Submenu 1</a></li>
        //                         <li><a>Submenu 2</a></li>
        //                     </ul>
        //                 </li>
        //                 <li><a>Item 3</a></li>
        //             </ul>
        //         </div>
        //         <a className="btn btn-ghost text-xl">daisyUI</a>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1">
        //             <li><a>Item 1</a></li>
        //             <li>
        //                 <details>
        //                     <summary>Parent</summary>
        //                     <ul className="p-2">
        //                         <li><a>Submenu 1</a></li>
        //                         <li><a>Submenu 2</a></li>
        //                     </ul>
        //                 </details>
        //             </li>
        //             <li><a>Item 3</a></li>
        //         </ul>
        //     </div>
        //     <div className="navbar-end">
        //         <a className="btn">Button</a>
        //     </div>
        // // </div>
        // <div className='bg-[#FFF8F5]  md:px-20  mt-0 w-full  md:pt-12'>
        //     <div className='flex justify-between items-center'>
        //         <div><img className='w-[150px] ' src={icon} alt="" /></div>
        //         <div className='md:flex justify-between items-center hidden '>
        //             <Link className='mr-5'>Home</Link>
        //             {user ? <Link to='/dashboard' className='mr-5'>Dashboard</Link> : <Link className='mr-5'>Login</Link>}
        //             <Link className='mr-5'>Our Team</Link>
        //             <Link className='mr-5'>Contact Us</Link>
        //             {user ? <button onClick={handleLogout} className='btn bg-[#F63E7B] text-white'>Logout</button> : <Link to='/login'><button  className='btn bg-[#F63E7B] text-white'>Login</button></Link>}

        //         </div>
        //     </div>

        // </div>
        <div className="navbar bg-base-100 md:mb-0 ">
            <div className="flex-none">
                {/* <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button> */}
            </div>
            <div className="flex-1">
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                <img src={icon} className='md:w-[150px] w-[100px]' alt="" />
            </div>
            <div onClick={() => setIsOpen(!open)} className="flex-none relative">
                {/* <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button> */}
                <div className='md:flex justify-between items-center hidden '>
                    <Link className='mr-5'>Home</Link>
                     <Link to='/dashboard' className='mr-5'>Dashboard</Link>  
                    {user ? <button onClick={handleLogout} className='btn bg-[#F63E7B] text-white'>Logout</button> : <Link to='/login'><button className='btn bg-[#F63E7B] text-white'>Login</button></Link>}

                </div>
                <button  className="btn btn-square btn-ghost md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
                {open && <div className='absolute right-0 top-12 '>
                    <div className='font-semibold  py-2 w-[35vw] bg-[#FFFFFF] text-gray-900 md:py-2  pl-10 rounded-xl'>
                        <p className='mb-3'><Link to='/'>Home</Link></p>
                        {user ? <><p className='mb-3'><Link to='/dashboard'>Dashboard</Link></p> <p onClick={handleLogout}><Link>Logout</Link></p></> : <><p><Link to='/login'>Login</Link></p></>}
                    </div>
                </div>}
            </div>
        </div>

    );
};

export default Navbar;