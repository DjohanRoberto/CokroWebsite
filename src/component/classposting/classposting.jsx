import React from 'react'
import './classposting.css'

const ClassPosting = ({ classtitle }) => {
    return (
        <div className="class_posting">
            <h1 className="title">{classtitle}</h1>
            <div className="border"></div>
            <div className="right">
                <h2 className="instructor">Instructor</h2>
                <h3 className="date">01 January 2024, 11am - 4pm</h3>
            </div>
        </div>
    )
}

export default ClassPosting;