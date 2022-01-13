import axios from "axios";

const api = axios.create({
  baseURL: "https://lol-stats-b.herokuapp.com/",
});

export default api;
