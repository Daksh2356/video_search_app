import axios from "axios";
const API_KEY = "AIzaSyBy36z0vnHoowz5V4Dc1_EtWX8kZ1H8nHU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: API_KEY,
  },
});
