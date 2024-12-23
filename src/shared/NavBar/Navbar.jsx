import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import useUsers from './../../hooks/useUsers';
import SelectUserRole from "../../components/SelectUserRole";
import { PiUserFocusFill } from "react-icons/pi";


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
            {/* <div className="bg-black fixed top-0 w-full z-50 shadow-md">
                <div className="navbar px-4 lg:px-8">
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
                                <li><a href="/products-page">Product</a></li>
                                <li><a>About</a></li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <a className="btn btn-ghost text-xl text-white">BookStack</a>
                        </div>
                    </div>
                    <div className="navbar-end">
                        {getUser ? (
                            <>
                                {getUser.role !== 'admin' && (
                                    <SelectUserRole />
                                )}
                                <div className="bg-white p-2 rounded-md">
                                    <PiUserFocusFill />
                                </div>
                            </>
                        ) : (
                            <div className="flex space-x-4">
                                <Link to="/signin">
                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-md transition">
                                        Sign in
                                    </button>
                                </Link>
                                <Link to="/signup">
                                    <button className="bg-white hover:bg-yellow-100 text-yellow-500 border border-yellow-400 font-semibold py-2 px-6 rounded-md transition">
                                        Sign up
                                    </button>
                                </Link>
                            </div>
                        )}

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
                                    <li><a>{user?.displayName}</a></li>
                                    <li><a onClick={handleLogOut}>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}
            {/* checking agin */}
            <div className="bg-black fixed top-0 w-full z-50 shadow-md">
                <div className="navbar px-4 lg:px-8">
                    <div className="navbar-start">
                        {/* <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle text-yellow-400 hover:text-yellow-500 transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                <li><a>Homepage</a></li>
                                {getUser && getUser.role !== null && (
                                    <li>
                                        <a href="/dashboard">Dashboard</a>
                                    </li>
                                )}
                                <li><a href="/products-page">Product</a></li>
                                <li><a>About</a></li>
                            </ul>
                        </div> */}
                        {/* checking new */}
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle bg-gray-800 text-yellow-400 hover:text-yellow-500 hover:bg-gray-700 transition duration-200 shadow-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-gray-900 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
                            >
                                <li className="hover:bg-yellow-500 hover:text-black rounded-md transition">
                                    <a href="/">Homepage</a>
                                </li>
                                {getUser && getUser.role !== null && (
                                    <li className="hover:bg-yellow-500 hover:text-black rounded-md transition">
                                        <a href="/dashboard">Dashboard</a>
                                    </li>
                                )}
                                <li className="hover:bg-yellow-500 hover:text-black rounded-md transition">
                                    <a href="/products-page">Product</a>
                                </li>
                                <li className="hover:bg-yellow-500 hover:text-black rounded-md transition">
                                    <a href="/about">About</a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex-1">
                            <a href="/" className="btn btn-ghost text-xl text-yellow-400 hover:text-yellow-500 transition">
                                BookStack
                            </a>
                        </div>
                    </div>
                    <div className="navbar-end space-x-4">
                        {getUser ? (
                            <>
                                {getUser.role !== 'admin' && (
                                    <SelectUserRole />
                                )}
                                <div className="bg-gray-800 p-2 rounded-full shadow-md flex items-center justify-center text-yellow-400 hover:text-yellow-500 transition">
                                    <Link to={"/signin"}>
                                        <PiUserFocusFill className="h-6 w-6" target="SingIn" />
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <div className="flex space-x-4">
                                <Link to="/signin">
                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-md shadow-md transition">
                                        Sign in
                                    </button>
                                </Link>
                                <Link to="/signup">
                                    <button className="bg-white hover:bg-yellow-100 text-yellow-500 border border-yellow-400 font-semibold py-2 px-6 rounded-md shadow-md transition">
                                        Sign up
                                    </button>
                                </Link>
                            </div>
                        )}
                        <div className="flex-none">
                            {/* <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                >
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
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 h-fit p-2 shadow"
                                >
                                    <li><a>{user?.displayName}</a></li>
                                    <li>
                                        <a onClick={handleLogOut}>Logout</a>
                                    </li>
                                </ul>
                            </div> */}
                            {/* checking */}
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar hover:bg-gray-800 transition"
                                >
                                    <div className="w-10 rounded-full">
                                        {getUser && getUser.photo ? (
                                            <img
                                                alt="User avatar"
                                                src={getUser.photo}
                                                className="w-10 h-10 rounded-full border-2 border-yellow-400 shadow-md"
                                            />
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-gray-700 shadow-md flex items-center justify-center">
                                                <span className="text-yellow-400 font-semibold">N/A</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-56 h-fit p-2 shadow-lg border border-yellow-400"
                                >
                                    <li>
                                        <a className="hover:text-yellow-400">{user?.displayName || "User Name"}</a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={handleLogOut}
                                            className="hover:text-yellow-400 transition-colors"
                                        >
                                            Logout
                                        </a>
                                    </li>
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
