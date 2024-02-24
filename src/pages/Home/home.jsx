import React from "react";
import cokrologo from '../../cokrologo.svg';
import './home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return <div className="Home">
        <div> 
            <img id={'logo'} src={cokrologo} alt="logo" />
            <p>
            Home
            </p>
            <Link to={'/classes'}>Classes</Link>
        </div>
        
    </div>;
};

export default Home;