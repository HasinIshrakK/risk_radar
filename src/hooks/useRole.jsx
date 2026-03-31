import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import useAxios from './useAxios';


const useRole = () => {
    const { user } = useAuth();
    const [role, setRole] = useState("user");
    const [roleLoading, setRoleLoading] = useState(true);
    const axiosInstance = useAxios();

    useEffect(() => {
        if (!user?.email) return;

        const fetchRole = async () => {
            setRoleLoading(true);
            try {
                const res = await axiosInstance.get(`/api/users${user.email}`);
                const data = res.data;
                setRole(data?.role || "user");
                console.log("Fetched role:", data?.role || "user");
            } catch (err) {
                console.error(err);
                setRole("user");
            } finally {
                setRoleLoading(false);
            }
        }

        fetchRole();

    }, [user?.email, axiosInstance]);


    return { role, roleLoading };
};

export default useRole;

