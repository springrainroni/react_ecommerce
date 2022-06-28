import React from 'react'

const CartItem = ({id,title,price,quantity, removeCart }) => {
  return (
        
        <div className='cart-item'>
            
          <button onClick={()=>removeCart(id)}>X</button>
          <div className='info'>
            <span>{title} X {quantity}</span>
            <span>{price}</span>
          </div>
        </div>
    
  )
}

export default CartItem;