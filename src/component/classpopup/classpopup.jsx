import React from "react";
import './classpopup.css'
import img from "../../assets/class_1.JPG"
import instructor from "../../assets/huh.png"
import { useNavigate } from "react-router-dom";

const ClassPopup = ({classtitle}) => {
    const navigate = useNavigate();
    return (
        <div className="bg">
            <div className="popup">
                <div className="close" onClick={() => {navigate('/classes')}}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                </svg>
                </div>
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