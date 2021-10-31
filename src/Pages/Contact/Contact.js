import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF , FaTwitter, FaInstagramSquare, FaYoutube} from 'react-icons/fa';


import './Contact.css'



const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
const phone = <FontAwesomeIcon icon={faPhoneAlt} />
const message = <FontAwesomeIcon icon={faEnvelope} />

const Contact = () => {
    return (
       <div className="contact-container my-5">
            <div className="contact">
                <h2 >Contact Us</h2>
                <p>{map} 55 Banani, Nikunja, Dhaka</p>
                <p>{phone} 01837462042</p>
                <p>{message} hotel.luxury@hotmail.com</p>
          </div>
          <div className="follow">
              <h2>Follow Us</h2>
              <p>And keep up to date with Luxury Hotel</p>
              <div className="social-icons">
                <h2><FaFacebookF/></h2>
                <h2><FaTwitter/></h2>
                <h2><FaInstagramSquare/></h2>
                <h2><FaYoutube/></h2>
              </div>
          </div>
       </div>
    );
};

export default Contact;