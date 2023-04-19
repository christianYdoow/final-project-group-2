import React,{ useState } from 'react';
// import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import ProductForm from './components/ProductForm'


function App() {

    

    return (
      <div>
 
      <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/register" element= { <RegistrationForm/>} />
              <Route path="/" element= { <LoginForm/>} />
              <Route path="/login" element= { <LoginForm/>} />
              <Route path="/add-product" element= { <ProductForm/>} />
            </Routes>
        </BrowserRouter>
      
    </div>
    )
}

export default App
