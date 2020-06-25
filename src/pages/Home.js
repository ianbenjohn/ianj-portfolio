import React from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css';

const Home = () => {
    //Styles for Home Page
    const imgStyle = {
        borderRadius: "40%",
        height: "250px",
        paddingTop: "10px",
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
    const linkStyle = {
        display: "flex",
        justifyContent: "space-between",
        width: "50%",
        margin: "auto",
    }
    const homeGrid = {
        textAlign: "center",
        position: "fixed",
        width: "100%",
        height: "100%",
        background: "#659999",
        background: "linear-gradient(to bottom, #659999, #f4791f)"
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
                        <div style={linkStyle}>
                            
                            <a href="https://www.linkedin.com/in/ian-johnson-63611b133" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            <a href="https://github.com/ianbenjohn" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                            <a href="https://www.youtube.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true" />
                            </a>

                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    );
}

export default Home;

