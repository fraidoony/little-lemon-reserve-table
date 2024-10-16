import grillSeaFood from "../assets/grillseafood.jpg";
import restaurantFood from "../assets/restauranfood.jpg";

import "./Chicago.css";

const Chicago = () => {

    return (
        <div className="features">
            <div className="feature-body">
                    <h2 className="chicago-little-lemon">Little Lemon</h2>
                    <h3 className="chicago-feature">Chicago</h3>
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
    )
}

export default Chicago;
