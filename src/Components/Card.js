

import "./Card.css";


function Card(props) {
   
    return (
        <div className="cardContainer">
            <div className="cardImage">
                <img src={props.imageSrc} alt={props.cardTitle} />
            </div>
            <div className="cardBody">
                <div className="cardTitlePrice">
                    <h2>{props.cardTitle}</h2> 
                    <p>{props.cardPrice}</p>
                </div>
                <p className="cardDesc">
                    {props.cardDesc}
                </p>
                <div className="cardFooter">
                    <p>Order a delivery</p>
                    <i></i>
                </div>
            </div>
        </div>
    )
}

export default Card;
