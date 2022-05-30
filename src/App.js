import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Auth/Login';
import RequireAuth from './Pages/Auth/RequireAuth';
import SignUp from './Pages/Auth/SignUp';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/Purchase/PurchaseDetail';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import Review from './Pages/Dashboard/GiveReview';
import Profile from './Pages/Dashboard/Profile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Auth/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import Portfolio from './Pages/Portfolio/Portfolio';
import NotFound from './Pages/Shared/NotFound';
import ManageProduct from './Pages/Dashboard/ManageProduct';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
   
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
         <Route path='blog' element={<Blog></Blog>}></Route>
         <Route path='portfolio' element={<Portfolio></Portfolio> }></Route>
         <Route path='*' element={<NotFound></NotFound>}></Route>

      <Route path='/purchase/:purchaseId' element={
          <RequireAuth>
            <ProductDetails> </ProductDetails>
          </RequireAuth>
         }></Route>

      <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
         }>
           <Route index element={<MyOrder></MyOrder>}></Route>
           <Route path='review' element={<Review></Review>}></Route>
           <Route path='profile' element={<Profile></Profile>}></Route>
           <Route path='users' element={<RequireAdmin> <Users></Users></RequireAdmin>}></Route>
           <Route path='addProduct' element={<RequireAdmin> <AddProduct></AddProduct></RequireAdmin>}></Route>
           <Route path='manageProduct' element={<RequireAdmin> <ManageProduct></ManageProduct> </RequireAdmin>}></Route>
         </Route>

      </Routes>

      <Footer></Footer>
     <ToastContainer />
   
    
    </div>
     
  );
}

export default App;
