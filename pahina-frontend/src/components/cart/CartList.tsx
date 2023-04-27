import React from 'react'
import CartItem from './CartItem'

const CartList = ({cartItems,handleCheckBoxChange,handleRemoveFromCart,handleTotalPriceChange,setNewCartitem}) => {

  
  return (
    <>
    <table className="table">
      <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Product</th>
            <th scope="col">Book Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col"></th>
          </tr>
        </thead>
      </table>
        {cartItems.map((cartItem, index) => (
            <CartItem 
                key={cartItem.productId}
                cartItem={cartItem}
                handleCheckBoxChange={handleCheckBoxChange}
                index={index}
                handleRemoveFromCart={handleRemoveFromCart}
                handleTotalPriceChange={handleTotalPriceChange}
                setNewCartitem={setNewCartitem}
                
             />
        ))}

    </>

  )
}

export default CartList