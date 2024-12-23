import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxioslocalhost from "./useAxioslocalhost";


const useCart = () => {
    const axiosLocalhost = useAxioslocalhost();
    const { user } = useAuth()

    const { data: cart = [], isPending: loading, refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosLocalhost.get(`/cart?email=${user?.email}`);
            return res.data
        }
    })
    return [cart, loading, refetch]
}

export default useCart
