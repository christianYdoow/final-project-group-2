import React, { useState, useEffect, ChangeEvent } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TextField from "@mui/material/TextField";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);
  const [searchKey, setSearchKey] = useState<string>("");
  const [totalPages, setTotalPages] = useState(1);

  const [open, setOpen] = React.useState(false);

  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/web/api/admin/all-products?page=${page}&pageSize=10&searchKey=${searchKey}`
        );
        const data = await response.json();
        setProducts(data.content);
        setTotalPages(data.totalPages);
        console.log("data", data);
        console.log("total pages", totalPages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page, searchKey]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchKey(query);
    setPage(1);
  };

  const deleteUser = async (productId: any) => {
    setOpen(true);
    await axios.patch(
      `http://localhost:8080/web/api/admin/remove-product/${productId}`
    );
  };

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <div className=" d-flex mb-5">
        <TextField
          type="text"
          value={searchKey}
          onChange={handleSearch}
          placeholder="Search..."
          className="ms-auto"
          style={{ width: "400px" }}
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Book Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.productId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  {" "}
                  <img
                    className="card-img-top"
                    src={"../src/assets/" + product.productImage}
                    height="60px"
                  />
                </TableCell>
                <TableCell>{product.productName}</TableCell>
                <TableCell>{product.productDescription}</TableCell>
                <TableCell>{product.productPrice}</TableCell>
                <TableCell>{product.productQuantity}</TableCell>
                <TableCell>{product.categoryId}</TableCell>
                <TableCell>{product.status}</TableCell>
                <TableCell>
                  <div className="d-flex">
                  <Link
                    className="btn btn-warning mx-2"
                    to={`/update-product/${product.productId}`}
                  >
                    {" "}
                    <ModeEditIcon />
                  </Link>
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      The product has been deleted!
                    </Alert>
                  </Snackbar>
                  </div>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="d-flex justify-content-center my-4">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link"
                onClick={handlePrevPage}
                disabled={page === 1}
              >
                Previous
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <li className="page-item">
                  <button
                    className="page-link"
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                </li>
              )
            )}

            <li className="page-item">
              <button
                className="page-link"
                onClick={handleNextPage}
                disabled={page === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ProductList;
