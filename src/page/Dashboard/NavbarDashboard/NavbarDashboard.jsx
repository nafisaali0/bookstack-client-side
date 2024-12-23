import { Link, useLocation } from "react-router-dom"
import useUsers from "../../../hooks/useUsers";
import useAuth from "../../../hooks/useAuth";
import './navbardashboardstyle.css'
import React from "react";


const NavbarDashboard = () => {

    const [users] = useUsers();//this user from DB
    const { user, logOut } = useAuth()
    const location = useLocation()
    const ifActive = (path) => location.pathname === path;
    const getUser = users.length > 0 ? users[0] : null;

    const handleLogOut = () => {
        logOut(user)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <div className="max-w-screen-2xl mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            {/* mobile menu */}
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-light_purple rounded-box w-52">
                                <nav className=" flex flex-col">
                                    {
                                        users?.map((eachUser) => (
                                            <React.Fragment key={eachUser.id}>
                                                {eachUser?.role === "admin" && (
                                                    <>
                                                        <Link
                                                            activeClassName="navbar__link--active_mobile"
                                                            className={ifActive('/dashboard/admin-dashboard') ? "navbar__link--active_mobile" : "navbar__link_mobile"}
                                                            to="/dashboard/admin-dashboard">Admin Dashboard</Link>
                                                        <Link
                                                            activeClassName="navbar__link--active_mobile"
                                                            className={ifActive('/dashboard/manage-user') ? "navbar__link--active_mobile" : "navbar__link_mobile"}
                                                            to="/dashboard/manage-user">Manage Users</Link>
                                                    </>
                                                )}
                                                {eachUser?.role === "seller" && (
                                                    <>
                                                        <Link
                                                            activeClassName="navbar__link--active_mobile"
                                                            className={ifActive('/dashboard/seller-dashboard') ? "navbar__link--active" : "navbar__link_mobile"}
                                                            to="/dashboard/seller-dashboard">Seller  Dashboard</Link>
                                                        <Link
                                                            activeClassName="navbar__link--active_mobile"
                                                            className={ifActive('/dashboard/manage-product') ? "navbar__link--active" : "navbar__link_mobile"}
                                                            to="/dashboard/manage-product">Manage Products</Link>
                                                    </>
                                                )}
                                                {eachUser?.role === "buyer" && (
                                                    <>
                                                        <Link
                                                            activeClassName="navbar__link--active_mobile"
                                                            className={ifActive('/dashboard/buyer-dashboard') ? "navbar__link--active" : "navbar__link_mobile"}
                                                            to="/dashboard/buyer-dashboard"> Buyer Dashboard</Link>
                                                        <Link
                                                            activeClassName="navbar__link--active_mobile"
                                                            className={ifActive('/dashboard/wishlist-products') ? "navbar__link--active" : "navbar__link_mobile"}
                                                            to="/dashboard/wishlist-products">WishList</Link>
                                                        <Link
                                                            activeClassName="navbar__link--active_mobile"
                                                            className={ifActive('/dashboard/cart-products') ? "navbar__link--active" : "navbar__link_mobile"}
                                                            to="/dashboard/cart-products">Cart</Link>
                                                    </>
                                                )}
                                            </React.Fragment>
                                        ))
                                    }
                                </nav>
                            </ul>
                        </div>
                        <Link to={'/'}>
                            <a className="btn btn-ghost text-xl">BookStack</a>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal items-center hidden lg:flex">
                            <div className="flex justify-center items-center">
                                <nav>
                                    {
                                        users?.map((eachUser) => (
                                            <React.Fragment key={eachUser.id}>
                                                {eachUser?.role === "admin" && (
                                                    <>
                                                        <Link
                                                            activeClassName="navbar__link--active"
                                                            className={ifActive('/dashboard/admin-dashboard') ? "navbar__link--active" : "navbar__link"}
                                                            to="/dashboard/admin-dashboard">Admin Dashboard</Link>
                                                        <Link
                                                            activeClassName="navbar__link--active"
                                                            className={ifActive('/dashboard/manage-user') ? "navbar__link--active" : "navbar__link"}
                                                            to="/dashboard/manage-user">Manage Users</Link>
                                                    </>
                                                )}
                                                {eachUser?.role === "seller" && (
                                                    <>
                                                        <Link
                                                            activeClassName="navbar__link--active"
                                                            className={ifActive('/dashboard/seller-dashboard') ? "navbar__link--active" : "navbar__link"}
                                                            to="/dashboard/seller-dashboard">Seller  Dashboard</Link>
                                                        <Link
                                                            activeClassName="navbar__link--active"
                                                            className={ifActive('/dashboard/add-products') ? "navbar__link--active" : "navbar__link"}
                                                            to="/dashboard/add-products">Add Products</Link>
                                                        <Link
                                                            activeClassName="navbar__link--active"
                                                            className={ifActive('/dashboard/manage-product') ? "navbar__link--active" : "navbar__link"}
                                                            to="/dashboard/manage-product">Manage Products</Link>
                                                    </>
                                                )}
                                                {eachUser?.role === "buyer" && (
                                                    <>
                                                        <Link
                                                            activeClassName="navbar__link--active"
                                                            className={ifActive('/dashboard/buyer-dashboard') ? "navbar__link--active" : "navbar__link"}
                                                            to="/dashboard/buyer-dashboard"> Buyer Dashboard</Link>
                                                        <Link
                                                            activeClassName="navbar__link--active"
                                                            className={ifActive('/dashboard/wishlist-products') ? "navbar__link--active" : "navbar__link"}
                                                            to="/dashboard/wishlist-products"> WishList</Link>
                                                        <Link
                                                            activeClassName="navbar__link--active"
                                                            className={ifActive('/dashboard/cart-products') ? "navbar__link--active" : "navbar__link"}
                                                            to="/dashboard/cart-products">Cart</Link>
                                                    </>
                                                )}
                                            </React.Fragment>
                                        ))
                                    }
                                </nav>
                            </div>
                        </ul>
                    </div>
                    <div className="navbar-end text-white">
                        <div className="dropdown dropdown-end text-[#474f85] font-bold">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                                <div className="w-10 border-black border-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    {getUser && getUser.photo ? (
                                        <img
                                            alt="User avatar"
                                            src={getUser.photo}
                                            className="w-10 h-10 rounded-full"
                                        />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-gray-300 shadow-md flex items-center justify-center">
                                            <span className="text-gray-500">N/A</span>
                                        </div>
                                    )}
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-5 shadow menu menu-sm dropdown-content bg-dash_nav rounded-box w-52">
                                <Link to={'/signup'}>Add Another Account</Link>
                                <li className="cursor-pointer" onClick={handleLogOut}>Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
            {/* editing */}
        </>
    )
}

export default NavbarDashboard
