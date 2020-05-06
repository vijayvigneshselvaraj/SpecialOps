import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import LeaveService from '../../api/Leave/LeaveService.js'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
 
class LeaveReportComponent extends Component {

    constructor(props) {
        super(props)
        

        this.state = {
          
            LeaveCountMay: ''
            
        }

        this.getMonthlyLeaveCount = this.getMonthlyLeaveCount.bind(this)

    }
   
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
    
    getMonthlyLeaveCount(month) {
        //let username = AuthenticationService.getLoggedInUserName()
        console.log(month + " ");
        LeaveService.getTotalCountOfLeavesPerMonth(month)
            .then(
                response => {
                    console.log(response.data)
                    this.setState({
                        LeaveCountMay: response.data
                    })
                   
                }
            )

    }
    componentDidMount() {
        console.log('componentDidMount')
        this.getMonthlyLeaveCount(5);
        console.log(this.state)
    }

	render() {
      
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Leave Count Monthly Report"
			},
			axisX: {
				title: "Month",
				reversed: true,
			},
			axisY: {
				title: "No Of Leaves",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  5, label: "January" },
                    { y:  4, label: "February" },
                    { y:  6, label: "March" },
                    { y:  3, label: "April" },
					{ y:  this.state.LeaveCountMay, label: "May" }
				]
            }]
            
		}
		
		return (
		<div>
		
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default LeaveReportComponent;