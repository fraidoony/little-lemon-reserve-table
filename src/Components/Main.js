import Card from "../Components/Card";
import Testimonial from "./Testimonials";
import greekSalad from "../assets/greeksalad.jpg";
import bruchetta from "../assets/bruchetta.jpg";
import lemonDessert from "../assets/lemondessert.jpg";
import testimonialImage1 from "../assets/testimonial1.png";
import testimonialImage2 from "../assets/testimonial2.png";
import testimonialImage3 from "../assets/testimonial3.png";
import testimonialImage4 from "../assets/testimonial4.png";
import grillSeaFood from "../assets/grillseafood.jpg";
import restaurantFood from "../assets/restauranfood.jpg";

import "./Main.css";


const Main = () => {

    let cardInfo1 = "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.";
    let cardInfo2 = "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.";
    let cardInfo3 = "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.";
    return (
        <main className="main">
            <div className="main-first-section">
                <h2>This week's specials!</h2>
                <button>Order Online</button>
            </div>
            <div className="cardWrapper">
                <Card imageSrc= {greekSalad} cardTitle={"greek salad"}  cardDesc={cardInfo1} cardPrice={"$ 12.99"} />
                <Card imageSrc= {bruchetta} cardTitle={"bruchetta"}  cardDesc={cardInfo2} cardPrice={"$ 5.99"} />
                <Card imageSrc= {lemonDessert} cardTitle={"lemon dessert"}  cardDesc={cardInfo3} cardPrice={"$ 5.00"} />

            </div>

            <div className="testimonials-section">
                <h2>testimonials</h2>
                <div className="testimonials">
                    <Testimonial imageSrc={testimonialImage1} testimonialName={"Jane Brown"}/>
                    <Testimonial imageSrc={testimonialImage2} testimonialName={"Uma Thorman"}/>
                    <Testimonial imageSrc={testimonialImage3} testimonialName={"Marry Tomsons"}/>
                    <Testimonial imageSrc={testimonialImage4} testimonialName={"Kate Johnsons"}/>
                </div>
            </div>
            <div className="features">
                <div className="feature-body">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis eu sapien congue mollis mollis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis eu sapien congue.
                    </p>
                </div>
                <div className="feature-images">
                    <img className="feature-image1" src={restaurantFood} alt="restaurant food" />
                    <img className="feature-image2" src={grillSeaFood} alt="grill sea food" />
                </div>
            </div>
        </main>
    )
}

export default Main;