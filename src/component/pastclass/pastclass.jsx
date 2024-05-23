import React from "react";
import "./pastclass.css"
import img from '../../assets/class_1.JPG'

const PastClass = ({classtitle}) => {
    return (
        <div className="pastclass" style={{backgroundImage: `url(${img})`}}>
            <div className="caption" >
                {classtitle}
            </div>
        </div>
    );
}

export default PastClass;