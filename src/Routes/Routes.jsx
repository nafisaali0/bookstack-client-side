import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Signin from "../page/Signin/Signin";
import Signup from "../page/Signup/Signup";
import HomeLayout from "../page/Home/Homelayout/HomeLayout";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import AdminDashboard from "../page/Dashboard/Admin/AdminDashboard/AdminDashboard";
import SellerDashboard from "../page/Dashboard/Seller/SellerDashboard/SellerDashboard";
import ManageUsers from './../page/Dashboard/Admin/ManageUsers/ManageUsers';
import BuyerDashboard from './../page/Dashboard/Buyer/BuyerDashboard/BuyerDashboard';
import AddProducts from "../page/Dashboard/Seller/AddProducts/AddProducts";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <HomeLayout></HomeLayout>
            },
            {
                path: "/signin",
                element: <Signin></Signin>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            },
        ],
    },
    // Dashboard Route - admin,seller,buyer
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            // admin routes
            {
                path: "/dashboard/admin-dashboard",
                element: <AdminDashboard></AdminDashboard>,
            },
            {
                path: "/dashboard/manage-user",
                element: <ManageUsers></ManageUsers>,
            },
            // seller
            {
                path: "/dashboard/seller-dashboard",
                element: <SellerDashboard></SellerDashboard>,
            },
            {
                path: "/dashboard/add-products",
                element:<AddProducts></AddProducts>,
            },
            // buyer 
            {
                path: "/dashboard/buyer-dashboard",
                element: <BuyerDashboard></BuyerDashboard>
            },


        ]
    }
]);