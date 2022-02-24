import http from "../http-common";

class NewsDataService {
  getAll() {
    return http.get("/news")
  }
  get(id) {
    return http.get(`/news/${id}`)
  }
  create(data) {
    return http.post("/news", data);
  }
}

export default new NewsDataService();