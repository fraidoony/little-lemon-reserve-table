import Testimonials from "./Testimonials";
import Specials from "./Specials";
import Chicago from "./Chicago";
import Header from "./Header";

import "./Home.css";

const Main = () => {
  

  return (
    <div>
    <Header />
    <main className="main">
      <div className="main-first-section">
        <h2 className="this-week-special">This week's specials!</h2>
        <button className="btn1 order-online-btn" >Order Online</button>
      </div>

      <Specials />

      <div className="testimonials-section">
        <h2>testimonials</h2>
        <div className="testimonials">
          <Testimonials />
        </div>
      </div>
      <Chicago />
    </main>
    </div>
  );
};

export default Main;
