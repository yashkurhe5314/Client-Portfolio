import React from 'react';
import CustomNavbar from './Components/navbar';
import './App.css'; // You can put section styling here
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './Components/home';
import AboutSection from './Components/about';
import ProjectSection from './Components/project';
import ConsultingSection from './Components/consulting';
import ContactSection from './Components/contact';
import BooktSection from './Components/booksession';


function App() {
  return (
    <div>
      <CustomNavbar/>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ConsultingSection />
      <ContactSection />
      <BooktSection />
      </div>
  );
}

export default App;
