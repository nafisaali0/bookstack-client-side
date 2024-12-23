import Swal from "sweetalert2";
import useAxioslocalhost from "../../../../hooks/useAxioslocalhost";
import { PropTypes } from 'prop-types';

const CartProductDelete = ({ cartProductId }) => {
  const axiosLocalhost = useAxioslocalhost();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosLocalhost.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your cart product has been deleted.", "success");
          }
        }).catch(error => {
          Swal.fire("Error!", "Failed to delete the product.", "error");
          console.error("Delete error:", error);
        });
      }
    });
  };
  return (
    <>
      <div>
        {/* Pass wishProductId explicitly to the handleDelete function */}
        <button onClick={() => handleDelete(cartProductId)}>Delete</button>
      </div>
    </>
  )
}
CartProductDelete.propTypes = {
  cartProductId: PropTypes.number, // Assuming the ID is a string
};

export default CartProductDelete
