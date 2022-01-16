import axios from "axios";

const axiosConfig = {
  baseURL: "https://hrplus.herokuapp.com/",
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-CSRFToken",
  withCredentials: true,
};

const httpService = axios.create(axiosConfig);

export { httpService };
