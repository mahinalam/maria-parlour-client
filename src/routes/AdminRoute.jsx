import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAdmin from '../hooks/useadmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, adminLoading] = useAdmin()
    const location = useLocation();
    if (loading || adminLoading) {
        return <span>Loading...</span>
    }
    if (user && isAdmin) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;