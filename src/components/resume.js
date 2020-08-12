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
                     <p>Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Non dolores
                        voluptatibus impedit cupiditate veniam deleniti
                        itaque libero, consequatur quod, possimus hic
                        assumenda, necessitatibus quasi laboriosam velit
                        cumque aliquid culpa amet! </p>
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
                    endYear={2006}
                    schoolName="Koforidua Technical University"
                    schoolDescription="Bsc Information technology"
                    />

<Education 
                    startYear= {2018}
                    endYear={2006}
                    schoolName="Koforidua Technical University"
                    schoolDescription="Bsc Information technology"
                    />



<Education 
                    startYear= {2018}
                    endYear={2006}
                    schoolName="Koforidua Technical University"
                    schoolDescription="Bsc Information technology"
                    />

<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
<h2>Experience</h2>

<Experience
  startYear= {2018}
  endYear={2006}
  jobName="Koforidua Technical University"
  jobDescription="lorem ipsum dolor sit amet
  consectetur, adipisicing elit. Non dolores
  voluptatibus impedit cupiditate veniam deleniti
  itaque libero, consequatur quod, possimus hic
  assumenda, necessitatibus quasi laboriosam velit
  cumque aliquid culpa amet!"

/>

<Experience
  startYear= {2018}
  endYear={2006}
  jobName="Koforidua Technical University"
  jobDescription="lorem ipsum dolor sit amet
  consectetur, adipisicing elit. Non dolores
  voluptatibus impedit cupiditate veniam deleniti
  itaque libero, consequatur quod, possimus hic
  assumenda, necessitatibus quasi laboriosam velit
  cumque aliquid culpa amet!"

/>

<Experience
  startYear= {2018}
  endYear={2006}
  jobName="Koforidua Technical University"
  jobDescription="lorem ipsum dolor sit amet
  consectetur, adipisicing elit. Non dolores
  voluptatibus impedit cupiditate veniam deleniti
  itaque libero, consequatur quod, possimus hic
  assumenda, necessitatibus quasi laboriosam velit
  cumque aliquid culpa amet!"

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