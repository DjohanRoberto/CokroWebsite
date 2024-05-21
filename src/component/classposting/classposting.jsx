import React from 'react'
import './classposting.css'

const ClassPosting = ({ classtitle }) => {
    return (
        <div className="class_posting">
            <h1 className="title">{classtitle}</h1>
            <h3 className="date">01 Month YEAR</h3>
            <img src="" alt="" className="thumbnail" />
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam amet tempora et dignissimos ipsum fugit assumenda dicta voluptatibus qui? Id accusamus alias adipisci tempora nam nihil maxime porro nobis.</p>
        </div>
    )
}

export default ClassPosting;