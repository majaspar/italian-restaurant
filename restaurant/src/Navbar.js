import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { logoutUser } from "./actions/userActions";
import SocialMediaIcons from './SocialMediaIcons';
import './Navbar.css'

export default function Navbar() {

  const cartState = useSelector(state => state.cartReducer);
  const userState = useSelector(state => state.loginUserReducer)
  const { currentUser } = userState;
  const dispatch = useDispatch();

  //dropdown menu when logged in
  const dropDown = () => {
    const items = document.getElementById('login__dropdown--items')
    const arrow = document.getElementById('login__dropdown--arrow')
    items.classList.toggle('show');

    if (items.classList.contains('show')) {
      arrow.style.transform = "rotate(90deg)"
    } else {
      arrow.style.transform = "rotate(0deg)"
    }
  }

  //change navbar bg color when scrolling
  const [navBg, setNavBg] = useState(false)
  const changeNavbar = () => {
    if (window.scrollY >= 100) {
      setNavBg(true)
    } else {
      setNavBg(false)
    }
  }

  window.addEventListener('scroll', changeNavbar)

  return (
    <header className={navBg ? 'header header__navOnScroll' : 'headeer'}>

      <div className="header__wrapper flex margins">
        <div className="header__logo"> Italian <i className="fa-solid fa-utensils"></i> Restaurant</div>
        <button className="sr-only"> Menu</button>
        <nav className="nav flex">

          <ul className="nav__list">
            <div className="nav__list--closeX grid"><i class="fa-solid fa-x"></i></div>
            <li className="nav__list--item content__item HomeLink"><a className="link link--dia" href="/">Home</a></li>
            <li className="nav__list--item content__item MenuLink"><a className="link link--dia" href="/menu">Menu</a></li>
            <li className="nav__list--item content__item GalleryLink"><a className="link link--dia" href="/gallery">Gallery</a></li>
            <li className="nav__list--item content__item AboutLink"><a className="link link--dia" href="/about">About</a></li>
            <li className="nav__list--item content__item ContactLink"><a className="link link--dia" href="/contact">Contact</a></li>
            <div className="nav__list--social">
              <hr />
              <SocialMediaIcons />
            </div>
          </ul>
        </nav>
        <div className="header__icon-and-btn flex">

          {currentUser ? (

            <div className="login__dropdown flex-column">
              <div onClick={dropDown} className="login__username flex">
                <sub><i id="login__dropdown--arrow" className="fa-solid fa-caret-right"></i></sub>
                <span>{currentUser.name}</span>
              </div>
              <div id="login__dropdown--items" className="login__dropdown--items">
                {currentUser.isAdmin && <a className="" href="/admin"><div className="login__dropdown--item ">Admin</div></a>}
                <a className="" href="/orders"><div className="login__dropdown--item ">Orders</div></a>
                <div className="login__dropdown--item login__logout" onClick={() => { dispatch(logoutUser()) }}>Log out</div>
              </div>

            </div>

          ) : <a href="/login"><i className="header__icon fa-regular fa-user"></i></a>}

          <a href="/basket"><div className="header__cart"><i className="header__icon fa-solid fa-shopping-basket"></i>
            <sup className="header__cart-items"><span>{cartState.cartItems.length}</span></sup>
          </div></a>
        </div>

      </div>
    </header>
  )
}