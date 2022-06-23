import React from 'react'
import  {Product}  from './Product'

 const ProductList = ({products,keyword,addCart, removeCart}) => {
  return (
    
    <div className='productList'>
       
      {
        products.map((product,index) => 
            <Product {...product} keyword={keyword} addCart={addCart}  key={index}/>
        )
      }
      
    </div>
  )
}

export default ProductList;