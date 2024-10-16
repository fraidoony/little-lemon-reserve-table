import logoFooter from  "../assets/logo2.png";
import "./Footer.css";

const Footer = () => {

    return (
        <footer>
            <div className="image-container">
                <img height={200} src={logoFooter} alt="Little Lemon logo"/>
            </div>
            <div>
                <p>Door mat</p>
                <p>Navigation</p>
                <p>Home</p>
                <p>About</p>
                <p>Menu</p>
                <p>Reservations</p>
                <p>Order Online</p>
                <p>Login</p>
            </div>
            <div>
                <p>Contact</p>
                <p>Address</p>
                <p>Phone Number</p>
                <p>Email</p>
            </div>
            <div>
                <p>Social Media Links</p>
                <p>Address</p>
                <p>Phone Number</p>
                <p>Email</p>
            </div>
        </footer>
    )
}

export default Footer;