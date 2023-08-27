import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import ProductSlice from "../features/products/ProductSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        products: ProductSlice,
        cart: cartSlice,
        filter: filterSlice
    }
})

export default store;