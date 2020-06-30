import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';



const App = () => {
  return (
    <Router>
    <div>
        <Switch>
          
          <Route exact path={'/projects'}>
            <Projects />
          </Route>
          <Route exact path={'/contact'}>
            <Contact />
          </Route>
          <Route exact path={'/'}>
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
