import React, { useState,useReducer } from "react";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      console.log('incrementing...');
      return { 
        ...state, 
        quantity: state.quantity + 1, 
        totalPrice: state.totalPrice + state.productPrice };
    case ACTION.DECREMENT:
      console.log('decrementing...');
      return { 
        ...state, 
        quantity: state.quantity === 1 ? 1 : state.quantity - 1, totalPrice: state.totalPrice - state.productPrice };
    default:
      return state;
  }
}


const CartItem = ({ cartItem, handleCheckBoxChange,index,handleRemoveFromCart,handleTotalPriceChange}) => {
  const [state, dispatch] = useReducer(reducer, {
    itemId: cartItem.productId,
    quantity: 1,
    productPrice: cartItem.productPrice,
    totalPrice: cartItem.productPrice
  });


  const handleIncrement = () => {
    if (state.quantity < cartItem.productQuantity) {
      dispatch({ type: 'increment' });
      handleTotalPriceChange(state.itemId,state.productPrice,state.totalPrice);
      
     
    }
  };
  
  const handleDecrement = () => {
    if (state.quantity > 1) {
      dispatch({ type: 'decrement' });
      handleTotalPriceChange(state.itemId,state.totalPrice);
    }
  };

  const handleChangeCheckBox = (event) => {
    handleCheckBoxChange(index, event.target.checked);
  };
  

  return (
    <li className="cartItem">
      <div>
        <input type="checkbox" checked={cartItem.isChecked || false} onChange={handleChangeCheckBox} />
      </div>
      <div>
        <p>Image</p>
      </div>
      <div>
        <h2>{cartItem.productName}</h2>
        <p>{cartItem.productDescription}</p>
        <p>{state.totalPrice}</p>
      </div>
      <div className='counter'>
        <button onClick={handleIncrement}>+</button>
        <h3 className='counterNum'>{state.quantity }</h3>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div>
        <button onClick={() => handleRemoveFromCart(cartItem)}>Delete</button>
      </div>
    </li>
  );
};

export default CartItem;
