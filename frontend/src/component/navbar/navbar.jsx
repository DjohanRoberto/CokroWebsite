import React from "react";
import logo from "../../assets/logo cokro 1.png";
import { Link, useNavigate} from "react-router-dom";
import './navbar.css'


const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="navbar">
                <div className="navbar-content">
                    <img className="logo" src={logo} alt="logo" onClick={() => navigate("/")}/>
                    <div className="pages">
                        <Link className='clickable-title' to={'/'}>Home</Link>
                        <Link className='clickable-title' to={'/classes'}>Classes</Link>
                        <div className="dropdown">
                            <Link className='clickable-title gallery' to={'/gallery'}>Gallery</Link>
                            <div className="dropdown-content">
                                <button className='navbar-dropdown-buttons' onClick={() => navigate('/gallery', { state : { targetId : 'classes' } })}>Classes</button>
                                <button className='navbar-dropdown-buttons' onClick={() => navigate('/gallery', { state : { targetId : 'kitchen' } })}>Kitchen</button>
                                <button className='navbar-dropdown-buttons' onClick={() => navigate('/gallery', { state : { targetId : 'cakes' } })}>Cakes</button>
                            </div>
                        </div>
                        <Link className='clickable-title' to={'/contact'}>Contact</Link>
                        <Link className='clickable-title' to={'/about'}>About</Link>
                    </div>
                </div>
                <div className="border" style={{'backgroundColor': 'black', 'height': '0.5rem', 'width' : '100vw', 'boxShadow' : '0 5px 5px 0 rgba(0, 0, 0, 0.3)'}}></div>
            </div>
            <div className="space" ></div>
        </div>
    )
}

export default NavBar;