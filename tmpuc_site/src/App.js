import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import StudentDashboard from './Pages/Student/StudentDashboard';
// import StudentDashboard from './Pages/StudentDashboard';
import ApplicationForm from './Pages/ApplicationFormPage';
import ResourcesPage from './Pages/Student/ResourcesPage';
import AssignmentPage from './Pages/Student/AssignmentPage';
import NotificationPage from './Pages/Student/NotificationPage';
import CoursePage from './Pages/Student/CoursePage';
import Overview from './Pages/Student/OverviewPage';
import StudentProfile from './Pages/Student/StudentProfilePage';
import QuizPage from './Pages/Student/QuizzesPage';


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
          <Route path="/ApplicationFormPage" element={<ApplicationForm />} />
          <Route path="/Student/Dashboard" element={<StudentDashboard />} />
          <Route path="/Student/Resources" element={<ResourcesPage />} />
          <Route path="/Student/Assignments" element={<AssignmentPage />} />
          <Route path="/Student/Notifications" element={<NotificationPage />} />
          <Route path="/:courseId/:pageType" element={<CoursePage />} />
          <Route path="/Student/:courseId/Overview" element={<Overview/>} />
          <Route path="/Student/MyProfile" element={<StudentProfile />} />
          <Route path="/Student/Quizzes" element={<QuizPage />} />

        </Routes>
    </Router>
  </>
  );
}

export default App;
