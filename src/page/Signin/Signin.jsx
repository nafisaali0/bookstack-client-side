import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";

const Signin = () => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();//from react hook 
    const { signInUser } = useAuth();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        reset();
        // console.log(data)

        // signin authentication
        signInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                //     position: "top-end",
                //     icon: "success",
                //     title: 'User Signin Successful.',
                //     showClass: {
                //         popup: 'animate__animated animate__fadeInDown'
                //     },
                //     hideClass: {
                //         popup: 'animate__animated animate__fadeOutUp'
                //     }
                // });
                Swal.fire(
                    'Singin Successfully!'
                ),
                    navigate('/')
            })
            .catch(error => {
                console.log(error)
                return (
                    Swal.fire({
                        position: "top-end",
                        icon: 'error',
                        title: 'Try Again',
                        text: 'Can Not signin With Google',
                    })
                )
            })
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <div className="text-center">
                        <div className="text-3xl font-semibold text-orange-500">
                            <i className="fas fa-lips"></i>
                        </div>
                        <h1 className="text-xl font-bold mt-2">Welcome to BookStack!</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register("email")}
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-orange-500 focus:border-orange-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                {...register("password")}
                                placeholder="Enter your password"
                                className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-orange-500 focus:border-orange-500"
                            />
                            {errors?.password?.type === 'required' && <p>Password is required</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition duration-300"
                        >
                            Sign In
                        </button>
                        <div className="flex items-center my-4">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="px-2 text-sm text-gray-500">Or Sign In with</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <SocialLogin></SocialLogin>
                        <p className="text-center text-sm text-gray-500 mt-4">
                            Do not have an account?{" "}
                            <a href="/signup" className="text-orange-500 hover:underline">
                                Sign Up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signin
