import React from 'react';
import { Grid, Cell } from 'react-mdl';
import './Home.css';

const Home = () => {
    return (
        <div style={{width: "100%", margin: "auto"}}>
            <Grid className="home-grid">
                <Cell col={12}></Cell>
            </Grid>
        </div>
    );
}

export default Home;