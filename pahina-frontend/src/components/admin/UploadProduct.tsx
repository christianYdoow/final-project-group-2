import React from "react";

function UploadProduct() {
  return (

      <div className="custom-file">
        <input type="file" className="custom-file-input d-none" id="customFile"/>
        <label
          className="custom-file-label btn btn-warning"
          htmlFor="customFile"
        >
          Upload file
        </label>
      </div>
    
  );
}

export default UploadProduct;
