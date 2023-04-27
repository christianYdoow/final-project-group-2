import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminHeader from "./AdminHeader";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function UpdateProductDetails() {
  let navigate = useNavigate();

  const { productId } = useParams();

  const [product, setProduct] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productQuantity: "",
    categoryId: "",
    status: "",
  });

  const {
    productName,
    productDescription,
    productPrice,
    productQuantity,
    categoryId,
    status,
  } = product;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await axios.patch(
      `http://localhost:8080/web/api/admin/update-product/${productId}`,
      product
    );
    navigate("/admin/home");
  };

  const loadProduct = async () => {
    const result = await axios.get(
      `http://localhost:8080/web/api/admin/get-product-id/${productId}`
    );
    setProduct(result.data);
  };

  return (
    <div>
      <AdminHeader />

      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow">
            <h2 className="text-center">Update Product Details</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <TextField
                  id="productName"
                  name="productName"
                  type="text"
                  label="Product Name"
                  value={productName}
                  onChange={(e) => onInputChange(e)}
                  required
                  variant="outlined"
                  className="text-field col-12 pb-2"
                />

                <TextField
                  id="productDescription"
                  name="productDescription"
                  type="text"
                  label="Product Descripition"
                  value={productDescription}
                  onChange={(e) => onInputChange(e)}
                  required
                  multiline
                  maxRows={4}
                  variant="outlined"
                  className="text-field col-12 pb-2"
                />

                <TextField
                  id="productPrice"
                  name="productPrice"
                  type="text"
                  label="Product Price"
                  value={productPrice}
                  onChange={(e) => onInputChange(e)}
                  required
                  variant="outlined"
                  className="text-field col-12 pb-2"
                />

                <TextField
                  id="productQuantity"
                  name="productQuantity"
                  type="text"
                  label="Product Quantity"
                  value={productQuantity}
                  onChange={(e) => onInputChange(e)}
                  required
                  variant="outlined"
                  className="text-field col-12 pb-2"
                />

                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="categoryId">Category</InputLabel>
                    <Select
                      labelId="categoryId"
                      id="categoryId"
                      name="categoryId"
                      value={categoryId}
                      label="Category"
                      required
                      onChange={(e) => onInputChange(e)}
                      className="mb-2"
                    >
                      <MenuItem value={1}>Science Fiction</MenuItem>
                      <MenuItem value={2}>Non Fiction</MenuItem>
                      <MenuItem value={3}>Personal Finance</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="status">Status</InputLabel>
                    <Select
                      labelId="status"
                      id="status"
                      name="status"
                      value={status}
                      label="Status"
                      required
                      onChange={(e) => onInputChange(e)}
                      className="mb-2"
                    >
                      <MenuItem value={"active"}>Active</MenuItem>
                      <MenuItem value={"inactive"}>Inactive</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button className="btn btn-primary me-md-2" type="submit">
                  Submit
                </button>
                <Link
                  className="btn btn-outline-danger me-md-2"
                  to="/admin/home"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
