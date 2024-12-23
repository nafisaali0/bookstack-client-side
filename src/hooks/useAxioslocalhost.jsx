import axios from "axios";

const axiosLocalhost = axios.create({
    baseURL: 'https://bookstack-shop-server.vercel.app'
})

const useAxioslocalhost = () => {
    return axiosLocalhost;
};

export default useAxioslocalhost;