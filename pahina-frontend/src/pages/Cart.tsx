import React, { useState, useReducer } from "react";
import CartList from "../components/cart/CartList";
import "../styles/CartItem.css";



const Cart = ({ cartItems, setCartItems, handleRemoveFromCart }) => {
  const [itemPrice,setItemPrice]=useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [allChecked, setAllChecked] = useState(false);
  const [numChecked, setNumChecked] = useState(0);


  const handleItemPrice=()=>{
    

  }


  const handleTotalPriceChange = (newTotalPrice) => {
    setTotalPrice(newTotalPrice);
  }


  const handleCheckBoxChange = (index, isChecked) => {
    const newCartItems = [...cartItems];
    newCartItems[index].isChecked = isChecked;
    const numChecked = newCartItems.filter((item) => item.isChecked).length;
    setAllChecked(numChecked === newCartItems.length);
    setNumChecked(numChecked);
    const checkedItems = newCartItems.filter((item) => item.isChecked);
    const total = checkedItems.reduce((accumulator, item) => accumulator + item.productPrice, 0);
    setTotalPrice(total);
    setCartItems(newCartItems);
  };

  const handleAllCheckboxChange = (event) => {
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

  
  const checkedItems = cartItems.filter((item) => item.isChecked);
  const total = checkedItems.reduce((accumulator, item) => accumulator + item.productPrice, 0);


  return (
    <div>
      {cartItems.length > 0 ? (
        <CartList
          cartItems={cartItems}
          handleCheckBoxChange={handleCheckBoxChange}
          handleRemoveFromCart={handleRemoveFromCart}
          handleTotalPriceChange={handleTotalPriceChange}
        
          
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
          <p>Total &#8369; {total}</p>
        </div>
        <div>
          <button>Check Out ({numChecked})</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
