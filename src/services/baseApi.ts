import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
});

export const verifyToken = () => {
  api.defaults.headers.authorization = `Bearer ${localStorage.getItem(
    "@bucaso:token"
  )}`;
};
export default api;
