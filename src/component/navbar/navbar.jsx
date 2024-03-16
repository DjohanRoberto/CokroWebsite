import React from "react";
import logo from "../../assets/logo cokro 1.png";
import { Link, useNavigate} from "react-router-dom";
import './navbar.css'


export default function NavBar() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="navbar">
                <img className="logo" src={logo} alt="logo" onClick={() => navigate("/")}/>
                <div className="pages">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/classes'}>Classes</Link>
                    <Link to={'/gallery'}>Gallery</Link>
                    <Link to={'/cakes'}>Cakes</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <Link to={'/about'}>About</Link>
                </div>
            </div>
        </div>
    )
}