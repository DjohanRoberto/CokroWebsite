import React from "react";
import NavBar from "../../component/navbar/navbar";

const About = () => {
  return (
    <div className="About">
      <NavBar></NavBar>
			<div className="border" style={{'backgroundColor': 'black', 'height': '0.5rem'}}></div>
      About
    </div>
  );
}

export default About;