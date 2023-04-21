import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


import UpdateProductDetails from "./UpdateProductDetails";

function createData(
  id: number,
  productName: string,
  productDescription: string,
  productPrice: number,
  productQuantity: number,
  productStatus: string
) {
  return {
    id,
    productName,
    productDescription,
    productPrice,
    productQuantity,
    productStatus,
  };
}

const rows = [
  createData(1, "Frozen yoghurt", "Thriller and Drama", 159, 6.0, "active"),
  createData(2, "Ice cream sandwich", "Thriller and Drama", 237, 9.0, "active"),
  createData(3, "Eclair", "Thriller and Drama", 262, 16.0, "active"),
  createData(4, "Cupcake", "Thriller and Drama", 305, 3.7, "active"),
  createData(5, "Gingerbread", "Thriller and Drama", 356, 16.0, "active"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Book Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.productName}</TableCell>
              <TableCell>{row.productDescription}</TableCell>
              <TableCell>{row.productPrice}</TableCell>
              <TableCell>{row.productQuantity}</TableCell>
              <TableCell>{row.productStatus}</TableCell>
              <TableCell>
            
                <UpdateProductDetails/>
                {/* <button type="button" className="btn btn-danger">
                <DeleteIcon/>
               
                </button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
