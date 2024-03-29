import React from 'react'
import './contactSection.css'

export default function ContactSection() {
    return (
        <div>
            <div className="contact">
                <h1>Contact Us</h1>
                <form action="" className='form_container'>
                    <div className="field_comp">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" className="first_name field short" id='first_name' />
                    </div>
                    <div className="field_comp">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" className="last_name field short" id='last_name' />
                    </div>
                    <div className="field_comp">
                        <label htmlFor="email_name">Email</label>
                        <input type="text" className="enail field short" id='email' />
                    </div>
                    <div className="field_comp">
                        <label htmlFor="first_name">Mobile Number</label>
                        <input type="text" className="mobile_number field short" id='mobile_number' />
                    </div>
                    <div className="field_comp">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="address field short" id='address' />
                    </div>
                    <div className="field_comp">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className='message field' cols="5" rows="50"></textarea>
                    </div>
                </form>
                {/* form */}
            </div>
        </div>
    )
}