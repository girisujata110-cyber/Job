import axios from "axios";

const api = axios.create({
  baseURL: "https://job-portal-eta-pearl.vercel.app/",
});

export default api;