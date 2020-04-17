# SpecialOps

### MVP1

```
1. Login Screen
2. Employee Dashboard (Calendar with his current leaves)
3. Apply leave for Employee
4. Success screen for apply leave
5. Manager Dashboard (Employee name, no of leaves taken, Q1, Q2, Q3, Q4 etc.,)
6. Monthly Projection (Total number of days, Number of leaves taken, Number of billable days)
6. Quartly Projection (Total number of days, Number of leaves taken, Number of billable days)
6. Yearly Projection (Total number of days, Number of leaves taken, Number of billable days)
```

# Use Case Diagram

<img src="https://yuml.me/dj/a5042105.svg">

# Class Diagram

<img src="https://yuml.me/dj/54d1d943.svg">

# Backend API

API for Employee

LeaveTracker/Employee/v1/getByEmployeeID
LeaveTracker/Leave/v1/updateByEmployeeID
LeaveTracker/Leave/v1/getPlannedLeaveCountByEmployeeID

API for Supervisor

LeaveTracker/Emplyoyee/v1/getAll
LeaveTracker/Employee/v1/addEmplyoyee
LeaveTracker/Employee/v1/deleteEmplyoyee
LeaveTracker/Leave/v1/updateAllByDate
LeaveTracker/Leave/v1/getMonthlyCountOfPlannedLeave








