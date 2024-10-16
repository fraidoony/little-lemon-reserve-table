
import "./TestimonialCard.css";

const Testimonial = (props) => {

    return (
        <div className="testimonial-card-container">
            <h3>Rating</h3>
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