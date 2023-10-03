import React from 'react'
import PageTitle from '../PageTitle'
import Navbar from '../Navbar'

export default function AboutScreen() {
    return (
        <>
            <div className="header-and-hero AboutScreen">
                <Navbar />
                <PageTitle content="About" />
            </div>
            <div className="margins">About the restaurant</div>
            <div>One of the main characteristics of Italian cuisine is its simplicity, with many dishes made up of few ingredients, and therefore Italian cooks often rely on the quality of the ingredients, rather than the complexity of preparation.
                The most popular dishes and recipes, over the centuries, have often been created by ordinary people more so than by chefs, which is why many Italian recipes are suitable for home and daily cooking, respecting regional specificities, privileging only raw materials and ingredients from the region of origin of the dish and preserving its seasonality.
                Cheese, cold cuts and wine are central to Italian cuisine, and along with pizza and coffee (especially espresso) form part of Italian gastronomic culture.
                Italian cuisine has a great variety of different ingredients which are commonly used, ranging from fruits, vegetables, grains, cheeses, meats and fish. In northern Italy, fish (such as cod, or baccalà), potatoes, rice, corn (maize), sausages, pork, and different types of cheese are the most common ingredients. Pasta dishes with tomato are common throughout Italy.
                <a href='https://en.wikipedia.org/wiki/Italian_cuisine'>Source: Wikipedia</a>
            </div>
        </>
    )
}

