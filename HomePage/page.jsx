import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../features/products/ProductSlice';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';

const page = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    } ,[])
    const state = useSelector(state => state)
    console.log(state.products.products);

    return (
        <div className="container mx-auto">
            <Link href='./cart'>Cart</Link>
            <Link href='./counter'>Counter</Link>
        <div className="grid grid-cols-3">
            {
                state.products.products.map((product) => (
                    <ProductCard key={product._id} product={product}></ProductCard>
                ))
            }
        </div>
    </div>
    )
}

export default page