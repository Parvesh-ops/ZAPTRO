import { FaShoppingCart } from "react-icons/fa"
import type { Product } from "../../types/product"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

interface ProductProps {
    product: Product
}


const ProductCard = ({ product }: ProductProps) => {
    const navigate = useNavigate() // for singleProduct
    const context = useContext(CartContext) // CartContext from context

    if (!context) throw new Error("Must be used within CartProvider");
    const { addToCart } = context

    return (
        <div className="border rounded-lg cursor-pointer border-gray-200 hover:scale-105 hover:shadow-xl transition-transform duration-300 bg-white overflow-hidden">

            {/* Product image */}
            <div>
                <img
                    src={product.image}
                    alt={product.title}
                    onClick={() => navigate(`/products/${product.id}`)}  // for singleProduct
                    className="object-contain h-50 w-50"
                />
            </div>

            {/* Product Info */}
            <div className="p-3">
                <h1 className="line-clamp-2 font-semibold text-gray-800 text-base mb-2">
                    {product.title}
                </h1>
                <p className="text-lg font-bold text-gray-900 mb-3">
                    ${product.price.toFixed(2)}
                </p>


                {/* Add to Cart Button */}
                <button
                    onClick={() => addToCart(product)}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 text-base rounded-md text-white w-full flex items-center justify-center gap-2 font-semibold transition-colors duration-200"
                >
                    <FaShoppingCart className="w-5 h-5" />
                    Add to Cart
                </button>
            </div>

        </div>
    )
}

export default ProductCard
