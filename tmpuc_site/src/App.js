import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Component/Hero/Hero';
import Programs from './Component/Programs/Programs';
import Title from './Component/Title/Title';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Courses from './Component/Courses/Courses';
import Testimonials from './Component/Testimonials/Testimonials';
import LoginPage from './Pages/LoginPage';
import ApplicationForm from './Pages/ApplicationFormPage';
import LayoutWithNavbar from './components/LayoutWithNavbar'; // Import the layout component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/ApplicationForm" element={<ApplicationForm/>} />{/* Route without Navbar */}
        <Route path="/" element={
          <LayoutWithNavbar>
            <Hero />
            <Title subTitle='OUR PROGRAM' title='What We Offer' />
            <Programs />
            <About />
            <Title subTitle='CONTACT US' title='Get In touch' />
            <Contact />
          </LayoutWithNavbar>
        } />
        <Route path="/courses" element={<LayoutWithNavbar><Courses /></LayoutWithNavbar>} />
        <Route path="/testimonials" element={<LayoutWithNavbar><Testimonials /></LayoutWithNavbar>} />
      </Routes>
    </Router>
  );
};

export default App;
