import axios from 'axios';
import React,{useState} from 'react'
import { MouseEventHandler } from 'react';

const RegistrationForm = () => {

    const[costumerEmail,setCostumerEmail]=useState("");
    const[costumerFirstName,setCostumerFirstName]=useState("");
    const[costumerLastName,setCostumerLastName]=useState("");
    const[costumerPassword,setcostumerPassword]=useState("");
    const costumerRoleId = 1;
    
    const save:MouseEventHandler<HTMLButtonElement>=async(event)=>{
      event.preventDefault();
      try {
          await axios.post(
              "http://localhost:8080/api/add-user",
              {
                  email: costumerEmail,
                  firstName: costumerFirstName,
                  lastName: costumerLastName,
                  password: costumerPassword,
                  roleId: costumerRoleId
              },
              {
                  headers: {
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': 'http://localhost:5173'
                  }
              }
          );
          alert("Costumer Registration Successfully");
      } catch (err) {
          alert(err);
      }
  }
  


    return (
        <div>
        <div className="container mt-4" >
        <div className="card">
                <h1>Student Registation</h1>
        
        <form>
            <div className="form-group">
              <label>First name</label>
              <input type="text"  className="form-control" id="costumerFirstName" placeholder="Enter Name"
              
              value={costumerFirstName}
              onChange={(event) => {
                setCostumerFirstName(event.target.value);
              }}
              />
     
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input type="text"  className="form-control" id="costumerLastName" placeholder="Enter Name"
              
              value={costumerLastName}
              onChange={(event) => {
                setCostumerLastName(event.target.value);
              }}
              />
     
            </div>
     
            <div className="form-group">
              <label>email</label>
              <input type="email"  className="form-control" id="costumerEmail" placeholder="Enter Email"
              
              value={costumerEmail}
              onChange={(event) => {
                setCostumerEmail(event.target.value);
              }}
              
              />
            </div>
     
            <div className="form-group">
                <label>password</label>
                <input type="password"  className="form-control" id="costumerPassword" placeholder="Enter password"
                
                value={costumerPassword}
                onChange={(event) => {
                  setcostumerPassword(event.target.value);
                }}
                
                />
              </div>
     
            <button type="submit" className="btn btn-primary mt-4" onClick={save} >Save</button>
          
          </form>
        </div>
        </div>
         </div>
        );
}

export default RegistrationForm