import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Home from "./Components/Home";
import BookingPage from "./Components/BookingPage";
import Footer from "./Components/Footer";
import ConfirmedBooking from "./Components/ConfirmedBooking";


import './App.css';

function App() {
  return (
    <>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking-page" element={<BookingPage />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


// function App() {
//   return (
//     <>
//       <Nav />
//       <Header />
//       <Home />
//       <Footer />
//     </>
//   );
// }