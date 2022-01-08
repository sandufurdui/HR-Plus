import axios from "axios";

const testToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const axiosConfig = {
  baseURL: "https://hrplus.herokuapp.com/",
  headers: {
    Authorization: "Bearer " + testToken,
  },
};

const httpService = axios.create(axiosConfig);

export { httpService };
