import { Outlet } from "react-router-dom"
import Navbar from "../shared/NavBar/Navbar"

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div>Footer</div>
        </div>
    )
}

export default MainLayout
