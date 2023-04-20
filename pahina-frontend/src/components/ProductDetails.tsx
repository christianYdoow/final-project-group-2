import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

function ProductDetails() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              // src={product.image}
              // alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{}</h4>
            <h1 className="display-5">{}</h1>
            <p className="lead fw-bolder">
              Rating {}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">{}</h3>
            <h3 className="lead">{}</h3>

            <NavLink to="/cart" className="btn btn-warning m-2">
              Go to Cart
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
