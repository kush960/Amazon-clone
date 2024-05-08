import React from 'react';
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();

    const proceedHandler = () => {
        if (!user) {
            history.push("/login")
        } else {
            history.push("/payment")
        }
    }
    return (
        <div className="subtotal">
            {/* price */}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):<strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains gift card
                        </small>
                    </>
                )}


                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs"}
            />
            {/* <button onClick={(e) => history.push("/payment")}>Proceed to checkout</button> */}
            <button onClick={proceedHandler}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
