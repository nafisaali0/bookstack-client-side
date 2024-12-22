import axios from "axios";

const axiosLocalhost = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxioslocalhost = () => {
    return axiosLocalhost;
};

export default useAxioslocalhost;