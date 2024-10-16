import { useState } from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css";

const BookingPage = () => {

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    let dt = new Date("2024-03-30");
    dt = fetchAPI(dt);

    const [availableTimes, setAvailableTimes] = useState(dt);

    return (
        <div className="booking-page">
            <BookingForm avTimes={availableTimes} />
        </div>
    )
}

export default BookingPage;
