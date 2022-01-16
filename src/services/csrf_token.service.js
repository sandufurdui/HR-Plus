import { httpService } from "./http.service";

const GetCSRFToken = () => {
  return httpService.get("csrf_token/");
};

export { GetCSRFToken };
