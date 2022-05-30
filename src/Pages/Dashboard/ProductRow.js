import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({addProduct, index, refetch}) => {
    const {name, price, img, email} = addProduct;


    const handleDelete = (email) =>{
        fetch(`https://boiling-meadow-00711.herokuapp.com/addproduct/${email}`,{
            method:'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                // toast.success(`${name} is Deleted`)
                toast.success('Deleted successfully')
                refetch()
            }
        })
    }

    return (
        <tr>
        <th>{index +1}</th>
        <td><div class="avatar">
  <div class="w-8 rounded">
    <img src={img} alt={name} />
  </div>
</div></td>
        <td>{name}</td>
        {/* <td>{description}</td> */}
       
        <td>{price}</td>
        <td> <button onClick={() => handleDelete(email)} className='btn btn-xs btn-error'>Delete</button> </td>
      </tr>
    );
};

export default ProductRow;