import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import posed, { PoseGroup } from 'react-pose';

const RouteContainer = posed.div({
  enter: {
    x: 0,
    opacity: 1, delay: 0,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 1500 },
      default: { duration: 300 }
    }
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: { duration: 100 }
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <>
        <Navbar/>
          <Route
            render={({ location }) => (
                <PoseGroup>
                  <RouteContainer key={location.pathname}>
                    <Switch location={location}>
                      <Route path='/' exact component={Dashboard} />
                      <Route path='/project/:id' component={ProjectDetails} />
                      <Route path='/signin' component={SignIn} />
                      <Route path='/signup' component={SignUp} />
                      <Route path='/create' component={CreateProject} />
                    </Switch>
                  </RouteContainer>
                </PoseGroup>
            )}
          />

          {/* <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="container route-wrapper"
          >
            <Route path='/' exact component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
          </AnimatedSwitch> */}
        </>
      </Router>
    );
  }
}

export default App;
