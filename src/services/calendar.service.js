import { httpService } from "./http.service";

const WorkHours = (calendar) => {
  return httpService.post("calendars/", calendar);
};

export { WorkHours };
