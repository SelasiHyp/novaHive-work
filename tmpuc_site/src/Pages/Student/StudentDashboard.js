import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../../Styles/styles.css'
import Card from '../../components/Card';
import Sidebar from '../../components/Sidebar'; // Import the Sidebar component
import LMSHeader from '../../components/LmsHeader';
import { fetchData } from '../../TestRunData.js/data';


function StudentDashboard() {
  const courseData = fetchData('courses'); // Fetch course data
  const notificationData = fetchData('notificationsPageList'); // Fetch notification data

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  return (
    <div className="app">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={isSidebarOpen ? 'main-content' : 'main-content-closed'}>
        <LMSHeader notifications={notificationData}/>

        <div className="content">
          <div className='page-title'>
            <p>Dashboard</p>
          </div>

          <div className="grid">

            <Card
              title="Courses"
              data={courseData}
              pageType='Overview'
              // pageLink={`/course/${index + 1}/overview`} // Dynamic link for each course
              />

            <Card
              title='Notifications'
              data={notificationData}
              count={notificationData.length}
              showCount={true}
              seeMore='/NotificationPage'
              pageLink='/NotificationPage'
            />

            <Card
              title='Upcoming Quizzes'
              data = {courseData}
              pageLink='/QuizzesPage'
            />

            <Card
              title='Assignments'
              data = {courseData}
              count={courseData.length}
              showCount={true}
              pageLink='/AssignmentPage'
            />

            </div>
          
          {/* <div className="grid">
            <div className="card">
              <div className="card-body">
              <img className='image' src="/simple-flat-calendar-page-icon-black-and-white-vector-22987510.jpg" alt="im" />
                <canvas id="chart-1"></canvas>
              </div>
              <div className="card-footer">
                <div className="card-footer-title">Calendar</div>
                <div className="card-footer-info">
                  Upcomng Events
                </div>
                <div className="card-footer-actions">
                  <span className="material-icons"></span>
                </div>
              </div>
            </div> */}
            {/* <div className="card">
              <div className="card-body">
              <img className='image' src="/OIP.jpeg" alt="im" />

                <canvas id="chart-2">
                </canvas>
              </div>
              <div className="card-footer">
                <div className="card-footer-title">Resouces</div>
                <div className="card-footer-info">
                </div>
                <div className="card-footer-actions">
                  <span className="material-icons">View All Course Material</span>
                </div>
              </div>
            </div> */}
            {/* <div className="card">

              <div className="card-body">
              <img className='image' src="/11_-_Exam_Results-512.webp" alt="im" />

                <canvas id="chart-3"></canvas>
              </div>
              <div className="card-footer">
                <div className="card-footer-title">Gradebook</div>
                <div className="card-footer-info">
                </div>
                <div className="card-footer-actions">
                  <span className="material-icons"></span>
                  Just updated
                </div>
              </div>
            </div> */}
          {/* </div> */}
          
        </div>
      </div>
      
    </div>
        
  );
}

export default StudentDashboard;
