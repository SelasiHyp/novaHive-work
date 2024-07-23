import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
// import Dashboard from './dashboard';
import ApplicationForm from './ApplicationFormPage';

function App() {
  return (
    <>
    <Router>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">About</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/ApplicationFormPage" element={<ApplicationForm />} />

        </Routes>
    </Router>
  </>
  );
}

export default App;
