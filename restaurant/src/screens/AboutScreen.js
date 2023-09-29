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
        </>
    )
}

