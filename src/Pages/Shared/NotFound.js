import React from 'react';
import errorPage from '../../assets/image/Error/error.png'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='m-10'>
            <div className='flex justify-center'>
                <img src={errorPage} alt="" />
               
            </div>
            <Link to='/'  className='flex justify-center items-center  w-64 mx-auto bg-pink-500 p-2 text-xl text-white no-underline mt-16 mb-24 rounded-lg '> Go To Home Page  </Link>
        </div>
    );
};

export default NotFound;