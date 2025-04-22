import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import card1 from '../assets/card1.jpeg';
import card2 from '../assets/card2.jpeg';
import card3 from '../assets/card3.jpeg';
import card4 from '../assets/card4.webp';
import card5 from '../assets/card5.jpeg'; 
import card6 from '../assets/card6.jpeg';
const ConsultingSection = () => {

  const cardsData = [
    {
      img: card1,
      title: 'One-to-One Career Counselling',
      desc: 'Personalized career guidance to help you navigate your professional journey, identify opportunities, and achieve your career goals.',
    },
    {
      img: card2,
      title: 'One-to-One Tutoring',
      desc: 'Customized learning sessions tailored to your pace and needs, focusing on specific technical skills and concepts you want to master.',
    },
    {
      img: card3,
      title: 'Kids/College Students',
      desc: 'Specialized programs designed for young learners and college students to build foundational skills and prepare for future tech careers.',
    },
    {
      img: card4,
      title: 'Group Lectures',
      desc: 'Interactive group sessions covering various technical topics, perfect for teams, educational institutions, or organizations seeking collective learning.',
    },
    {
      img: card5,
      title: 'Live Projects Experience',
      desc: 'Hands-on experience working on real-world projects, gaining practical skills and building a portfolio that stands out to employers.',
    },
    {
      img: card6,
      title: 'Doubt Solving',
      desc: 'Get your technical questions answered with detailed explanations and practical examples to enhance your understanding.',
    },
  ];

  return (
    <div id="consulting" className="container-fluid bg-dark text-white py-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <h1 className="display-4">Consulting Services</h1>
          <p className="lead">Expert guidance and solutions for your technical needs</p>
        </div>
      </div>
      <div className="container py-5" id="cards-section">
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-4 mb-4 d-flex align-items-stretch">
            <div className="card text-center w-100 shadow">
              <div className="card-body d-flex flex-column justify-content-between">
                <img
                  src={card.img}
                  alt={card.title}
                  className="rounded-circle mb-3 mx-auto"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.desc}</p>
                <button className="btn btn-primary mt-auto">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
 </div>
        );
    };
    
    export default ConsultingSection;
      