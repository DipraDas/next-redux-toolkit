import ProductSlice from "../features/products/ProductSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        products: ProductSlice
    }
})

export default store;