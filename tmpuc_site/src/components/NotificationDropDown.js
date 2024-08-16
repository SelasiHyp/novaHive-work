import React, { useState } from 'react';
import '../Styles/NotificationDropDown.css';

const NotificationDropdown = ({ notifications }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <>
        {/* // <div className="notification-dropdown"> */}
            <i 
                className="fa-solid fa-bell" 
                onClick={toggleDropdown}
            />
            {isOpen && (
                <div className="notification-dropdown-content">
                    {notifications.map((notification, index) => (
                        <div key={index} className="notification-item">
                            <button
                                className={`notification-accordion ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                {notification.title}
                            </button>
                            <div className={`notification-panel ${activeIndex === index ? 'show' : ''}`}>
                                <ul className='notification-panel-items'>
                                    {notification.subitems.map((subitem, subIndex) => (
                                        <li key={subIndex} className="notification-subitem">
                                            <a href={subitem.link}>{subitem.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            </>
            // </div>
    );
};

export default NotificationDropdown;
