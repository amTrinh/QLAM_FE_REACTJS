import axios from "axios";
import { API_URL } from "../app/constant";

class AuthApi {
  getUserById = (id) => {
    const url = `${API_URL}/users/${id}`;
    return axios.get(url);
  };

  login = (data) => {
    // console.log(data);
    const url = `${API_URL}/users/account/login`;
    // console.log(axios.post(url, data));
    return axios.post(url, data);
  };
  register = (newAccount) => {
    // console.log(newAccount);
    const url = `${API_URL}/users`;
    return axios.post(url, newAccount);
  };
  logout = () => {
    localStorage.removeItem("user");
  };
}

const authApi = new AuthApi();
export default authApi;
