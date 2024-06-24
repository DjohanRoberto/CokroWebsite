import React from "react";
import "./classes.css"
import NavBar from "../../component/navbar/navbar";
import ContactSection from "../../component/contact/contactSection";

import ClassPosting from "../../component/classposting/classposting";
import PastClass from "../../component/pastclass/pastclass";
// import ClassPopup from "../../component/classpopup/classpopup";

// list of classes

// hidden popup menu for class options 

const Classes = () => {

	const [classes, setClasses] = React.useState({})

	console.log(classes)

	React.useEffect(() => {
		const options = {
			method : "GET",
			headers : {
				'Content-Type': 'application/json'
			}
		}

		fetch("/getclasses", options).then(
            res => res.json()
        ).then(
            data => {
                setClasses(data)
            }
        )
	  }, []);

    return ( 
        <div className="Classes">
            <NavBar></NavBar>
			<div className="body">
				<h1 style={{fontSize: '3rem'}}>Upcoming Classes</h1>
				<div className="active_classes">
					{Object.keys(classes).length > 0 
					? <> 
						{Object.keys(classes).map(c => (
                        <>
                            {<>
                                <ClassPosting classid={c} classObj={classes[c]} key={c}></ClassPosting>
                            </>}
                        </>
                        ))}
					</>
					: <>
						<h2>No Classes Coming Up</h2>
					</>
					}
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