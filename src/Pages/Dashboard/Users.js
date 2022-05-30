import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data: users, isLoading, refetch} = useQuery('users', ()=> fetch('https://boiling-meadow-00711.herokuapp.com/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
    return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl'>All Users: {users.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Job</th>
        <th>User </th>
      </tr>
    </thead>
    <tbody>
     
                     {
                           users.map((user , index) =><UserRow
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           index={index}
                           ></UserRow>)
                       }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;