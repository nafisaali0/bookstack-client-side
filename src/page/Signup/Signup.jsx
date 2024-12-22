import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import useAxioslocalhost from "../../hooks/useAxioslocalhost";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";


const Signup = () => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { signUpUser } = useAuth();
    const axiosLocalhost = useAxioslocalhost()
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        reset();
        // console.log(data)
        // signup authentication
        signUpUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                const userInfo = {
                    name: data.name,
                    email: data.email,
                    photo: data.photo,
                    role: data.role,
                }
                // console.log(userInfo)
                axiosLocalhost.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user add')
                            reset();
                            Swal.fire(
                                'Signup Successfully!'
                            ),
                                navigate('/')
                        }
                    })
            })
    }
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md md:max-w-lg lg:max-w-xl p-6 bg-white shadow-md rounded-md">
                    {/* Welcome Message */}
                    <h1 className="text-2xl font-semibold text-left text-gray-800 mb-2">
                        Sign Up
                    </h1>
                    {/* <p className="text-gray-500 ">
                        Register to create your first account and start exploring the book shop in BookStack.
                    </p> */}

                    {/* Profile Image */}
                    {/* <div className="flex justify-center mb-4">
                        {profileImage ? (
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                                <span className="text-gray-400">Upload</span>
                            </div>
                        )}
                    </div> */}

                    {/* Signup Form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="name"
                                {...register("name")}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                {...register("email")}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="Enter your password"
                            />
                            {errors.password?.type === 'required' && <p>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p>Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p>Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p>Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>
                        <div className="mb-4">
                            <span className="block text-gray-700 mb-2">Select Users Role</span>
                            <div className="flex flex-wrap gap-4">
                                <label className="flex items-center">
                                    <input
                                        {...register("role")}
                                        type="radio"
                                        // name="buyer"
                                        value="buyer"
                                        className="mr-2"
                                    />
                                    Buyer
                                </label>
                                <label className="flex items-center">
                                    <input
                                        {...register("role")}
                                        type="radio"
                                        // name="seller"
                                        value="seller"
                                        className="mr-2"
                                    />
                                    Seller
                                </label>
                            </div>
                        </div>
                        {/* <button
                            type="button"
                            className="w-full mb-4 border-2 border-black text-black-500 py-2 px-4 rounded-md focus:outline-none"
                        >
                            Choose Profile Picture
                        </button> */}
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Social Login */}
                    <div className="flex items-center justify-center mt-4">
                        <span className="text-gray-500">Or Sign up with</span>
                    </div>
                    <SocialLogin></SocialLogin>
                    {/* Login Link */}
                    <div className="mt-4 text-center">
                        <span className="text-gray-500">Already have an account? </span>
                        <Link to="/signin" className="text-orange-500 hover:underline">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
