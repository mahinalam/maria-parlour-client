import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import BookingCart from './BookingCart';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const BookingList = () => {
    const { user, isLoading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: bookingInfo = [] } = useQuery({
        queryKey: ['bookingInfo', user?.email],
        enabled: !isLoading,
        queryFn: async () => {

            const res = await axiosSecure.get(`/user/payments?email=${user?.email}`)
            console.log(res.data)
            return res.data;
        }
    })

    return (
        <div className='grid md:grid-cols-2  grid-cols-1 gap-10 md:px-16 py-10'>
            {
                bookingInfo.map(booking => <BookingCart
                    key={booking._id}
                    item={booking}
                ></BookingCart>)
            }
        </div>
    );
};

export default BookingList;