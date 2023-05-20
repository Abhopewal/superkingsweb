/** @format */
import axios from 'axios'
import { PostApi } from '.';
export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

class AuthService {
 
  login(values) {
    return PostApi('admin/login',values);
  }

  getQuote(values) {
    return instance.post(`/getQuote`,values);
  }
}

const authService = new AuthService();

export default authService;
