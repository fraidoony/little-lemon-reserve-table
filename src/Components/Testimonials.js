import TestimonialCard from "./TestimonialCard";
import JaneBrown from "../assets/testimonial1.png";
import UmaThorman from "../assets/testimonial2.png";
import MaryThomsons from "../assets/testimonial3.png";
import KateJohnsons from "../assets/testimonial4.png";
import "../Components/Testimonials.css";


const Testimonials = () => {
    const testimonialData = [
        {
            name: "Jane Brown",
            imgSrc: JaneBrown

        },
        {
            name: "Uma Thorman",
            imgSrc: UmaThorman
        },
        {
            name: "Mary Thomsons",
            imgSrc: MaryThomsons
        },
        {
            name: "Kate Johnsons",
            imgSrc: KateJohnsons
        }

    ]


    return (
        <div className="testimonials-container">
            {
                testimonialData.map((testimonial) => {
                   return <TestimonialCard key={testimonial.name} name={testimonial.name} imageSrc={testimonial.imgSrc} />
                })
            }
        </div>
    )
}

export default Testimonials;