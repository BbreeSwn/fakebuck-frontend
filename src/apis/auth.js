import axios from "../config/axios";

const authAPI = {};

authAPI.register = (body) => axios.post('/auth/register', body);
authAPI.login = () => {};

export default authAPI;
