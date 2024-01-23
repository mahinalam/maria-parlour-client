import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import BookingCart from './BookingCart';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import ReUsuable from '../../somponents/ReUsuable';
import useBooking from '../../hooks/useBooking';

const BookingList = () => {
    const [bookingInfo] = useBooking()
    // const { data: bookingInfo = [],refetch } = useQuery({
    //     queryKey: ['bookingInfo', user?.email],
    //     enabled: !isLoading,
    //     queryFn: async () => {

    //         const res = await axiosSecure.get(`/user/payments?email=${user?.email}`)
    //         console.log(res.data)
    //         return res.data;
    //     }
    // })


    return (

        <>
            {bookingInfo && bookingInfo.length > 0 && Array.isArray(bookingInfo) ? <>       <div className='grid md:grid-cols-2  grid-cols-1 gap-10 md:px-16 py-10'>
                {
                    bookingInfo.map(booking => <BookingCart
                        key={booking._id}
                        item={booking}
                    ></BookingCart>)
                }
            </div>
            </> : <><ReUsuable title="You didn't book any Service yet"
             address='/' heading="Book Service" isHeightFull={true} ></ReUsuable></>}
        </>

    );
};

export default BookingList;