import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://65e80ab053d564627a8fb3d7.mockapi.io",
});

export default axiosInstance;