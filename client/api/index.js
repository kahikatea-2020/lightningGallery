import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getTopics = () => {
  return api.get("/topics");
};

export const newTopic = (data) => {
  return api.post(`/new`, data);
};

export const updateTopic = (id, data) => {
  return api.post(`/update/${id}`, data);
};

export const getTopicsComments = (id) => {
  return api.get(`/topics/${id}/comments`);
};

export const getComments = () => {
  return api.get("/comments");
};

export const newComment = (data) => {
  return api.post(`/comments/new`, data);
};

export default api;
