import SocialMediaIcons from './SocialMediaIcons'

import { logoutUser } from "./actions/userActions";
import { useSelector, useDispatch } from "react-redux";



export default function Footer() {

    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState;

    const dispatch = useDispatch();

    return (
        <footer className="footer">
            <div className="footer__wrapper margins">
                <div className="footer__column flex-column">
                    <h3 className="mb1 uppercase">Navigation</h3>
                    <a href="" className=" link--white">Home</a>
                    <a href="" className=" link--white">Menu</a>
                    <a href="" className=" link--white">Gallery</a>
                    <a href="" className=" link--white">About</a>
                    <a href="" className=" link--white">Contact</a>
                    <a href="#" className=" link--white">Privacy Policy</a>

                </div>
                <div className="footer__column flex-column">

                    <h3 className="mb1 uppercase">Social Media</h3>
                    <SocialMediaIcons />
                </div>
                <div className="footer__column flex-column">
                    <h3 className="mb1 uppercase">User Panel</h3>
                    {!currentUser && <a href="/login" className=" link--white">Login</a>}
                    {!currentUser && <a href="/register" className=" link--white">Register</a>}
                    {currentUser && <a href="/orders" className=" link--white">My Orders</a>}
                    {currentUser && <a className=" link--white" onClick={() => { dispatch(logoutUser()) }}>Log out</a>}
                </div>
            </div>
            <div className="center mt3">&copy; Italian Restaurant 2023 | Designed & Developed by <a href="https://lenaesposito.co.uk" className="uppercase link--white">Lena
                Esposito</a></div>
        </footer>
    )
}