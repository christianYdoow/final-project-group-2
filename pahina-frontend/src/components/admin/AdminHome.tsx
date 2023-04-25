import React from "react";
import { NavLink } from "react-router-dom";

//components
import AdminHeader from "./AdminHeader";

//Material UI
import BookIcon from "@mui/icons-material/BookRounded";
import ReportIcon from "@mui/icons-material/BarChart";
import ProductList from "./AdminProductList";
import AddProduct from "./ProductForm";
import UploadCsv from "./UploadCsv";

//styles
import '../../styles/Admin.css';
import AdminTabPanel from "./AdminTabPanel";


function AdminAddProduct() {
  return (
    <div>
      <AdminHeader />
     <AdminTabPanel/>
    
    </div>
  );
}

export default AdminAddProduct;
