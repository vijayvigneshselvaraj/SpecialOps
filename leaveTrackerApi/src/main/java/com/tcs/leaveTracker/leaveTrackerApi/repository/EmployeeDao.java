package com.tcs.leaveTracker.leaveTrackerApi.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tcs.leaveTracker.leaveTrackerApi.entity.Employee;
/**
 * <p>Action Dao - this method helps to commit/fetch data </p>
 * 
 * @author i50258
 *
 */
@Repository
public interface EmployeeDao extends CrudRepository<Employee, Long> {


}