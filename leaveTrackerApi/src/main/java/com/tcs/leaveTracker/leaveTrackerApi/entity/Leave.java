package com.tcs.leaveTracker.leaveTrackerApi.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Leave {

	@Id
	@GeneratedValue
	private Long leaveId;

	private Long employeeId;

	@Column(unique=true)
	private Date startDate;

    private Date endDate;

	private Boolean isHoliday;

	private Boolean isLeave;

	private Boolean isPlannedLeaveApproved;

	private String leaveType;

	public Long getLeaveId() {
		return leaveId;
	}

	public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Boolean getIsHoliday() {
		return isHoliday;
	}

	public void setIsHoliday(Boolean isHoliday) {
		this.isHoliday = isHoliday;
	}

	public Boolean getIsLeave() {
		return isLeave;
	}

	public void setIsLeave(Boolean isLeave) {
		this.isLeave = isLeave;
	}

	public Boolean getIsPlannedLeaveApproved() {
		return isPlannedLeaveApproved;
	}

	public void setIsPlannedLeaveApproved(Boolean isPlannedLeaveApproved) {
		this.isPlannedLeaveApproved = isPlannedLeaveApproved;
	}

	public String getLeaveType() {
		return leaveType;
	}

	public void setLeaveType(String leaveType) {
		this.leaveType = leaveType;
	}

	/*
	 * @ManyToOne
	 * 
	 * @JoinColumn(name = "employeeId", nullable = false) private Employee employee;
	 */
}
