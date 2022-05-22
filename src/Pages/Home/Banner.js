import React from 'react';
import keyboard from '../../assets/image/parts/mouse-two.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-no-repeat"   style={{ background: `url(${keyboard})`}} >

   

        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Our Best Collections For You</h1>
            <p className="mb-5">The Quality of laptop parts available to consumers are endless and profit also endless</p>
            <button className="btn btn-primary">More Info</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;