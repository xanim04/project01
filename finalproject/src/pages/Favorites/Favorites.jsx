import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdTrash, IoMdReturnLeft } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { removeItem } from '../../store/features/favoriteSlice';
import { addToCart } from '../../store/features/cartSlice';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Favorites = () => {
    const fav = useSelector((state) => state.fav.fav);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className="fav-field">
            <div className="page-container">
                {fav.length !== 0 ?
                    (<div className="card cards-field p-5">
                        <button className='btn' style={{ width: "170px", color: "#00ACC1" }} onClick={() => navigate("/shop")}> <IoMdReturnLeft /> Return to shop</button>
                        {fav.map((item) => (
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex flex-column flex-sm-row justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div>
                                                <img
                                                    src={item.image}
                                                    className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }} />
                                            </div>
                                            <div className="ms-3 w-100 w-sm-50">
                                                <h5>{item.title} </h5>
                                            </div>
                                        </div>
                                        <div className="d-flex text-center flex-row align-items-center pt-2 pt-sm-0">
                                            <div className='d-flex align-items-center justify-content-around' style={{ width: "130px" }}>
                                                <button className='cart-btn btn btn-primary' onClick={() => dispatch(addToCart(item))}><AiOutlineShoppingCart />Add to cart</button>
                                            </div>
                                            <div style={{ width: "80px" }}>
                                                <h5 className="mb-0">${Math.round(item.price)}</h5>
                                            </div>
                                            <button className='cart-btn btn btn-danger' onClick={() => dispatch(removeItem(item.id))}><IoMdTrash /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>) : (<div className='card p-5 d-flex flex-column text-center' style={{ color: "#00ACC1" }}><span className='pb-1'>Your favorites are currently empty.</span><button className='btn btn-outline-info' onClick={() => navigate("/shop")} >Return to shop</button></div>)}
            </div>
        </div>
    )
}

export default Favorites;