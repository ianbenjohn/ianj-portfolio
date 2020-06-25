import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';


const Nav = () => {
    return(
        <div style={{height: '250px', position: 'relative'}}>
        <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="IanBenJon" style={{color: 'white'}}>
            <Navigation>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="IanBenJon">
            <Navigation>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </Navigation>
        </Drawer>
        <Content />
        </Layout>
    </div>
    )
}




export default Nav;