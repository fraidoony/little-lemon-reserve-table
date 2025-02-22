import { NavLink } from "react-router-dom";
import "./Header.css";
import image1 from "../assets/image1.jpg";

function Header(){

    return (
        <header>
            <div className="header-section">
                <div>
                    <h1 className="little-lemon">Little Lemon</h1>
                    <h2 className="chicago">Chicago</h2>
                    <p className="header-description">
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    
                    <button className="btn1"><NavLink to="/booking-page">Reserve Table</NavLink></button>
                </div>
                <div className="hero-image-container">
                    <img className="hero-section-image" src={image1}  alt="Main dish"/>
                </div>
            </div>
        </header>
    )
}

export default Header;