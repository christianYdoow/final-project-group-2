import React from 'react'
import CartItem from './CartItem'

const CartList = ({cartItems,handleCheckBoxChange,handleRemoveFromCart,handleTotalPriceChange,setNewCartitem}) => {
  return (
    <ul>
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
    </ul>
  )
}

export default CartList