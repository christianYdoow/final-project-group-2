import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function LogoutButton() {
  let navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get(`http://localhost:8080/web/api/logout`)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <>
      <button
        onClick={handleLogout}
        className="d-flex text-decoration-none p-2 text-center"
        style={{ width: "150px" }}
      >
        Logout
      </button>
    </>
  );
}

export default LogoutButton;


// import React, { useState } from 'react';

// function Logout() {
//   const [message, setMessage] = useState('');

//   const handleLogout = () => {
//     fetch('http://localhost:8080/web/api/logout')
//       .then(response => response.text())
//       .then(data => setMessage(data))
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <button onClick={handleLogout}>Logout</button>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default Logout;
