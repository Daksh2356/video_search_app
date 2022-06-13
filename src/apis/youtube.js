import axios from "axios";
<<<<<<< HEAD
const API_KEY = "AIzaSyBy36z0vnHoowz5V4Dc1_EtWX8kZ1H8nHU";
=======
const API_KEY ="AIzaSyA4ejtvs6HSy7S9a9Cp6t9j4V_JJkY7XSQ";
>>>>>>> 5a1870e1bca86e9e6b65818e304e5cdd7473240a

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: API_KEY,
  },
});
