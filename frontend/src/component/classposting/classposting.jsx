import React from 'react'
import { useNavigate } from 'react-router-dom'
import './classposting.css'

const ClassPosting = ({ classid, classObj }) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate('/classes/'+ classid)} className="class_posting">
            <h1 className="title">{classObj['classtitle']}</h1>
            <div className="border"></div>
            <div className="right">
                <h2 className="instructor">{classObj['instructor']}</h2>
                <h3 className="date">{classObj['date']}, {classObj['time']}</h3>
            </div>
        </div>
    )
}

export default ClassPosting;