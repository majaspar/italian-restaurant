import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from './actions/orderActions';
import { placeOrderReducer } from './reducers/orderReducer';
import StripeCheckout from 'react-stripe-checkout'
import Error from "./Error";
import Loading from "./Loading";
import Success from "./Success";

export default function Checkout({ total }) {

    const orderState = useSelector((state) => state.placeOrderReducer)
    const { loading, error, success } = orderState;

    const dispatch = useDispatch()

    const tokenHandler = (token) => {
        console.log(token)
        dispatch(placeOrder(token, total))
    }
    return (

        <div>
            {loading && <Loading />}
            {error && <Error message="Something went wrong while placing the order." />}
            {success && <Success message="Your order has been placed successfully." />}

            <StripeCheckout
                name="Italian Pensford"
                amount={total * 100}
                shippingAddress
                token={tokenHandler}
                stripeKey="pk_test_51NLs6gLOk2koDDsjhpD8KKVMZ3X927MnpOLvcJZCOtrwolY77jie9PTCyqKKzgnKa54iUhPvfXcbEdWukGn1COPi00cxHmqH9S"
                currency="GBP"
                allowRememberMe>

                <button className="basket__checkout mt2">Checkout</button>
            </StripeCheckout>

        </div>

    )
}
