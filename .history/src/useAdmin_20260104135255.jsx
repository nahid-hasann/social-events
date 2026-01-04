import { useContext, useEffect, useState } from "react";
import axiosPublic from "./axiosPublic";
import { AuthContext } from "./AuthProvidor";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (user?.email && !loading) {
            // ✅ এখানে axios এর বদলে axiosPublic ব্যবহার করুন
            // আর পুরো লিংক লেখার দরকার নেই, কারণ axiosPublic এ baseURL দেওয়া আছে
            axiosPublic.get(`/users/admin/${user.email}`)
                .then(res => {
                    console.log("Admin Check Response:", res.data);
                    setIsAdmin(res.data.admin);
                    setIsAdminLoading(false);
                })
                .catch(err => {
                    console.log("Admin Check Error:", err);
                    setIsAdminLoading(false);
                })
        }
    }, [user, loading]);

    return [isAdmin, isAdminLoading];
};

export default useAdmin;