import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import icon from './me.jpg';


class Landing extends Component {
    render(){
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                <Cell col = {12}> 
                <img
                    src={icon} className="avatar-img" alt="avatar"               
                />
                <div className= "banner-text">
                    <h1> full stack web developer</h1>

                    <hr/>

                    <p> HTML/CSS|Bootstrap|JavaScript|React|Angular|Python Django|NodeJs</p>
                    <div className = "social-links">
                        <a href="/" target="blank" rel = "noopener no referrer"> <i className="fab fa-linkedin"  aria-hidden="true"/>  </a>
                        <a href="/" target="blank" rel = "noopener no referrer"> <i className="fab fa-github-square"  aria-hidden="true"/>  </a>
                        <a href="/" target="blank" rel = "noopener no referrer"> <i className="fab fa-free-code-camp"  aria-hidden="true"/>  </a>
                        <a href="/" target="blank" rel = "noopener no referrer"> <i className="fab fa-stack-overflow"  aria-hidden="true"/>  </a>

                    </div>
                </div>

                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;