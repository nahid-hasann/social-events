import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../AuthProvidor"; // পাথ ঠিক আছে তো?
import axios from "axios";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (user?.email && !loading) {
            // আপনার লাইভ সার্ভার লিংক দিন
            axios.get(`https://your-vercel-server.app/users/admin/${user.email}`)
                .then(res => {
                    console.log("Admin Check Response:", res.data); // কনসোলে চেক করার জন্য
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