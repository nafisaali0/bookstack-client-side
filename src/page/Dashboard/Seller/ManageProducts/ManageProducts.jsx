// import { Link } from "react-router-dom"
import useProducts from './../../../../hooks/useProducts';
import useAuth from './../../../../hooks/useAuth';
import { useEffect, useState } from "react";
import { RiDeleteBin3Line } from 'react-icons/ri';
import { GrUpdate } from 'react-icons/gr';
import Swal from 'sweetalert2';
import useAxioslocalhost from '../../../../hooks/useAxioslocalhost';
import { Link } from 'react-router-dom';


const ManageProducts = () => {

    const [products] = useProducts();
    const { user } = useAuth()
    const [sellerProducts, setsellerProducts] = useState([])
    const axiosLocalhost = useAxioslocalhost()

    useEffect(() => {
        const sellerProduct = products.filter(ownerProducts => ownerProducts.seller_email === user.email);
        setsellerProducts(sellerProduct)
    }, [products, user]);
    console.log(sellerProducts)

    const handleDelete = (_id) => {

        // fetch(`https://blog-server-side-ochre.vercel.app/blogs/${_id}`, {
        //     method: 'DELETE'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.deletedCount > 0) {
        //             Swal.fire(
        //                 'Deleted!',
        //                 'Your blog has been deleted.',
        //                 'success'
        //             )
        //         }
        //     })

        // checking
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
                axiosLocalhost.delete(`/products/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <>
            <div className="max-w-screen-2xl mx-auto px-3 py-28 overflow-hidden">
                <div className="my-16 text-4xl font-bold">
                    <h1>Your Products</h1>
                </div>
                <div className="">
                    <div className="h-96 pr-5 overflow-y-scroll">
                        <div className="flex flex-col gap-5">
                            {
                                sellerProducts.map((eachProduct, index) => (
                                    <div key={index} className="bg-card_white p-5 rounded-xl drop-shadow-md">
                                        <div className="flex items-center gap-5 py-2">
                                            <div>
                                                {/* <Link to={`/blogdetails/${ownerBlogs._id}`} target="_blank"> */}
                                                <img src={eachProduct.productimage} className="w-[100px] h-[100px] rounded-md" />
                                                {/* </Link> */}
                                            </div>
                                            <div className="flex-1">
                                                <span className='px-5 py-2 bg-light_gray text-xs text-black border-1 border-light_gray font-semibold rounded-full'>
                                                    {eachProduct.category}
                                                </span>
                                                {/* <Link to={`/blogdetails/${ownerBlogs._id}`} target="_blank"> */}
                                                <h1 className="text-lg font-bold my-3 hover:text-light_purple">{eachProduct.product_name}</h1>
                                                {/* </Link> */}
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <span>{eachProduct.date}</span>
                                                        <span>{eachProduct.time}</span>
                                                    </div>
                                                    <div className="flex gap-2 items-center">
                                                        <RiDeleteBin3Line onClick={() => handleDelete(eachProduct._id)} title="Delete" className="cursor-pointer" />

                                                        {/* <img onClick={() => handleDelete(ownerBlogs._id)} title="Delete" className="w-7 cursor-pointer" src={icondelete} alt="" /> */}
                                                        {/* /update/:id */}
                                                        <Link to={`/dashboard/update/${eachProduct._id}`}>
                                                            <GrUpdate title="Update" className="cursor-pointer" />
                                                            {/* <img title="Update" className="w-9 cursor-pointer" src={edit} alt="" /> */}
                                                        </Link>
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

        </>
    )
}

export default ManageProducts
