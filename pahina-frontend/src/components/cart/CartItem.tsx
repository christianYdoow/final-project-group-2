import React, { useState,useReducer } from "react";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };
    case ACTION.DECREMENT:
      return { count: state.count === 1 ? 1 : state.count - 1 };
    default:
      return state;
  }
}


const CartItem = ({ cartItem, handleCheckBoxChange,index,handleRemoveFromCart,handleTotalPriceChange}) => {
  const [currentPrice, setCurrentPrice] = useState(cartItem.productPrice);
  const [state, dispatch] = useReducer(reducer, { count: 1 });

  const curPrice = currentPrice;

  const handleIncrement = () => {
    if (state.count < cartItem.productQuantity) {
      dispatch({ type: 'increment' });
      handleTotalPriceChange(currentPrice + cartItem.productPrice);
      setCurrentPrice(currentPrice + cartItem.productPrice);
      
     
    }
  };
  
  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
    handleTotalPriceChange(currentPrice - cartItem.productPrice);
    setCurrentPrice(currentPrice - cartItem.productPrice);
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
        <p>{cartItem.productPrice}</p>
      </div>
      <div className='counter'>
        <button onClick={handleIncrement}>+</button>
        <h3 className='counterNum'>{state.count}</h3>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div>
        <button onClick={() => handleRemoveFromCart(cartItem)}>Delete</button>
      </div>
    </li>
  );
};

export default CartItem;
