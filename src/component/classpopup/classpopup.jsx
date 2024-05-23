import React from "react";
import './classpopup.css'
import img from "../../assets/class_1.JPG"
import instructor from "../../assets/huh.png"

const ClassPopup = ({classtitle}) => {
    return (
        <div className="bg">
            <div className="popup">
                <div className="left">
                    <div className="text">
                        <div className="top_text">
                            <div className="top_left">
                                <h1 className="top_titles">{classtitle}</h1>
                                <h2 className="top_titles">Instructor</h2>
                                <br /> 
                                <h2 className="top_titles">01 January 2024 <br />11am - 4pm</h2>
                            </div>
                            <div className="instructor_pic">
                                <img className='pic' src={instructor} alt="" />
                            </div>
                        </div>
                        <div className="mid_text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptate porro nobis! Ratione nostrum ipsa doloremque sunt vero aliquid quos sed quam vel optio a corporis explicabo quidem, impedit soluta.</p>
                        </div>
                        <div className="bot_text">
                            <button className="button">Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="pics img1" style={{backgroundImage: `url(${img})`}}></div>
                    <div className="pics img2" style={{backgroundImage: `url(${img})`}}></div>
                </div>
            </div>
        </div>
    );
}

export default ClassPopup;