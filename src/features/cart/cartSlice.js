import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const url="https://course-api.com/react-useReducer-cart-project"
const initialState={
    cartItems:[],
    amount:4,
    total:0,
    isloading:false
}
export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});
const cartSlice=createSlice({
    name:'cart',
    initialState,


    
    reducers:{
        clearCart:(state)=>{
            state.cartItems=[]
        },
        removeItem:(state,action)=>{
          const itemid=action.payload
          state.cartItems = state.cartItems.filter((item) => item.id !== itemid)
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
          },
          decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
          },
          calculateTotal:(state)=>{
            let amount=0;
            let total=0;
            state.cartItems.forEach((item)=>{
                amount+=item.amount
                total+=item.amount*item.price
            })
            state.amount=amount
            state.total=total

          }
    },
    extraReducers: {
      [getCartItems.pending]: (state) => {
        state.isLoading = true;
      },
      [getCartItems.fulfilled]: (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      },
      [getCartItems.rejected]: (state) => {
        state.isLoading = false;
      },
    },
})
export const {clearCart, removeItem,increase,decrease, calculateTotal}=cartSlice.actions
export default cartSlice.reducer;
