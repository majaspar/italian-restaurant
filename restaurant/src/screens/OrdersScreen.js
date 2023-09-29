import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Error from "../Error";
import Loading from "../Loading";
import Success from "../Success";
import Navbar from '../Navbar';
import PageTitle from '../PageTitle';

import AOS from 'aos'
import 'aos/dist/aos.css';

export default function OrdersScreen() {

    AOS.init()
    const dispatch = useDispatch()
    const orderState = useSelector(state => state.getUserOrdersReducer)
    const { orders, error, loading } = orderState;

    useEffect(() => {
        dispatch(getUserOrders())
    }, [])

    return (
        <>
            <div className="header-and-hero ContactScreen">
                <Navbar />
                <PageTitle content="My Orders" />
            </div>
            <div className="mt3 margins">
                {loading && <Loading />}
                {error && <Error />}
                {orders && orders.map(order => {

                    const showOrderDetails = () => {
                        const orderDetails = document.querySelector('.order__number')
                        orderDetails.classList.toggle('show-details')

                    }

                    return (

                        <div className="OrdersScreen">

                            <div>Order date: {order.createdAt.substring(0, 10)}
                                <span onClick={showOrderDetails} className="order__details uppercase">(Details)</span>
                                <p className="order__number mt1">Order number: {order._id}<br />
                                    Transaction id: {order.transactionId}</p>

                            </div>

                            <div className="mt1">Items: </div>
                            <ol>
                                {order.items.map(item => {
                                    return (
                                        <li>
                                            <p>{item.name} * {item.qty} = £{(item.price.toFixed(2))}</p>
                                        </li>
                                    )
                                })}
                            </ol>
                            <p>{(order.isCollected == false && order.isDelivered == false) && <h3>Pending...</h3>}</p>
                            <p>{order.isDelivered && <div><h3>Delivered <i className="fa-solid fa-circle-check"></i></h3>
                                <p className="mt1">Delivery address: {order.address.street}, {order.address.postcode}, {order.address.city}. </p></div>}</p>
                            <p>{order.isCollected && <h3>Collected <i className="fa-solid fa-circle-check"></i></h3>}</p>
                            <p className="" style={{ textAlign: "right" }}>Order total: £{(order.orderAmount).toFixed(2)}</p>
                            <p></p>
                            <hr />
                        </div>

                    )
                })}
            </div >
        </>
    )
}

