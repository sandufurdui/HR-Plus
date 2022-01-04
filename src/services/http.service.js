import axios from "axios";

const axiosConfig = {
  baseURL: "http://localhost:5000/",
};

const httpService = axios.create(axiosConfig);

export { httpService };
