import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const FilterSection = () => {
    const context = useContext(DataContext);

    if (!context) {
        throw new Error("Category must be used within DataProvider");
    }

    const { loading, categories, brand } = context;


    if (loading) {
        return <p className="text-center py-6">Loading ...</p>;
    }
    return (
        <div className="mt-6 bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-md w-full md:w-64 shrink-0">

            {/* Search */}
            <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-white p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 mb-6"
            />

            {/* Categories */}
            <h2 className="font-semibold text-lg text-gray-800 mb-2">Category</h2>
            <div className="flex flex-col gap-2 mb-4">
                {
                    categories?.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" />
                            <button className=" cursor-pointer uppercase ">{item}</button>
                        </div>
                    ))
                }

            </div>

            {/* Brand */}
            <h2 className="font-semibold text-lg text-gray-800 mb-2">Brand</h2>
            <select
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400">
                {
                    brand?.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))
                }
            </select>

            {/* Price Range */}
            <h2 className="font-semibold text-lg text-gray-800 mb-2">Price Range</h2>
            <div className="flex flex-col gap-1 mb-4">
                <span className="text-gray-600 text-sm">
                    Price Range : $0 - $700
                </span>
                <input
                    type="range"
                    min="0"
                    max="700"
                    className="w-full accent-red-500"
                />
            </div>

            {/* Reset Filters */}
            <button
                className="w-full bg-red-500 text-white rounded-lg px-3 py-2 hover:bg-red-600 transition-all duration-200"  >
                Reset Filters
            </button>

        </div>
    )
}

export default FilterSection
