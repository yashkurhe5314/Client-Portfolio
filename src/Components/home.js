import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from '../assets/vikash.png'; // Replace with your image path   
import '../App.css'; // You can put section styling here

const roles = ['Developer', 'Engineer', 'Teacher'];

const HeroSection = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
  
    useEffect(() => {
      const currentWord = roles[wordIndex];
  
      if (letterIndex < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + currentWord[letterIndex]);
          setLetterIndex((prev) => prev + 1);
        }, 100); // typing speed
  
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          // wait, then go to next word
          setWordIndex((prev) => (prev + 1) % roles.length);
          setLetterIndex(0);
          setCurrentText('');
        }, 1500); // pause between words
  
        return () => clearTimeout(timeout);
      }
    }, [letterIndex, wordIndex]);
  return (
    <div className="section" id="home">
    <div className="container mt-5" >
      <div className="row align-items-center">
        {/* Left Side - Text */}
        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h1>I'm <span className='yello'> Vikash </span>  <br /> <span className='yello'> Dubey </span></h1>
          {/* <h3>Your Subtitle Goes Here</h3> */}
          <h3>
       <span className="typing">{currentText}</span>
      <span className="blinking-cursor">|</span>
    </h3>
          <p>
            SR.SOFTWARE DEVELOPER <br /> 
            SR.TECHNICAL TRAINER <br />
            TECH INFLUENCER <br />
            STUDENT MENTOR <br />
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="col-md-6 text-center">
          <img 
            src={myImage} 
            alt="Hero" 
            className="img-fluid rounded" 
            // style={{ maxHeight: '400px' }}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
