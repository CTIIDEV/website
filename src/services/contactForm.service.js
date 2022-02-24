import http from "../http-common";

class ContactFormDataService {
  create(data) { 
    return http.post("/contacts", data)
  }
}

export default new ContactFormDataService();