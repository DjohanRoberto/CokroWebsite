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
                    <Link className='clickable-title' to={'/'}>Home</Link>
                    <Link className='clickable-title' to={'/classes'}>Classes</Link>
                    <div className="dropdown">
                        <Link className='clickable-title' to={'/gallery'}>Gallery</Link>
                        <div className="dropdown-content">
                            <a href="/cakes">Cakes</a>
                            <a href="/cakes">Kitchen</a>
                            <a href="/cakes">Classes</a>
                        </div>
                    </div>
                    <Link className='clickable-title' to={'/contact'}>Contact</Link>
                    <Link className='clickable-title' to={'/about'}>About</Link>
                </div>
            </div>
        </div>
    )
}