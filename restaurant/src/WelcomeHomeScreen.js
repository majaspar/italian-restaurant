import React from 'react'
import './WelcomeHomeScreen.css'


import img1 from './assets/eiliv-aceron-wNQoaYCFcsI-unsplash.jpg';
import img2 from './assets/elevate-iv6yNy7oBqQ-unsplash.jpg';



export default function WelcomeHomeScreen() {
    return (
        <section className="WelcomeHomeScreen margins mt7 mb5">
            <div className="WelcomeHomeScreen__wrapper flex">
                <div className="WelcomeHomeScreen__img">
                    <img className="WelcomeHomeScreen__img-1" src={img1} />
                    <img className="WelcomeHomeScreen__img-2" src={img2} />
                </div>
                <div className="WelcomeHomeScreen__text">
                    <h2>Welcome to Italian Restaurant</h2>
                    <p>Chefs with over 20 years of experience make sure that every dish is cooked to perfection.</p>
                </div>

            </div>

        </section>
    )
}
