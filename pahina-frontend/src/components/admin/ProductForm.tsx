import * as React from "react";
import { useState } from "react";

//Material UI
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

interface ProductFormValues {
  productName: string;
  productDescription: string;
  productQuantity: number;
  productPrice: number;
  productImage: File | null;
  status: string;
}

const ProductForm = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event: SelectChangeEvent) => {
    // setStatus(event.target.value as string);
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const [formValues, setFormValues] = useState<ProductFormValues>({
    productName: "",
    productDescription: "",
    productQuantity: 0,
    productPrice: 0,
    productImage: null,
    status: "Select a status",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFormValues((prevValues) => ({
      ...prevValues,
      productImage: file,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      try {
        const formData = new FormData();
        formData.append("file", formValues.productImage as File);
        formData.append("imageName", formValues.productImage?.name || "");
        formData.append("productName", formValues.productName);
        formData.append("productDescription", formValues.productDescription);
        formData.append("productQuantity", String(formValues.productQuantity));
        formData.append("productPrice", String(formValues.productPrice));
        formData.append("status", formValues.status);
  
        await fetch("http://localhost:8080/web/api/admin/add-product", {
          method: "POST",
          body: formData,
        });
  
        // handle successful submission
      } catch (error) {
        // handle error
      }

  };

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
    <div>
      <div>
        <Button onClick={handleOpen} variant="outlined">
          Add Product
        </Button>
        <Modal
          aria-labelledby="add-product-modal"
          aria-describedby="add-product-modal"
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
              <Typography id="add-product-modal" variant="h6" component="h2">
                Add Product
              </Typography>

              <hr />

              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label htmlFor="productImage" className="fs-5">
                  Product Image
                </label>
                <input
                  type="file"
                  id="productImage"
                  name="productImage"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="form-control mb-2"
                  required
                />

                <TextField
                  id="productName"
                  name="productName"
                  type="text"
                  label="Product Name"
                  value={formValues.productName}
                  onChange={handleInputChange}
                  required
                  variant="outlined"
                  className="text-field col-12 pb-2"
                />
                <TextField
                  id="productDescription"
                  name="productDescription"
                  type="text"
                  label="Product Description"
                  value={formValues.productDescription}
                  onChange={handleInputChange}
                  required
                  variant="outlined"
                  className="text-field col-12 pb-2"
                  multiline
                  maxRows={4}
                />
                <TextField
                  id="productQuantity"
                  name="productQuantity"
                  type="number"
                  label="Product Quantity"
                  value={formValues.productQuantity}
                  onChange={handleInputChange}
                  required
                  variant="outlined"
                  className=" text-field col-12 pb-2"
                />

                <TextField
                  id="productPrice"
                  name="productPrice"
                  type="number"
                  label="Product Price"
                  value={formValues.productPrice}
                  onChange={handleInputChange}
                  required
                  variant="outlined"
                  className=" text-field col-12 pb-2"
                />

                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="status">Status</InputLabel>
                    <Select
                      labelId="status"
                      id="status"
                      name="status"
                      value={formValues.status}
                      label="Status"
                      onChange={handleChange}
                      className="mb-2"
                    >
                      <MenuItem value={"active"}>Active</MenuItem>
                      <MenuItem value={"inactive"}>Inactive</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

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
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default ProductForm;
