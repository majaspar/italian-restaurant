import placeholder from './assets/testimonial-photo.jpg'


export default function Reviews() {
  return (
    <section className="reviews margins mb7">
      <h2 className="section-title center">Read Our Reviews</h2>

      <div className="reviews__grid grid">

        <div className="reviews__grid--item">
          <div className="reviews__name-wrapper flex mb1">
            <div>
              <h3 className="reviews__name">Steve Rogers</h3>
              <div className="reviews__rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i></div>
            </div>
            <img className="reviews__img shadow-dark" src={placeholder} alt="" />
          </div>
          <p className="reviews__text">These guys are great! I had an amazing pizza last time I was there. </p>
        </div>
        <div className="reviews__grid--item">
          <div className="reviews__name-wrapper flex mb1">
            <div>
              <h3 className="reviews__name">Nikki Chapman</h3>
              <div className="reviews__rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i></div>
            </div>
            <img className="reviews__img shadow-dark" src={placeholder} alt="" />
          </div>
          <p className="reviews__text">These guys are great! I had an amazing pizza last time I was there. </p>
        </div>
        <div className="reviews__grid--item">
          <div className="reviews__name-wrapper flex mb1">
            <div>
              <h3 className="reviews__name">Millie Bennet</h3>
              <div className="reviews__rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i></div>
            </div>
            <img className="reviews__img shadow-dark" src={placeholder} alt="" />
          </div>
          <p className="reviews__text">The best carbonarra I've ever had! 5/5 stars. </p>
        </div>
      </div>

      <h2 className="section-title center mt7 mb3">Would You Like to Leave a Review? &rarr; <a href="">Log In</a></h2>
    </section>

  )
}