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
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">Select Users Role</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              {/* <span className="block text-gray-700 mb-2"></span> */}
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
      </div>
    </>
  );
};

export default SelectUserRole;
