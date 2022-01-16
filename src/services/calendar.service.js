import { httpService } from "./http.service";

const WorkHours = (calendar, accessToken) => {
  return httpService.post("calendars/", calendar, {
    headers: {
        Authorization: "Bearer " + accessToken,
      },
  });
};

export { WorkHours };
