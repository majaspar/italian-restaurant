export default function Navbar() {
    return (
        <section className="place-order mb7">
            <div className="place-order__wrapper margins">
                <h2 className="section-title center">

                    Your Italian Dinner Is Only 3 Steps Away...</h2>


                <div className="place-order__grid grid">

                    <div className="place-order__grid--item flex-column center">
                        <i className="place-order__icon fa-regular fa-user"></i>
                        <h3>Quick Account Setup</h3>
                    </div>

                    <span className="place-order__arrow">&rarr;</span>
                    <div className="place-order__grid--item flex-column center">
                        <i className="place-order__icon fa-solid fa-bowl-food"></i>
                        <h3>Collection or Delivery?</h3>
                    </div>

                    <span className="place-order__arrow">&rarr;</span>

                    <div className="place-order__grid--item flex-column center">
                        <i className="place-order__icon fa-solid fa-cart-shopping"></i>
                        <h3>Complete Checkout</h3>
                    </div>
                </div>

            </div>
        </section>
    )
}