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
