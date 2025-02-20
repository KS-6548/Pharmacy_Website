import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/auth";
const REGISTER_URL = "/register"
const LOGIN_URL = "/login"

export const RegisterApi = (inputs)=>{
    let data = {username:inputs.username,email:inputs.email,password:inputs.password,roles:inputs.roles};
    return axios.post(REGISTER_URL,data)
}

export const LoginApi = (inputs)=>{
    let data = {email:inputs.email,password:inputs.password};
    return axios.post(LOGIN_URL,data)
}
