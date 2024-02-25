import React from "react";
import cokrologo from '../../cokrologo.svg';
import { Link } from "react-router-dom";
import './navbar.css'


export default function NavBar() {
    return (
        <div>
            <div className="navbar">
                <img id={'logo'} src={cokrologo} alt="logo" />
                <div className="pages">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/classes'}>Classes</Link>
                    <Link to={'/gallery'}>Gallery</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <Link to={'/about'}>About</Link>
                </div>
            </div>
        </div>
    )
}