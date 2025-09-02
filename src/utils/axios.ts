import axios from "axios";
// config
import { VITE_HOST_API_KEY } from "../config-global";
import { getQueryStringFromObj } from "./query-string";

// ----------------------------------------------------------------------

// const axiosInstance = axios.create({ baseURL: VITE_HOST_API_KEY });

const axiosInstance = axios.create({
  baseURL: VITE_HOST_API_KEY,
  paramsSerializer: {
    serialize: (params: any) => getQueryStringFromObj(params),
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return {
      response: error.response.data,
      status: error.response.status,
      statusText:
        error.response.status === 500
          ? "Something went wrong"
          : `${error.response.status}-${
              error.response.data.error.message ||
              error.response.data.error.details ||
              error.response.data.error.code ||
              ""
            }`,
    };
  }
);

export default axiosInstance;
