import React from 'react';
import{ Tabs, Tab } from 'react-mdl';



class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

    render() {
        const categoryTabs = {
            color: "pink",
            paddingTop: "100px",
            border: "10px solid black"
        
        }
        return (
            <div style={categoryTabs}>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Node</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                <section>
                    <div className="content">Content for the tab: {this.state.activeTab}</div>
                </section>
            </div>    
        );
    }
}

export default Projects;