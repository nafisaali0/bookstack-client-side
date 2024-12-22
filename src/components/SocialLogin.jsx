import Swal from "sweetalert2";
import useAuth from './../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import useAxioslocalhost from './../hooks/useAxioslocalhost';


const SocialLogin = () => {
    const axiosLocalhost = useAxioslocalhost();
    const navigate = useNavigate()
    const { googleLogIn } = useAuth()

    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    photo: result.user?.photoURL
                }
                axiosLocalhost.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire(
                            'Singin Successfully!'
                        ),
                            navigate('/')
                    })
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
                        footer: { error }
                    })
                )
            })
    }
    return (
        <div className="flex justify-center mt-4 space-x-4">
            <button
                onClick={handleGoogle}
                className="w-full px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
                Google
            </button>
        </div>
    )
}

export default SocialLogin
