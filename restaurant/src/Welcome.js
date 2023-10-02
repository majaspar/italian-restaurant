import React from 'react'
import './Welcome.css'


import img1 from './assets/eiliv-aceron-wNQoaYCFcsI-unsplash.jpg';
import img2 from './assets/elevate-iv6yNy7oBqQ-unsplash.jpg';
import vector1 from './assets/vector1.svg';
import pizza from './assets/pizza.png';



export default function Welcome() {
    return (
        <section className="Welcome margins mt5 mb7">
            <div className="Welcome__wrapper flex">
                <div className="Welcome__imgs">
                    <img className="Welcome__vector-1" src={vector1} />
                    <img className="Welcome__img-1" src={img1} />
                    <img className="Welcome__img-2" src={img2} />
                </div>
                <div className="Welcome__text center">

                    {/*div wrapper to center content */}
                    <div className="Welcome__text--wrapper">
                        <h2 className="mb2 section-title" >
                            Welcome to<br />
                            Italian Restaurant</h2>
                        <p className="text-desc mb2">Chefs with over 20 years of experience make sure that every dish is cooked to perfection. The public dining room that ultimately came to be known as the restaurant originated in France, and the French have continued to make major contributions to the restaurant's development.</p>


                        <img className="Welcome__img-pizza" src={pizza} />

                    </div>
                </div>

            </div>

        </section>
    )
}
