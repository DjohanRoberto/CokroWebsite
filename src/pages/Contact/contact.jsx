import React from "react";
import NavBar from "../../component/navbar/navbar";
import ContactSection from "../../component/contact/contactSection";

const Contact = () => {
  return (
    <div className="Contact">
      <NavBar></NavBar>
      <ContactSection bottom_part={true}/>
    </div>
  );
}

export default Contact;