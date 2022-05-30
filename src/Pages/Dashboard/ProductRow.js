import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({addProduct, index, refetch, setDeletingProduct}) => {
    const {name, price, img, email} = addProduct;
         
  

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
        <td>
        <label onClick={() => setDeletingProduct(addProduct)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
    
             
         </td>
      </tr>
    );
};

export default ProductRow;