import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import EmployeeService from '../../api/Employee/EmployeeService.js'


class EmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employeeId: '',
            employeeName: '',
            squad: '',
            billingType: ''
           
        }

        this.onSubmit = this.onSubmit.bind(this)
   

    }

    componentDidMount() {

        if (this.state.id === -1) {
            return
        }

      

       
    }

    

    onSubmit(values) {
        

        let employee = {
            employeeId: values.employeeId,
            employeeName: values.employeeName,
            squad: values.squad,
            billingType: values.billingType

        }

      
            EmployeeService.addOrUpdateEmployee(employee)
                .then(() => this.props.history.push('/'))
        

    }

    render() {

        let { employeeId, employeeName, billingType, squad } = this.state
        //let targetDate = this.state.targetDate

        return (
            <div>
                <h1>Employee</h1>
                <div className="container">
                    <Formik
                        initialValues={{ employeeId, employeeName, billingType, squad }}
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
                                        <label>Employee Name</label>
                                        <Field className="form-control" type="text" name="employeeName" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Squad</label>
                                        <Field className="form-control" type="text" name="squad" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Billing Type</label>
                                        <Field className="form-control" type="text" name="billingType" />
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

export default EmployeeComponent