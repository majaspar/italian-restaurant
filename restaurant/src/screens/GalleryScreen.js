import React from 'react'
import PageTitle from '../PageTitle'
import Navbar from '../Navbar'

import img1 from '../assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import img2 from '../assets/photo-1502301103665-0b95cc738daf.avif';
import img3 from '../assets/casey-lee-awj7sRviVXo-unsplash.jpg';
import img4 from '../assets/sebastian-coman-photography-eBmyH7oO5wY-unsplash.jpg';
import img5 from '../assets/kamil-kalbarczyk-19Ft3QfakMo-unsplash.jpg';
import img6 from '../assets/cala-w6ftFbPCs9I-unsplash.jpg';
import img7 from '../assets/brooke-lark--F_5g8EEHYE-unsplash.jpg';
import img8 from '../assets/mgg-vitchakorn-DDn9I5V1ubE-unsplash.jpg';
import img9 from '../assets/orkun-orcan-w0GyGNyGo6Y-unsplash.jpg';
import img10 from '../assets/orkun-orcan-w0GyGNyGo6Y-unsplash.jpg';

export default function GalleryScreen() {

    let data = [
        {
            id: 1,
            imgScr: img1
        },
        {
            id: 2,
            imgScr: img2
        },
        {
            id: 3,
            imgScr: img3
        },
        {
            id: 4,
            imgScr: img4
        },
        {
            id: 5,
            imgScr: img5
        },
        {
            id: 6,
            imgScr: img6
        },
        {
            id: 7,
            imgScr: img7
        },
        {
            id: 8,
            imgScr: img8
        },
        {
            id: 9,
            imgScr: img9
        },
        {
            id: 10,
            imgScr: img10
        },
    ]
    return (
        <>
            <div className="header-and-hero GalleryScreen">
                <Navbar />
                <PageTitle content="Gallery" />
            </div>

            <div className="margins">Photos</div>
            {console.warn(data)}
        </>
    )
}
