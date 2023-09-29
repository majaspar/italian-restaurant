import React from 'react'
import Navbar from '../Navbar';
import PopularDishes from '../PopularDishes';
import PlaceOrderProcess from '../PlaceOrderProcess';
import About from '../About';
import Reviews from '../Reviews';
import PageTitle from '../PageTitle';

export default function Homescreen() {

    return (
        <>
            <div className="header-and-hero HomeScreen">
                <Navbar />
                <PageTitle
                    content="Your Perfect Italian"
                    description={
                        <div className="mb7 center">
                            <p className="hero__desc mt2 mb2">The most delicious flavours that Italian Cuisine has to offer!<br />
                                Have a glass of splendid Sicilian wine and feel like you're there.<br />
                                Pizza, Pasta, Steak or Pollo? <br />
                                Whatever your favourite - we've got it!</p>
                            <div className="hero__buttons mt3 flex">
                                <a href="tel:+47719225132"><button className="hero__btn btn-action uppercase">Phone Us</button></a>
                                <button className="hero__btn--secondary uppercase">See Menu</button>
                            </div>
                        </div>} />
            </div>
            <PopularDishes />
            <PlaceOrderProcess />
            <About />
            <Reviews />
        </>
    )
}
