import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { ImSpinner9 } from "react-icons/im";

const CheckoutForm = ({ service }) => {
    const totalPrice = service.price
    const { service_name, _id, service_details, image } = service
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState('')
    const [error, setError] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState(false)
    console.log(totalPrice)
    const navigate = useNavigate()


    useEffect(() => {
        if (totalPrice > 0) {
            axios.post(`${import.meta.env.VITE_API_URL}/create-payment-intent`, { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })

        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setTransactionId('')

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        //confirm payment

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
            setError(confirmError.message)
            setProcessing(false)
        }
        else {
            console.log('payment-intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)
                setProcessing(false)
                console.log(paymentIntent.id)
                //now save payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    service_name: service_name,
                    service_Id: _id,
                    serviceDetails: service_details,
                    image,
                    status: 'pending'
                }

                axios.post(`${import.meta.env.VITE_API_URL}/payments`, payment)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.insertedId) {

                            alert('payment successfull')
                           navigate('/dashboard/booking-list')
                        }
                    })
                    .catch(err => {
                        setProcessing(false)
                        console.log(err)
                    })


            }
        }

    }

    return (
        <form onSubmit={handleSubmit} className='md:mx-12'>

            <p className='mb-4'>Your Service charge will be <span className='font-bold'>${totalPrice}</span></p>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}



            />
            {processing ? <button className='mt-2 animate-spin'><ImSpinner9 size={20}></ImSpinner9></button> : <button type="submit" className='btn mt-4 bg-[#F63E7B] text-white btn-sm' disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>}
            {error && <p className='text-red-600'>{error}</p>}
            {transactionId && <p className='text-green-600'>Trnsaction complete with transaction id: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;