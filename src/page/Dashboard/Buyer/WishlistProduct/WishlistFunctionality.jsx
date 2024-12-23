import Swal from "sweetalert2";
import useProducts from "../../../../hooks/useProducts";
import useAuth from "../../../../hooks/useAuth";
import moment from "moment";
import useWishlist from "../../../../hooks/useWishlist";
import useAxioslocalhost from "../../../../hooks/useAxioslocalhost";
import { PropTypes } from 'prop-types';

const WishlistFunctionality = ({ product_id }) => {

    const [products] = useProducts();
    const [wishList] = useWishlist();
    const { user } = useAuth()
    const axiosLocalhost = useAxioslocalhost();

    const handleWishList = async () => {
        const date = moment().format("MMM Do YY");
        const time = moment().format("LT");
        const user_email = user.email;

        // Find the product by product_id
        const product = products.find((product) => product._id === product_id);

        if (!product) {
            Swal.fire("Product not found!");
            return;
        }

        const { _id, image: productimage, details, price, discount_price, category, seller_name, seller_image } = product;

        const productWishListInfo = {
            productId: _id,
            productimage,
            user_email,
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
        const checkSameProduct = wishList.some((checkProduct) => checkProduct.productId === product_id);

        if (checkSameProduct) {
            Swal.fire("Already added to the wishlist");
        } else {
            try {
                const productRes = await axiosLocalhost.post("/wishlist", productWishListInfo);

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
                Swal.fire("Failed to add product to wishlist. Please try again later.");
            }
        }
    };

    return (
        <>
            <div onClick={handleWishList} className="badge badge-outline cursor-pointer">love</div>
        </>
    )
}

WishlistFunctionality.propTypes = {
    product_id: PropTypes.number
};


export default WishlistFunctionality
