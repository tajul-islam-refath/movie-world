import axios from "axios";

const baseURL = "http://localhost:5000/api/v1";

const axiosClient = axios.create({ baseURL });

axiosClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      token: `${localStorage.getItem("mw_token")}`,
    },
  };
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    throw err.response.data;
  }
);

export default axiosClient;
