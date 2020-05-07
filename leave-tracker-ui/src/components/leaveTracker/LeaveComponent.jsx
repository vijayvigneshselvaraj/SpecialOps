import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import LeaveService from '../../api/Leave/LeaveService.js'
import AuthenticationService from './AuthenticationService.js'
import {useState} from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';


class LeaveComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employeeId: AuthenticationService.getLoggedInUserName(),
            date: '',
            leaveType: '',
            dateRange: [
                           {
                             startDate: new Date(),
                             endDate: addDays(new Date(), 0),
                             key: 'selection'
                           }
                         ]
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleSelect(ranges){
        console.log(ranges);
        }

    componentDidMount() {
        if (this.state.id === -1) {
            return
        }
    }

    onSubmit(values) {
        let leave = {
            employeeId: values.employeeId,
            date: values.date,
            leaveType: values.leaveType,
        }
        LeaveService.addOrUpdateLeave(leave)
            .then(() => this.props.history.push('/manageYourLeave'))
    }

    render() {

        let { employeeId, date, leaveType} = this.state
        //let targetDate = this.state.targetDate

        return (
            <div>
                <div className="container" style={{'marginBottom': '40px'}}>
                    <h1>Leave</h1>
                    <br/>

                    <div className="row">
                        <div className="col-sm col-4">
                            <fieldset className="form-group">
                                <label className="form-control-sm">Date</label>
                                {/* <Field className="form-control form-control-sm" type="date" name="date" /> */}
                                 <DateRange
                                   editableDateInputs={true}
                                   onChange={item => {
                                    console.log(item)
                                    this.setState({'dateRange': [item.selection]})
                                   }}
                                   moveRangeOnFirstSelection={true}
                                   ranges={this.state.dateRange}
                                 />

                            </fieldset>
                        </div>
                        <div className="col-sm col-4">
                            <Formik
                                initialValues={{ employeeId, date, leaveType }}
                                onSubmit={this.onSubmit}
                                validateOnChange={false}
                                validateOnBlur={false}
                                validate={this.validate}
                                enableReinitialize={true}
                            >
                                {
                                    (props) => (
                                        <Form>
                                            <fieldset className="form-group">
                                                <label className="form-control-sm">Employee ID</label>
                                                <Field className="form-control form-control-sm" type="int" name="employeeId" />
                                            </fieldset>

                                            <fieldset className="form-group">
                                                <label className="form-control-sm">Leave Type</label>
                                                {/* <Field className="form-control form-control-sm" type="text" name="leaveType" /> */}
                                                <select className="form-control form-control-sm" name="leaveType">
                                                    <option>Planned Leave</option>
                                                    <option>Sick Leave</option>
                                                 </select>
                                            </fieldset>
                                            <button className="btn btn-success" type="submit">Save</button>
                                        </Form>
                                    )
                                }
                            </Formik>
                        </div>
                        <div className="col-sm col-4">
                            <label> Leave Information </label>
                            <hr/>
                            <br/>
                            <div> Applied Leave: 0 </div>
                            <div> Pending Leave: 0 </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeaveComponent