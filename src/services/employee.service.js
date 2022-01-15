import { httpService } from "./http.service";

const CreateEmployee = (employee) => {
  return httpService.post("employees/", employee);
};

const GetEmployeeByEmail = (email) => {
  return httpService.get(`employees/by-email/${email}`);
};

const GetEmployeeByID = (id) => {
  return httpService.get(`employees/${id}`);
};

const PutEmployeeByID = (id) => {
  return httpService.put(`employees/${id}`);
};

const DeleteEmployeeByID = (id) => {
  return httpService.delete(`employees/${id}`);
};

export { CreateEmployee, GetEmployeeByEmail, GetEmployeeByID, PutEmployeeByID, DeleteEmployeeByID };
