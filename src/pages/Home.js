import React from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css'




const Home = () => {
    //Styles for Home Page
    const imgStyle = {
        borderRadius: "40%",
        height: "250px",
        paddingTop: "10px",
    }
    const homeGrid = {
        
    }
    const bannerStyle = {
        backgroundColor: "black",
        opacity: ".8",
        width: "75%",
        margin: "auto",
        borderRadius: "10px",
    }
    const h1Style = {
        fontSize: "60px",
        fontWeight: "bold",
        color: "cornsilk",
    }
    const hrStyle = {
        borderTop: "5px dotted white",
        width: "50%",
        margin: "auto"
    }
    const pStyle = {
        color: "cornsilk",
        fontSize: "20px",
        padding: "1em"
    }

    return (
        <div style={{width: "100%", margin: "auto"}}>
            <Grid style={homeGrid}>
                <Cell col={12}>
                    <img
                        src= "../img/ian-image.jpg"
                        alt= "myFace"
                        style = {imgStyle}
                    />

                    <div style = {bannerStyle}>
                        <h1 style={h1Style}>Legendary Full-Stack Developer</h1>
                        
                    <hr style={hrStyle}/>
                        <p style={pStyle}>HTML/CSS | JavaScript | ReactJS | NodeJS | Express | MongoDB | MySQL</p>

                    </div>
                </Cell>
            </Grid>
        </div>
    );
}

export default Home;

