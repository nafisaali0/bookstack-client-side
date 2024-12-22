import { Navigate, useLocation } from "react-router-dom";
import useAuth from './../hooks/useAuth';
import PropTypes from "prop-types";
import Loader from "../components/Loader";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children
    }
    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
}
PrivateRoutes.propTypes = {
    children: PropTypes.node
};
export default PrivateRoutes
