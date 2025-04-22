import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import location from '../assets/location.png';
import contact from '../assets/contact.jpg';
import email from '../assets/email.jpg';
import download from '../assets/download.png';


const teamData = [
    { img: location, name: 'Address', desc: 'Pune, India' },
    { img: contact, name: 'Contact Number', desc: '+91 7439474237' },
    { img: email, name: 'Email Address', desc: 'vikashadubey@gmail.com' },
    { img: download, name: 'Download Resume', desc: 'resumelink' },
  ];

const ContactSection = () => {
    
  return (
    <div id="contact" className="container-fluid bg-dark text-white py-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <h1 className="display-4">Contact Me</h1>
          <p className="lead">Below are the details to reach out to me!</p>
        </div>
      </div>
      <div className="container py-5" id="team-section">
    <div className="row text-center">
      {teamData.map((member, index) => (
        <div key={index} className="col-md-3 mb-4">
          <img
            src={member.img}
            alt={member.name}
            className="rounded-circle mb-3 team-img"
          />
          <h5>{member.name}</h5>
          <p>{member.desc}</p>
        </div>
      ))}
    </div>
  </div>
      </div>
  );
 };
        
export default ContactSection;