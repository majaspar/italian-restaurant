import dish from './assets/danijela-prijovic-qits91IZv1o-unsplash.png'
import pizza from './assets/photo-1594007654729-407eedc4be65.jpg'
import dish1 from './assets/danijela-prijovic-qits91IZv1o-unsplash1.jpg'


export default function PopularDishes() {
  return (
    <section className="popular-dishes margins mb7">
      <h2 className="popular-dishes__title section-title center">Most popular</h2>
      <p className="popular-dishes__desc center mb4">See what our customers like the most.</p>
      <div className="popular-dishes__grid grid">

        <div className="popular-dishes__grid--item flex-column">
          <img className="popular-dishes__img" src={dish} alt="" />
          <h3 className="popular-dishes__name center">Spaghetti Arrabbiata</h3>
          <div className="popular-dishes__description center">Our tomato sauce with garlic, olive oil and chilli (optional)</div>
          <button className="popular-dishes__btn btn-action mt1">Add to order</button>
        </div>
        <div className="popular-dishes__grid--item flex-column">
          <img className="popular-dishes__img" src={pizza} alt="" />
          <h3 className="popular-dishes__name center">Pizza Piccante</h3>
          <div className="popular-dishes__description center">Tomato sauce, mozzarella, Nduja and pepperoni chilli.</div>
          <button className="popular-dishes__btn btn-action mt1">Add to order</button>
        </div>
        <div className="popular-dishes__grid--item flex-column">
          <img className="popular-dishes__img" src={dish1} alt="" />
          <h3 className="popular-dishes__name center">Dish Name</h3>
          <div className="popular-dishes__description center">
            Deserunt necessitatibus alias magni adipisci delectus, quibusdam, similique culpa laboriosam?</div>
          <button className="popular-dishes__btn btn-action mt1">Add to order</button>
        </div>
        <div className="popular-dishes__grid--item flex-column">
          <img className="popular-dishes__img" src="https://themewant.com/products/html/dinenos/assets/images/shop/01.jpg" alt="" />
          <h3 className="popular-dishes__name center">Sirloin Steak</h3>
          <div className="popular-dishes__description center">Deserunt necessitatibus alias magni adipisci delectus,
            quibusdam, similique culpa laboriosam.</div>
          <button className="popular-dishes__btn btn-action mt1">Add to order</button>
        </div>

      </div>
    </section>
  )
}