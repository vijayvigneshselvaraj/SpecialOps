package com.tcs.leaveTracker.leaveTrackerApi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tcs.leaveTracker.leaveTrackerApi.entity.Leave;
import com.tcs.leaveTracker.leaveTrackerApi.repository.LeaveDao;
@Service
public class LeaveService {
	
	@Autowired
	LeaveDao leaveDao;
	
	public List<Leave> getLeavesByEmployeeId(Long employeeId) {
		return leaveDao.findByEmployeeId(employeeId);
	
	}

	public Leave updateLeave(Leave leave) {
		return leaveDao.save(leave);
	}

	public  void deleteById(long leaveId) {
		 leaveDao.deleteById(leaveId);
	
	}
}
