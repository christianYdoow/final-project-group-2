import React from 'react'
import Header from '../components/Header'
import ProductList from '../components/product/ProductList'




const Home = ({products,handleNextPage,handlePrevPage}) => {
  return (
    <>
      <Header/>
      <div>
        <div>
        {products.length>0 ?(
        <ProductList 
          products={products} 
        />
        ):(
          <p style={{ marginTop: '2rem' }}>No more in list </p>
        )}
        </div>
        <div>
          <button onClick={handlePrevPage}>Prev</button>
          <button onClick={handleNextPage}>Next</button>
        </div>
      </div>
      
    </>
  )
}

export default Home