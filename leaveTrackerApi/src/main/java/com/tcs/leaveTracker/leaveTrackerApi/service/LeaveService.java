package com.tcs.leaveTracker.leaveTrackerApi.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tcs.leaveTracker.leaveTrackerApi.entity.Leave;
import com.tcs.leaveTracker.leaveTrackerApi.repository.LeaveDao;
@Service
public class LeaveService {
	
	@Autowired
	LeaveDao leaveDao;
	
	public Leave getLeavesByEmployeeId(Long employeeId) {
		Optional<Leave> leave = leaveDao.findById(employeeId);
		return leave.get();
	}

	public Leave updateLeave(Leave leave) {
		return leaveDao.save(leave);
	}
}
