import React from "react";

//components
import AdminHeader from "./AdminHeader";

//Material UI
import BookIcon from "@mui/icons-material/BookRounded";
import ReportIcon from "@mui/icons-material/BarChart";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import UploadProduct from "./UploadProduct";

function AdminAddProduct() {
  return (
    <div>
      <AdminHeader />

      <div className="container mt-5">
        <div className="row">
          <nav className="col-md-3 sidebar border border-1">
            <div className="sidebar-sticky">
              <ul className="nav flex-lg-column flex-md-row flex-sm-row">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <BookIcon color="warning" />
                    Project Management
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <ReportIcon color="warning" />
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main
            role="main"
            className="col-md-9 ml-sm-auto col-lg-9 px-4 border border-1"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Project Management</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2"></div>
              </div>
            </div>

            <div className=" gap-2 d-md-flex justify-content-md-end mb-3">
              {/* <button className="btn btn-primary me-md-2" type="button">
                Button
              </button> */}
                <UploadProduct />

                <AddProduct />
            </div>
          
        
            <ProductList />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminAddProduct;
