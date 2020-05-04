import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class CalendarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: this.props.leaveData
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            events: props.leaveData
        });
    }

    render() {
        return (
            <>
                  <Calendar
                       localizer={localizer}
                       defaultDate={new Date()}
                       defaultView="month"
                       events={this.state.events}
                       style={{ height: "400px", width: "max-content" }}
                  />
            </>
        );
    }
}

export default CalendarComponent;