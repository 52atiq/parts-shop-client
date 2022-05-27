import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, name, image, description, price} = product;

    console.log(image)
    console.log(name);
    console.log(description)
    console.log(price)

    const navigate= useNavigate();
    const navigateToPurchaseProduct =  id =>{
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-2xl gap-5 m-2 mt-10 ">
        <figure className="mb-0">
          <img  src={image} alt="Shoes" className="w-full h-36" />
        </figure>
        <div className="card-body items-center text-center ">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <p>{description}</p>
          <div className="card-actions">
            <button onClick={() => navigateToPurchaseProduct(_id)} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Product;