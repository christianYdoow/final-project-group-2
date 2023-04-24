import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({products}) => {
  return (
    <ul>
        {products.map((product)=>(
            <ProductItem
                key={product.productId}
                product={product}
               
            />
        ))}
    </ul>
  )
}

export default ProductList