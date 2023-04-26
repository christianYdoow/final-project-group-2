import React, { useState,useReducer, useEffect } from "react";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      console.log("incrementing...");
      return {
        ...state,
        quantity: state.quantity + 1,
        totalPrice: state.totalPrice + state.productPrice,
      };
    case ACTION.DECREMENT:
      console.log("decrementing...");
      return {
        ...state,
        quantity: state.quantity === 1 ? 1 : state.quantity - 1,
        totalPrice: state.totalPrice - state.productPrice,
      };
    default:
      return state;
  }
}


const CartItem = ({ cartItem, handleCheckBoxChange,index,handleRemoveFromCart,handleTotalPriceChange,setNewCartitem}) => {
  const [state, dispatch] = useReducer(reducer, {
    itemId: cartItem.productId,
    quantity: 1,
    productPrice: cartItem.productPrice,
    totalPrice: cartItem.productPrice,
  });

  useEffect(() => {
    setNewCartitem(state.itemId,state.totalPrice);
  }, []);
  
      

  const handleIncrement = () => {
    if (state.quantity < cartItem.productQuantity) {
      dispatch({ type: 'increment' });
      
      handleTotalPriceChange(state.itemId,state.totalPrice);
     
      
      
      console.log(`${state.totalPrice} id nya`)
     
    }
  };

  const handleDecrement = () => {
    if (state.quantity > 1) {
      dispatch({ type: "decrement" });
      handleTotalPriceChange(state.itemId, state.totalPrice);
    }
  };

  const handleChangeCheckBox = (event) => {
    handleCheckBoxChange(index, event.target.checked);
  };

  return (
    <>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">
              <input
                type="checkbox"
                checked={cartItem.isChecked || false}
                onChange={handleChangeCheckBox}
              />
            </th>
            <th scope="row">
              {" "}
              <img
              
                src={"../src/assets/" + cartItem.productImage}
                height="60px"
              />
            </th>
            <td style={{ width: "50%" }}>
              <h4>{cartItem.productName}</h4>
              <p>{cartItem.productDescription.substring(0,60)}</p>
            </td>
            <td>
              <p>{state.totalPrice}</p>
            </td>
            <td>
              <div className="counter">
                <button className="btn btn-secondary" onClick={handleIncrement}>
                  +
                </button>
                <h4 className="counterNum">{state.quantity}</h4>
                <button className="btn btn-secondary" onClick={handleDecrement}>
                  -
                </button>
              </div>
            </td>
            <td>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveFromCart(cartItem)}
                >
                  <DeleteIcon />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CartItem;
