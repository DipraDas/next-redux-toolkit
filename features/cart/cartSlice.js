import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const selecterProduct = state.cart.find(product => product._id === action.payload._id)
            if (!selecterProduct) {
                const product = { ...action.payload, quantity: 1 }
                state.cart.push(product);
            }
            else {
                selecterProduct.quantity += 1;
                state.cart
                    .filter(product => product._id !== selecterProduct._id)
                    .push(selecterProduct)
            }
        },
        removeFromCart : (state, action) => {
            if(action.payload.quantity > 1){
                const product = {
                    ...action.payload,
                    quantity : action.payload.quantity - 1
                }
                state.cart = state.cart.filter(
                    product => product._id !== action.payload._id
                )
                state.cart.push(product);
            }
            else{
                state.cart = state.cart.filter(product => product._id !== action.payload._id)
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;