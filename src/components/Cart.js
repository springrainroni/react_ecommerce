import React from 'react'
import MyCart from './CartItem';
export const Cart = ({cartItem, removeCart}) => {
  console.log("cartItem",cartItem);
  let totalPrice = cartItem.reduce((sum,total)=>sum+(total.price * total.quantity),0) ;

  return (
    <div className='cart'>
      <h4>Cart</h4>
      <div className='cart-items'>
        {
          cartItem.map((item,index) =>
            <MyCart {...item} removeCart={removeCart} key={index}/>
          )
        }
        <div className='cart-item'>
            
            <div className='info'>
              <span>Total</span>
              <span>{totalPrice}</span>
            </div>
          </div>
      </div>
    </div>
  )
}
