import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api"
});

export const getTopics = () => {
  return api.get("/topics")
}

export const newTopic = (data) => {
  return api.post(`/new`, data)
}

export default api