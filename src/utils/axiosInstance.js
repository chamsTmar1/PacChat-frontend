import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BackendURL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

export default axiosInstance;
