import axios from "axios";

const apiImages = axios.create({
  baseURL: process.env.BASE_URL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export default apiImages;
