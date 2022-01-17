import axios from "axios";

const axiosConfig = {
  baseURL: "https://hrplus.herokuapp.com/",
};

const httpService = axios.create(axiosConfig);

export { httpService };
