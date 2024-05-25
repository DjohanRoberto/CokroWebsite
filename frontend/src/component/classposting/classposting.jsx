import React from 'react'
import { useNavigate } from 'react-router-dom'
import './classposting.css'

const ClassPosting = ({ classid }) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate('/classes/'+ classid)} className="class_posting">
            <h1 className="title">{classid}</h1>
            <div className="border"></div>
            <div className="right">
                <h2 className="instructor">Instructor</h2>
                <h3 className="date">01 January 2024, 11am - 4pm</h3>
            </div>
        </div>
    )
}

export default ClassPosting;