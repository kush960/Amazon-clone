import React from 'react';
import "./checkoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, image, price, rating,hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    //console.log(id,title,image,price,rating);
    const removeFromBasket = () => {
        // remove item from basket
        // console.log(id);
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,

        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="productimg" className="checkoutProduct__image" />

            <div className="checkoutproduct__info">
                <p className="checkoutproduct__title">{title}</p>
                <p className="checkoutproduct__price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutproduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => {
                                <p key={i}>⭐</p>
                            })
                    }
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct;
