
import { useQuery } from '@tanstack/react-query';
import useAxioslocalhost from './useAxioslocalhost';

const useProducts = () => {
    const axiosLocalhost = useAxioslocalhost()
    const { refetch, data: products = [], isPending: loading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosLocalhost.get('/products');
            return res.data
        }
    })
    // console.log('Refetch function:', refetch);
    return [products, loading, refetch]
}

export default useProducts
