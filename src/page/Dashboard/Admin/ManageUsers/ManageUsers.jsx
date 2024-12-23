import useAllUsers from "../../../../hooks/useAllUsers";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin3Line } from "react-icons/ri";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxioslocalhost from "../../../../hooks/useAxioslocalhost";

const ManageUsers = () => {


    const { register, handleSubmit, reset } = useForm();
    const axiosLocalhost = useAxioslocalhost()
    const [userList] = useAllUsers();//this user from DB

    //update users
    const onSubmit = async (data) => {
        console.log(data)
        reset();
        const selectedUser = userList.find((user) => user._id === data.userId);

        if (!selectedUser) {
            console.error("User not found");
            return;
        }
        // Create the user object with updated properties
        const userItem = {
            ...selectedUser, // Include all existing properties of the user
            role: data.role, // Update the role
            name: data.name || selectedUser.name, // Update name if provided, else keep the original
            photo: data.image || selectedUser.photo, // Update photo if provided, else keep the original
            email: data.email || selectedUser.email, // Update email if provided, else keep the original
        };
        // console.log("Updated User Item:", userItem);    
        console.log("load")
        const userRes = await axiosLocalhost.patch(`/users/${data.userId}`, userItem);
        console.log(userRes.data)
        if (userRes.data.modifiedCount > 0) { // show success popup
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Updated Role.`,
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
    //delete users
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete it this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosLocalhost.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your camp has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    return (
        <>
            <div className="max-w-screen-2xl mx-auto px-3 py-20 overflow-hidden">
                <div className="flex items-start justify-start">
                    <div className="w-full">
                        <h1 className="w-fit text-start my-5 text-sm font-bold px-6 py-2 bg-purple border-purple rounded-full border-2">All Users</h1>
                        <div className="h-96 pr-5 overflow-y-scroll">
                            <div className="flex flex-col gap-5">
                                {
                                    userList.map((user, index) => (
                                        <div key={index} className="bg-[#f3f3f3] p-5 rounded-xl drop-shadow-md">
                                            <div className="flex items-center gap-5 py-2">
                                                <div>
                                                    <img src={user?.photo} className="w-[100px] h-[100px] rounded-md" />
                                                </div>
                                                <div className="flex-1">
                                                    <span className='px-5 py-2 bg-[#dbdbde] text-xs text-black border-1 border-[#dbdbde] font-semibold rounded-full'>
                                                        {user?.role}
                                                    </span>
                                                    <h1 className="text-lg font-bold my-3 hover:text-light_purple">{user.name}</h1>
                                                    <div className="flex justify-between items-center">
                                                        <div>
                                                            Email : {user.email}
                                                        </div>
                                                        <div className="flex gap-2 items-center">
                                                            <RiDeleteBin3Line onClick={() => handleDelete(user._id)} title="Delete" className="cursor-pointer" />
                                                            {/* modal */}
                                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                                            <button
                                                                className="btn"
                                                                onClick={() => document.getElementById(`modal_${user._id}`).showModal()}
                                                            >
                                                                <GrUpdate title="Update" className="cursor-pointer" />
                                                            </button>
                                                            <dialog id={`modal_${user._id}`} className="modal">
                                                                <div className="modal-box">
                                                                    <form method="dialog">
                                                                        {/* if there is a button in form, it will close the modal */}
                                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                                    </form>
                                                                    <form
                                                                        // onSubmit={handleSubmit((data) => {
                                                                        //     onSubmit({ ...data, userId: user?._id }); // Passing userId along with form data
                                                                        // })}
                                                                        onSubmit={handleSubmit((data) => {
                                                                            onSubmit({ ...data, userId: user?._id, userName: user?.name, email: user?.email, image: user?.photo }); // Passing userId along with form data
                                                                        })}
                                                                    >
                                                                        <h3 className="font-bold text-lg">You can not change name and email</h3>
                                                                        <div className="mb-4">
                                                                            <span className="block text-gray-700 mb-2">Select Users Role</span>
                                                                            <div className="flex flex-wrap gap-4">
                                                                                <label className="flex items-center">
                                                                                    <input
                                                                                        {...register("role")}
                                                                                        type="radio"
                                                                                        value="buyer"
                                                                                        className="mr-2"
                                                                                    />
                                                                                    Buyer
                                                                                </label>
                                                                                <label className="flex items-center">
                                                                                    <input
                                                                                        {...register("role")}
                                                                                        type="radio"
                                                                                        value="seller"
                                                                                        className="mr-2"
                                                                                    />
                                                                                    Seller
                                                                                </label>
                                                                                <label className="flex items-center">
                                                                                    <input
                                                                                        {...register("role")}
                                                                                        type="radio"
                                                                                        value="admin"
                                                                                        className="mr-2"
                                                                                    />
                                                                                    Admin
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <button className="btn">Update</button>
                                                                    </form>
                                                                </div>
                                                            </dialog>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageUsers
