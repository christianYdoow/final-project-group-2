import React, { useState, useReducer,useEffect } from "react";
import CartList from "../components/cart/CartList";
import "../styles/CartItem.css";
import Navbar from '../components/Navbar';
import axios from "axios";


const Cart = ({ cartItems, setCartItems, handleRemoveFromCart }) => {
  const [newCartItem,setNewCartItem]=useState([]);
  const [cartItemPrice,setCartItemPrice]=useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [allChecked, setAllChecked] = useState(false);
  const [numChecked, setNumChecked] = useState(0);

  
  // const handleTotal = () => {
  //   const total = newCartItem.reduce((accumulator, current) => accumulator + current.totalPrice, 0);
  //   return total;
  // };

  const handleTotalPriceChange = (itemId, price) => {
    const newCartItemPrice = { id: itemId, totalPrice:price };
    setCartItemPrice([...cartItemPrice, newCartItemPrice]);
  };
  
  console.log(cartItemPrice);

  const handleCheckBoxChange = (index: string | number, isChecked: any) => {
    const newCartItems = [...cartItems];
    newCartItems[index].isChecked = isChecked;
    const numChecked = newCartItems.filter((item) => item.isChecked).length;
    setAllChecked(numChecked === newCartItems.length);
    setNumChecked(numChecked);
    const checkedItems = newCartItems.filter((item) => item.isChecked);
    const total = checkedItems.reduce((accumulator, item) => accumulator + item.productPrice , 0);
    setTotalPrice(total);
    setCartItems(newCartItems);
    handleTotalPriceChange(newCartItems[index].productId, newCartItems[index].productPrice);


  };

  const handleAllCheckboxChange = (event: { target: { checked: any; }; }) => {
    const isChecked = event.target.checked;
    let numChecked = 0;
    for (let i = 0; i < cartItems.length; i++) {
      cartItems[i].isChecked = isChecked;
      if (isChecked) {
        numChecked++;
      }
    }
    setAllChecked(isChecked);
    setNumChecked(numChecked);
    const checkedItems = cartItems.filter((item) => item.isChecked);
    const total = checkedItems.reduce((accumulator, item) => accumulator + item.productPrice, 0);
    setTotalPrice(total);
    setCartItems([...cartItems]);
    

  };

  
  


  


  return (
    <>
        <Navbar/>
        <div className="container">
      {cartItems.length > 0 ? (
        <CartList
          cartItems={cartItems}
          handleCheckBoxChange={handleCheckBoxChange}
          handleRemoveFromCart={handleRemoveFromCart}
          handleTotalPriceChange={handleTotalPriceChange}
          setNewCartitem={setNewCartItem}
        
          
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>No more items in list</p>
      )}

      <div className="checkOut">
        <div className="checkOutAll">
          <input type="checkbox" checked={allChecked} onChange={handleAllCheckboxChange} />
          All
        </div>
        <div>
          <h5>Total &#8369; {totalPrice}</h5>
        </div>
        <div>
          <button className="btn btn-primary"> <small> Check Out ({numChecked})</small></button>
        </div>
      </div>
    </div>
    </>

  );
};

export default Cart;
