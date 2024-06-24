import React from "react";
import logo from "../../assets/logo cokro 1.png";
import { Link, useNavigate} from "react-router-dom";
import './navbar.css'


const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="navbar">
                <img className="logo" src={logo} alt="logo" onClick={() => navigate("/")}/>
                <div className="pages">
                    <Link className='clickable-title' to={'/'}>Home</Link>
                    <Link className='clickable-title' to={'/classes'}>Classes</Link>
                    <div className="dropdown">
                        <Link className='clickable-title gallery' to={'/gallery'}>Gallery</Link>
                        <div className="dropdown-content">
                            <a href="/gallery#classes">Classes</a>
                            <a href="/gallery#kitchen">Kitchen</a>
                            <a href="/gallery#cakes">Cakes</a>
                        </div>
                    </div>
                    <Link className='clickable-title' to={'/contact'}>Contact</Link>
                    <Link className='clickable-title' to={'/about'}>About</Link>
                </div>
            </div>
            <div className="border" style={{'backgroundColor': 'black', 'height': '0.5rem', 'width' : '100vw', 'boxShadow' : '0 5px 5px 0 rgba(0, 0, 0, 0.3)'}}></div>
        </div>
    )
}

export default NavBar;