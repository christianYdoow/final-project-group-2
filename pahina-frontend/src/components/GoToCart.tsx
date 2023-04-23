import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <NavLink to="/cart" className="d-flex text-decoration-none">
      <Button variant="text" color="warning">
      <ShoppingCartIcon />
        <p className="m-0 ps-1 text-dark">Cart</p>
        </Button>
      </NavLink>
    </div>
  );
};

export default Cart;
