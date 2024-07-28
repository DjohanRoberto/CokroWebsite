import './home.css'
import NavBar from "../../component/navbar/navbar";
import ContactSection from "../../component/contact/contactSection"
import { useNavigate} from "react-router-dom";
import { useRef } from "react";

import cakepic from "../../assets/cakes_1.JPG"
import kitchenpic from "../../assets/dapur_wideleft.JPG"
import rentpic from "../../assets/dapur_machine.JPG"
import classpic1 from "../../assets/class_1.JPG"
import classpic2 from "../../assets/class_5.JPG"

const Home = () => {
    const navigate = useNavigate();
    const contRef = useRef();

    return <div className="Home">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <NavBar/>
        <div className="hero">
            <img src={cakepic} alt="" className="backpic" onClick={() => navigate('/gallery', { state : { targetId : 'cakes' } })}/>
            <img src={kitchenpic} alt="" className="backpic" onClick={() => navigate('/gallery', { state : { targetId : 'kitchen' } })}/>
            <h1 className="cakes_text">Cakes</h1>
            <h1 className="kitchen_text">Kitchen</h1>
        </div>
        <div className="rent">
            <div className="rent_left rent_section">
                <h1>See Our Facilities</h1>
                <button className="button" onClick={() => {
                    contRef.current?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}>Contact Us</button>
            </div>
            <div className="rent_mid rent_section">
                <p>Our kitchen offers a wide variety of high quality baking and cooking equipment which has a clean and professional look (NOTE: Change).</p>
            </div>
            <div className="rent_right rent_section">
                <img className="rent_pic"  src={rentpic} alt="" />
            </div>
        </div>
        <div className="book">
            <div className="book_pics">
                <img src={classpic1} alt="" className="book_images" />
                <img src={classpic2} alt="" className="book_images" />
            </div>
            <div className="book_text">
                <h1>Book Our Classes!</h1>
                <p>
                    blablabalbablablal
                </p>
                <button className="button" onClick={() => {
                    navigate("/classes");
                    window.scroll({top:0, behavior:"smooth"})
                }}>Book Now</button>
            </div>
        </div>
        
        <div ref={contRef}>
            <ContactSection bottom_part={true}/>
        </div>
    </div>;
};

export default Home;