import logoSvg from "../assets/Logo.svg";
import "../Components/Nav.css";



function Nav(){
    return (
        <nav>
            <div>
                <img src={logoSvg} alt="Little Lemon Restaurant Logo" />
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;