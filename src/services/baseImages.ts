import axios from "axios";

const apiImages = axios.create({
  baseURL: "http://localhost:3000/api/images",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export default apiImages;
