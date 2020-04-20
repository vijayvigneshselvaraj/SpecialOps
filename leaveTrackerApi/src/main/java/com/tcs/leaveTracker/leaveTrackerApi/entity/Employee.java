package com.tcs.leaveTracker.leaveTrackerApi.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Employee {

	@Id
	private Long employeeId;

	private String employeeName;

	private String squad;

	private String billingType;

	/*
	 * @OneToMany(fetch = FetchType.LAZY, mappedBy = "leave", cascade = {
	 * CascadeType.REMOVE }) private List<Leave> leaves;
	 */

	protected Employee() {
		
	}
	public Employee(Long employeeId, String employeeName, String squad, String billingType) {
		super();
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.squad = squad;
		this.billingType = billingType;
	}

	public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	public String getSquad() {
		return squad;
	}

	public void setSquad(String squad) {
		this.squad = squad;
	}

	public String getBillingType() {
		return billingType;
	}

	public void setBillingType(String billingType) {
		this.billingType = billingType;
	}

	/*
	 * public List<Leave> getLeaves() { return leaves; }
	 */
	/*
	 * public void setLeaves(List<Leave> leaves) { this.leaves = leaves; }
	 */
	
	

}
