
import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Layout from './component/Layout';
import Login from './component/Login'
import Logout from './component/Logout'
import NotFound from './component/NotFound';
import Home from './component/pages/homes/Home';
import Product from './component/Product/Product';
import Carousel from './component/Carousel/Carousel';
import Payment from './component/Payment/Payment';
import Orders from './component/Orders/orders';
import Cart from './component/pages/Cart/Cart';
import Results from './component/Results/Results';
import ProductDetail from './component/ProductDetail/ProductDetail';
import UseReducer from './component/useReducer/UseReducer';
import CounterComponent from './component/useReducer/UseReducer';
import Auth from './component/pages/Auth/Auth';
import { useContext, useEffect } from 'react';
import { DataContext } from './component/Dataprovider/DataProvider';
import { auth } from './utility/firebase';
import { Type } from './utility/action.type';

function App() {
  const [{user}, dispatch] =useContext(DataContext);

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=> {
      if(authUser){
        console.log(authUser)
        dispatch({
          type:Type.SET_USER,
          user:authUser
        });
      }else{
        dispatch({
          type:Type.SET_USER,
          user:null
        });
      }
    })
  },[])

  return (
    <BrowserRouter  future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/auth" element={<Auth />} />
          <Route path="/payments" element={<Payment/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/:categoryName" element={<Results />} />
          <Route path="/product/:productId" element={<ProductDetail/>} />
          <Route path="*" element={<NotFound/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
    
 
  
  )
}

export default App
