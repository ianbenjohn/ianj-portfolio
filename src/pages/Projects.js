import React from 'react';
import{ Tabs, Tab } from 'react-mdl';
import Nav from '../components/Nav';



class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

    render() {
        const categoryTabs = {
            color: "pink",
            paddingTop: "66px",
            border: "5px solid black",
            height: "100vh"
        
        }
        return (
        <div>
            <Nav />
            <div style={categoryTabs}>
                
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>School Projects</Tab>
                    <Tab>Individual Projects</Tab>
                </Tabs>
                <section>
                    <div className="content">Content for the tab: {this.state.activeTab}</div>
                </section>
            </div>   
        </div> 
        );
    }
}

export default Projects;