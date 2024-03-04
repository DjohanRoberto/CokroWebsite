import React from "react";
import './home.css'
import NavBar from "../../component/navbar/navbar";

import rentpic from "../../assets/kimchi.jpg"
import heropic from "../../assets/messiBanner.jpg"

const Home = () => {
    return <div className="Home">
        <NavBar/>
        <div className="border" style={{'backgroundColor': 'black', 'height': '0.5rem', 'width': '90%', 'margin-left': '5rem'}}></div>
        <div className="hero">
            <div className="picscroll">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="arrowicons">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

                <img className="hero_img" src={heropic} alt="" />

                {/* <div className="hero_img"></div> */}

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="arrowicons">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
        <div className="border"></div>
        <div className="rent">
            <div className="rent_left rent_section">
                <h1>Rent Our Kitchen</h1>
                <button className="button">Contact Us</button>
            </div>
            <div className="rent_mid rent_section">
                <p>Our kitchen boasts a wide variety of high quality baking equipment, while also keeping a clean and professional look,.</p>
            </div>
            <div className="rent_right rent_section">
                <img className="rent_pic"  src={rentpic} alt="" />
            </div>
        </div>
        <div className="book">
            <div className="book_pics">
                <div className="book_images"></div>
                <div className="book_images"></div>
            </div>
            <div className="book_text">
                <h1>Book Our Classes!</h1>
                <p>
                    blablabalbablablal
                </p>
                <button className="button">Book Now</button>
            </div>
        </div>
        <div className="cakes">
            <h1>Try our cakes</h1>
            <div className="cake_gallery">
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
            </div>
        </div>
        <div className="contact">
            <h1>Contact Us</h1>
            {/* form */}
        </div>
    </div>;
};

export default Home;