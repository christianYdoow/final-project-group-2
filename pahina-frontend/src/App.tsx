import React,{ useState } from 'react';
// import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

//Admin
import AdminLogin from './components/admin/AdminLogin';
import AdminHome from './components/admin/AdminAddProduct';


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

            </Routes>
        </BrowserRouter>
      
    </div>
    )
}

export default App