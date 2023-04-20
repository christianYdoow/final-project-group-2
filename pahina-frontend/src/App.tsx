import React,{ useState } from 'react';
// import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import ProductForm from './components/admin/ProductForm'

//Admin
import AdminLogin from './components/admin/AdminLogin';
import AdminHome from './components/admin/AdminHome';
import ProductManagement from './components/admin/AdminTabPanel';
import ProductDetails from './components/ProductDetails';


function App() {
    return (
      <div>
 
      <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/register" element= { <RegistrationForm/>} />
              <Route path="/" element= { <LoginForm/>} />
              <Route path="/login" element= { <LoginForm/>} />


              {/* Admin Route */}
              <Route path="/admin" element= { <AdminLogin/>} />
              <Route path="/admin/home" element= { <AdminHome/>} />
              <Route path="/add-product" element= { <ProductForm/>} />
              <Route path="/product" element= { <ProductManagement/>} />
              <Route path="/product-details" element= { <ProductDetails/>} />
              
            </Routes>
        </BrowserRouter>
      
    </div>
    )
}

export default App