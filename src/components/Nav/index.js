import React from 'react';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import "../../App.css"



const Nav = () => {
    const headerStyle ={
        color: "cornsilk",
        backgroundColor: "black",
        opacity: ".9",
        position: "absolute"
    }
    const bigChungus = {
        color: "cornsilk",
        fontSize: "16px"
    }
    return(
        <div>
        <Layout fixedHeader>
        <Header title="IanBenJon" style={headerStyle}>
            <Navigation>
                <a style={bigChungus} href="/">Home</a>
                <a style={bigChungus} href="/projects">Projects</a>
                <a style={bigChungus} href="/contact">Contact</a>
            </Navigation>
        </Header>
        
        <Content />
        </Layout>
    </div>
    )
}

export default Nav;