import { FaHeart, FaShoppingCart } from "react-icons/fa"
import useProducts from "../../hooks/useProducts";
import { useState } from "react";


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
                product.details.toLowerCase().includes(searchQuery) &&
                (selectedCategory === "All" || product.category === selectedCategory)
        )
        .sort((a, b) => {
            const priceA = parseFloat(a.price);
            const priceB = parseFloat(b.price);
            return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
        });

    return (
        <>
            <div className="p-4 mt-52">
                {/* Header Section */}
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

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <div
                            key={product._id}
                            className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-lg"
                        >
                            <img
                                src={product.productimage}
                                alt={product.details}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-2">{product.details}</h3>
                            <p className="text-gray-600 mb-1">Price: ${product.price}</p>
                            <p className="text-gray-500 mb-3">Category: {product.category}</p>
                            <div className="flex gap-4 justify-center">
                                <FaHeart
                                    className="text-red-500 cursor-pointer text-xl hover:text-red-600"
                                    title="Add to Wishlist"
                                />
                                <FaShoppingCart
                                    className="text-green-500 cursor-pointer text-xl hover:text-green-600"
                                    title="Add to Cart"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductsPage
