import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

//styles
import "../styles/User.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0); // initialize the state variable to 0
  const [page, setPage] = useState(1);
  const pageSize = 10; // set the page size to 10

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/web/api/admin/products?page=${page}&pageSize=10`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
    setPage(pageNumber);
  };

  const totalPages = Math.ceil(totalProducts / pageSize);

  const pageNumbers = Array.from(Array(totalPages).keys()).map(
    (pageNum) => pageNum + 1
  );

  return (
    <>
      <Navbar />
      <h2 className="text-center m-4">Just For You</h2>
      <div className="container mt-5">
        <div className="row ">
          {products.map((product) => (
            <div className="col-md-3 mb-4">
              <div
                className="product-card bg-light h-100 p-4"
                key={product.productId}
              >
                <img
                  className="card-img-top"
                  src={product.productImage}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title pb-2 pt-2">
                    {product.productName.substring(0, 12)}
                  </h5>
                  <p
                    className="card-text text-black-50"
                    style={{ height: "80px", overflow: "hidden" }}
                  >
                    {product.productDescription.substring(0, 40)}
                  </p>

                  <p className="card-text lead fw-bold">
                    ₱{product.productPrice}
                  </p>

                  <div className="d-grid">
                    <button className="btn-add-cart">ADD TO CART</button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div>
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a
                    className="page-link"
                    tabIndex="-1"
                    onClick={handlePrevPage}
                  >
                    Previous
                  </a>
                </li>

                {/* {pageNumbers.map((pageNum) => (
                  <li className="page-item" key={pageNum}>
                    <a
                      className={`page-link ${
                        page === pageNum ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </a>
                  </li>
                ))} */}

                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>

                <li className="page-item">
                  <a className="page-link" onClick={handleNextPage}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
