import { httpService } from "./http.service";

const ReplacementCost = (replacement_cost) => {
  return httpService.post("replacement_costs/", replacement_cost);
};

export { ReplacementCost };
