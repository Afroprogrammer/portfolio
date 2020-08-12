import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
<div className="demo-big-content">
    <Layout>
        <Header className = "header-color" title={<Link style={{textDecoration:"none" , color:'white'}} to = '/'> The Afroprogrammer</Link>} scroll>
            <Navigation>
                <Link to="/resume"> Resume </Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact me </Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:"none" , color:'black'}} to = '/'> The Afroprogrammer</Link>}>
        <Navigation>
                <Link to="/resume"> Resume </Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact me </Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main> </Main>
             
        </Content>
    </Layout>
</div>
  );
}

export default App;
