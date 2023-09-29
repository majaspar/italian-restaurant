import SocialMediaIcons from './SocialMediaIcons'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper margins flex">
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
                    <a href="" className=" link--white">Login</a>
                    <a href="" className=" link--white">Register</a>
                    <a href="" className=" link--white">My Orders</a>
                </div>
            </div>
            <div className="center mt3">&copy; Italian Restaurant 2023 | Designed & Developed by <a href="https://lenaesposito.co.uk" className="uppercase link--white">Lena
                Esposito</a></div>
        </footer>
    )
}