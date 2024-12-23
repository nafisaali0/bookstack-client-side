import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxioslocalhost from "../hooks/useAxioslocalhost";
import useUsers from "../hooks/useUsers";

const SelectUserRole = () => {
  const [users] = useUsers(); // Fetch users from DB
  const { register, handleSubmit, reset } = useForm();
  const axiosLocalhost = useAxioslocalhost();

  // Get the first user from the list or set a default value
  const selectedUser = users.length > 0 ? users[0] : null;

  // Handle form submission
  const onSubmit = async (data) => {
    reset(); // Reset form fields
    console.log(data)
    const userItem = {
      role: data.role,
      name: selectedUser.name,
      photo: selectedUser.photo,
      email: selectedUser.email,
    };
    console.log(userItem)
    try {
      const userRes = await axiosLocalhost.patch(`/users/${selectedUser._id}`, userItem);
      if (userRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Updated Role.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Failed to update user role:", error);
    }
  };

  return (
    <>
      {/* <div className="dropdown">
        <div tabIndex={0} role="button" className="bg-transparent hover:bg-gray-800 text-yellow-400 border border-yellow-400 font-semibold py-2 px-6 rounded-md transition">Select Users Role</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <div className="flex flex-wrap gap-4">
                <li>
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
                </li>
                <li>
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
                </li>
              </div>
            </div>
            <button className="btn">Update</button>
          </form>
        </ul>
      </div> */}

      {/* checking */}

      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="bg-transparent hover:bg-gray-800 text-yellow-400 border border-yellow-400 font-semibold py-2 px-6 rounded-md transition duration-200 shadow-md"
        >
          Select Users Role
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-gray-900 text-white rounded-box z-[1] w-52 p-4 shadow-lg"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <li>
                <label className="flex items-center hover:text-yellow-400 transition duration-150">
                  <input
                    {...register("role")}
                    type="radio"
                    value="buyer"
                    className="mr-2 accent-yellow-400"
                  />
                  Buyer
                </label>
              </li>
              <li>
                <label className="flex items-center hover:text-yellow-400 transition duration-150">
                  <input
                    {...register("role")}
                    type="radio"
                    value="seller"
                    className="mr-2 accent-yellow-400"
                  />
                  Seller
                </label>
              </li>
            </div>
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-md transition duration-200 mt-4 w-full"
            >
              Update
            </button>
          </form>
        </ul>
      </div>

    </>
  );
};

export default SelectUserRole;
