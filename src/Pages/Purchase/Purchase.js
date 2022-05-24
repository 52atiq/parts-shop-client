import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {inventoryId} = useParams();

    const [inventory, setInventory] = useState({});

    useEffect( () =>{
        const url = `https://murmuring-shore-75057.herokuapp.com/inventory/${inventoryId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data))
    },[])

    const handleDelivery = () =>{
        const quantity = (inventory.quantity) -1 ;
        const newQuantity= quantity;
        // send data to the server
        console.log('hi atiq');
        // const url = `https://murmuring-shore-75057.herokuapp.com/inventory/${inventoryId}`
        const url = `http://localhost:5000/inventory/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('item added successfully!!!');
           
        })
    }

    return (
        <div className='container m-20'>
            <h2 className='text-center m-7'>  {inventory.name}</h2>
           
           
           
            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-10 gap-6 border-2 p-3'>
                <div>
                  
                <img className='h-96' src={inventory.image} alt="" />
                </div>
                <div>
                  
                    <p>ID: {inventoryId}</p>
            <p>  {inventory.name}</p>
            <p>Price: ${inventory.price}</p>
            <p>Quantity:{inventory.quantity}</p>
            <p>Supplier:{inventory.supplier}</p>
            <p>Description:{inventory.description}</p>
            <p>Sold:</p>
            <div className='grid'>
            <button className='btn btn-primary' onClick={() => handleDelivery()}>Delivered</button>
            </div>
            <div className='gap-4 mt-2 grid '>
                <input className='border-2 border-yellow-400 mx-auto w-[530px] h-9 p-1 mt-1 ' placeholder='type restock amount' type="text" />
                <button className='btn btn-warning '>Restock </button>
            </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;