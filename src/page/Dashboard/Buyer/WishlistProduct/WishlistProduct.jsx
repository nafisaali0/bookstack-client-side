import useWishlist from "../../../../hooks/useWishlist"

const WishlistProduct = () => {
    
    const [wishList] = useWishlist();

    return (
        <>
            <div className="container mx-auto my-36">
                <div className='text-3xl font-bold my-5'>
                    <h2>Your Reading List</h2>
                </div>
                <div className="my-5 grid grid-cols-1  gap-4">
                    {
                        wishList?.length === 0 ?
                            <>
                                <div className='text-xl font-bold flex flex-col justify-center items-center my-20 p-5'>
                                    <h1>No Products In Your WishList</h1>
                                </div>
                            </>
                            :
                            <>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-5'>
                                    {
                                        wishList.map(wishProduct =>
                                            <>
                                                <div href="#" className="flex flex-col-reverse items-center bg-card_white rounded-lg shadow md:flex-row-reverse md:max-w-4xl hover:bg-hover_gray">
                                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                                        <div className='my-3'>
                                                            <span className='px-5 py-2 bg-light_gray text-xs text-black font-semibold rounded-full'>{wishProduct.category}</span>
                                                        </div>
                                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">{wishProduct.product_name}</h5>
                                                        <p className="font-normal text-gray-700 dark:text-gray-400">{wishProduct.details}</p>
                                                        <div className='flex gap-3 items-center my-3 font-bold'>
                                                            <div>
                                                                {/* <span>{date}</span> */}
                                                                <span>date</span>
                                                            </div>
                                                            <div>
                                                                {/* <span>{time}</span> */}
                                                                <span>time</span>
                                                            </div>
                                                        </div>
                                                        {/* <div className="flex justify-between items-center my-3">
                                                            <div className="flex gap-5 items-center">
                                                                <div className="flex gap-2 items-center">
                                                                    <img title="love" className="w-7 cursor-pointer" src={iconLike} alt="" /><span>{comment.length}</span>
                                                                </div>
                                                                <div className="flex gap-2 items-center">
                                                                    <img title="comment" className="w-7 cursor-pointer" src={iconComment} alt="" /><span>{comment.length}</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-2 items-center">
                                                                <Link to={`/blogdetails/${blogId}`}>
                                                                    <img title="See Details" className='w-[30px] h-[30px] cursor-pointer' src={iconDetails} alt="detailsbutton" />
                                                                </Link>
                                                                <img title="Wishlist" onClick={() => handleDelete(_id)} className='w-[30px] h-[30px] cursor-pointer' src={iconDelete} alt="detailsbutton" />
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                    <img className="object-cover w-full rounded-t-lg h-96 md:h-80 md:min-w-11 md:rounded-none md:rounded-s-lg" src={wishProduct.productimage} alt="" />
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default WishlistProduct
