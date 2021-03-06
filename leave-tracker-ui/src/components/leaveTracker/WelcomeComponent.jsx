import React, { Component } from 'react'
import EmployeeService from '../../api/Employee/EmployeeService.js'
import AuthenticationService from './AuthenticationService.js'

class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.empid = React.createRef();
        this.retrieveEmployeeDetail = this.retrieveEmployeeDetail.bind(this)
        this.state = {
            employeeDetails: []           
        }
        this.addOrUpdateEmployee = this.addOrUpdateEmployee.bind(this)
    }


    addOrUpdateEmployee() {
        this.props.history.push(`addEmployee`)
    }

    retrieveEmployeeDetail() {     
        EmployeeService.retrieveEmployee(this.empid.current.value)
            .then(response => this.setState({ employeeDetails: response.data }))          
    }

    componentDidMount() {
       
        let empid = AuthenticationService.getLoggedInUserName()

        EmployeeService.retrieveEmployee(empid)
        .then(response => this.setState({ employeeDetails: response.data }))  

}

    

    render() {
        return (
            <div>
                <h1>Welcome to Leave Tracker User Interface!</h1>
                <div className="container">
                    Enter Employee ID here
                    <input ref={this.empid} placeholder="Employee ID" onSubmit={this.retrieveEmployeeDetail}/>     
                    <button onClick={this.retrieveEmployeeDetail}
                        className="btn btn-success">Get Employee detail</button>
                </div>
                <div className="container">
                   
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                                <th>Squad</th>
                                <th>Billing Type</th>             
                            </tr>
                        </thead>
                        <tbody>
                            {                           
                                        <tr>
                                            <td>{this.state.employeeDetails.employeeId}</td>
                                            <td>{this.state.employeeDetails.employeeName}</td>
                                            <td>{this.state.employeeDetails.squad}</td>
                                            <td>{this.state.employeeDetails.billingType}</td>
                                        </tr>                             
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addOrUpdateEmployee}>Add</button>
                    </div>
            </div>
            </div>
        )
    }


}

export default WelcomeComponent