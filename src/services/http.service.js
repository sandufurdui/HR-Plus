import axios from "axios";

const axiosConfig = {
  baseURL: "http://localhost:5000/",
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-CSRFToken",
  withCredentials: true,
};

const httpService = axios.create(axiosConfig);

export { httpService };
