import Rating from "../assets/rating.png";
import "./TestimonialCard.css";

const Testimonial = (props) => {

    return (
        <div className="testimonial-card-container">
            <img className="rating" src={Rating} alt="Rating" />
            <div className="testimonial-body">
                <div className="testimonial-image-wrapper">
                <img src={props.imageSrc} alt="Testimonial" />
                </div>
                <h3>{props.name}</h3>
            </div>
            <p>User review</p>
        </div>
    )
}

export default Testimonial;