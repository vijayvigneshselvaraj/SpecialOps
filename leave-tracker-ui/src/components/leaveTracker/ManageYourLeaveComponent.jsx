import React, { Component } from 'react'
import LeaveService from '../../api/Leave/LeaveService.js'

class ManageYourLeaveComponent extends Component {
  constructor(props) {
    super(props)
    this.empid = React.createRef();
    this.retrieveLeave = this.retrieveLeave.bind(this)
    this.state = {
        Leave: []           
    }
    this.addOrUpdateLeave = this.addOrUpdateLeave.bind(this)
}


addOrUpdateLeave() {
    this.props.history.push(`addLeave`)
}


render() {
    return (
        <>
          
            <div className="container">
                Enter Employee ID here
                <input ref={this.empid} placeholder="Employee ID" onSubmit={this.retrieveLeave}/>     
                <button onClick={this.retrieveLeave}
                    className="btn btn-success">Get Leave detail</button>
            </div>
            <div className="container">
               
                <table className="table">
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Date</th>
                            <th>Leave Type</th>
                                    
                        </tr>
                    </thead>
                    <tbody>
                        {                           
                                    <tr>
                                        <td>{this.state.Leave.employeeId}</td>
                                        <td>{this.state.Leave.date}</td>
                                        <td>{this.state.Leave.leaveType}</td>
                                       
                                    </tr>                             
                        }
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addOrUpdateLeave}>Add</button>
                </div>
        </div>
        </>
    )
}

retrieveLeave() {     
    LeaveService.retrieveLeave(this.empid.current.value)
        .then(response => this.setState({ Leave: response.data }))          
}

}

export default ManageYourLeaveComponent
