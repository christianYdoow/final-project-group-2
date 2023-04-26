import React from 'react'
import Header from '../components/Header'

import ProductList from '../components/product/ProductList'
import Navbar from '../components/Navbar'


const Home = ({products}) => {
  return (
    <>
      <Navbar/>
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
      </div>
      
    </>
  )
}

export default Home