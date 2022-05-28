import React from 'react';
import ram from '../../assets/image/parts/ram-one.png'
const MoreInfo = () => {
    return (
        <div className=' grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-20 gap-6'>
            
            <div>
                <img className='w-[500px] h-[400px]' src={ram} alt="" />
            </div>
            <div>
                <h1 className='text-4xl font-bold'>WE DO THINGS THE SMART WAY
                 </h1>
                 <p className='text-lg leading-9 mt-10'>
                 We are your brand partner and your powerful back-of-the-house solution. Pairing premium technology and automation with decades of industry expertise, we provide our clients peace of mind to focus on their brands, knowing we are staying ahead of the industry’s demands. Our solution ensures your brand is always one step ahead of your customers' expectations.
                 </p>
                 {/* <button className='bg-white border-primary-500 border-2 text-primary-500  font-semibold mt-14 p-3'>More Info</button> */}

                 <button className="btn btn-primary mt-9">More Info</button>
            </div>
        </div>
    );
};

export default MoreInfo;