import React from "react";
import "./gallery.css";

import NavBar from "../../component/navbar/navbar";

const Gallery = () => {
  	return (
    	<div className="Gallery">
      		<NavBar></NavBar>
			<div className="border" style={{'backgroundColor': 'black', 'height': '0.5rem'}}></div>
			<div className="gallery_body">
				<h1>Our kitchen</h1>


			</div>
			
    	</div>
  	);
}

export default Gallery;

