import { httpService } from "./http.service";

const CreateEmployee = (employee) => {
  return httpService.post("employees/", employee);
};

const GetEmployeeByEmail = (email) => {
  return httpService.get(`employees/by-email/${email}`);
};

export { CreateEmployee, GetEmployeeByEmail };
