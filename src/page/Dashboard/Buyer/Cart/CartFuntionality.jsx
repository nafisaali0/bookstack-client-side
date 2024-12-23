import moment from "moment";
import Swal from "sweetalert2";
import useAxioslocalhost from "../../../../hooks/useAxioslocalhost";
import useAuth from "../../../../hooks/useAuth";
import useProducts from "../../../../hooks/useProducts";
import { PropTypes } from 'prop-types';
import useCart from './../../../../hooks/useCart';

const CartFuntionality = ({ product_id }) => {

    const [products] = useProducts();
    const [cart] = useCart();
    console.log(cart)
    const { user } = useAuth()
    const axiosLocalhost = useAxioslocalhost();

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
            <div onClick={handleCart} className="badge badge-outline cursor-pointer">cart</div>
        </>
    )
}
CartFuntionality.propTypes = {
    product_id: PropTypes.number
};

export default CartFuntionality
