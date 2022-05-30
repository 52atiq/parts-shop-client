import React from 'react';
import keyboard from '../../assets/image/parts/gaming-keyboard.png'
const Banner = () => {
    return (
      
  <div class="hero h-[500px] bg-400 mt-0">
  <div class="hero-content flex-col lg:flex-row">
    <img className='h-[300px]' src={keyboard} class="max-w-sm rounded-lg shadow-2xl" />
    <div className=''>
      <h1 class="text-2xl font-bold text-amber-900"> We Provide laptop parts , You can order us in Online and our local branches in city area.</h1>
      <p class="py-6">The Quality of laptop parts available to consumers are endless and profit also endless.</p>
      

      <button class="btn btn-primary">More Info</button>
    </div>
  </div>
</div>
    );
};

export default Banner;