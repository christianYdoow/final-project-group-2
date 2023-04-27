import React from "react";
import Navbar from "./Navbar";

//Material UI
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";

const PaymentForm = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <section className="mb-5">
          <h2>Order Information</h2>
          <hr />

          <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>ID</TableCell> */}
              <TableCell>Book Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
      
              <TableRow
             
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Ikigai </TableCell>
                <TableCell>The Japanese Secret in Long Life</TableCell>
                <TableCell>59.99</TableCell>
                <TableCell>2</TableCell>
                <TableCell>199.98</TableCell>
               
              </TableRow>
         
          </TableBody>
        </Table>
      </TableContainer>
        </section>

        <section className="my-3">
          <h2>Payment Method</h2>
          <hr />

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "50ch" },
            }}
  
          >
            <TextField label="Account name" variant="outlined" type="text" required/>
            <TextField label="Card number" variant="outlined" type="number" required/>
            <TextField label="Expiration" variant="outlined" type="month" required/>
            <TextField label="Card Type" variant="outlined" required/>
            <TextField label="Amount" variant="outlined" type="number" required/>
                
       
          </Box>

          
        </section>
      </div>
    </>
  );
};

export default PaymentForm;
