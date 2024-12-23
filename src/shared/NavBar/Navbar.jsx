// import { Link, NavLink } from "react-router-dom"

import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import useUsers from './../../hooks/useUsers';
import SelectUserRole from "../../components/SelectUserRole";


const Navbar = () => {

    const { user, logOut } = useAuth();
    const [users] = useUsers()
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
            <div className="bg-black fixed top-0 w-full z-50 shadow-md">
                <div className="navbar bg-black">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
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
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><a>Homepage</a></li>
                                {getUser && getUser.role !== null && (
                                    <li>
                                        <a href="/dashboard">Dashboard</a>
                                    </li>
                                )}
                                {/* <li><a>Dashboard</a></li> */}
                                <li><a>Product</a></li>
                                <li><a>About</a></li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <a className="btn btn-ghost text-xl text-white">BookStack</a>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <Link to={'/signin'}><button className="btn btn-outline text-white">Sign in</button></Link>
                        <Link to={'/signup'}><button className="btn btn-outline mx-3 text-white">Sign up</button></Link>
                        <SelectUserRole></SelectUserRole>
                        <div className="flex-none">                            
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
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
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 h-fit p-2 shadow">
                                    <li><a>{user?.email}</a></li>
                                    <li><a>{user?.displayName}</a></li>
                                    <li><a onClick={handleLogOut}>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
