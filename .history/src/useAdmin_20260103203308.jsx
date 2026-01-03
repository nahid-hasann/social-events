import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvidor";
import axios from "axios";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (user?.email && !loading) {
            // আপনার লাইভ সার্ভার লিংক দিন
            axios.get(`https://your-vercel-server.app/users/admin/${user.email}`, {
                headers: {
                    // লোকাল স্টোরেজে যদি টোকেন সেভ করে থাকেন, সেটা পাঠাতে হবে
                    // আপাতত যদি টোকেন না থাকে, সার্ভার থেকে verifyFireBaseToken সরিয়ে দিতে পারেন টেস্টের জন্য
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(res => {
                    setIsAdmin(res.data.admin);
                    setIsAdminLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setIsAdminLoading(false);
                })
        }
    }, [user, loading]);

    return [isAdmin, isAdminLoading];
};

export default useAdmin;