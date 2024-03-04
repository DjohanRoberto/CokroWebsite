import React from "react";
import NavBar from "../../component/navbar/navbar";

const Contact = () => {
  return (
    <div className="Contact">
      <NavBar></NavBar>
      <div className="border" style={{'backgroundColor': 'black', 'height': '0.5rem', 'width': '90%', 'margin-left': '5rem'}}></div>
      Contact
    </div>
  );
}

export default Contact;