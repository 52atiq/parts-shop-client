import React, {useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    
    const [user] = useAuthState(auth);


    useEffect( () =>{
      if(user){
        fetch(`http://localhost:5000/purchase?Email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data));
      }
    },[user])
    return (
        <div>
            <h2>My Orders: {orders.length} </h2>
        </div>
    );
};

export default MyOrder;