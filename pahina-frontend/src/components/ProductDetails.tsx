import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

import toKill from "../assets/to-kill.png";
import Button from "@mui/material/Button";

function ProductDetails() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center p-2">
            <img src={toKill} className="img-fluid"/>
          </div>

          <div className="col-md-6 p-2 p-xs-4">
          <h4 className="text-uppercase text-black-50">Novel</h4>
          <p className="display-5">To Kill a Mocking Bird</p>

          <p className="m-0">Rating</p>
            <div className="d-flex align-items-center">
          
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
         
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box> 
              <p className="m-2">20 Sold</p>
            </div>
            <p className="lead">
              To Kill a Mockingbird is both a young girl's coming-of-age story
              and a darker drama about the roots and consequences of racism and
              prejudice, probing how good and evil can coexist within a single
              community or individual.
            </p>
            <h3 className="display-6 fw-bold my-2">₱359.99</h3>

            <Button variant="contained" color="warning">
              <p className="m-0 ps-1 text-white">Add to Cart</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
