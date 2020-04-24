import axios from 'axios'
import { API_URL} from '../../Constants'

class EmployeeService {

    retrieveEmployee(empid) {
        //console.log('executed service')
        return axios.get(`${API_URL}/LeaveTracker/v1/getDetailsByEmployeeId/${empid}`);
    }

    addOrUpdateEmployee(employee) {
        //console.log('executed service')
        return axios.post(`${API_URL}/LeaveTracker/v1/updateEmployeeDetail`, employee);
    }

}

export default new EmployeeService()