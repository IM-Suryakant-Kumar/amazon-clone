import React, { useState, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import CurrencyFormat from "react-currency-format"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

import BasketItem from "./BasketItem"
import { getCartTotalPrice, emptyCart } from "./redux"
import "./Payment.css"

const Payment = () => {
    const navigate = useNavigate()

	const user = useSelector((state) => state.user)
	const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const stripe = useStripe()
    const elements = useElements()

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState(false)
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)


    useEffect(() => {
        const getClientSecret = async() => {
            try {
                const options = {
                    method: 'POST',
                    url: 'http://127.0.0.1:5001/clone-c6080/us-central1/api/payments/create',
                    params: {total: '200'}
                };
                  
                const res = await axios.request(options)
                console.log(res.data);
                setClientSecret(res.data.clientSecret)
            } catch (error) {
                console.log(error)
            }
        }
        getClientSecret()

    }, [cart])

    console.log("THE SECRET IS >>>", clientSecret)

    const handleSubmit = async (e) => {
        // do all the fancy stripe stuff
        e.preventDefault()
        setProcessing(true)        

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIndent = payment confirmation

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch(emptyCart())

            navigate("/order", { replace: true })
        })
    }

    const handleChange = e => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")
    }

	return (
		<div className="payment">
            <div className="payment__container">
                <h1>Checkout ({<NavLink to="/checkout">{cart.length} items</NavLink>})</h1>

                {/* Payment section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user.email}</p>
                        <p>123 Rect live</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment section - Review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {cart.map((product) => (
                            <BasketItem product={product} />
                        ))}
                    </div>
                </div>

                {/* Payment section - payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go here */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__price_container">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    value={getCartTotalPrice(cart)}
                                    decimalScale={2}
                                    displayType={"text"}
                                    thousandSeparator={true} 
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Error */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
		</div>
	)
}

export default Payment
