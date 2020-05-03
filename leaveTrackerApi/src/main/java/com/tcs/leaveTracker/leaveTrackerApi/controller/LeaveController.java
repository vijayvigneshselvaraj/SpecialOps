package com.tcs.leaveTracker.leaveTrackerApi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tcs.leaveTracker.leaveTrackerApi.entity.Leave;
import com.tcs.leaveTracker.leaveTrackerApi.service.LeaveService;

@RestController
@CrossOrigin
public class LeaveController {
	
	@Autowired
	LeaveService leaveService;
	
	@GetMapping(path = "/v1/getLeavesByEmployeeId/{employeeId}")
	public List<Leave> getLeavesByEmployeeId(@PathVariable Long employeeId) {
		return leaveService.getLeavesByEmployeeId(employeeId);
		
	}

	
	@PostMapping(path = "/v1/updateLeaveDetail")
	public Leave updateLeaveDetail(@RequestBody Leave leave) {
		return leaveService.updateLeave(leave);
		
	}
	

	
	@DeleteMapping("/v1/deleteLeaveById//{leaveId}")
	public ResponseEntity<Void> deleteTodo(@PathVariable Long leaveId) {
		 leaveService.deleteById(leaveId);
		 return ResponseEntity.noContent().build();
	}
	
}
