import axios from "axios";
import { NavLink } from "react-router-dom";

function LogoutButton() {
  const handleLogout = () => {
    axios
      .post("http://localhost:8080/api/logout")
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <NavLink
        to="/logout"
        className="d-flex text-decoration-none p-2 text-center"
        style={{ width: "150px" }}
      >
        Logout
      </NavLink>
    </>
  );
}

export default LogoutButton;
