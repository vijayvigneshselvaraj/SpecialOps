package com.tcs.leaveTracker.leaveTrackerApi.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tcs.leaveTracker.leaveTrackerApi.entity.Leave;
/**
 * <p>Action Dao - this method helps to commit/fetch data </p>
 * 
 * @author i50258
 *
 */
@Repository
public interface LeaveDao extends CrudRepository<Leave, Long> {

	List<Leave> findByEmployeeId(Long employeeID);
	List<Leave> findByEmployeeIdAndLeaveType(Long employeeId,String leaveType);
}