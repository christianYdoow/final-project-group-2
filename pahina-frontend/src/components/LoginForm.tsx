import {  MouseEventHandler, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const LoginForm = () => {

    const [costumerEmail,setCostumerEmail]=useState("");
    const [costumerPassword,setCostumerPassword]=useState("");
    const navigate = useNavigate();

    const login: MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/login", {
            email: costumerEmail,
            password: costumerPassword,
          }).then((res) => {
            console.log(res.data);
            if (res.data.message == "Email not exits") {
              alert("Email not exits");
            } else if (res.data.message == "Login Success") {
              navigate('/home');
            } else {
              alert("Incorrect Email and Password not match");
            }
          }, fail => {
            console.error(fail); // Error!
          });
        } catch (err) {
          alert(err);
        }
      };
      

    return (
        <div>
             <div className="container">
             <div className="row">
                 <h2>Login</h2>
              <hr/>
              </div>
  
              <div className="row">
              <div className="col-sm-6">
             <form>
         <div className="form-group">
           <label>Email</label>
           <input type="email"  className="form-control" id="costumerEmail" placeholder="Enter Name"
           
           value={costumerEmail}
           onChange={(event) => {
             setCostumerEmail(event.target.value);
           }}
           
           />
  
         </div>
  
         <div className="form-group">
             <label>password</label>
             <input type="password"  className="form-control" id="costumerPassword" placeholder="Enter Fee"
             
             value={costumerPassword}
             onChange={(event) => {
               setCostumerPassword(event.target.value);
             }}
             
             />
           </div>
                   <button type="submit" className="btn btn-primary" onClick={login} >Login</button>
               </form>
  
             </div>
             </div>
             </div>
  
      </div>
     );
}

export default LoginForm