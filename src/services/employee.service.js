import { httpService } from "./http.service";

const CreateEmployee = (employee) => {
  return httpService.post("employees/", employee);
};

export { CreateEmployee };
