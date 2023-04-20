import React, { useState, useEffect, ChangeEvent } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
//styles
import "../styles/User.css";

const Home = () => {
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
      <Navbar />
      <div>
        <h2 className="text-center m-4">Just For You</h2>
        <div className="container mt-5">
          <div className="row ">
            <input type="text" value={searchKey} onChange={handleSearch} placeholder="Search..." />
            {products.map(product => (
              <div className="col-md-3 mb-4">
                <div key={product.productId}>
                  <img className="card-img-top" src={product.productImage} height="250px" />
                  <div className="card-body">
                    <h5 className="card-title pb-2 pt-2">{product.productName.substring(0, 12)}</h5>

                    <p className="card-text text-black-50" style={{ height: "80px", overflow: "hidden" }}>
                      {product.productDescription}
                    </p>

                    <p className="card-text lead fw-bold">{product.productPrice}</p>
                    <div className="d-grid">
                      <button className="btn-add-cart">ADD TO CART</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="d-flex justify-content-center my-4">
            <button onClick={handlePrevPage} disabled={page === 1}>Prev</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button key={pageNumber} onClick={() => setPage(pageNumber)}>{pageNumber}</button>
            ))}
            <button onClick={handleNextPage} disabled={page === totalPages}>Next</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;