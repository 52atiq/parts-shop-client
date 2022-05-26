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
import Review from './Pages/Dashboard/Review';
import Profile from './Pages/Dashboard/Profile';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
     <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
         <Route path='blog' element={<Blog></Blog>}></Route>

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
         </Route>

      </Routes>

     <Footer></Footer>
     <ToastContainer />
    </div>
  );
}

export default App;
