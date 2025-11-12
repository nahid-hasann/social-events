import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "https://social-events-server-hazel.vercel.app/",
});

export default axiosPublic;

https://meet.google.com/pmb-zgdr-syg