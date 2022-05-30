import React from 'react';
import country from '../../assets/image/stat/countries.png'
import revenue from '../../assets/image/stat/revenue.png'
import client from '../../assets/image/stat/client.png'
import feedback from '../../assets/image/stat/feedback.png'

const BussinessStat = () => {
    return (
        // <div class="stats stats-vertical lg:stats-horizontal shadow">
        
        
        <div className='mb-10'>
            <div className='m-20 text-center text-4xl text-amber-900 uppercase'> <h1> Millions Business Trust Us</h1></div>
            <div className='grid  xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 max-w-8xl  px-0'>
           
        <div className="stat w-[285px] shadow-inner mb-5 " >
        <div className="stat-title flex justify-center">
              <img className='w-20' src={country} alt="" />
          </div>
          <div class="stat-value flex justify-center mt-5 text-amber-400 ">70+</div>
          <div class="stat-desc flex justify-center text-xl text-amber-900">Countries</div>
        </div>
        
        <div className="stat w-[285px] shadow-inner mb-5" >
          <div className="stat-title flex justify-center">
              <img className='w-20'  src={revenue} alt="" />
          </div>
          <div class="stat-value flex justify-center mt-5 text-amber-400">400M+</div>
          <div class="stat-desc flex justify-center text-xl text-amber-900">Annual Revenue </div>
        </div>
        
        <div className="stat w-[285px] shadow-inner mb-5" >
          <div className="stat-title flex justify-center">
              <img className='w-20'  src={client} alt="" />
          </div>
          <div class="stat-value flex justify-center mt-5 text-amber-400">300+</div>
          <div class="stat-desc flex justify-center text-xl text-amber-900">Happy Clients </div>
        </div>

        <div className="stat w-[285px] shadow-inner mb-5" >
          <div className="stat-title flex justify-center ">
              <img className='w-20'  src={feedback} alt="" />
               </div>
          <div class="stat-value flex justify-center mt-5 text-amber-400">400+</div>
          <div class="stat-desc flex justify-center text-xl text-amber-900 "> Feedbacks</div>
        </div>
        
      </div>
        </div>
    );
};

export default BussinessStat;