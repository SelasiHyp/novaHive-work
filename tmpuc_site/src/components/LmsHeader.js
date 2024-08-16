import React from "react";
import NotificationDropdown from "./NotificationDropDown";
import { Link } from "react-router-dom";

const LMSHeader = ({notifications}) => {

  return (
    <div className="header">
          <div className="header-container">
            <div className='school-logo'>
              <img className='school-logo-img' src='/images/TMPUC_PR__1_-removebg-preview.png' alt="hi" />
            </div>
            <div className="header-actions">
              <Link to='/'>
                <i className="fa-solid fa-user-large"></i>
              </Link>
              <i className="fa-solid fa-gear"></i>
              <NotificationDropdown notifications={notifications} />

            </div>
          </div>
        </div>
  )}

  export default LMSHeader;