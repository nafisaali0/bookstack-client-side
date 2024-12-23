// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import useProducts from '../../../hooks/useProducts';
import WishlistFunctionality from '../../Dashboard/Buyer/WishlistProduct/WishlistFunctionality';

const RecommendedProduct = () => {
    const [products] = useProducts();

    return (
        <>
            <div className="bg-gray-100 py-10 px-10">
                <h2 className="text-2xl font-bold text-center mb-6">Recommended Books For You</h2>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        // Responsive breakpoints
                        425: {
                            slidesPerView: 1, // For phone screens
                        },
                        768: {
                            slidesPerView: 2, // For tablet screens
                            // spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4, // For larger screens
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product._id}>
                            <div className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        className='h-[500px] w-full'
                                        src={product.productimage}
                                        alt={product.product_name} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {product.product_name}
                                        {/* <div className="badge badge-secondary">NEW</div> */}
                                    </h2>
                                    <p>{product.price} TK</p>
                                    <div className="card-actions justify-end">
                                        <WishlistFunctionality product_id={product._id}></WishlistFunctionality>
                                        <div className="badge badge-outline">cart</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default RecommendedProduct;
