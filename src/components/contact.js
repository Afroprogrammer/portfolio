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

             <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}> Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Non dolores
                voluptatibus impedit cupiditate veniam deleniti
                itaque libero, consequatur quod, possimus hic
                assumenda, necessitatibus quasi laboriosam velit
                cumque aliquid culpa amet! </p>
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
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Arvo'}}>
                                    <i className='fas fa-at' aria-hidden='true'/>
                                    forsonfranklin@gmail.com
                                </ListItemContent>
                        </ListItem>
                        <ListItem>
                             <ListItemContent style={{fontSize: '25px', fontFamily: 'Arvo'}}>
                                    <i className='fab fa-skype' aria-hidden='true'/>
                                    (MySkypeID)
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