import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {productId} = useParams();
    
    const [product,  setProduct] = useState({});

    useEffect( () => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    return (
        <div className='border-2'> 
           <div> 
            <h2 className='text-2xl font-bold text-center'>{product.name}</h2>
            <p className='text-2xl font-semibold text-center'>{product.description}</p>
            </div>
        <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img src={product.image} class=" " />
          <div class="card-body">
        <div class="form-control xl:w-[500px] lg:w-[400px] md:w-[300px] sm:w-[200px]">
          
          <input type="text" placeholder="Name" class="input input-bordered" />
        </div>
        <div class="form-control">
          
          <input type="text" placeholder="Email" class="input input-bordered" />
         
        </div>
        <div class="form-control">
         
          <input type="text" placeholder="Address" class="input input-bordered" />
         
        </div>
        <div class="form-control">
         
          <input type="text" placeholder="Phone Number" class="input input-bordered" />
         
        </div>
        <p>Available Quantity: {product.available}</p>
        <p>Per Unit Price: ${product.price} </p>
        <p>Order Quantity: {product.minimumQuantity}</p>
        <p> Total Price:$</p>
        <input type="number" placeholder="" class="input input-bordered" />
        <div class="form-control mt-6">
          <button class="btn btn-primary"> Purchase</button>
        </div>
      </div>
          {/* <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div> */}
        </div>
      </div>
      </div>
    );
};

export default ProductDetails;