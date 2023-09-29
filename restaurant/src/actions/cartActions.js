export const addToCart = (dish, qty) => (dispatch, getState) => {

    let cartItem = {
        name: dish.name,
        _id: dish._id,
        //image: dish.image,
        qty: Number(qty),
        price: dish.price,
        prices: dish.prices,

    }


    if (cartItem.qty > 10) {
        alert('The maximum quantity for one item is 10')
    } else {
        if (cartItem.qty < 1) {
            dispatch({ type: 'DELETE_FROM_CART', payload: dish })
        } else {
            dispatch({ type: 'ADD_TO_CART', payload: cartItem })
        }
    }



    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const deleteFromCart = (dish) => (dispatch, getState) => {

    dispatch({ type: 'DELETE_FROM_CART', payload: dish })

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}