import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";


const useService = () => {
    const { user, isLoading } = useContext(AuthContext)

    const { data: services = [], isLoading: serviceLoading,refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/services`)
            console.log(res.data)
            return res.data
        }
    })

    return [services,refetch, serviceLoading]

};

export default useService;