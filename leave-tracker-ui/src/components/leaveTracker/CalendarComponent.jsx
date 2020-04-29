import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class CalendarComponent extends Component {

    state = {
        events: [
          {
            start: moment().toDate(),
            end: moment()
              .add(1, "days")
              .toDate(),
            title: "Sick leave"
          }
        ]
      };

    render() {
        return (
            <>
                  <Calendar
                       localizer={localizer}
                       defaultDate={new Date()}
                       defaultView="month"
                       events={this.state.events}
                       style={{ height: "50vh", width: "50vw" }}
                  />
            </>
        );
    }
}

export default CalendarComponent;