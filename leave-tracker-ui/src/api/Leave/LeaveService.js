import axios from 'axios'
import { API_URL} from '../../Constants'

class LeaveService {

    retrieveLeave(empid) {
        //console.log('executed service')
        return axios.get(`${API_URL}/LeaveTracker/v1/getLeavesByEmployeeId/${empid}`);
    }

    addOrUpdateLeave(leave) {
        //console.log('executed service')
        return axios.post(`${API_URL}/LeaveTracker/v1/updateLeaveDetail`, leave);
    }
   

}

export default new LeaveService()