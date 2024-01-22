import React from 'react';
import { IoCart } from "react-icons/io5";
import { IoIosListBox } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useadmin';
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineManageSearch } from "react-icons/md";

const Dashboard = () => {
    const [isAdmin] = useAdmin()


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-[#F4F7FC] ">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn bg-[#F63E7B] text-white btn- drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[#FFFFFF] text-base-content">
                    {/* Sidebar content here */}
                   <nav id='sidebar'>
                   {isAdmin ? <> 
                        <NavLink to='/dashboard/order-list'><div className='flex 
                        text-[#878787] gap-3'> <span ><IoCart size={20} /></span> <span>Order List</span></div></NavLink>
                        <NavLink to='/dashboard/add-service'><div className='text-[#878787] inline-flex gap-3 mt-3'> <span ><MdOutlineMedicalServices size={20} /></span> <span>Add Service</span></div></NavLink>
                        <NavLink to='/dashboard/make-admin'><div className='flex text-[#878787] gap-3 mt-3'> <span ><FaUserPlus size={20} /></span> <span>Make Admin</span></div></NavLink>
                        <NavLink to='/dashboard/manage-service'><div className='flex text-[#878787] gap-3 mt-3'> <span ><span className='text-[#]'><MdOutlineManageSearch size={20} /></span></span> <span>Manage Services</span></div></NavLink>
                   

                    </> : <><NavLink to='/'><div className='flex text-[#878787] gap-3'> <IoCart size={20} /> <span>Book</span></div></NavLink>
                        <NavLink to='/dashboard/booking-list'><div className='flex  text-[#878787] gap-3 mt-3'> <IoIosListBox size={20} /> <span>Booking List</span></div></NavLink>
                        <NavLink to='/dashboard/review'><div className='flex text-[#878787] gap-3 mt-3'> <RiMessage2Line size={20} /> <span>Review</span></div></NavLink></>}
                   </nav>





                </ul>

            </div>
        </div>
    );
};

export default Dashboard;