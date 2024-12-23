import { Outlet } from "react-router-dom"
import NavbarDashboard from "../page/Dashboard/NavbarDashboard/NavbarDashboard"
import DashboardUserProfile from "../components/DashboardUserProfile"
import useUsers from "../hooks/useUsers"
import SellerDashboard from './../page/Dashboard/Seller/SellerDashboard/SellerDashboard';
import AdminDashboard from './../page/Dashboard/Admin/AdminDashboard/AdminDashboard';
import BuyerDashboard from './../page/Dashboard/Buyer/BuyerDashboard/BuyerDashboard';


const Dashboard = () => {
    const [users] = useUsers();
    // const currentUser = users.length > 0 ? users[0] : {};
    return (
        <>
            <div className="mb-10 bg-[#f5f1fe] w-full h-96 p-5">
                <div>
                    <NavbarDashboard></NavbarDashboard>
                    <div className="max-w-screen-2xl mx-auto px-3 py-28 overflow-hidden">
                        <DashboardUserProfile></DashboardUserProfile>
                        {/* {currentUser?.role === "admin" && (
                            <>
                                <AdminDashboard></AdminDashboard>
                            </>
                        )}
                        {currentUser?.role === "seller" && (
                            <>
                                <SellerDashboard></SellerDashboard>
                            </>
                        )}
                        {currentUser?.role === "seller" && (
                            <>
                                <BuyerDashboard></BuyerDashboard>
                            </>
                        )} */}
                    </div>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

export default Dashboard
