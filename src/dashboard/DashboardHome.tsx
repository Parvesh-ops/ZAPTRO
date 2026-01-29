import { useEffect, useState } from "react";
import axios from "axios";
import { DollarSign, ShoppingCart, Users, TrendingUp, } from "lucide-react";
import type { Product } from "../types/product";
import api from "../api/api";


const Dashboard = () => {

    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products');
                setProducts(response.data)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error(error.response?.status);
                }
                console.error("An error occurred while fetching products:", error);

            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);


    const totalProducts = products.length;

    const totalRevenue = products.reduce(
        (sum, product) => sum + product.price,
        0
    );

    const totalOrders = products.reduce(
        (sum, product) => sum + product.rating.count,
        0
    );

    const avgRating = products.reduce((sum, product) => sum + product.rating.rate, 0) / (totalProducts);

    if (loading) {
        return <div className="p-6">Loading dashboard...</div>;
    }

    return (
        <div className="p-6 w-full">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                <div className="bg-white p-6 shadow rounded-lg flex items-center gap-4">

                    {/* totalRevenue */}
                    <div className="p-3 bg-green-100 rounded-full">
                        <DollarSign className="text-green-600" size={28} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Total Revenue</p>
                        <h2 className="text-xl font-bold">
                            ${totalRevenue.toFixed(2)}
                        </h2>
                    </div>
                </div>

                {/* Total Orders */}
                <div className="bg-white p-6 shadow rounded-lg flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                        <ShoppingCart className="text-blue-600" size={28} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Total Orders</p>
                        <h2 className="text-xl font-bold">{totalOrders}</h2>
                    </div>
                </div>

                {/* Avg Rating */}
                <div className="bg-white p-6 shadow rounded-lg flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-full">
                        <TrendingUp className="text-purple-600" size={28} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Avg Rating</p>
                        <h2 className="text-xl font-bold">{avgRating.toFixed(1)}</h2>
                    </div>
                </div>

                {/* totalProducts */}
                <div className="bg-white p-6 shadow rounded-lg flex items-center gap-4">
                    <div className="p-3 bg-yellow-100 rounded-full">
                        <Users className="text-yellow-600" size={28} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Products</p>
                        <h2 className="text-xl font-bold">{totalProducts}</h2>
                    </div>
                </div>
            </div>

            {/* Products Table */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Products</h2>

                <table className="w-full text-sm border">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-3 border">Image</th>
                            <th className="p-3 border">Title</th>
                            <th className="p-3 border">Category</th>
                            <th className="p-3 border">Price</th>
                            <th className="p-3 border">Rating</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.slice(0, 6).map((product) => (
                            <tr key={product.id}>
                                <td className="p-3 border">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-12 h-12 object-contain mx-auto"
                                    />
                                </td>
                                <td className="p-3 border">{product.title}</td>
                                <td className="p-3 border">{product.category}</td>
                                <td className="p-3 border">${product.price}</td>
                                <td className="p-3 border">⭐ {product.rating.rate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
