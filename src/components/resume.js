import React, {Component} from 'react';
import { Grid, Cell } from "react-mdl";
import icon from './me.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col = {4}>
                     <div style={{textAlign: 'center'}}> 
                        <img
                        src={icon} className="avatar-img" alt="avatar"      
                        style={{height: '250px'}}
                     />
                     </div>
                     <h2 style = {{paddingTop:'2em' }}>Franklin Oduro</h2>
                     <h4 style={{color: 'grey'}}> Programmer</h4>
                     <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                     <p> Franklin Oduro is a self motivated Software engineer and Currently studying Bsc Inforamtion 
                        Technology in Koforidua Technical University.</p>
                    <p>Franklin is conversant with Python and JavaScript Language and has been able to build test and 
                           implement web applications with Django and Nodejs Frameworks.
                           </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p> 25 Mandela Street </p>
                        <h5>Phone</h5>
                        <p>(233)-554-5870-77</p>
                        <h5>Email</h5>
                        <p>forsonfranklin@gmail.com</p>
                        <h5>Web</h5>
                        <p>Mywebsite.com</p>
                     <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        

                    </Cell>
                    <Cell col = {8} className = "resume-right-col">
                    <h2> Education </h2>
                    <Education 
                    startYear= {2018}
                    startMonth = "May"
                    endMonth = "May"
                    endYear={2020}
                    schoolName="Koforidua Technical University"
                    schoolDescription="Bsc Information technology"
                    />

<Education 
                      startYear= {2018}
                      startMonth = "April"
                      endMonth = "September"
                      endYear={2018}
                    schoolName="Ghana Technology University College"
                    schoolDescription="Completed a six month course in Software development
                    the courses included; Introduction to advanced programming languages and 
                    Scripting concepts"
                    />

<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
<h2>Experience</h2>

<Experience
  startYear= {2018}
  endYear={2006}
  jobName="WordPress Developer"
  jobDescription="Developed a unique website and logo to improve writer's club brand and identity.
  Created and built mobile-friendly websites and transitioned a legacy website to a mobile-friendly
  platform.
  Worked as a freelance WordPress developer for the club whiles in school
  Designed building a blogging website for the club.
  Technologies Jsed3 HTML5, GSS/ MySQL, and WordPress its currently hosted at
  https://writershub.afroprogrammer.com"

/>
<h2>Courses</h2>


<Education 
                      startYear= {2018}
                      startMonth = "April"
                      endMonth = "September"
                      endYear={2018}
                    schoolName="Ghana Technology University College"
                    schoolDescription="Completed a six month course in Software development
                    the courses included; Introduction to advanced programming languages and 
                    Scripting concepts"
                    />

<Education 
                    startMonth= {2019}
                    schoolName="Freecodecamp"
                    schoolDescription="Full stack Web development Course by freecodecamp.org."
/>
<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>


<h2> Skills </h2>
<Skills
 skill = "NodeJs"
 progress = {40}
/>

<Skills
 skill = "javaScript "
 progress = {60}
/>
<Skills
 skill = "HTML "
 progress = {100}
/>
<Skills
 skill = "CSS3"
 progress = {80}
/>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;