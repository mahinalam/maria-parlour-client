import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './Payment/CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_ACCESS_TOKEN)

const Book = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { _id, service_name, price } = service
    
    const totalPrice = parseInt(price)
    
   
    // console.log(services)

    return (
        <>
            <div className='md:px-10 md:mt-8'>
                <div className='space-y-4'>
                    <input type="text" defaultValue={user.displayName} readOnly placeholder="Type here" className="input w-full max-w-xs" /> <br />
                    <input type="text" defaultValue={user.email} readOnly placeholder="Type here" className="input w-full max-w-xs" /> <br />
                    <input type="text" defaultValue={service.service_name} readOnly placeholder="Type here" className="input w-full max-w-xs" /> <br />
                </div>
            </div>
            <div className='md:mt-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm service={service} totalPrice={totalPrice} />
                </Elements>
            </div>
        </>
    );
};

export default Book;