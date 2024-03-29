import React from "react";
import NavBar from "../../component/navbar/navbar";
import ContactSection from "../../component/contact/contactSection";

const Contact = () => {
  return (
    <div className="Contact">
      <NavBar></NavBar>
			<div className="border" style={{'backgroundColor': 'black', 'height': '0.5rem'}}></div>
      <ContactSection/>
    </div>
  );
}

export default Contact;