import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'



class HeaderComponent extends Component {
    render() {
        //console.log(isUserLoggedIn);
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.tcs.com" className="navbar-brand">TCS</a></div>
                    <ul className="navbar-nav">
                    <li><Link  className="nav-link" to="/welcome">Home</Link></li>  
                    <li><Link  className="nav-link" to="/manageYourLeave">Manage Your Leave</Link></li>
                    <li><Link  className="nav-link" to="/manageEmployeeLeave">Manage Employee Leave</Link></li>
                    
                    <li><Link  className="nav-link" to="/leaveReport">Leave Reports</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent