import http from "../http-common";

class GeneralAgentDataService {
  create(data) {
    return http.post("/generalagents", data);
  }
}

export default new GeneralAgentDataService();