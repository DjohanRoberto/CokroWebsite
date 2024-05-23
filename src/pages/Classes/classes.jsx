import React from "react";
import "./classes.css"
import NavBar from "../../component/navbar/navbar";
import ContactSection from "../../component/contact/contactSection";

import ClassPosting from "../../component/classposting/classposting";
import PastClass from "../../component/pastclass/pastclass";
// import ClassPopup from "../../component/classpopup/classpopup";
import { useNavigate } from 'react-router-dom';

// list of classes

// hidden popup menu for class options 

const Classes = () => {

	// const [popup , setPopup] = React.useState(false);

	// const [triggerRerender, setTrigger] = React.useState(false);
	// const navigate = useNavigate();
	// React.useEffect(() => {
	//   }, [triggerRerender]);

    return ( 
        <div className="Classes">
            <NavBar></NavBar>
			<div className="body">
				<h1 style={{fontSize: '3rem'}}>Upcoming Classes</h1>
				<div className="active_classes">
					<button onClick={navigate('/classes/01')}>Test button</button>
					<ClassPosting classtitle="Class 1"/>
					<ClassPosting classtitle="Class 2"/>
				</div>
				<h1 style={{fontSize: '3rem', textAlign: 'right'}}>Past Classes</h1>
				<div className="past_classes">
					<PastClass classtitle="Past Class"/>	
					<PastClass classtitle="Past Class"/>	
					<PastClass classtitle="Past Class"/>	
				</div>
			</div>
			<ContactSection/>
        </div>
    );
}
export default Classes;