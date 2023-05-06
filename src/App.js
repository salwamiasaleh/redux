import CartContainer from "./Components/CartContainer";
import CartItem from "./Components/CartItem";
import Navbar from "./Components/Navbar";
import { useDispatch,useSelector } from "react-redux";
import { calculateTotal,getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./Components/Modal/Modal";
function App() {
  const {cartItems,isloading}= useSelector((store)=>store.cart)
  const {isOpen}= useSelector((store)=>store.modal)
  const dispatch= useDispatch()
  useEffect(()=>{
dispatch(calculateTotal())
  },[cartItems])
  useEffect(()=>{
    dispatch(getCartItems())
  },[])
  if(isloading){
    return <div className="loading">
<h1>loading</h1>

    </div>
  }
  return <>
  {isOpen&&<Modal/>}
  
  <Navbar/>
  <CartContainer/>
  </>;
}
export default App;
