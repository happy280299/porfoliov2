import axios from "axios";
import { VITE_HOST_API_KEY } from "src/config-global";
import qs from "qs";

// Create axios instance
const axiosInstance = axios.create({
  baseURL: VITE_HOST_API_KEY,
  paramsSerializer: {
    serialize: (params: any) =>
      qs.stringify(params, { encode: false }).replace(/%25/gm, "%"),
  },
});

// Interceptor for response
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
