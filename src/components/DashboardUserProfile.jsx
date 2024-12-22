import moment from "moment"
import useUsers from "../hooks/useUsers";

const DashboardUserProfile = () => {

    const [users] = useUsers();

    return (
        <>
            {
                users?.map((eachUser) => (
                    <>
                        <div className="flex items-center justify-between h-10">
                            <div className="mb-5">
                                <p className="text-lg font-semibold">{moment().format("MMM DD YYYY")}</p>
                                <h1 className="text-4xl font-bold my-4">Hello,{eachUser?.name}!</h1>
                            </div>
                            <div className="h-10">
                                <><button className="px-3 lg:px-10 h-full border-none roundedv text-xl font-bold bg-light_purple text-black hover:bg-hover_btn uppercase">{eachUser?.role}</button></>
                            </div>
                        </div>
                    </>
                ))
            }

        </>
    )
}

export default DashboardUserProfile
