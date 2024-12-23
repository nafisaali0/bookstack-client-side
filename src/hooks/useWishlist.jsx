import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxioslocalhost from "./useAxioslocalhost";

const useWishlist = () => {
    const axiosLocalhost = useAxioslocalhost();
    const { user } = useAuth()

    const { data: wishList = [], isPending: loading, refetch } = useQuery({
        queryKey: ['wishList', user?.email],
        queryFn: async () => {
            const res = await axiosLocalhost.get(`/wishlist?email=${user.email}`);
            return res.data
        }
    })

    return [wishList, loading, refetch]
}

export default useWishlist
