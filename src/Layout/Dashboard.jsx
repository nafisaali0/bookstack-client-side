import { Outlet } from "react-router-dom"
import NavbarDashboard from "../page/Dashboard/NavbarDashboard/NavbarDashboard"
import DashboardUserProfile from "../components/DashboardUserProfile"


const Dashboard = () => {
    return (
        <>
            <div className="mb-10 bg-[#f5f1fe] w-full h-96 p-5">
                <div>
                    <NavbarDashboard></NavbarDashboard>
                    <div className="max-w-screen-2xl mx-auto px-3 py-28 overflow-hidden">
                        <DashboardUserProfile></DashboardUserProfile>
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
