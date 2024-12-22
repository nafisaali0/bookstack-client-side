import { useQuery } from "@tanstack/react-query";
import useAxioslocalhost from "./useAxioslocalhost";

const useAllUsers = () => {
    const axiosLocalhost = useAxioslocalhost()
   
    const { refetch, data: userList = [], isPending: loading } = useQuery({
        queryKey: ['userList'],
        queryFn: async () => {
            const res = await axiosLocalhost.get(`/users`);
            // console.log(res.data)
            return res.data;
        }
    })
    return [userList, refetch, loading]
}

export default useAllUsers
