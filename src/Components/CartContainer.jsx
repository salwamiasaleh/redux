import React from 'react'
import CartItem from './CartItem'
import { useDispatch,useSelector } from 'react-redux'

import { clearCart } from '../features/cart/cartSlice';
import { openModal } from '../features/Modal/modalSlice';
export default function CartContainer() {
  const dispatch=useDispatch()
    const {cartItems, amount,total}=useSelector((store)=>store.cart)
  
  if(amount<1){
    return (<div className='cart'>
    <header>
    <h2>your cart</h2>
    <h4 className='empty-cart'>is empty</h4>
    </header>
    </div>
  );}
    return (
    <div className='cart'>
        <header>
            <h2>your cart</h2>
        </header>
        <div>
            {cartItems.map((el)=>{
                return <CartItem key={el.id} {...el}/>
            })}
        </div>
        <footer>
            <div className='cart-total'>

            <hr />
            <h2>total {total.toFixed(2)}</h2>
            </div>
            <button className='btn clear-btn'
            onClick={()=>{dispatch(openModal())}}
            >CLEAR</button>
        </footer>
    </div>
  )
}
