import React, { useState } from 'react';
import useService from '../../hooks/useService';
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import DeleteModal from '../../somponents/DeleteModal';
import ReUsuable from '../../somponents/ReUsuable';

const ManageService = () => {
    const [services, refetch] = useService()
    const [isOpen, setIsOpen] = useState(false)
    const [axiosSecure] = useAxiosSecure()
    const [id, setId] = useState(null)
    const navigate = useNavigate()

    const modalHandler = id => {
        axiosSecure.delete(`/services/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch()
                    toast.success(`Service deleted successfully`)
                    // navigate('/')
                }
            })
            .catch(err => {
                console.log(err)
                toast.error(err.message)
            })
    }



    const closeModal = () => {
        setIsOpen(false)
    }

    const handleUpdate = item => {
        console.log(item)
    }

    return (
        <>
            {services && services.length > 0 && Array.isArray(services) ? <div>
                <div className="overflow-x-auto md:px-10 md:pt-10 md:mb-10">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className=''>
                                <tr >
                                    <th className='font-semibold text-black w-1/5' >Image</th>
                                    <th className='font-semibold text-black w-1/5' >Name</th>
                                    <th className='font-semibold text-black w-1/5' >Price</th>
                                    <th className='font-semibold text-black w-2/5' >Details</th>
                                    <th className='font-semibold text-black w-1/5' >Update</th>
                                    <th className='font-semibold text-black w-1/5' >Delete</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {
                                    services.map((service, index) => <tr
                                        key={service._id}
                                    >
                                        <td className='w-1/5 '>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar w-[70px]">
                                                    <img src={service.image} className='w-full' alt="image" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='w-1/5'>{service.service_name}</td>
                                        <td className='w-1/5 '>${service.price}</td>
                                        <td className='w-1/5 '>{service.service_details}</td>
                                        <td className='w-1/5'><span onClick={() => handleUpdate(service)} className='text-green-500'><RxUpdate size={30} /></span></td>
                                        <td className='w-1/5 '><span onClick={() => {
                                            setIsOpen(true)
                                            setId(service._id)
                                        }} className='text-red-600'><RiDeleteBin5Line size={30} /></span>
                                        </td>


                                    </tr>)
                                }



                            </tbody>

                        </table>
                    </div>
                </div>

                <DeleteModal
                    isOpen={isOpen}
                    id={id}
                    closeModal={closeModal}
                    modalHandler={modalHandler}
                ></DeleteModal>


            </div > : <ReUsuable isHeightFull={true} title="service list found empty" address='/dashboard/add-service' heading="Add Service"></ReUsuable>}
        </>
    );
};

export default ManageService;