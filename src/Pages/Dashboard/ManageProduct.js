import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ProductRow from './ProductRow';

const ManageProduct = () => {
  const [deletingProduct, setDeletingProduct] = useState(null)
    const { data: addProducts, isLoading, refetch } = useQuery('addProduct', () => fetch('https://boiling-meadow-00711.herokuapp.com/addproduct', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>Manage product {addProducts.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
         {/* <th>Description</th> */}
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
      {
          addProducts.map((addProduct ,index)=> <ProductRow
          key={addProduct._id}
          addProduct={addProduct}
          index={index}
          refetch={refetch}
          setDeletingProduct={setDeletingProduct}
          ></ProductRow>)
      }
    
    </tbody>
  </table>
</div>
      {
     deletingProduct && <DeleteConfirmModal
     deletingProduct={deletingProduct}
     refetch={refetch}
     setDeletingProduct={setDeletingProduct}
     > </DeleteConfirmModal>
        
      }
        </div>
    );
};

export default ManageProduct;