package com.tcs.leaveTracker.leaveTrackerApi.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tcs.leaveTracker.leaveTrackerApi.entity.Employee;
import com.tcs.leaveTracker.leaveTrackerApi.repository.EmployeeDao;

@Service
public class EmployeeService {

	@Autowired
	EmployeeDao employeeDao;
	
	public Employee getByEmployeeId(Long employeeId) {
		Optional<Employee> employee = employeeDao.findById(employeeId);
		Employee defaultEmployee = new Employee(0l, "", "", "");
		if (employee.isPresent())
			return employee.get();
		else
			return defaultEmployee;
	}

}
