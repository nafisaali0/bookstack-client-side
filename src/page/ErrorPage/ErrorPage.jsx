import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <div className="container mx-auto flex flex-col justify-center items-center  mt-64 text-2xl font-bold">
                <h2>Error!</h2>
                <div className="text-center mt-6">
                    <p>{error.status}</p>
                    <p>{error.statusText}</p>
                </div>
                <Link to="/">
                    <button className="bg-gray-300 px-6 py-3 rounded-md mt-6">Go Back To Home</button>
                </Link>
            </div>
        </>
    )
}

export default ErrorPage
