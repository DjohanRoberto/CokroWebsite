import React from "react";
import './home.css'
import NavBar from "../../component/navbar/navbar";
import rentpic from "../../assets/kimchi.jpg"

const Home = () => {
    return <div className="Home">
        <NavBar/>
        <div className="border"></div>
        <div className="hero">
            <div className="picscroll">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="arrowicons">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

                <div className="hero_img"></div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="arrowicons">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
        <div className="border"></div>
        <div className="rent">
            <div className="rent_left rent_section">
                <h1>Rent Our Kitchen</h1>
                <button>Button</button>
            </div>
            <div className="rent_mid rent_section">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, sed ad? Ad, sit minus nobis quia deserunt quas quos corrupti reprehenderit dicta ipsa minima ex omnis obcaecati impedit tenetur temporibus.</p>
            </div>
            <div className="rent_right rent_section">
                <img className="rent_pic"  src={rentpic} alt="" />
            </div>
        </div>
    </div>;
};

export default Home;