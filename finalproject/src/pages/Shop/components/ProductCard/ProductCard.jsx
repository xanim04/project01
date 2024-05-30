import React, { useState } from 'react';
import "./productCard.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../store/features/cartSlice';
import { addToFav } from '../../../../store/features/favoriteSlice';

const ProductCard = (props) => {
    const { image, title, category, price, keey, product } = props;
    const dispatch = useDispatch()
    const [fav, setFav] = useState(false);
    return (
        <div key={keey} className="col-6 col-lg-4 pb-5 product-card d-flex flex-column">
            <div className="product-image">
                <img src={image} alt="productImg" />
                <div className="product-icons">
                    <button onClick={() => dispatch(addToCart(product))}><AiOutlineShoppingCart /></button>
                    <button onClick={() => { dispatch(addToFav(product)); setFav(!fav) }} className={fav ? "fav-active" : ""}><MdFavorite /></button>
                </div>
            </div>
            <div className="product-details d-flex flex-column">
                <span className='text-muted product-categories'>{category}</span>
                <h5>{title}</h5>
                <span className='product-price'>${Math.round(price)}.00</span>
            </div>
        </div >
    )
}

export default ProductCard