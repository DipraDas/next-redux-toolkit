import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard';

const Cartt = () => {
    const cart = useSelector(state => state.cart.cart)
    console.log(cart);
    return (
        <div>
            {
                cart.map(product => <ProductCard
                    key={product._id}
                    product={product}
                />)
            }
        </div>
    )
}

export default Cartt