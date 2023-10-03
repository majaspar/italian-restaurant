import React from 'react'
import inside from './assets/adrien-olichon-XB1W7TlTaxQ-unsplash.jpg'
import SocialMediaIcons from './SocialMediaIcons'
import vector1 from './assets/vector1.svg';

export default function Address() {
    return (
        <div className="Address margins mt7 mb7">

            <img className="Address__vector" src={vector1} />
            <div className="Address__grid center flex">
                <div>
                    <h2 className="section-title">Italian Restaurant</h2>
                    <p className="mt2 mb2"><i class="fa-solid fa-diamond"></i>
                        <i class="fa-solid fa-diamond"></i>
                        <i class="fa-solid fa-diamond"></i></p>
                    <p className="text-desc">Bond Street<br /> Broadmead<br /> BRISTOL<br /> BS1 3BD</p>
                    <p className="mt2 mb2 center"><i class="fa-solid fa-diamond"></i>
                        <i class="fa-solid fa-diamond"></i>
                        <i class="fa-solid fa-diamond"></i></p>
                    <p className="text-desc"><i class="fa-solid fa-phone"></i>  0 7788 990 011</p>
                    <p className="mt2 mb2 center"><i class="fa-solid fa-diamond"></i>
                        <i class="fa-solid fa-diamond"></i>
                        <i class="fa-solid fa-diamond"></i></p>
                    <div className="mb2" style={{ marginLeft: "25%" }}><SocialMediaIcons /></div>
                </div>
                <div className="Address__img shadow-dark" >
                    <img src={inside} />
                </div>
            </div>
        </div>
    )
}
