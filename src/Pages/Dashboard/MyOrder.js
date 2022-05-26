import React, {useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import useProducts from '../../hooks/useProducts';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    // const [orders, setOrders] = useProducts([]);
    
    const [user] = useAuthState(auth);


    useEffect( () =>{
      if(user){
        fetch(`http://localhost:5000/purchase?Email=${user.email}`)
        .then(res => res.json())
        .then(data =>{
        //   console.log(data);
           setOrders(data)
        })
            
      }
     
    },[user])
    return (
        <div>
            <h2>My Orders: {orders.length} </h2>
        

                        <div class="overflow-x-auto">
            <table class="table w-full">
              
                <thead>
                <tr>
                    <th></th>
                    <th>User</th>
                    <th>P. Name</th>
                    <th>Price</th>
                    
                    <th>Email</th>
                    <th>Purchase</th>
                </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order,index) => <tr>
                            <th>{index+1}</th>
                            <td>{user.displayName}</td>
                            <td>{order.name}</td>
                            <td>${order.price}</td>
                           
                            <td>{user.email}</td>
                            <td>Blue</td>
                        </tr>)
                    }
              
               
               
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyOrder;