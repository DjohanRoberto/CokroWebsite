import React from "react";
import "./classes.css"
import NavBar from "../../component/navbar/navbar";

import ClassPosting from "../../component/classposting/classposting";

const Classes = () => {
    return ( 
        <div className="Classes">
            <NavBar></NavBar>
			<div className="border" style={{'backgroundColor': 'black', 'height': '0.5rem'}}></div>
			<div className="body">
				<div className="active_classes">
					<h1>Active Classes</h1>
					<ClassPosting/>
				</div>
				<div className="past_classes">
					<h1>Past Classes</h1>
					<ClassPosting/>
				</div>
			</div>
			
        </div>
    );
}
export default Classes;