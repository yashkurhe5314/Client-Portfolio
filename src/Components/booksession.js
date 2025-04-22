import React from 'react';
import '../App.css';

const BooktSection = () => {
  return (
    <div id="book" className="container-fluid bg-dark text-white py-5">
    <div className="container py-5" id="contact-form">
      <h1 className="text-center mb-4">Book a Consultation</h1>
      <p className="lead">Below are the details to reach out to me!</p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" className="form-control" id="subject" placeholder="Enter subject" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">BOOK VIA WHATSAPP</button>
      </form>
    </div>
    </div>
  );
};

export default BooktSection;
