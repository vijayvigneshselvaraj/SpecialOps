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
	
	@GetMapping(path = "/v1/getCountOfLeaves/{employeeId}/{leaveType}")
	public long getLeavesByEmployeeId(@PathVariable Long employeeId, @PathVariable String leaveType) {
		return leaveService.getCountOfLeaves(employeeId, leaveType);
		
	}
	
	@GetMapping(path = "/v1/getTotalCountOfLeavesPerMonth/{month}")
	public long getTotalCountOfLeavesPerMonth(@PathVariable int month) {
		return leaveService.getTotalCountOfLeavesPerMonth(month);
		
	}
	
	@PostMapping(path = "/v1/updateLeaveDetail")
	public String updateLeaveDetail(@RequestBody List<Leave> leaves) {
		return leaveService.updateLeave(leaves);
		
	}
	

	
	@DeleteMapping("/v1/deleteLeaveById//{leaveId}")
	public ResponseEntity<Void> deleteTodo(@PathVariable Long leaveId) {
		 leaveService.deleteById(leaveId);
		 return ResponseEntity.noContent().build();
	}
	
}
