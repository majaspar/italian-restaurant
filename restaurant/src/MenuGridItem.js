import React, { useState } from "react";
import { roundPrice } from "./utils";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from "./actions/cartActions";

export default function MenuGridItem({ dish }) {
    const [qty, setQty] = useState(1)
    const addQty = () => {
        setQty(qty => qty + 1)
    }
    const deductQty = () => {
        if (qty >= 1) {
            setQty(qty => qty - 1)
        } else {
            return qty === 1
        }
    }

    const dispatch = useDispatch()

    function addtocart() {
        dispatch(addToCart(dish, qty))

    }

    return (
        <div className="menu__grid--item grid mb1">
            <div>
                <h3 className="">{dish.name}
                    {dish.isVegetarian && <i className="menu_icon-vegetarian fa-solid fa-leaf"></i>}

                </h3>
                <p className="menu__dish--description">{dish.description}</p>
            </div>
            <div className="qty-span">Qty:
                <i onClick={deductQty}
                    style={{ marginLeft: "1rem", color: "red" }}
                    className="menu__icon fa-solid fa-circle-minus"></i>
                <span className="menu__item--qty"> <b>{qty} </b> </span>
                <i onClick={addQty}
                    style={{ color: "green" }}
                    className="menu__icon fa-solid fa-circle-plus"></i>
            </div>
            <div>Price: £{roundPrice(dish.price, qty)}</div>
            <button className="menu__btn--add" onClick={addtocart}>Add</button>
        </div>
    )
}