import React, { Component } from 'react'




class HeaderComponent extends Component {
    render() {
        //console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.tcs.com" className="navbar-brand">TCS</a></div>
                    <ul className="navbar-nav">
                       
                    <li className="nav-link">Manage Your Leave</li>
                    <li className="nav-link">Manage Employee Leave</li>
                    <li className="nav-link">Leave Reports</li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li className="nav-link">Login</li>
                    <li className="nav-link">Logout</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent