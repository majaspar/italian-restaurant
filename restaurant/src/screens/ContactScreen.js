import React from 'react'
import PageTitle from '../PageTitle'
import Navbar from '../Navbar'

export default function ContactScreen() {
    return (
        <>
            <div className="header-and-hero ContactScreen">
                <Navbar />
                <PageTitle content="Contact Us" />
            </div>
            <div className="margins mt7 mb7">Contact information</div>
        </>
    )
}

