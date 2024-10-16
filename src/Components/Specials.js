import Card from "./Card";
import greekSalad from "../assets/greeksalad.jpg";
import bruchetta from "../assets/bruchetta.jpg";
import lemonDessert from "../assets/lemondessert.jpg";
import "./Specials.css";

const Specials = () => {
    const data = [
        {
        title: "greek salad",
        desc: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "$ 12.99",
        imageSrc: greekSalad,
        },
        {
        title: "bruchetta",
        desc: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: "$ 5.99",
        imageSrc: bruchetta,
        },
        {
        title: "lemon dessert",
        desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: "$ 5.00",
        imageSrc: lemonDessert,
        },

    ]

    return (
        <div className="cardWrapper">
            {
                data.map((special) => {
                   return <Card key={special.title} cardTitle={special.title} cardDesc={special.desc} imageSrc={special.imageSrc} cardPrice={special.price} />
                })
            }
        </div>
    )
}

export default Specials;