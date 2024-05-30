import React from 'react';
import "./cart.scss";
import { useDispatch, useSelector } from 'react-redux';
import { IoMdTrash, IoMdReturnLeft } from "react-icons/io";
import { decrementQuantity, incrementQuantity, removeItem } from '../../store/features/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };
    const getTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += Math.round(item.price) * item.quantity;
        });
        return total;
    };
    return (
        <div className="cart-field">
            <div className="page-container">
                {cart.length !== 0 ?
                    (<div className="card cards-field p-5">
                        <button className='btn' style={{ width: "170px", color: "#00ACC1" }} onClick={() => navigate("/shop")}> <IoMdReturnLeft /> Return to shop</button>
                        <span className='p-1' style={{ color: "#0097A7" }}>{getTotalQuantity()} items in your cart</span>
                        {cart.map((item) => (
                            <div key={item.id} className="card mb-3">
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
                                            <div className='d-flex align-items-center justify-content-around' style={{ width: "100px" }}>
                                                <button className='cart-btn btn btn-success' onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                                                <h5 className="fw-normal mb-0">{item.quantity}</h5>
                                                <button className='cart-btn btn btn-primary' onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
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
                        <span className='p-1' style={{ color: "#0097A7" }}>Total price is ${getTotalPrice()}</span>
                    </div>) : (<div className='card p-5 d-flex flex-column text-center' style={{ color: "#00ACC1" }}><span className='pb-1'>Your cart is currently empty.</span><button className='btn btn-outline-info' onClick={() => navigate("/shop")} >Return to shop</button></div>)}
            </div>
        </div>
    )
}

export default Cart;