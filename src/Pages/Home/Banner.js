import React from 'react';
import keyboard from '../../assets/image/parts/gaming-keyboard.png'
const Banner = () => {
    return (

      <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 bg-black text-white'>
         <div className='p-5'>
           <img src={keyboard} alt="" />
           
         </div>
         <div>
           <div className='p-5 '>
           <h1 class="text-2xl font-bold text-amber-400 mt-5"> We Provide laptop parts , You can order us in Online and our local branches in city area.</h1>
           <p className="py-9 font-bold">The Quality of laptop parts available to consumers are endless and profit also endless.</p>
           {/* <button class="btn btn-primary">More Info</button> */}
           <button className='bg-amber-500 p-2 border- rounded  uppercase font-bold w-[200px] ' >More Info</button>
           </div>
         </div>
      </div>
      
//   <div class="hero h-[500px] bg-400 mt-0">
//   <div class="hero-content flex-col lg:flex-row">
//     <img className='h-[300px]' src={keyboard} class="max-w-sm rounded-lg shadow-2xl" />
//     <div className=''>
//       <h1 class="text-2xl font-bold text-amber-900"> We Provide laptop parts , You can order us in Online and our local branches in city area.</h1>
//       <p class="py-6">The Quality of laptop parts available to consumers are endless and profit also endless.</p>
      

//       <button class="btn btn-primary">More Info</button>
//     </div>
//   </div>
// </div>

    );
};

export default Banner;