import useProducts from "../../hooks/useProducts";
import { useState } from "react";
import WishlistFunctionality from "../Dashboard/Buyer/WishlistProduct/WishlistFunctionality";
import CartFuntionality from "../Dashboard/Buyer/Cart/CartFuntionality";


const ProductsPage = () => {

    const [products] = useProducts(); // Fetch all products
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

    // Handle filtering by search
    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    // Handle sorting
    const handleSort = (order) => {
        setSortOrder(order);
    };

    // Handle filtering by category
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    // Filtered and sorted products
    const filteredProducts = products
        .filter(
            (product) =>
                product.product_name.toLowerCase().includes(searchQuery) &&
                (selectedCategory === "All" || product.category === selectedCategory)
        )
        .sort((a, b) => {
            const priceA = parseFloat(a.price);
            const priceB = parseFloat(b.price);
            return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
        });

    return (
        <>
            {/* <div className="p-4 mt-52">
                <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
                    <input
                        type="text"
                        placeholder="Search by product name"
                        className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <select
                        onChange={handleCategoryChange}
                        className="w-full md:w-1/4 p-2 border border-gray-300 rounded-md"
                    >
                        <option value="All">All Categories</option>
                        <option value="Romance">Romance</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Thriller">Thriller</option>
                    </select>
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleSort("asc")}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Price: Low to High
                        </button>
                        <button
                            onClick={() => handleSort("desc")}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Price: High to Low
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <div
                            key={product._id}
                            className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-lg"
                        >
                            <img
                                src={product.productimage}
                                alt={product.product_name}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-2">{product.product_name}</h3>
                            <p className="text-gray-600 mb-1">Price: ${product.details}</p>
                            <p className="text-gray-600 mb-1">Price: ${product.price}</p>
                            <p className="text-gray-500 mb-3">Category: {product.category}</p>
                            <div className="flex gap-4 justify-center">
                                <WishlistFunctionality product_id={product._id}></WishlistFunctionality>
                                <CartFuntionality product_id={product._id}></CartFuntionality>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* checking */}
            <div className="container mx-auto p-8 my-20">
                {/* Search, Filter, and Sorting Section */}
                <div className="flex flex-wrap gap-6 items-center justify-between mb-8">
                    <input
                        type="text"
                        placeholder="Search by product name"
                        className="w-full sm:w-1/3 p-3 border border-gray-300 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6347] transition duration-200"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <select
                        onChange={handleCategoryChange}
                        className="w-full sm:w-1/4 p-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6347] transition duration-200"
                    >
                        <option value="All">All Categories</option>
                        <option value="Romance">Romance</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Thriller">Thriller</option>
                    </select>
                    <div className="flex gap-4">
                        <button
                            onClick={() => handleSort("asc")}
                            className="bg-[#FF6347] text-white px-6 py-3 rounded-md hover:bg-[#D04B36] focus:outline-none focus:ring-2 focus:ring-[#D04B36] transition duration-200"
                        >
                            Price: Low to High
                        </button>
                        <button
                            onClick={() => handleSort("desc")}
                            className="bg-[#FF6347] text-white px-6 py-3 rounded-md hover:bg-[#D04B36] focus:outline-none focus:ring-2 focus:ring-[#D04B36] transition duration-200"
                        >
                            Price: High to Low
                        </button>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <img
                                src={product.productimage}
                                alt={product.product_name}
                                className="w-full h-48 object-cover rounded-md mb-4 group-hover:opacity-90 transition-opacity duration-300"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.product_name}</h3>
                            <p className="text-[#FF6347] font-semibold mb-1">Price: ${product.price}</p>
                            <p className="text-gray-600 mb-4">Category: {product.category}</p>

                            {/* Wishlist and Cart Functionality */}
                            <div className="flex gap-4 justify-center mt-4">
                                <WishlistFunctionality product_id={product._id}></WishlistFunctionality>
                                <CartFuntionality product_id={product._id}></CartFuntionality>
                            </div>
                        </div>
                    ))}
                </div>
            </div>





        </>
    )
}

export default ProductsPage
