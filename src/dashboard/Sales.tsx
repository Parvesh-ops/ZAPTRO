import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { DollarSign, ShoppingCart, Users } from "lucide-react";
import type { Product } from "../types/product";
import api from "../api/api";


interface CategoryRevenue {
    category: string;
    revenue: number;
}
const Sales = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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

    if (loading) return <p className="p-6 text-red-500 font-bold text-center">Loading sales data...</p>;
    if (!products.length) return <p className="p-6 text-center">No sales data found</p>;

    const totalRevenue = products.reduce((sum, p) => sum + p.price, 0);

    const totalOrders = products.length;

    const totalCustomers = 120;

    // REVENUE PER CATEGOR
    const revenueData: CategoryRevenue[] = Object.values(
        products.reduce<Record<string, CategoryRevenue>>((acc, p) => {
            acc[p.category] = acc[p.category] || { category: p.category, revenue: 0 };
            acc[p.category].revenue += p.price;
            return acc;
        }, {})
    );

    const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

    return (
        <div className="p-6 space-y-8">

            <h1 className="text-2xl text-black font-bold">Sales</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="bg-white p-6 shadow rounded-lg flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-full">
                        <DollarSign className="text-green-600" size={28} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Revenue</p>
                        <h2 className="text-xl font-bold">${totalRevenue.toFixed(2)}</h2>
                    </div>
                </div>

                <div className="bg-white p-6 shadow rounded-lg flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                        <ShoppingCart className="text-blue-600" size={28} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Orders</p>
                        <h2 className="text-xl font-bold">{totalOrders}</h2>
                    </div>
                </div>

                <div className="bg-white p-6 shadow rounded-lg flex items-center gap-4">
                    <div className="p-3 bg-yellow-100 rounded-full">
                        <Users className="text-yellow-600" size={28} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Customers</p>
                        <h2 className="text-xl font-bold">{totalCustomers}</h2>
                    </div>
                </div>
            </div>

            {/* REVENUE PER CATEGORY  */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Revenue per Category</h2>
                <ResponsiveContainer width="75%" height={300}>
                    <BarChart data={revenueData}>
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="revenue" radius={[6, 6, 0, 0]}>
                            {revenueData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* RECENT ORDERS TABLE  */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
                <table className="w-full text-sm border">
                    <thead className="bg-gray-300">
                        <tr>
                            <th className="p-3 border">Order ID</th>
                            <th className="p-3 border">Customer</th>
                            <th className="p-3 border">Product</th>
                            <th className="p-3 border">Amount</th>
                            <th className="p-3 border">Rating</th>
                            <th className="p-3 border">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.slice(0, 8).map((p, i) => (
                            <tr key={p.id}>
                                <td className="p-3 border">#{1000 + i}</td>
                                <td className="p-3 border">Customer {i + 1}</td>
                                <td className="p-3 border">{p.title}</td>
                                <td className="p-3 border">${p.price}</td>
                                <td className="p-3 border">⭐ {p.rating.rate}</td>
                                <td className="p-3 border text-green-600 font-semibold">Delivered</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
export default Sales;
