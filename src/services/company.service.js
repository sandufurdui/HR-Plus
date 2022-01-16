import { httpService } from "./http.service";

const CreateCompany = (company) => {
  return httpService.post("companies/", company);
};

const GetCompanyById = (companyId, accessToken) => {
  return httpService.get(`companies/${companyId}`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export { CreateCompany, GetCompanyById };
