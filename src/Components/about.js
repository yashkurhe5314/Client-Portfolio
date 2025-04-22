import React from 'react';
import '../App.test'; // Your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap

const AboutSection = () => {
  return (
    <div className=" bg-black text-white position-relative py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h2 className="text-uppercase">About Us</h2>
            <p className="lead">
            5+ Years of Experience in developing cross-platform applications using ReactJS, Node.js, and React Native. Proficient in HTML, CSS, ExpressJS, MongoDB, JavaScript, PostgreSQL, and AWS cloud services, with expertise in data structures and algorithms (DSA), project management, and competitive programming. Skilled in building scalable solutions and leading projects from inception to completion.
            </p>

      <div className="profile-wrapper">
      <div className="profile-row">
        <span className="label">Profile:</span>
        <span className="value">SOFTWARE DEVELOPER</span>
      </div>

      <div className="profile-row">
        <span className="label">Domain:</span>
        <span className="value">
          ReactJs, React-Redux, Hooks, Angular 18, Nodejs, Expressjs, Spring, Spring Boot,<br />
          MongoDb, DynamoDb, MySQL, PostgreSQL, AWS, DevOps, Git, GitHub, Jira, Linux,<br />
          C, C++, Java, Python & Data Structures and Algorithms
        </span>
      </div>

      <div className="profile-row">
        <span className="label">Education:</span>
        <span className="value">Bachelor of Engineering</span>
      </div>

      <div className="profile-row">
        <span className="label">Language:</span>
        <span className="value">English, Hindi</span>
      </div>

      <div className="profile-row">
        <span className="label">Other Skills:</span>
        <span className="value">
          Leadership, Project Management, Communication Skills, Team Management, & Critical Thinking
        </span>
      </div>

      <div className="profile-row">
        <span className="label">Interest:</span>
        <span className="value">Traveling, Travel Photography, Teaching</span>
      </div>
    </div>
    <div className='buttons'>
      <p><span className='number'>30 </span> + Projects completed  </p>
      <div className="text-center mt-4">
      <a
              id="linkedin-button"
              href="https://www.linkedin.com/in/vikash-dubey-517461262/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
        >
             LinkedIn
    </a>
           </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
