import { Outlet } from "react-router-dom"
import Navbar from "../shared/NavBar/Navbar"
import Footer from "../shared/Footer/Footer"

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout
