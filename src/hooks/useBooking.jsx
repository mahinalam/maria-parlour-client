import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useBooking = () => {
    const { user, isLoading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: bookingInfo = [], refetch } = useQuery({
        queryKey: ['bookingInfo', user?.email],
        enabled: !isLoading,
        queryFn: async () => {

            const res = await axiosSecure.get(`/user/payments?email=${user?.email}`)
            console.log(res.data)
            return res.data;
        }
    })

    return [bookingInfo, refetch]
}

export default useBooking