import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:4000/api/songs/trending"
      : "https://spotify-backend-ky5s.onrender.com",
  withCredentials: true,
});
