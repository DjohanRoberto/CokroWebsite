import React from "react";
import NavBar from "../../component/navbar/navbar";

const Cakes = () => {
    return (
        <div className="cakes">
            <NavBar/>
            <div className="cakes">
            <h1>Try our cakes</h1>
            <div className="cake_gallery">
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
            </div>
        </div>
        </div>
    )
}

export default Cakes;