import React, { Component } from 'react'
import LeaveService from '../../api/Leave/LeaveService.js'
import CalendarComponent from './CalendarComponent'

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

            <div className="container" style={{'marginTop': '20px', 'marginBottom': '20px'}}>
                <label>Employee ID:</label>
                <input ref={this.empid} style={{'marginLeft':'20px'}} placeholder="Employee ID" onSubmit={this.retrieveLeave}/>
                <button onClick={this.retrieveLeave} style={{'marginLeft':'10px'}} className="btn btn-success btn-sm">Get Leave detail</button>

                <label  style={{'marginLeft':'40px'}}>New Leave:</label>
                <button className="btn btn-success btn-sm"  style={{'marginLeft':'10px'}} onClick={this.addOrUpdateLeave}>Apply</button>

            </div>

            <div className="container" style={{'marginBottom':'100px'}} >

                <div className="row">
                    <div className="leftPane" style={{float:'left'}}>
                                        <CalendarComponent leaveData={this.state.Leave.date}/>
                                    </div>

                                    <div className="rightPane" style={{float:'right', 'marginLeft': '40px'}}>
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
                                    </div>
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
