import axios from "axios";

const axiosPublic = axios.create({
    // আপনার লাইভ সার্ভার লিংক
    baseURL: "https://social-events-server-hazel.vercel.app/",
});

export default axiosPublic;