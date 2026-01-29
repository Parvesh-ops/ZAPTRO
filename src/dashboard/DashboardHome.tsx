import { useEffect, useState } from "react";
import axios from "axios";
import { DollarSign,ShoppingCart,Users,TrendingUp,} from "lucide-react";


const Dashboard = () => {
    const [products, setProducts] = useState([]);

    // Fake Graph Data
    const monthlySales = [
        { month: "Jan", sales: 4200 },
        { month: "Feb", sales: 3800 },
        { month: "Mar", sales: 5200 },
        { month: "Apr", sales: 6100 },
        { month: "May", sales: 4500 },
        { month: "Jun", sales: 6900 },
    ];

    const revenueData = [
        { name: "Electronics", revenue: 12000 },
        { name: "Fashion", revenue: 9000 },
        { name: "Home", revenue: 5000 },
        { name: "Beauty", revenue: 3000 },
    ];


    useEffect(() => {
        async function loadProducts() {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        loadProducts();
    }, []);

    return (
        <div className="p-6 w-full">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            {/* ========================== STAT CARDS ========================== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                <div className="bg-white p-6 shadow rounded-lg flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-full">
                        <DollarSign className="text-green-600" size={28} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Revenue</p>
                        <h2 className="text-xl font-bold">$54,230</h2>
                    </div>
                </div>

                <div className="bg-white p-6 shadow rounded-lg flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                        <ShoppingCart className="text-blue-600" size={28} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Orders</p>
                        <h2 className="text-xl font-bold">125</h2>
                    </div>
                </div>

                <div className="bg-white p-6 shadow rounded-lg flex items-center gap-4">
                    <div className="p-3 bg-yellow-100 rounded-full">
                        <Users className="text-yellow-600" size={28} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Customers</p>
                        <h2 className="text-xl font-bold">320</h2>
                    </div>
                </div>

                <div className="bg-white p-6 shadow rounded-lg flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-full">
                        <TrendingUp className="text-purple-600" size={28} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Products</p>
                        <h2 className="text-xl font-bold">{products.length}</h2>
                    </div>
                </div>
            </div>

            {/* ========================== CHARTS SECTION ========================== */}
           

            {/* ========================== RECENT ORDERS TABLE ========================== */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

                <table className="w-full text-sm border">
                    <thead className="bg-gray-300">
                        <tr >
                            <th className="p-3 border">Order ID</th>
                            <th className="p-3 border">Customer</th>
                            <th className="p-3 border">Product</th>
                            <th className="p-3 border">Amount</th>
                            <th className="p-3 border">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border 0 ">
                            <td className="p-3 border">#1023</td>
                            <td className="p-3 border">Manika</td>
                            <td className="p-3 border">Laptop</td>
                            <td className="p-3 border">$799</td>
                            <td className="p-3 border text-green-600 font-semibold">Delivered</td>
                        </tr>

                        <tr className="border 0">
                            <td className="p-3 border">#1024</td>
                            <td className="p-3 border">Pravesh</td>
                            <td className="p-3 border">Shoes</td>
                            <td className="p-3 border">$129</td>
                            <td className="p-3 border text-yellow-600 font-semibold">
                                Pending
                            </td>
                        </tr>

                        <tr className="border 0">
                            <td className="p-3 border">#1025</td>
                            <td className="p-3 border">Rita</td>
                            <td className="p-3 border">Headphones</td>
                            <td className="p-3 border">$89</td>
                            <td className="p-3 border text-blue-600 font-semibold">Shipped</td>
                        </tr>

                        <tr className="border 0">
                            <td className="p-3 border">#1026</td>
                            <td className="p-3 border">Sanjay</td>
                            <td className="p-3 border">Smart Watch</td>
                            <td className="p-3 border">$149</td>
                            <td className="p-3 border text-green-600 font-semibold">Delivered</td>
                        </tr>

                        <tr className="border 0">
                            <td className="p-3 border">#1027</td>
                            <td className="p-3 border">Anita</td>
                            <td className="p-3 border">T-Shirt</td>
                            <td className="p-3 border">$25</td>
                            <td className="p-3 border text-red-600 font-semibold">Cancelled</td>
                        </tr>

                        <tr className="border 0">
                            <td className="p-3 border">#1028</td>
                            <td className="p-3 border">Bikash</td>
                            <td className="p-3 border">Mobile Cover</td>
                            <td className="p-3 border">$12</td>
                            <td className="p-3 border text-yellow-600 font-semibold">Pending</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;