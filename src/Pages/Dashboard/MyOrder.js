import { signOut } from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';


const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()


    useEffect( () =>{
      if(user){
        fetch(`http://localhost:5000/purchase?Email=${user.email}`, {
            method: 'GET',
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            console.log('res', res);
            if(res.status === 401 || res.status === 403){
                signOut(auth);
        localStorage.removeItem('accessToken');
              navigate('/')
            }
           return res.json()
        })
        .then(data =>  {

            setOrders(data)
        } )
            
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