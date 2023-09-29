import React from 'react'
import PageTitle from '../PageTitle'
import Navbar from '../Navbar'

export default function GalleryScreen() {
    return (
        <>
            <div className="header-and-hero GalleryScreen">
                <Navbar />
                <PageTitle content="Gallery" />
            </div>
            <div className="margins">Photos</div>
        </>
    )
}
