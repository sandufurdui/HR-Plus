import { httpService } from "./http.service";

const CreateCompany = (company) => {
  return httpService.post("companies/", company);
};

export { CreateCompany };
