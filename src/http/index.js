import axios from "axios";


const instance = axios.create({
  baseURL: "http://localhost:3001/api/v1/"
});


instance.interceptors.request.use(function (config) {
 
  if (localStorage.getItem("token") !== null) {
    const token = `Bearer ${JSON.parse(localStorage.getItem("token")).token}`;
    config.headers.authorization = token;
  }
  return config;

}, function (error) {

  return Promise.reject(error);
  
});


let Logout = ()=>{
    localStorage.removeItem("token")
}

instance.interceptors.response.use(function (response) {
  if(response.data.status===400){
    Logout()
  }
  return response;

}, function (error) {
  return Promise.reject(error);
});


export default instance;