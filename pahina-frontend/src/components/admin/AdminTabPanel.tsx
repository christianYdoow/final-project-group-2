import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UploadCsv from "./UploadCsv";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import UserReports from "./reports/UserReports";
import ProductReports from "./reports/ProductReports";

interface AdminTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function AdminTabPanel(props: AdminTabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function tabProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AdminTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="container">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
        
          >
            <Tab label="Product Management" {...tabProps(0)} />
            <Tab label="Reports" {...tabProps(1)} />
          </Tabs>
        </Box>
        
        <AdminTabPanel value={value} index={0}>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
            <h1 className="h2">Product Management</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group mr-2"></div>
            </div>
          </div>

          <div className="gap-2 d-flex justify-content-md-end mb-3">
            <UploadCsv />
            <ProductForm />
          </div>

          <ProductList/>
          {/* <ProductList /> */}
        </AdminTabPanel>

        <AdminTabPanel value={value} index={1}>
          <UserReports/>
          <ProductReports/>
        </AdminTabPanel>
      </div>
    </>
  );
}
