import React from 'react';
import './About.css'
import aboutImage from '../../images/Services/service-7.png'

const About = () => {
    return (
        
    <div className="aboutUs">
        <h1>About Us</h1>
            <div className="about m-4">
                <div>
                    <hr />
                    <img src={aboutImage} alt="" />
                </div>
            <div className="about-para mt-5">
                <p>One of the world's largest and most dynamic hotel groups. Nine distinctive brands. More than 1,500 hotels in operation and under development worldwide.
                At Luxury Hotel Group we strive to be the first choice in the mind of guests, owners and talent. In our journey to achieve this, we practice strong beliefs and actions that respect the diversity of people, the community, ethics and the planet.
                </p>
                <p>Our team is committed to extra thoughtful care and are passionate with delivering an amazing hotel experience. While each of the 100,000+ team members at Radisson Hotel Group play a unique role, they all serve as brand ambassadors working to deliver memorable moments and turn guests into passionate brand advocates. Together with our partners we continue to develop new hotels and to generate synergies to go much further.


                </p>
            </div>
            </div>
        </div>
    );
};

export default About;