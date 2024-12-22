import { useState } from "react";
import useUsers from "../../../../hooks/useUsers";
import moment from "moment";
import Swal from "sweetalert2";
import useAxioslocalhost from "../../../../hooks/useAxioslocalhost";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddProducts = () => {

    const axiosLocalhost = useAxioslocalhost();
    const [users] = useUsers();
    const currentUser = users.length > 0 ? users[0] : {};

    //for intent output 
    const [imagePreview, setImagePreview] = useState(null)
    const [formData, setFormData] = useState({
        product_name: "",
        category: "",
        details: "",
        price: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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

    // create final post to server 
    const handleCreateProduct = async (e) => {
        e.preventDefault();

        const product_name = e.target.product_name.value;
        const details = e.target.details.value;
        const price = e.target.price.value;
        const category = e.target.category.value;
        const date = moment().format("MMM Do YY");
        const time = moment().format('LT');
        const buyer_name = currentUser.name;
        const buyer_image = currentUser.photo;
        const buyer_Email = currentUser.email;
   
        const newProduct = { productimage: imagePreview, product_name, details, price, category, buyer_name, buyer_Email, buyer_image, date, time, }
        console.log(newProduct)
     
        const productRes = await axiosLocalhost.post('/products', newProduct);
        console.log(productRes.data)
        if (productRes.data.insertedId) {
            console.log('user add')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Product Added.`,
                showConfirmButton: false,
                timer: 1500
            });

        }
    }
    return (
        <>
            <div className="overflow-hidden my-20 p-5">
                <form onSubmit={handleCreateProduct}>
                    <div className="flex items-start justify-start flex-col-reverse lg:flex-row gap-7">
                        <div className="w-full lg:w-2/4 h-screen overflow-y-scroll">
                            <div className="h-screen overflow-y-scroll border-[.6px] border-b-card_white p-12 pt-14">
                                <div>
                                    <label className="text-sm border-2 border-card_white hover:border-light_purple font-semibold px-5 py-3 bg-card_white" htmlFor="fileUpload">
                                        <input type="file" onChange={handleImageChange} name="imageFile" className="hidden" id="fileUpload" />
                                        Add Your Product Image
                                    </label>
                                </div>
                                <div className="mt-10">
                                    <textarea type="text" name="product_name" value={formData.product_name} onChange={handleChange} placeholder="Book Name..." className="resize-none overflow-y-hidden bg-transparent my-5 py-5 w-full text-lg outline-none font-bold placeholder:text-4xl" />
                                </div>
                                <div className="my-3">
                                    <textarea type="category" name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="resize-none overflow-y-hidden bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
                                </div>
                                <div className="my-3">
                                    <textarea type="text" name="details" value={formData.details} onChange={handleChange} placeholder="Write Book Details here.." className="resize-none overflow-y-hidden bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
                                </div>
                                <div className="my-3">
                                    <textarea type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Add Price:" className="resize-none overflow-y-hidden bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/4 h-screen overflow-y-scroll">
                            <div className="h-screen space-y-6 border-[.6px] border-card_white p-12 pt-14">
                                <div className="flex flex-col justify-end items-end">
                                    <button className="btn border-none bg-light_purple text-white hover:bg-hover_btn">Add Product</button>
                                </div>
                                <div className="my-5 h-3/5 overflow-hidden">
                                    <h1 className=" "><img className="w-full h-full object-cover" src={imagePreview} alt="" /></h1>
                                </div>
                                <div className="my-10">
                                    <h1 type="text" name="product_name" placeholder="Book Name.." className="text-4xl font-bold placeholder:text-4xl">{formData.product_name}</h1>
                                </div>
                                <div className="my-3">
                                    <p className="text-xl font-semibold placeholder:text-xl">{formData.category}</p>
                                </div>
                                <div className="my-3">
                                    <p className="text-xl font-semibold placeholder:text-xl">{formData.details}</p>
                                </div>
                                <div className="my-3">
                                    <p className="text-xl font-semibold placeholder:text-xl">{formData.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddProducts
