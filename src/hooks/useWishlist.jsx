import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxioslocalhost from "./useAxioslocalhost";

const useWishlist = () => {
    const axiosLocalhost = useAxioslocalhost();
    const { user } = useAuth()
    // console.log(user)

    const { data: wishList = [], isPending: loading, refetch } = useQuery({
        queryKey: ['wishList', user?.email],
        queryFn: async () => {
            const res = await axiosLocalhost.get(`/wishlist?email=${user?.email}`);
            // const res = await axiosLocalhost.get('/wishlist');
            // console.log(res.data)
            return res.data
        }
    })
    console.log(wishList)
    return [wishList, loading, refetch]
}

export default useWishlist
