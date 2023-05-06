import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../features/Modal/modalSlice'
import { clearCart } from '../../features/cart/cartSlice'
export default function Modal() {
    const dispatch=useDispatch()
  return (
    <aside className='modal-container'>
        <div className="modal">
            <h4>
            are you sure?
            </h4>
            <div className="btn-container">
                <button className="btn confirm-btn"
                onClick={(()=>{
                    dispatch(clearCart())
                    dispatch(closeModal())
                })}
                >Yes</button>
                <button className="btn clear-btn"
                onClick={()=>{
                    dispatch(closeModal())
                }}
                >No</button>
            </div>
        </div>
    </aside>
  )
}
