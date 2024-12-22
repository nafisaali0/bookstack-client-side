import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxioslocalhost from "./useAxioslocalhost";


const useUsers = () => {
    const axiosLocalhost = useAxioslocalhost()
    const { user } = useAuth();
    // console.log(user)
    const { refetch, data: users = [], isPending: loading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosLocalhost.get(`/users?email=${user.email}`);
            // console.log(res.data)
            return res.data;
        }
    })
    return [users, refetch, loading]
}

export default useUsers
