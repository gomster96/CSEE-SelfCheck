import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:3000/api/user';

class ApiService {
  fetchUsers() {
    return axios.get(USER_API_BASE_URL);
  }
  fetchUserByID(userID) {
    return axios.get(USER_API_BASE_URL + '/' + userID);
  }
  fetchUserByEmail(userEmail) {
    return axios.get(USER_API_BASE_URL + '/' + userEmail);
  }
}
export default new ApiService();
