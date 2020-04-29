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

            <div className="container" style={{'margin-top': '20px', 'margin-bottom': '20px'}}>
                <label>Employee ID:</label>
                <input ref={this.empid} style={{'margin-left':'20px'}} placeholder="Employee ID" onSubmit={this.retrieveLeave}/>
                <button onClick={this.retrieveLeave} style={{'margin-left':'10px'}} className="btn btn-success btn-sm">Get Leave detail</button>

                <label  style={{'margin-left':'40px'}}>New Leave:</label>
                <button className="btn btn-success btn-sm"  style={{'margin-left':'10px'}} onClick={this.addOrUpdateLeave}>Apply</button>

            </div>

            <div className="container" style={{'margin-bottom':'100px'}} >

                <div className="row">
                    <div class="leftPane" style={{float:'left'}}>
                                        <CalendarComponent/>
                                    </div>

                                    <div class="rightPane" style={{float:'right', 'margin-left': '20px'}}>
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
