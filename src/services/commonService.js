/** @format */
import axios from 'axios'
export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

class CommonService {
 
  contactUs(values) {
    return instance.post(`/contactUs`,values);
  }

  getQuote(values) {
    return instance.post(`/getQuote`,values);
  }
}

const commonService = new CommonService();

export default commonService;
