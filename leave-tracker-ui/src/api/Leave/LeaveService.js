import axios from 'axios'
import { API_URL} from '../../Constants'

class LeaveService {

    retrieveLeave(empid) {
        //console.log('executed service')
        return axios.get(`${API_URL}/LeaveTracker/v1/getLeavesByEmployeeId/${empid}`);
    }

    getCountOfPlannedLeaves(empid, leaveType) {
        //console.log('executed service')
        return axios.get(`${API_URL}/LeaveTracker/v1/getCountOfLeaves/${empid}/Planned Leave`);
    }
    
    getCountOfSickLeaves(empid, leaveType) {
        //console.log('executed service')
        return axios.get(`${API_URL}/LeaveTracker/v1/getCountOfLeaves/${empid}/Sick Leave`);
    }

    getTotalCountOfLeavesPerMonth(month) {
        //console.log('executed service')
        return axios.get(`${API_URL}/LeaveTracker/v1/getTotalCountOfLeavesPerMonth/${month}`);
    }

    addOrUpdateLeave(leave) {
        //console.log('executed service')
        return axios.post(`${API_URL}/LeaveTracker/v1/updateLeaveDetail`, leave);
    }
   
    deleteLeaveById(leaveId) {
        //console.log('executed service')
        return axios.delete(`${API_URL}/LeaveTracker/v1/deleteLeaveById/${leaveId}`);
    }

}

export default new LeaveService()