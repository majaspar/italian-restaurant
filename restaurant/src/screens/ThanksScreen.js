import React from 'react';
import Navbar from '../Navbar';
import PageTitle from '../PageTitle';

export default function ThanksScreen() {
    return (
        <>
            <div className="header-and-hero ThanksScreen">
                <Navbar />
                <PageTitle content="Thank you" />
            </div>
            <div className="margins mt7 mb7">
                Thank you for submitting the contact form. We will get back to you as soon as possible.
                <br />
                <a href="/contact">Go back</a>
            </div>
        </>
    )
}
