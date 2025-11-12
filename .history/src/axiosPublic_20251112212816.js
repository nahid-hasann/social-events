import axios from "axios";
import { getAuth } from "firebase/auth";


const axiosPublic = axios.create({
    baseURL: "https://social-events-server-hazel.vercel.app/",
});

axiosPublic.interceptors.request.use(async (config) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
        const token = await user.getIdToken();
        config.headers.authorization = `Bearer ${token}`;
    }

    return config;
});

export default axiosPublic;

// https://meet.google.com/pmb-zgdr-syg