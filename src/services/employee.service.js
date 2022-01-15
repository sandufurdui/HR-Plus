import { httpService } from "./http.service";

const CreateEmployee = (employee, accessToken) => {
  return httpService.post("employees/", employee, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

const GetEmployeeByEmail = (email, accessToken) => {
  return httpService.get(`employees/by-email/${email}`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export { CreateEmployee, GetEmployeeByEmail };
