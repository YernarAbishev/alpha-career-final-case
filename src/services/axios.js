import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://alpha-career-back.onrender.com/",
});

export default axiosInstance;