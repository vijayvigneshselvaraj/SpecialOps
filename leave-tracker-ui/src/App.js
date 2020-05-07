import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WelcomeComponent from './components/leaveTracker/WelcomeComponent'
import EmployeeComponent from './components/leaveTracker/EmployeeComponent'
import LeaveComponent from './components/leaveTracker/LeaveComponent'
import HeaderComponent from './components/leaveTracker/HeaderComponent.jsx'
import FooterComponent from './components/leaveTracker/FooterComponent.jsx'
import ManageYourLeaveComponent from './components/leaveTracker/ManageYourLeaveComponent.jsx'
import ManageEmployeeLeaveComponent from './components/leaveTracker/ManageEmployeeLeaveComponent.jsx'
import LeaveReportComponent from './components/leaveTracker/LeaveReportComponent.jsx'
import LoginComponent from './components/leaveTracker/LoginComponent.jsx'
import ErrorComponent from './components/leaveTracker/ErrorComponent.jsx'
import LogoutComponent from './components/leaveTracker/LogoutComponent.jsx'
import AuthenticatedRoute from './components/leaveTracker/AuthenticatedRoute.jsx'
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
      <Route path="/" exact component={LoginComponent}/>
        <Route path="/login" component={LoginComponent}/>
        <AuthenticatedRoute path="/welcome" exact component={WelcomeComponent}/>
        <AuthenticatedRoute path="/addEmployee" component={EmployeeComponent}/>
        <AuthenticatedRoute path="/addLeave" component={LeaveComponent}/>
        <AuthenticatedRoute path="/manageYourLeave" component={ManageYourLeaveComponent}/>
        <AuthenticatedRoute path="/manageEmployeeLeave" component={ManageEmployeeLeaveComponent}/>

        <AuthenticatedRoute path="/leaveReport" component={LeaveReportComponent}/>
        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
        <Route component={ErrorComponent}/>
      </Switch>
      <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
