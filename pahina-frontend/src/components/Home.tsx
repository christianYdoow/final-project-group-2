import React, { useState, useEffect } from 'react';
import Header from './Header';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/web/api/admin/products?page=${page}&pageSize=10`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  return (
    <>
      <Header />
      <div>
        {products.map(product => (
          <div key={product.productId}>
            <h2>{product.productName}</h2>
            <p>{product.productDescription}</p>
            <p>{product.productPrice}</p>
          </div>
        ))}

        <div>
          <button onClick={handlePrevPage}>Prev</button>
          <button onClick={handleNextPage}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Home;