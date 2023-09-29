import placeholder from './assets/placeholder.jpg'

export default function About() {
    return (
        <section className="about margins mb7">
            <div className="about__wrapper flex">
                <div className="about__img">
                    <img className="about__img--img" src={placeholder} alt="img" />
                </div>
                <div className="about__text">
                    <h2 className="about__title section-title">Welcome to the World of Tasty and Fresh Food</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi autem soluta perferendis id enim
                        veniam aperiam quae dignissimos nisi fugiat, rerum, natus sit alias, magni in omnis rem vel vero.
                        Deserunt necessitatibus alias magni adipisci delectus, quibusdam, similique culpa laboriosam?</p>
                    <button className="btn-action mt2">Get to Know Us</button>
                </div>
            </div>
        </section>
    )
}