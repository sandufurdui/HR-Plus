import { httpService } from "./http.service";

const ReplacementCost = (replacement_cost, accessToken) => {
  return httpService.post("replacement_costs/", replacement_cost, {
    headers: {
        Authorization: "Bearer " + accessToken,
      },
  });
};

export { ReplacementCost };
