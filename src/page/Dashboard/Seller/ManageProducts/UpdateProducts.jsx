import moment from "moment";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useUsers from "../../../../hooks/useUsers";
import useAxioslocalhost from "../../../../hooks/useAxioslocalhost";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateProducts = () => {

    const products = useLoaderData()//load all blogs info
    const { _id, product_name, details, price, productimage, discount_price, category } = products
    const [users] = useUsers();
    const currentUser = users.length > 0 ? users[0] : {};
    const axiosLocalhost = useAxioslocalhost();
    const [imagePreview, setImagePreview] = useState(productimage)

    //image upload in imgBB web hosting
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);

        const res = await axiosLocalhost.post(image_hostion_api, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        if (res.data.success) {
            const productimage = res.data.data.display_url;
            setImagePreview(productimage);
        }
    };

    const handleUpdateBlog = async (e) => {
        e.preventDefault();

        const product_name = e.target.product_name.value;
        const details = e.target.details.value;
        const price = e.target.price.value;
        const discount_price = e.target.discount_price.value;
        const category = e.target.category.value;
        const date = moment().format("MMM Do YY");
        const time = moment().format('LT');
        const seller_name = currentUser.name;
        const seller_image = currentUser.photo;
        const seller_email = currentUser.email;
        const updateProduct = { productimage: imagePreview, product_name, details, price, discount_price, category, seller_name, seller_email, seller_image, date, time, }
   
        const productRes = await axiosLocalhost.put(`/products/${_id}`, updateProduct);
        console.log(productRes.data)
        if (productRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "product is updated.",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }


    return (
        <>
            <div className="max-w-5xl mx-auto overflow-hidden my-20 p-5">
                <form onSubmit={handleUpdateBlog}>
                    <div className="flex justify-end items-end">
                        <button className="btn border-none bg-light_purple text-white hover:bg-hover_btn">Update Blog</button>
                    </div>
                    <div className="my-5 h-3/5 overflow-hidden relative">
                        <img className="w-full h-full object-cover" src={imagePreview} alt="" />
                        <div>
                            <label className="absolute bottom-0 text-center left-0 w-full text-sm hover:text-white hover:bg-light_purple font-semibold px-5 py-3 bg-card_white" htmlFor="fileUpload">
                                <input type="file" onChange={handleImageChange} name="imageFile" className="hidden" id="fileUpload" />
                                Change Cover Image
                            </label>
                        </div>
                    </div>
                    <div className="mt-10">
                        <label htmlFor="product_name" className="text-2xl font-bold">Book Name</label>
                        <textarea type="text" name="product_name" defaultValue={product_name} className="resize-none bg-transparent font-semibold py-5 w-full text-lg outline-none placeholder:text-4xl" />
                    </div>
                    <div>
                        <label htmlFor="category" className="text-2xl font-bold">Category</label>
                        <input type="text" name="category" defaultValue={category} className="bg-transparent font-semibold py-5 w-full text-lg border-none outline-none placeholder:text-4xl" />
                    </div>
                    <div className="my-3">
                        <label htmlFor="details" className="text-2xl font-bold">Books Details</label>
                        <textarea type="text" name="details" defaultValue={details} placeholder="Books Details.." className="resize-none bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
                    </div>
                    <div>
                        <label htmlFor="price" className="text-2xl font-bold">Price</label>
                        <textarea type="text" name="price" defaultValue={price} placeholder="Price.." className="resize-none bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
                    </div>
                    <div>
                        <label htmlFor="discount_price" className="text-2xl font-bold">Discount Price</label>
                        <textarea type="text" name="discount_price" defaultValue={discount_price} placeholder="discount_price.." className="resize-none bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateProducts
