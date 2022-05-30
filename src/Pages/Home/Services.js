import React from 'react';
import logistics from '../../assets/image/service/logistics.png'
import order from '../../assets/image/service/order.png'
import replenishment from '../../assets/image/service/replenishment.png'
import ecommerce from '../../assets/image/service/ecommerce.png'
import coldchain from '../../assets/image/service/cold-chain.png'
import retail from '../../assets/image/service/retail.png'
const Services = () => {
    return (
        <div className='mb-10'>
            <div className=''>
                <h1 className='text-center mt-36 text-2xl font-bold text-amber-900'>OUR SERVICES</h1>
                <p className='leading-10 mt-16 text-xl'>
                From truckloads to individual packages, we handle it all. Whether it needs to be temperature controlled, is fragile or needs to be shipped fast, Smart Warehousing has you covered. To learn more about our services, click below
                </p>
            </div>
            <div className='container grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-16'>
                <div className='grid  shadow-inner line h-56 p-9 '>
                   <div className='flex justify-center'> <img className='h-14 w-10 ' src={logistics} alt="" /></div>
                   <h1 className='text-2xl text-center'>LOGISTICS</h1>
                </div>

                <div className='grid  shadow-inner line h-56 p-9' >
                <div className='flex justify-center'><img className='h-14 w-10 ' src={order} alt="" /></div>
                    <h1 className='text-2xl text-center'>ORDER FULFILLMENT</h1>
                </div>

                <div className='grid  shadow-inner line h-56 p-9'>
               <div className='flex justify-center'> <img className='h-14 w-10 ' src={replenishment} alt="" /></div>
                    <h1 className='text-2xl text-center'>REPLENISHMENT</h1>
                </div>

                <div className='grid  shadow-inner line h-56 p-9'>
               <div className='flex justify-center'>
               <img className='h-14 w-10 ' src={ecommerce} alt="" />
               </div>

                    <h1 className='text-2xl text-center'>E-COMMERCE</h1>
                </div>

                <div className='grid  shadow-inner line h-56 p-9'>
               <div className='flex justify-center'> <img className='h-14 w-10 ' src={coldchain} alt="" /></div>
                    <h1 className='text-2xl text-center'>COLD-CHAIN</h1>
                </div>
                <div className='grid  shadow-inner line h-56 p-9'>
                <div className='flex justify-center'><img className='h-14 w-10 ' src={retail} alt="" /></div>
                    <h1 className='text-2xl text-center'>RETAIL</h1>
                </div>
                
            </div>
        </div>
    );
};

export default Services;