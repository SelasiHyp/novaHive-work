import React, { useState } from 'react';
import './Styles/ApplicationFormPage.css';
import LabeledInput from "./components/FormInputs"; 
import FormCheckbox from './components/FormCheckbox';
import CourseSelection from './components/FormCourseSelection';
import ItemList from './components/FormItemList';

const ApplicationForm = () => {
  const [toggles, setToggles] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,

  });

  const handleCheckboxChange = (e, question) => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      [question]: e.target.value === "yes",
    }));
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return(    
    <div className="bgc">
      <div className="banner">
        <img className="banner-image" src='/Rectangle 85.png' alt="graduates" />
        <div className="image-text">
          <h2 className="page-title">Admission Form<br/></h2>
          <p className="welcome-message">Apply Now!</p>
        </div> 
      </div>

      <div className="instructions-div">
        <div>
          <p>
            Please read all the information on this form carefully before completing the form. 
            Apply as early as possible as competition is keen. 
          </p>
          <ul style={{marginLeft: '30px', marginBottom: '20px', margin: '20px'}}>
            <li>Applicant must fill this form to be admitted into TMPUC. Applicants are therefore advised to carefully read through this form and truthfully fill it with all required information.</li>
            <li>Applicants would be informed of receipt of filled application forms and after meeting the institution’s qualification requirements successful students would be notified to make all necessary payments 14 days before tuition begins.</li>
          </ul>

          <p><b className="red-text">Note:</b> Fees paid are non-refundable once a program is started. </p> <br />

          <p>
            <i> For further information, please contact TMPUC:</i> <br />
            <b>Contact Numbers:</b> 024 971 0660 / 024 580 4900 <br />
            <b>Website:</b> www.tmpreuniversitycollege.com <br />
            <b>Email:</b> admissions@tmpreuniversitycollege.com <br />
          </p>
        </div>

        <hr/>

        <div> {/*STUDENTS */}
          <p className="form-section-title">Personal Details</p>
          <LabeledInput
            label="First Name"
            id="student_firstName"
            type="text"
            placeholder="Enter your first name"
          />

          <LabeledInput
            label="Last Name/Surname"
            id="student_lastName"
            type="text"
            placeholder="Enter your last name/surname"
          />

          <LabeledInput
            label="Other Names"
            id="student_otherNames"
            type="text"
            placeholder="Enter your other names" 
          />

          <div className="dob-gender-container">
            <LabeledInput  
              label="Date of Birth"
              id="student_dateOfBirth"
              type="date"
              placeholder="" 
            /> 
            <div className="gender-selection-container">
              <p>Gender</p>
              <div className='gender-selection'>
                <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                    />
                    Male
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                    />
                    Female
                  </label>
              </div>
            </div>
          </div>

          <LabeledInput
            label="Phone Number"
            id="student_phoneNumber"
            type="text"
            placeholder="Enter your phone number" 
          />

          <LabeledInput
            label="Email"
            id="student_email"
            type="email"
            placeholder="Enter your email"
          />

          <div className='dob-gender-container'>
            <LabeledInput
              label="Nationality"
              id="student_nationality"
              type="text"
              placeholder="Your nationality"
            />
            <LabeledInput
              label="Hometown"
              id="student_hometown"
              type="text"
              placeholder="Your hometown"
            />
          </div>

          <div className='dob-gender-container'>
            <LabeledInput
              label="Resident Town"
              id="student_residentTown"
              type="text"
              placeholder="Your resident town/city"
            />
            <LabeledInput
              label="State/Province/Region"
              id="student_region"
              type="text"
              placeholder="Your state/province/region"
            />
          </div>

          <LabeledInput
              label="Country"
              id="student_country"
              type="country"
              placeholder="Enter country of residence"
            />

            <LabeledInput
              label="Digital Post Address"
              id="student_digitalPostAddress"
              type="text"
              placeholder="Enter your digital post address"
            />
          
          <div className='dob-gender-container'>
            <LabeledInput
              label="ID Type"
              id="student_residentTown"
              type="text"
              placeholder="NHIS, Driver's License, etc."
            />
            <LabeledInput
              label="ID Number"
              id="student_region"
              type="text"
              placeholder="Enter ID number of selected ID type"
            />
          </div>  
        </div>

        <hr />  

        <div> {/*PARENTS */}
          <p className="form-section-title">Parent/Guardian Details</p>
          <LabeledInput
            label="First Name"
            id="parent_firstName"
            type="text"
            placeholder="Parent/Guardian's first name"
          />

          <LabeledInput
            label="Last Name/Surname"
            id="parent_lastName"
            type="text"
            placeholder="Parent/Guardian's last name/surname"
          />

          <LabeledInput
            label="Other Names"
            id="parent_otherNames"
            type="text"
            placeholder="Parent/Guardian's other names" 
          />

          <div className='dob-gender-container'>
            <LabeledInput
              label="Phone Number"
              id="parent_phoneNumber"
              type="phone"
              placeholder="Parent/Guardian's phone number"
            />
            <LabeledInput
              label="Relationship"
              id="parent_relationship"
              type="text"
              placeholder="Relationship to student"
            />
          </div>

          <LabeledInput
            label="Email"
            id="parent_email"
            type="email"
            placeholder="Parent/Guardian's email"
          />

          <LabeledInput
            label="Address"
            id="parent_address"
            type="text"
            placeholder="Parent/Guardian's address"
          />
        </div> 

        <hr />

        <div>{/*SPONSORS */}
          <p className="form-section-title">Sponsor's Details</p>

          <LabeledInput
            label="Name"
            id="sponsor_name"
            type="text"
            placeholder="Sponsor's Name"
          />
          <div className='dob-gender-container'>
            <LabeledInput
              label="Phone Number"
              id="sponsor_phoneNumber"
              type="phone"
              placeholder="Sponsor's Phone number"
            />
            <LabeledInput
              label="Email"
              id="sponsor_email"
              type="email"
              placeholder="Sponsor's Email"
            />
          </div>

          <LabeledInput
            label="Address"
            id="sponsor_address"
            type="text"
            placeholder="Sponsor's Address"
          />
        </div>

        <hr />

        <div> {/*HOSTEL */}
          <p className="form-section-title">Hostel</p>

          <FormCheckbox
            label="Residential Student (Hostel Facilty)"
            id="resident"
            type='checkbox'

          />

          <FormCheckbox
            label="Non-Residential Student"
            id="resident"
            type='checkbox'
          />
        </div>

        <hr />

        <div> {/*ADDITIONAL INFO */}
          <p className="form-section-title">Additional Information</p>

          <div>
            <p>1. Do you have any disability or learning difficulty that may 
              affect your learning while with us?
            </p>

            <FormCheckbox
              id="hasNoDisablity"
              type='radio'
              label="No"
              name="toggle1"
              value="no"
              onChange={(e) => handleCheckboxChange(e, 'question1')}
            />

            <FormCheckbox
              id="hasDisablity"
              type='radio'
              label="Yes"
              name="toggle1"
              value="yes"
              onChange={(e) => handleCheckboxChange(e, 'question1')}
            />

            {toggles.question1 && (
              <div className='disability-description'>
                  <LabeledInput
                    label="Please provide a brief explanation of the disability/learning difficulty."
                    id="disabilityDescription"
                    type="text"
                  />
              </div>
            )} 
          </div>  
       

          <div>
            <p>2. Have you ever been dismissed or suspended from an academic institution?</p>

            <FormCheckbox
              id="hasNoDisablity"
              type='radio'
              label="No"
              name="toggle2"
              value="no"
              onChange={(e) => handleCheckboxChange(e, 'question2')}
            />

            <FormCheckbox
              id="hasDisablity"
              type='radio'
              label="Yes"
              name="toggle2"
              value="yes"
              onChange={(e) => handleCheckboxChange(e, 'question2')}
            />

            {toggles.question2 && (
              <div className='disability-description'>
                <LabeledInput
                  label="Institution Name"
                  id="suspendedInstitutionName"
                  type="text"
                />

                <LabeledInput
                  label="Country"
                  id="suspendedInstitutionCountry"
                  type="text"
                />

                <LabeledInput
                  label="Year"
                  id="suspensionYear"
                  type="number"
                />

                <LabeledInput
                  label="Please provide a brief explain the reason:"
                  id="suspensionReason"
                  type="text"
                  placeholder="Enter reason for suspension/dismissal"
                />
              </div>
            )}
          </div>

          <div>
            <FormCheckbox
              id="livesAlone"
              type='radio'
              label="I live by myself"
              name="toggle3"
              onChange={(e) => handleCheckboxChange(e, 'question3')}
            />

            <FormCheckbox
              id="livesWithParents"
              type='radio'
              label="I live with my parents/guardian"
              name="toggle3"
              onChange={(e) => handleCheckboxChange(e, 'question3')}
            />
          </div>

          <div>
            <h4>Preferred Campus</h4>
            <FormCheckbox
              id="mainCampusOption"
              type='radio'
              label="Denu(Main)"
              name="toggle"
              onChange={handleCheckboxChange}   
            />

            <FormCheckbox
              id="ketaCampusOption"
              type='radio'
              label="Keta"
              name="toggle"
              onChange={handleCheckboxChange}
            />
          </div>
        </div>

        <hr />

        <div>{/*Educational Background */}
          <p className="form-section-title">Educational Background</p>
          <p>
            Please list the qualification with which you are applying, including grades obtained in every examination you 
            took. Attach transcripts and photocopies of certificates of all examinations results you will list in this page.
          </p>

          <LabeledInput
            id="highScoolAttended"
            label="I. High School Attended/Attending"
            type="text"
            placeholder="Enter name of current/attended high school"
          />

          <div className='dob-gender-container'>
            <div className="input-container">
              <label className='option-label' htmlFor="dropdown">Program(WASSCE, HND e.t.c):</label>          
              <select id="dropdown" value={selectedOption} onChange={handleChange}>
                <option  value="" disabled>Select an option</option>
                <option value="option1">WASSCE</option>
                <option value="option2">SSCE</option>
                <option value="option3">HND</option>
                <option value="option4">B.Sc</option>
              </select>
            </div>

            <div className="input-container">
              <label className='option-label' htmlFor="dropdown">Period(eg. 2019-2022):</label>          
              <select id="dropdown" value={selectedOption} onChange={handleChange}>
                <option  value="" disabled>Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 3</option>

              </select>
            </div>

          </div>

          <LabeledInput
            id="universityAttended"
            label="II. Colleges or Universities Attended/Attending"
            type="text"
            placeholder="Enter name of current/attended universty or college"
          />
          <div className='dob-gender-container'>
            <LabeledInput
              id="degreeName"
              label="Program(BSc. , BA in...)"
              type="text"
              placeholder="Enter name of current/attended universty or college"
            />

            <div className="input-container">
              <label className='option-label' htmlFor="dropdown">Period(eg. 2019-2022):</label>          
              <select id="dropdown" value={selectedOption} onChange={handleChange}>
                <option  value="" disabled>Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 3</option>

              </select>
            </div>

          </div>

          <div>
            <FormCheckbox required
              style={{alignSelf: 'start', margin: '6px 0px'}}
              id="mainCampusOption"
              type='checkbox'
              label=" I solemnly affirm and declare that the information provided in this 
                      form is correct and the supporting documents submitted are genuine in all respect. In case any information or 
                      document is found to have been falsified, the same shall render the application form null and avoid, and shall 
                      result in automatic cancellation of my admission, and liable to disciplinary action by TM Pre-University College. 
                      I understand that my admission and continuous enrolment are governed by the statutes of TM Pre-University 
                      College. I shall abide by all rules and regulations applicable to Ghanaian/foreign nationals in Ghana."
              name="toggle"
            />
          </div>

          <div>
            <h4>Session of Choice</h4>
            <FormCheckbox
              id="regularSession"
              type='radio'
              label={<><strong>Regular:</strong> Monday — Friday (9:00am – 3:00pm)</>}              
              name="toggle4"
              onChange={(e) => handleCheckboxChange(e, 'question4')}
            />

            <FormCheckbox
              id="eveningSession"
              type='radio'
              label={<><strong>Evening:</strong> Monday – Friday (4:00pm – 8:00pm)</>}            
              name="toggle4"
              onChange={(e) => handleCheckboxChange(e, 'question4')}
            />

            <FormCheckbox
              id="weekendSession"
              type='radio'
              label={<><strong>Weekend:</strong> Saturday – Sunday (9:00am – 3:00pm)</>}              
              name="toggle4"
              onChange={(e) => handleCheckboxChange(e, 'question4')}
            />
          </div>
        </div>

        <hr />

        <div>{/* Program Selection*/}
          <p className="form-section-title">Program Selection Details</p>
          <CourseSelection/>
        </div>

        <hr />

        <div> {/*Extracurricular and Personal Activities */}
          <p className="form-section-title">Extracurricular and Personal Activities </p>
          <p>Please list your extracurricular/ community involvement. </p>
          <ItemList/>

          <LabeledInput
            id="otherAchievements"
            label="Other Achievements, Award, Honor, Special Recognition"
            type="text"
            placeholder="Enter any other extracurricular or achievement"
          />
        </div>

        <hr />

        <div>
          <p>
          <b className="red-text">Note:</b> TMPUC does not discriminate on the basis of sex, abilities, age, race, religion, 
            sexual orientation, nationality or ethnic origin, or veteran status in the selection 
            and admission of its students, nor do so in the recruitment and employment of 
            faculty and staff and the operation of any of its educational programs and activities.
          </p>
        </div>

        <div className='submit-button-div'>
          <button className='submit-button'>Submit</button> 
        </div>

      </div>
    </div>      
  )
}

export default ApplicationForm;