import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WelcomeComponent from './components/leaveTracker/WelcomeComponent'
import EmployeeComponent from './components/leaveTracker/EmployeeComponent'
import LeaveComponent from './components/leaveTracker/LeaveComponent'
import HeaderComponent from './components/leaveTracker/HeaderComponent.jsx'
import FooterComponent from './components/leaveTracker/FooterComponent.jsx'
import ManageYourLeaveComponent from './components/leaveTracker/ManageYourLeaveComponent.jsx'
import './App.css';
import './bootstrap.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent/>
      <Switch>
        <Route path="/" exact component={WelcomeComponent}/>
        <Route path="/addEmployee" component={EmployeeComponent}/>
        <Route path="/addLeave" component={LeaveComponent}/>
        <Route path="/manageYourLeave" component={ManageYourLeaveComponent}/>
      </Switch>
      <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
