package com.tcs.leaveTracker.leaveTrackerApi.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Leave {

	@Id
	private Long employeeId;

	private Date date;

	private Boolean isHoliday;

	private Boolean isLeave;

	private Boolean isPlannedLeaveApproved;

	private String leaveType;

	/*
	 * @ManyToOne
	 * 
	 * @JoinColumn(name = "employeeId", nullable = false) private Employee employee;
	 */
}
