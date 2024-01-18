import React from 'react';

const ReviewCart = (item) => {
const {name,image,rating,details,profession} = item

    return (
        <div>
            <div className='flex gap-4'>
                <img src={image} alt="" />
                <div>
                    <p>{name}</p>
                    <p>{profession}</p>
                </div>
            </div>
            <div>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default ReviewCart;