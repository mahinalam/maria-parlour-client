import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';

const useAdmin = () => {
    const { user, isLoading } = useContext(AuthContext)
    const { data: isAdmin=[], isLoading: adminLoading } = useQuery({
        queryKey: ['isAdmin', user.email],
        enabled: !isLoading,
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/isAdmin?email=${user?.email}`)
            console.log(res.data.admin)
            return res.data.admin
        }
    })
    return [isAdmin, adminLoading]
};

export default useAdmin;