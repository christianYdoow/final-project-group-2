import * as React from "react";
import { useState } from "react";

//Material UI
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/CloseRounded";

interface UploadCsvFormValues {
  csv: File | null;
}

const UploadCsv = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formValues, setFormValues] = useState<UploadCsvFormValues>({
    csv: null,
  });

  const handleFileChangeCsv = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFormValues((prevValues) => ({
      ...prevValues,
      csv: file,
    }));
  };

  const handleSubmitCsv = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("file", formValues.csv as File);

      await fetch("http://localhost:8080/web/api/admin/add-product-file", {
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
      <Button onClick={handleOpen} variant="contained" color="warning">
        Upload file (.csv)
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="upload-csv-modal"
        aria-describedby="upload-csv-modal"
      >
        <Box sx={style}>
          <Box display="flex" justifyContent="flex-end">
            <CloseIcon onClick={handleClose} />
          </Box>
          <Typography id="upload-csv-modal" variant="h6" component="h2">
            Choose a file (.csv)
          </Typography>

          <form onSubmit={handleSubmitCsv} encType="multipart/form-data">
            {/* <label htmlFor="csv">CSV:</label> */}
            <div className="input-group mt-3">
              <input
                type="file"
                id="csv"
                name="csv"
                accept=".csv"
                className="form-control"
                onChange={handleFileChangeCsv}
              />

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default UploadCsv;
