import { NavLink } from "react-router-dom";
import logoSvg from "../assets/Logo.svg";
import "../Components/Nav.css";



function Nav(){
    return (
        <nav>
            <div>
                <img src={logoSvg} alt="Little Lemon Restaurant Logo" />
            </div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/">About</NavLink>
                </li>
                <li>
                    <NavLink to="/">Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/booking-page">Reserve Table</NavLink>
                </li>
                <li>
                    <NavLink to="#">Order Online</NavLink>
                </li>
                <li>
                    <NavLink to="#">Login</NavLink>
                </li>
                {/* <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li> */}
            </ul>
        </nav>
    )
}

export default Nav;