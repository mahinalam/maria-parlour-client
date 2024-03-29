import React from 'react';
import { Link } from 'react-router-dom';

const ReUsuable = ({address,title,heading,isHeightFull}) => {
    return (
        <div className={isHeightFull ? 'flex flex-col justify-center items-center h-[100vh]' : ''}>
            <p className='mb-2 text-2xl md:text-3xl font-semibold'>{title}</p>
            <Link to={address}><button className='btn bg-[#F63E7B] text-white'>{heading}</button></Link>
        </div>
    );
};

export default ReUsuable;