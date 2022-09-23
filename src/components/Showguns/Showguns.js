import React from 'react';

const Showguns = (props) => {
    const {name, img, price, action, bullet, category, capacity} = props.data;
    return (
        // style={{backgroundColor:"hotpink", border: "2px solid green", margin:"10px", borderRadius:"20px", padding: "10px"}}
        <div className=' bg-slate-200 border-2 m-2 rounded-lg text-center' >
            <h3 className='text-black font-bold'>Name : {name}</h3>
            <div className='relative'>
                <img className='w- m-auto h-60 w-full'  src={img}  alt="guns"/>
                <span className='absolute bottom-2 right-1 text-black font-bold bg-orange-400 p-1 rounded-lg'>Price: {price}</span>
            </div>
            <div className='flex flex-wrap items-center justify-around text-black'>
                <span>Action: {action} </span> <span>Bullet: {bullet}</span>
            </div>
            <p className='flex justify-around items-center my-4'>
                <p>Cetegory : <span className='mr-4 bg-orange-500 p-1 rounded-lg text-white font-bold text-sm'>{category}</span></p>
                <p>Capacity : <span className='bg-orange-500 p-1 rounded-lg text-white font-bold text-sm'>{capacity}</span></p>
            </p>
            <button className='btn btn-sm btn-primary mr-4'>Show Details</button>
            <button className='btn btn-sm btn-info' onClick={props.cart}>Add To Cart</button>
        </div>
    );
};

export default Showguns;