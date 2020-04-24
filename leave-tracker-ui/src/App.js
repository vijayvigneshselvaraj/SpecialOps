import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WelcomeComponent from './components/leaveTracker/WelcomeComponent'
import EmployeeComponent from './components/leaveTracker/EmployeeComponent'
import HeaderComponent from './components/leaveTracker/HeaderComponent.jsx'
import FooterComponent from './components/leaveTracker/FooterComponent.jsx'
import './App.css';
import './bootstrap.css';

function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent/>
   
      <Switch>
                            <Route path="/" exact component={WelcomeComponent}/>
                            <Route path="/:id" component={EmployeeComponent}/>                           
    
                        </Switch>
      <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
