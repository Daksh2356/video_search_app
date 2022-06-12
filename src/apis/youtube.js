import axios from "axios";
const API_KEY ="AIzaSyA4ejtvs6HSy7S9a9Cp6t9j4V_JJkY7XSQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: API_KEY,
  },
});
