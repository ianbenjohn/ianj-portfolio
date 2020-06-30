import React from 'react';
import Nav from '../components/Nav';
import { Grid, Cell } from 'react-mdl';
import { List, ListItem, ListItemContent } from 'react-mdl';
 
const Contact = () => {
    const styleContactBody = {
        margin: 'auto',
        background: "linear-gradient(to bottom, #659999, #f4791f)",
        position: 'fixed',
        width: '100%',
        height: '100%',
        marginTop: '60px',
        justifyContent: 'center',
        paddingTop: "60px"
    }
    const styleContactGrid = {
        textAlign: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '550px',
        background: 'cornsilk',
        color: 'black',
        border: '3px solid black',
        marginBottom: '20px'

    }
    const styleP ={
        width: '75%',
        margin: 'auto',
        paddingTop: '15px',
        fontFamily: "'Inconsolata', monospace"
    }
    const styleListDiv = {

    }
    const styleListItem = {
        
        fontFamily: "'Inconsolata', monospace",
    }

    return (
        <div>
            <Nav />
        
        <div style={styleContactBody} className="contact-body">
            <Grid style={styleContactGrid} className="contact-grid">
                <Cell col={6}>
                    <h2 style={{fontFamily: "'Inconsolata', monospace"}}>Ian Johnson</h2>
                    <img
                    src="../img/Ian-Icon-Avatar.png"
                    alt="avatar"
                    style={{height: "250px"}}
                    />
                    <p style={styleP}>Please use the info on the right side if you need to contact me! 
                    If youa re a robot hacker, please leave me alone. Also, The avatar I used does not fully
                    look like myself, I have to admit. That man looks much smarter then me. I have curly hair but
                    I don't really need glasses. </p>
                </Cell>

                <Cell col={6}>
                    <h2 style={{fontFamily: "'Inconsolata', monospace"}}>Contact Me:</h2>

                    <hr style={{borderTop: "1px solid black"}}/>

                    <div style={styleListDiv}>
                    <List>
                        <ListItem>
                            <ListItemContent style={styleListItem}>
                                <i style={{color: "black", fontSize:'70px', paddingRight: '100px'}}className="fa fa-phone-square" aria-hidden="true"/>
                                (503) 960-6531
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={styleListItem}>
                            <i style={{color: "black", fontSize:'70px', paddingRight: '100px'}}className="fa fa-envelope-square" aria-hidden="true"/>
                                ian.b.johnson@gmail.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={styleListItem}>
                            <i style={{color: "black", fontSize:'70px', paddingRight: '100px'}}className="fa fa-github-square" aria-hidden="true"/>
                                github.com/ianbenjohn
                            </ListItemContent>
                        </ListItem>
                    </List>
                    </div>

                    
                </Cell>
            </Grid>
        </div>
        </div>
    );
}

export default Contact;