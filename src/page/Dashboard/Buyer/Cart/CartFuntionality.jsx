import moment from "moment";
import Swal from "sweetalert2";
import useAxioslocalhost from "../../../../hooks/useAxioslocalhost";
import useAuth from "../../../../hooks/useAuth";
import useProducts from "../../../../hooks/useProducts";
import { PropTypes } from 'prop-types';
import useCart from './../../../../hooks/useCart';
import { TbGardenCartFilled } from "react-icons/tb";
import useUsers from "../../../../hooks/useUsers";

const CartFuntionality = ({ product_id }) => {

    const [products] = useProducts();
    const [cart] = useCart();
    const [users] = useUsers();
    const { user } = useAuth()
    const axiosLocalhost = useAxioslocalhost();
    const getUser = users.length > 0 ? users[0] : null;
    const isAdminOrSeller = getUser && (getUser.role === 'admin' || getUser.role === 'seller');

    const handleCart = async () => {
        const date = moment().format("MMM Do YY");
        const time = moment().format("LT");
        const email = user.email;

        // Find the product by product_id
        const product = products.find((product) => product._id === product_id);

        if (!product) {
            Swal.fire("Product not found!");
            return;
        }

        const { _id, productimage, details, price, discount_price, category, seller_name, seller_image } = product;

        const productCartListInfo = {
            productId: _id,
            productimage,
            email,
            details,
            price,
            discount_price,
            category,
            seller_name,
            seller_image,
            date,
            time,
        };

        // Check if the product is already in the wishlist
        const checkSameProduct = cart.some((checkProduct) => checkProduct.productId === product_id);

        if (checkSameProduct) {
            Swal.fire("Already added to the cart");
        } else {
            try {
                const productRes = await axiosLocalhost.post("/cart", productCartListInfo);

                if (productRes.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product added to wishlist.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            } catch (error) {
                console.error("Error adding product to wishlist:", error);
                Swal.fire("Failed to add product to cart. Please try again later.");
            }
        }
    };

    return (
        <>
            {/* <TbGardenCartFilled onClick={handleCart} /> */}

            {isAdminOrSeller ? (
                // Disable button for admin and seller, show swal alert
                <div
                    onClick={() => {
                        Swal.fire({
                            icon: 'warning',
                            title: "Action Denied",
                            text: "Admin and Seller cannot save products to the wishlist.",
                            confirmButtonColor: '#3085d6',
                        });
                    }}
                    className="badge badge-outline cursor-not-allowed text-gray-400"
                >
                    <TbGardenCartFilled />
                </div>
            ) : (
                // Button for normal users
                <div onClick={handleCart} className="badge badge-outline cursor-pointer">
                    <TbGardenCartFilled onClick={handleCart} />
                </div>
            )}
        </>
    )
}
CartFuntionality.propTypes = {
    product_id: PropTypes.number
};

export default CartFuntionality


// checking new

// import moment from "moment";
// import Swal from "sweetalert2";
// import useAxioslocalhost from "../../../../hooks/useAxioslocalhost";
// import useAuth from "../../../../hooks/useAuth";
// import useProducts from "../../../../hooks/useProducts";
// import { PropTypes } from 'prop-types';
// import useCart from './../../../../hooks/useCart';
// import { TbGardenCartFilled } from "react-icons/tb";

// const CartFuntionality = ({ product_id }) => {
//     const [products] = useProducts();
//     const [cart] = useCart();
//     const { user } = useAuth();
//     const axiosLocalhost = useAxioslocalhost();

//     const handleCart = async () => {
//         const date = moment().format("MMM Do YY");
//         const time = moment().format("LT");
//         const email = user.email;

//         // Find the product by product_id
//         const product = products.find((product) => product._id === product_id);

//         if (!product) {
//             Swal.fire("Product not found!");
//             return;
//         }

//         const { _id, productimage, details, price, discount_price, category, seller_name, seller_image } = product;

//         const productCartListInfo = {
//             productId: _id,
//             productimage,
//             email,
//             details,
//             price,
//             discount_price,
//             category,
//             seller_name,
//             seller_image,
//             date,
//             time,
//         };

//         // Check if the product is already in the cart
//         const checkSameProduct = cart.some((checkProduct) => checkProduct.productId === product_id);

//         if (checkSameProduct) {
//             Swal.fire("Already added to the cart");
//         } else {
//             try {
//                 const productRes = await axiosLocalhost.post("/cart", productCartListInfo);

//                 if (productRes.data.insertedId) {
//                     Swal.fire({
//                         position: "top-end",
//                         icon: "success",
//                         title: "Product added to cart.",
//                         showConfirmButton: false,
//                         timer: 1500,
//                     });
//                 }
//             } catch (error) {
//                 console.error("Error adding product to cart:", error);
//                 Swal.fire("Failed to add product to cart. Please try again later.");
//             }
//         }
//     };

//     // Check if the user's role is 'admin' or 'seller'
//     const isAdminOrSeller = user && (user.role === 'admin' || user.role === 'seller');

//     return (
//         <>
//             {isAdminOrSeller ? (
//                 // Disable button for admin and seller, show swal alert
//                 <div
//                     onClick={() => {
//                         Swal.fire({
//                             icon: 'warning',
//                             title: "Action Denied",
//                             text: "Admin and Seller cannot add products to the cart.",
//                             confirmButtonColor: '#3085d6',
//                         });
//                     }}
//                     className="badge badge-outline cursor-not-allowed text-gray-400"
//                 >
//                     <TbGardenCartFilled />
//                 </div>
//             ) : (
//                 // Button for normal users
//                 <div onClick={handleCart} className="badge badge-outline cursor-pointer">
//                     <TbGardenCartFilled />
//                 </div>
//             )}
//         </>
//     );
// };

// CartFuntionality.propTypes = {
//     product_id: PropTypes.string.isRequired,  // Make sure to change this to string if product_id is a string
// };

// export default CartFuntionality;
