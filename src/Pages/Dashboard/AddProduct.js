// import { async } from '@firebase/util';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useQuery } from 'react-query';
// import { toast } from 'react-toastify';
// import Loading from '../Shared/Loading';
// const AddProduct = () => {
//     const { register, formState: { errors }, handleSubmit } = useForm();
//     const {data: purchases, isLoading} = useQuery('purchases', () => fetch('http://localhost:5000/purchase').then(res => res.json()))

//     const imageStorageKey = 'a746901c99ef4b31d57ec29cde9d6012'

//     const onSubmit = async data => {
//         const image = data.image[0];
//         const formData = new FormData();
//         formData.append('image', image);
//         const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
//         fetch(url, {
//             method: 'POST',
//             body: formData
//         })
//         .then(res=>res.json())
//         .then(result =>{
//             if(result.success){
//                 const img = result.data.url;
//                 const product = {
//                     name: data.name,
//                     price: data.price,
//                     quantity: data.quantity,
//                     available: data.available,
//                     description: data.description,
//                     // image: data.image,
//                     img: img
//                 }
//                 // send to your database 
//                 fetch('http://localhost:5000/product', {
//                     method: 'POST',
//                     headers: {
//                         'content-type': 'application/json',
//                         authorization: `Bearer ${localStorage.getItem('accessToken')}`
//                     },
//                     body: JSON.stringify(product)
//                 })
//                 .then(res =>res.json())
//                 .then(inserted =>{
//                     if(inserted.insertedId){
//                         toast.success('Doctor added successfully')
//                         // reset();
//                     }
//                     else{
//                         toast.error('Failed to add the doctor');
//                     }
//                 })

//             }
            
//         })
//     }


//     if(isLoading){
//         return <Loading></Loading>
//     }

//     // const onSubmit = data => {
//     //     console.log(data);
//     //     const url = `https://murmuring-shore-75057.herokuapp.com/inventory`;
//     //     fetch(url , {
//     //         method: 'POST',
//     //         headers: {
//     //             'content-type': 'application/json'
//     //         },
//     //         body: JSON.stringify(data)
//     //     })
//     //     .then(res => res.json())
//     //     .then(result =>{
//     //         console.log(result);
//     //     })

//     // }
//     return (
//         <div className='w-100 '>
//         <h2 className='text-center'> Please add a Product </h2>
//  <form className='grid mb-' onSubmit={handleSubmit(onSubmit)}>
//   <input placeholder='Name' className='border-2' {...register("name")} />  <br />
//   <input placeholder='Price' className='border-2' type="number" {...register("price")} /><br />
//   <input placeholder='Minimum Quantity' className='border-2' type="number" {...register("quantity")} /><br />
//   <input placeholder='Available' className='border-2' type="number" {...register("available")} /><br />
//   <textarea placeholder='Description' className='border-2' {...register("description")} /><br />
//   <input placeholder='Photo URL' className='border-2' type="file" {...register("image")} /><br />
//   <input className='border-2 w-[200px] h-11 bg-purple-800 text-white font-bold' type="submit" value="Add Product" />
// </form>
        
//     </div>
//     );
// };

// export default AddProduct;