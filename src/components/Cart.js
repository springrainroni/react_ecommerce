import React , {useState} from 'react'
import MyCart from './CartItem';
export const Cart = ({cartItem, removeCart, clearCart}) => {
  console.log("cartItem",cartItem);
  const [CheckoutOpen ,setCheckOutOpen] = useState(false);
  const [address,setAddress] = useState("");
  let totalPrice = cartItem.reduce((sum,total)=>sum+(total.price * total.quantity),0) ;
  const handleChange = (e) => {
    setAddress(e.target.value);
  }
  return (
    <div className='cart'>
      <h4>Cart</h4>
      {cartItem.length ===0 && 
        <div className='cart-item'>
        <div className='info'>
            <span>Cart Item is empty</span>
          </div>
        </div>
      }
      <div className='cart-items'>
        {
          cartItem.map((item,index) =>
            <MyCart {...item} removeCart={removeCart} key={index}/>
          )
        }
        {cartItem.length !==0 &&
          <>
          <div className='cart-item'>
            <div className='info'>
              <span>Total</span>
              <span>{totalPrice}</span>
            </div>
          </div>
          <div className='cart-item'>
            <div className='info'>
              <span><button onClick={()=>clearCart()} style={{backgroundColor:"red", color:"white"}}>Clear</button></span>
              <span>
                <button style={{backgroundColor:"green", color:"white"}} onClick={()=> setCheckOutOpen(!CheckoutOpen)}>
                  {CheckoutOpen?"Hide":"Checkout"}
                </button>
              </span>
            </div>
          </div>
          { CheckoutOpen && 
              <div className='cart-item'>
              <div className='info'>
                <span><input type="text" onChange={handleChange} placeholder="Shipping Address" /></span>
                <span><button style={{backgroundColor:!address ? "grey":"green", color:"white"}} disabled={!address} onClick={clearCart}>Checkout</button></span>
              </div>
            </div>
          }
          
          </>
        }
        
          
      </div>
    </div>
  )
}
