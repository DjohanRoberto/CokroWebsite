import React from "react";
import NavBar from "../../component/navbar/navbar";

const Gallery = () => {
  	return (
    	<div className="Gallery">
      		<NavBar></NavBar>
			<div className="border" style={{'backgroundColor': 'black', 'height': '0.5rem'}}></div>
      		Gallery
    	</div>
  	);
}

export default Gallery;

