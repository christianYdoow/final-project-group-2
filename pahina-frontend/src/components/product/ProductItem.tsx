import React, { useState,useEffect } from 'react'

const ProductItem = ({product}) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false); 

  const handleAddOrRemoveFromCart = (product) => {
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const isItemInCart = existingCartItems.some((item) => item.productId === product.productId);
  
    let updatedCartItems;
    if (isItemInCart) {
      updatedCartItems = existingCartItems.filter((item) => item.productId !== product.productId);
    } else {
      updatedCartItems = [...existingCartItems, product];
    }
  
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setIsAddedToCart(!isItemInCart);
  };

  useEffect(() => {
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const isItemInCart = existingCartItems.some((item) => item.productId === product.productId);
    setIsAddedToCart(isItemInCart);
  }, [product]);

  const handleClick = () => {
    handleAddOrRemoveFromCart(product);
    setIsAddedToCart(!isAddedToCart);
  };

  

  const buttonText = isAddedToCart ? "Cancel" : "Add to Cart";

  
  return (
    <li>
        <h2>{product.productName}</h2>
        <p>{product.productDescription}</p>
        <p>{product.productPrice}</p>
        <button onClick={handleClick}>{buttonText}</button>
    </li>
  )
}

export default ProductItem