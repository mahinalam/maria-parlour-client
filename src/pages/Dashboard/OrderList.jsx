import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import TableRow from './TableRow';
import ReUsuable from '../../somponents/ReUsuable';
import toast from 'react-hot-toast';

const OrderList = () => {
    const { user, loading, isLoading } = useContext(AuthContext)
    const [status, setStatus] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const { data: orderList = [] } = useQuery({
        queryKey: ['order-list', user?.email],
        enabled: !isLoading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`)
            console.log(res.data)
            return res.data

        }
    })
    const handleChange = (id, e) => {
        setStatus(e.target.value)
        const status = e.target.value


        axiosSecure.put(`/services/${id}`,{status})
        .then(res => {
            if(res.data.modifiedCount > 0){
                toast.success("Request accept Successfully")
            }
        })
        .catch(err => {
            console.log(err)
        })

    }



    return (
     <>
     {orderList && Array.isArray(orderList) && orderList.length > 0 ?    <div className=' '>
            <div className='md:px-16 py-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email ID</th>
                                <th>Service</th>
                                <th>Pay With</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody >

                            {
                                orderList.map((item, index) => <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.email}</td>
                                    <td>{item.service_name}</td>
                                    <td>Credit Card</td>
                                    <td>
                                        <select onChange={(e) => handleChange(item._id, e)}
                                            className="select max-w-xs">
                                            <option value="Pending" className='text-red-600'>
                                                pending</option>
                                            <option value="Done" className='text-green-600'>Done</option>
                                        </select>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div> : <ReUsuable
        title="Order list found empty" isHeightFull={true} heading="Back to Home" address='/'
        ></ReUsuable>}
     </>
    );
};

export default OrderList;