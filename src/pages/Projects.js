import React from 'react';
import{ Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import Nav from '../components/Nav';


const firstProject = {
    margin: '70px 0px 30px 0px',
    boxShadow: '10px 10px 10px 10px black'
}
const secondProject = {
    margin: '70px 0px 30px 0px',
    boxShadow: '10px 10px 10px 10px black'
}
const thirdProject = {
    margin: '70px 0px 30px 0px',
    boxShadow: '10px 10px 10px 10px black'
}
const fourthProject = {
    margin: '70px 0px 30px 0px',
    boxShadow: '10px 10px 10px 10px black'
}
const fifthProject = {
    margin: '70px 0px 30px 0px',
    boxShadow: '10px 10px 10px 10px black'
}
const sixthProject = {
    margin: '70px 0px 30px 0px',
    boxShadow: '10px 10px 10px 10px black'
}



const Projects = () => {
    return(
        <div style={{background: "linear-gradient(to bottom, #659999, #f4791f)"}}>
            <Nav />
        <div style={{display: "flex", flexWrap: 'wrap', justifyContent: "space-evenly"}}>
        <div style={firstProject}>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Wallaby</CardTitle>
                     <CardText>
                         Project completed in Bootcamp June 2020.
                         Recipe finding app JavaScript App
                    </CardText>
                <CardActions border>
                     <Button colored><a href="https://github.com/ianbenjohn/Project-1">GitHub Repo</a></Button>
                </CardActions>
            </Card>
        </div>

        <div style={secondProject}>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Cangaroo</CardTitle>
                     <CardText>
                    Food Bank Inventory Management System
                    Node/Express, MySQL, Handlebars, JavaScript
                    </CardText>
                <CardActions border>
                     <Button colored><a href="https://github.com/cwalker226/Cangaroo">GitHub Repo</a></Button>
                </CardActions>
            </Card>
        </div>
        <div style={thirdProject}>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Quokka</CardTitle>
                     <CardText>
                    Plant Social Media App
                    React, MongoDB 
                    </CardText>
                <CardActions border>
                     <Button colored><a href="https://github.com/maxlemieux/quokka">GitHub Repo</a></Button>
                </CardActions>
            </Card>
        </div>
        <div style={fourthProject}>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Note Taker</CardTitle>
                     <CardText>
                    Note taking app
                    Javascript
                    </CardText>
                <CardActions border>
                     <Button colored><a href="https://github.com/ianbenjohn/noteTaker">GitHub Repo</a></Button>
                </CardActions>
            </Card>
        </div>
        <div style={fifthProject}>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Greased-Up-Burgers</CardTitle>
                     <CardText>
                    An App the lets you see about some Grease 
                    JavaScript, MySQL
                    </CardText>
                <CardActions border>
                     <Button colored><a href="https://github.com/ianbenjohn/greasedUpBurgers">GitHub Repo</a></Button>
                </CardActions>
            </Card>
        </div>
        <div style={sixthProject}>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Quiz Game</CardTitle>
                     <CardText>
                    A game built with html and Javascript
                    Quiz game that has some cool styling for first project
                    </CardText>
                <CardActions border>
                     <Button colored><a href="https://github.com/ianbenjohn/Homework-4">GitHub Repo</a></Button>
                </CardActions>
            </Card>
        </div>
        </div>
        </div>

    );
}

export default Projects;