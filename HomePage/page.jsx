import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../features/products/ProductSlice';

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    } ,[])
    const state = useSelector(state => state)
    console.log(state.products.products);

    return (
        <div>Homepage</div>
    )
}

export default page