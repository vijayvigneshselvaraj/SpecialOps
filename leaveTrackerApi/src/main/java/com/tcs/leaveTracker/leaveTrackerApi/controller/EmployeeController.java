package com.tcs.leaveTracker.leaveTrackerApi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tcs.leaveTracker.leaveTrackerApi.entity.Employee;
import com.tcs.leaveTracker.leaveTrackerApi.service.EmployeeService;

@RestController
@CrossOrigin
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	@GetMapping(path = "/v1/getDetailsByEmployeeId/{employeeId}")
	public Employee getDetailsByEmployeeId(@PathVariable Long employeeId) {
		return employeeService.getByEmployeeId(employeeId);
		
	}

	
	@PostMapping(path = "/v1/updateEmployeeDetail")
	public Employee updateEmployeeDetail(@RequestBody Employee employee) {
		return employeeService.updateEmployee(employee);
		
	}
}
