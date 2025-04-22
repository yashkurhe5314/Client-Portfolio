import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import onlinebook from '../assets/online book store.jpeg';
import phones from '../assets/electronic shop.webp';
import realtime from '../assets/real time2.png';
import hotel from '../assets/saavi hotel.jpg';
import aura from '../assets/aura wellness.avif';
import lotlite from '../assets/lotlite.png';

const ProjectSection = () => {
  return (
    <div id="projects" className="container-fluid bg-dark text-white py-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <h1 className="display-4">Projects</h1>
          <p className="lead">Below are the sample Developer projects on Java, Mern Stack, React Native, ReactJs, NodeJs, ExpressJs, Spring Boot, DevOps, AWS, Docker, Kubernetes, Jenkins, Git, Github, Jira, Linux, C, C++, Python, DSA, Competitive Programming, etc.</p>
        </div>
      </div>
      <div className="container my-5" id="gallery">
      <div className="row text-center">
        {/* Row 1 */}
        <div className="col-md-4 mb-4">
          <img src={onlinebook} className="img-fluid rounded" alt="Item 1" />
          <h3 className="mt-3">Online book store</h3>
          <p>This is an online bookstore from where anyone can buy books related to the Jain religion payment gateway is Integrated here once the order is confirmed a hard copy of the book will be sent to the user at the given address. To manage all these we have made a control panel.</p>
        </div>
        <div className="col-md-4 mb-4">
          <img src={phones} className="img-fluid rounded" alt="Item 2" />
          <h3 className="mt-3">Phonesvapes4all</h3>
          <p>This website is for online service booking for electronic devices repair it's based on UK for UK customer.</p>
        </div>
        <div className="col-md-4 mb-4">
          <img src={realtime} className="img-fluid rounded" alt="Item 3" />
          <h3 className="mt-3">Real-Time-License-Plate-Recognition</h3>
          <p>This web-based app detects and recognizes vehicle license plates from live video using computer vision and OCR, enabling real-time recognition, color-based categorization, tolling, law enforcement, and traffic monitoring.</p>
        </div>

        {/* Row 2 */}
        <div className="col-md-4 mb-4">
          <img src={hotel} className="img-fluid rounded" alt="Item 4" />
          <h3 className="mt-3">Saavi Hotels</h3>
          <p>Saavi Hotels A comprehensive hotel management system with booking functionality, room management, and customer service features. Built with MERN stack and integrated payment gateway.</p>
        </div>
        <div className="col-md-4 mb-4">
          <img src={aura} className="img-fluid rounded" alt="Item 5" />
          <h3 className="mt-3">Aura Wellness</h3>
          <p>A wellness and health management platform with appointment scheduling, virtual consultations, and health tracking features. Developed using React, Node.js, and MongoDB.</p>
        </div>
        <div className="col-md-4 mb-4">
          <img src={lotlite} className="img-fluid rounded" alt="Item 6" />
          <h3 className="mt-3">Lotlite Technology</h3>
          <p>An enterprise resource planning system with inventory management, order processing, and analytics dashboard. Built with Spring Boot, React, and PostgreSQL.</p>
        </div>
      </div>
    </div>
    <div className="showcase-section text-white text-center">
      {/* Stats Section */}
      <div className="container py-5 d-flex flex-wrap justify-content-center gap-4">
        <div className="stat-box">
          <h3 className="text-warning">50</h3>
          <p>Achievements</p>
        </div>
        <div className="stat-box">
          <h3 className="text-warning">50</h3>
          <p>Projects</p>
        </div>
        <div className="stat-box">
          <h3 className="text-warning">1,000</h3>
          <p>Mentored Students</p>
        </div>
        <div className="stat-box">
          <h3 className="text-warning">500</h3>
          <p>Cups of coffee</p>
        </div>
      </div>

      {/* Background Section */}
      <div className="background-overlay py-5">
        <h1 className="fw-bold">
          More projects on <span className="text-warning">Github</span>
        </h1>
        <p className="lead" id='ptag'>
          I love to solve business problems & uncover hidden data stories
        </p>
        <a
          href="https://github.com/your-profile"
          className="btn btn-warning rounded-pill px-4 fw-bold mt-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
      </div>
    </div>
    </div>
  );
};

export default ProjectSection;
