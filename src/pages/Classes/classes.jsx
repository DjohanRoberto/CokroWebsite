import React from "react";
import "./classes.css"
import NavBar from "../../component/navbar/navbar";

import ClassPosting from "../../component/classposting/classposting";
import PastClass from "../../component/pastclass/pastclass";
// import ClassPopup from "../../component/classpopup/classpopup";

// list of classes

// hidden popup menu for class options 

const Classes = () => {
    return ( 
        <div className="Classes">
            <NavBar></NavBar>
			<div className="body">
				{/* <ClassPopup classtitle='Class 1'/> */}
				<h1 className="classes_title">Classes</h1>
				<h1>Upcoming Classes</h1>
				<div className="active_classes">
					<ClassPosting classtitle="Class 1"/>
					<ClassPosting classtitle="Class 2"/>
				</div>
				<h1>Past Classes</h1>
				<div className="past_classes">
					<PastClass classtitle="Past Class"/>	
					<PastClass classtitle="Past Class"/>	
					<PastClass classtitle="Past Class"/>	
				</div>
			</div>
			
        </div>
    );
}
export default Classes;