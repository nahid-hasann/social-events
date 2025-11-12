import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "https://social-events-server-jhuo0cyey-nahid4.vercel.app",
});

export default axiosPublic;