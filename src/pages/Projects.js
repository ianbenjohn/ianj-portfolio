import React from 'react';
import{ Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import Nav from '../components/Nav';


const firstProject = {
    margin: '70px 0px 30px 0px'
}



const Projects = () => {
    return(
        <div style={{display: "flex", flexWrap: 'wrap', justifyContent: "space-evenly"}}>

        <div style={firstProject}>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Employee Manager</CardTitle>
                     <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                    </CardText>
                <CardActions border>
                     <Button colored>View Updates</Button>
                </CardActions>
            </Card>
        </div>

        <div className="secondProject">
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                     <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                    </CardText>
                <CardActions border>
                     <Button colored>View Updates</Button>
                </CardActions>
            </Card>
        </div>
        <div className="thirdProject">
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                     <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                    </CardText>
                <CardActions border>
                     <Button colored>View Updates</Button>
                </CardActions>
            </Card>
        </div>
        <div className="fourthProject">
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                     <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                    </CardText>
                <CardActions border>
                     <Button colored>View Updates</Button>
                </CardActions>
            </Card>
        </div>
        <div className="fifthProject">
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                     <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                    </CardText>
                <CardActions border>
                     <Button colored>View Updates</Button>
                </CardActions>
            </Card>
        </div>
        <div className="sixthProject">
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                     <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                    </CardText>
                <CardActions border>
                     <Button colored>View Updates</Button>
                </CardActions>
            </Card>
        </div>
        </div>

    );
}

export default Projects;