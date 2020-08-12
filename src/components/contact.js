import React, {Component} from 'react';
import{ Grid, Cell, ListItem, ListItemContent, List} from 'react-mdl';
import icon from './me.jpg';

class Contact extends Component {
    render(){
        return(
            <div className = "contact-body">
                <Grid className = "contact-grid">
                    <Cell col = {6}>
            <h2> Franklin Oduro</h2>
            <img
             src={icon} className="avatar-img" alt="avatar"      
             style={{height: '250px'}}
            />

             <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}> 
             Franklin Oduro is a self motivated Software engineer and Currently studying Bsc Inforamtion 
             Technology in Koforidua Technical University.
               <p>Franklin is conversant with Python and JavaScript Language and has been able to build test and 
                implement web applications with Django and Nodejs Frameworks.
               </p> 
            </p>
                    </Cell>

                    <Cell col = {6}>
                    <h2> Contact Me </h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Arvo'}}>
                                    <i className='fa fa-phone-square' aria-hidden='true'/>
                                    (055) 458-7077
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent style={{fontSize: '20px', fontFamily: 'Arvo'}}>
                                    <i className='fa fa-envelope-square' aria-hidden='true'/>
                                    forsonfranklin@gmail.com
                                </ListItemContent>
                        </ListItem>
                    </List>
                    </div>

                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact;