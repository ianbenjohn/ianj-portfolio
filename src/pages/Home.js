import React from 'react';
import { Grid, Cell } from 'react-mdl';
import './Home.css';


const Home = () => {
    const imgStyle = {
        height: "250px",
        borderRadius: "20%",
        borderStyle: "solid"
    }
    
    return (
        <div style={{width: "100%", margin: "auto"}}>
            <Grid className="home-grid">
                <Cell col={12}>
                    <img
                        src= "../img/ian-image.jpg"
                        alt= "myFace"
                        style = {imgStyle}
                    />
                </Cell>
            </Grid>
        </div>
    );
}

export default Home;