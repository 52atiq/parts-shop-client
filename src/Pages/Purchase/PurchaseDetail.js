import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';

const PurchaseDetail = () => {

  // const{_id, name, description, image, minimumQuantity} = product ;
    const {purchaseId} = useParams();
    const [user, loading, error] = useAuthState(auth);
    
    const [product,  setProduct] = useState({});

    useEffect( () => {
        const url = `http://localhost:5000/purchase/${purchaseId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const handlePurchase = event => {
      event.preventDefault();
      const quantity = event.target.quantity.value;
      console.log(quantity);

      const purchase = {
       productId: product._id,
        productName:product.name,
       
     
         productPerUniPrice: product.price,
        Email: user.email,
        Name: user.displayName,
        address: event.target.address.value,
        phone: event.target.phone.value,
        Quantity: event.target.quantity.value
    }

    fetch('http://localhost:5000/purchase', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(purchase)
    })
        .then(res => res.json())
        .then(data => {
          console.log(data);
            if(data.success){
                toast(`Successfully purchase `)
            }
            else{
                toast.error(`Already Purchase`)
            }
            // setProduct(null);
            // refetch();
        });
}



    

    return (
        <div className='border-2'> 
           <div> 
            <h2 className='text-2xl font-bold text-center'>{product.name}</h2>
            <p className='text-2xl font-semibold text-center'>{product.description}</p>
            </div>
        <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img src={product.image} class=" " />
         <form onSubmit={handlePurchase}>
         <div class="card-body">
        <div class="form-control xl:w-[500px] lg:w-[400px] md:w-[300px] sm:w-[200px]">
          
          <input type="text" placeholder="Name"  disabled value={user?.displayName || ''} class="input input-bordered" />
        </div>
        <div class="form-control">
          
          <input type="text" placeholder="Email" disabled value={user?.email || ''} class="input input-bordered" />
         
        </div>
        <div class="form-control">
         
          <input type="text" placeholder="Address" name='address' class="input input-bordered" />
         
        </div>
        <div class="form-control">
          <input type="text" placeholder="Phone Number" name='phone' class="input input-bordered" />
        </div>

        <p>Available Quantity: {product.available}</p>
        <p>Per Unit Price: ${product.price} </p>
        <p> Min Order Quantity: {product.minimumQuantity}</p>
        <p> Total Price:$</p>
        <input type="number" name='quantity' placeholder="type Quantity" class="input input-bordered" />
       
        <div class="form-control mt-6">
          <button class="btn btn-primary"> Purchase</button>
        </div>
      </div>
         </form>
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

export default PurchaseDetail;