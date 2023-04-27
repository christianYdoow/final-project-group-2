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
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";

const PaymentForm = () => {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  
  

  const cardType = [
    {
      value: "Debit",
    },
    {
      value: "Credit",
    },
  ];
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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

          <div>
            <Button onClick={handleOpen} variant="outlined">Add account</Button>
            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <Typography variant="h6" component="h2">
                  Add Debit/Credit
                </Typography>
                <hr />
                <form>
                  <TextField
                    id="cardName"
                    name="cardName"
                    type="text"
                    label="Card Name"
                    required
                    variant="outlined"
                    className="text-field col-12 pb-2"
                  />
                  <TextField
                    id="cardNumber"
                    name="cardNumber"
                    type="number"
                    label="Card number"
                    required
                    variant="outlined"
                    className="text-field col-12 pb-2"
              
                  />
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Card Type"
                    defaultValue=""
                    className="text-field col-12 pb-2"
                  >
                    {cardType.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    label="Expiration"
                    variant="outlined"
                    type="month"
                    className="text-field col-12 pb-2"
                    required
                  />

                  <TextField
                    label="CVV"
                    variant="outlined"
                    type="number"
                    className="text-field col-12 pb-2"
                    required
                  />

                  <Button
                    variant="contained"
                    className="sign-in-button col-12"
                    color="warning"
                    type="submit"
                  >
                    SUBMIT
                  </Button>

                  <Button
                    variant="outlined"
                    className="sign-in-button col-12 mt-2"
                    color="primary"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </form>
              </Box>
            </Modal>
          </div>

  

          <p>Mariah Gift</p>
        </section>
      </div>
    </>
  );
};

export default PaymentForm;
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}

