import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./BookingForm.css";

const BookingForm = (props) => {
    const [bookingDate, setBookingDate] = useState("");
    const [guests, setGuests] = useState("1");
    const [restTime, setResTime] = useState("17:00");
    const [occasion, setOcasion] = useState("Birthday");

    let navigate = useNavigate();

    const submitAPI = function(formData) {
        if(formData){
            return true;
        }
        return false;
    }

    const submitForm = (formData) => {
        
       if(submitAPI(formData)) {
           return navigate("/confirmed-booking");
       }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {bookingDate, guests, restTime, occasion};
        console.log(formData);
        submitForm(formData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px", marginBlock: 100, marginInline: "auto"}}>
                <label htmlFor="res-date">Choose date</label>
                <input className="dateInput"
                    type="date"
                    id="res-date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}

                />
                <p className="error">{bookingDate == "" ? "This field is required" : ""}</p>
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={restTime}
                    onChange={(e) => setResTime(e.target.value)}

                >
                    {
                        props.avTimes.map((t, key) => {
                            return  <option key={key}>{t}</option>
                        })
                    }
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}

                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOcasion(e.target.value)}

                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" disabled ={bookingDate == "" ? true : false} value="Make Your reservation" />

            </form>
        </div>
    )
}

export default BookingForm;
