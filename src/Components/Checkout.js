import React from 'react';
import "./Checkout.css";
import adimg from "../images/checkout_ad2.jpg";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";


function Checkout() {
    const [{ basket, user }] = useStateValue();
    // console.log({basket});
    return (
        <div className="checkout">
            <div className="checkout__left" >

                <img src={adimg} alt="adimg" className="checkout__ad" />
                <h2>Hello, {user?.email}</h2>
                {basket?.length === 0 ?
                    (
                        <div>
                            <h2>Your Shopping Cart is empty</h2>
                            <p>Please add the products first </p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Cart</h2>
                            {/* list out all of the checkout products */}
                            {basket.map(item => (
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}

            </div>

            {basket.length > 0 && (
                <div className="checkout__right">

                    <Subtotal />
                </div>
            )}

        </div >
    );
}

export default Checkout;
