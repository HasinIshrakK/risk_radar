import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>

    if (!user) return <Navigate state={location.pathname} to='/auth/login'></Navigate>

    return children;
};

export default PrivateRoute;