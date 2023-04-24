import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

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

export default function AddProduct() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Product</Button>
      <Modal
        aria-labelledby="add-product"
        aria-describedby="add-product"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="add-product" variant="h6" component="h2">
              Add Product
            </Typography>
            <Typography id="add-product" sx={{ mt: 2 }}>

            
            <label htmlFor="productImage">Product Image:</label>
              <input
                type="file"
                id="productImage"
                name="productImage"
                accept="image/*"
                className="mb-2"
                required
              />
              <TextField
                id="productName"
                type="text"
                label="Product Name"
                variant="outlined"
                className=" text-field col-12 pb-2"
              />
              <TextField
                id="productDescription"
                type="text"
                label="Product Description"
                variant="outlined"
                className="text-field col-12 pb-2"
                multiline
                maxRows={4}
              />
              <TextField
                id="productQuantity"
                type="number"
                label="Product Quantity"
                variant="outlined"
                className=" text-field col-12 pb-2"
              />

              <TextField
                id="productPrice"
                type="number"
                label="Product Price"
                variant="outlined"
                className=" text-field col-12 pb-2"
              />

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    className="mb-2"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>

         
              <Button
                variant="contained"
                className="sign-in-button col-12"
                color="warning"
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
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
