import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
      <h2 className='text-2xl font-bold text-amber-500 mt-10'> Welcome to Dashboard</h2>
     <Outlet> </Outlet>
    {/* <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
  
  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-40 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>My Orders</Link></li>
      <li><Link to='/dashboard/review'>My Review</Link></li>
      <li><Link to='/dashboard/profile'> My Profile</Link></li>
      { admin &&  <>
        <li><Link to='/dashboard/users'> All User</Link></li>
        <li><Link to='/dashboard/addProduct'> Add a Product</Link></li>
        <li><Link to='/dashboard/manageProduct'> Manage Product</Link></li>
      </>}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;