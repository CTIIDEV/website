import http from "../http-common";

class ReportClaimDataService {
  create(data) { 
    return http.post("/reports", data)
  }
}

export default new ReportClaimDataService();