import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import LeaveService from '../../api/Leave/LeaveService.js'


class LeaveComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employeeId: '',
            date: '',
            leaveType: '',
        
           
        }

        this.onSubmit = this.onSubmit.bind(this)
   

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
                <h1>Leave</h1>
                <div className="container">
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
                                        <label>Employee ID</label>
                                        <Field className="form-control" type="int" name="employeeId" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Date</label>
                                        <Field className="form-control" type="date" name="date" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Leave Type</label>
                                        <Field className="form-control" type="text" name="leaveType" />
                                    </fieldset>
                                 
                                   
                  
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default LeaveComponent