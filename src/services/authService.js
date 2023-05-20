/** @format */
import axios from 'axios'
import { PostApi } from '.';


class AuthService {
 
  login(values) {
    return PostApi('admin/login',values);
  }  
}

const authService = new AuthService();

export default authService;
