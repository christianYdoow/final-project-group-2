import React, { useState, useEffect, ChangeEvent } from "react";
import Navbar from "../Navbar";

//styles
import "../../styles/User.css";

//Material UI
import { TextField } from "@mui/material";
import ProductItem from "./ProductItem";

const ProductList = ({prod}) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [searchKey, setSearchKey] = useState<string>("");
  const [totalPages, setTotalPages] = useState(1);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/web/api/admin/products?page=${page}&pageSize=10&searchKey=${searchKey}`);
        const data = await response.json();
        setProducts(data.content);
        setTotalPages(data.totalPages);
        console.log("data",data);
        console.log("total pages",totalPages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page, searchKey]);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchKey(query);
    setPage(1);
  };


  return (
    <>
      <div>
      <div className="container d-flex align-items-center">
        <TextField type="text" value={searchKey} onChange={handleSearch} placeholder="Search..." className="ms-auto" style={{ width: "400px" }}/>
        </div>
        <div className="container mt-5">
          <div className="row ">

            {products.map(product => (
                <ProductItem key={product.productId} product ={product}/>
            ))}

            <div className="d-flex justify-content-center my-4">

            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><button className="page-link" onClick={handlePrevPage} disabled={page === 1}>Previous</button></li>
              
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <li className="page-item">
                  <button className="page-link" key={pageNumber} onClick={() => setPage(pageNumber)}>{pageNumber}</button>
                  </li>
                ))}
           
                <li className="page-item"><button className="page-link" onClick={handleNextPage} disabled={page === totalPages}>Next</button></li>
              </ul>
            </nav>

            
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;