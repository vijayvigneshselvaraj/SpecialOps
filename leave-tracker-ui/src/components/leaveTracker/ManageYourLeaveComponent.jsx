import React, { Component } from 'react'
import LeaveService from '../../api/Leave/LeaveService.js'
import CalendarComponent from './CalendarComponent'
import moment from "moment";

class ManageYourLeaveComponent extends Component {
  constructor(props) {
    super(props)
    this.empid = React.createRef();
    
    this.state = {
        leaves: [],
        leaveData: [
                     /* {
                       start: moment().toDate(),
                       end: moment()
                         .add(0, "days")
                         .toDate(),
                       title: "Sick leave"
                     } */
                   ]
    }
    this.addOrUpdateLeave = this.addOrUpdateLeave.bind(this)
    this.deleteLeaveClicked = this.deleteLeaveClicked.bind(this)
    this.retrieveLeave = this.retrieveLeave.bind(this)
}

addOrUpdateLeave() {
    this.props.history.push(`addLeave`)
}

deleteLeaveClicked(leaveId) {
    //let username = AuthenticationService.getLoggedInUserName()
    console.log(leaveId + " " );
    LeaveService.deleteLeaveById(leaveId)
        .then(
            response => {
               // this.setState({ message: `Delete of Leave  Successful` })
               this.retrieveLeave()
            }
        )

}

retrieveLeave() {
    LeaveService.retrieveLeave(this.empid.current.value)
        .then(response => {
            console.log(response.data)
            let leaveStartDate = moment(response.data.date, 'YYYY-MM-DD')
            this.setState({ leaves: response.data,
                leaveData:[
                     {
                       start: leaveStartDate.toDate(),
                       end: leaveStartDate
                         .add(0, "days")
                         .toDate(),
                       title: response.data.leaveType
                     }
                   ]
             })
        })
}



render() {
    return (
        <div>

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
                                        <CalendarComponent leaveData={this.state.leaveData}/>
                                    </div>

                                    <div className="rightPane" style={{float:'right', 'marginLeft': '40px'}}>
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Employee Id</th>
                                                                    <th>Date</th>
                                                                    <th>Leave Type</th>
                                                                   
                                                                    <th>Delete</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    this.state.leaves.map(
                                                                        leave =>
                                                                            <tr key={leave.leaveId}>
                                                                                <td>{leave.employeeId}</td>
                                                                                <td>{leave.date}</td>
                                                                                <td>{leave.leaveType}</td>
                                                                                
                                                                                <td><button className="btn btn-warning" onClick={() => this.deleteLeaveClicked(leave.leaveId)}>Delete</button></td>
                                                                            </tr>
                                                                            )
                                                                }
                                                            </tbody>
                                                        </table>
                                    </div>
                </div>
        </div>
      </div>
    )
}

}

export default ManageYourLeaveComponent
