import axios from "axios";

const apiImages = axios.create({
  baseURL: "https://insoms.vercel.app/api",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export default apiImages;
