import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../../store/features/productsSlice";
import ProductCard from './components/ProductCard/ProductCard';

const Shop = () => {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const [category, setCategory] = useState('')
    useEffect(() => {
        dispatch(fetchProducts(category))
    }, [category, dispatch])
    return (
        <div className="shop">
            <div className="page-container">
                <div className="filter py-5">
                    <h4>Filters:</h4>
                    <select onChange={(e) => setCategory(e.target.value)} className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option value="">All</option>
                        <option value="men's clothing">Men's clothing</option>
                        <option value="women's clothing">Women's clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                    </select>
                </div>
                {products.loading && <div style={{ color: "#00ACC1" }} className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>}
                {!products.loading && products.error ? <div className='alert alert-danger'>Error: {products.error}</div> : ""}
                <AnimatePresence>
                    {!products.loading && products.products.length ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }} layout layoutRoot className="row">
                            {
                                products.products.map((product) => (
                                    <ProductCard product={product} keey={product.id} image={product.image} title={product.title} category={product.category} price={product.price} />
                                ))
                            }
                        </motion.div>) : null}
                </AnimatePresence>
            </div>
        </div >
    )
}

export default Shop;