import React, { useState, useEffect } from "react";

const ProductItem = ({ product }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddOrRemoveFromCart = (product) => {
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const isItemInCart = existingCartItems.some(
      (item) => item.productId === product.productId
    );

    let updatedCartItems;
    if (isItemInCart) {
      updatedCartItems = existingCartItems.filter(
        (item) => item.productId !== product.productId
      );
    } else {
      updatedCartItems = [...existingCartItems, product];
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setIsAddedToCart(!isItemInCart);
  };

  useEffect(() => {
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const isItemInCart = existingCartItems.some(
      (item) => item.productId === product.productId
    );
    setIsAddedToCart(isItemInCart);
  }, [product]);

  const handleClick = () => {
    handleAddOrRemoveFromCart(product);
    setIsAddedToCart(!isAddedToCart);
  };

  const buttonText = isAddedToCart ? "Cancel" : "Add to Cart";

  return (
    <>
      <div className="col-md-3 mb-4 product-card">
        <img
          className="card-img-top"
          src={'../src/assets/' + product.productImage}
          height="320px"
          width="50px"
        />
        <div className="card-body">
          <h5 className="card-title pb-2 pt-2">
            {product.productName}
          </h5>

          <p
            className="card-text text-black-50"
            style={{ height: "50px", overflow: "hidden" }}
          >
            {product.productDescription}
          </p>

          <p className="card-text lead fw-bold">{product.productPrice}</p>
          <div className="d-grid">
          <button onClick={handleClick} className="btn-add-cart">
        {buttonText}
      </button> 
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
