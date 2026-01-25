import { useParams } from "react-router-dom"
import axios from "axios"
import api from "../api/api"
import { useContext, useEffect, useState } from "react"
import type { Product } from "../types/product"
import Breadcrums from "../components/Breadcrums/Breadcrums"
import { FaShoppingCart } from "react-icons/fa"
import { CartContext } from "../context/CartContext"
// import Loading from '../assets/Loading4.webm'


const SingleProduct = () => {
    // const params = useParams<string>()
    const { id } = useParams<string>()   //useParams<string>() 
    const [singleProduct, setSingleProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [quantity, setQuantity] = useState<number>(1)
    

    const context = useContext(CartContext) // CartContext from context

    if (!context) throw new Error("Must be used within CartProvider");
    const { addToCart } = context

    const getSingleProduct = async () => {
        try {
            setLoading(true)

            const response = await api.get<Product>(`/products/${id}`) // <Product> -> Product (single object beacuse use of {id})
            setSingleProduct(response.data)

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(error.response?.status);
            }
            console.error("An error occurred while fetching products:", error);
        } finally {
            setLoading(false)
        }
    };

    //useffect
    useEffect(() => {
        if (id) {
            getSingleProduct()
        }
    }, [id])

    //Loading
    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <h1 className="font-bold text-red-600">Loading...</h1>
            </div>
        );
    }

    // No product found
    if (!singleProduct) {
        return (
            <div className='flex items-center justify-center h-screen text-xl text-gray-600'>
                Product not found
            </div>
        );
    }
    return (
        <div className='px-4 sm:px-6 md:px-0 pb-8'>
            {/* Breadrums Component  */}
            <Breadcrums title={singleProduct.title} />

            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
                {/* Product Image */}
                <div className='flex justify-center'>
                    <img
                        src={singleProduct.image}
                        alt={singleProduct.title}
                        className='rounded-2xl w-80 max-w-xs sm:max-w-sm md:max-w-md object-contain'
                    />
                </div>

                {/* Product Details */}
                <div>
                    <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-800'>{singleProduct.title}</h1>
                    <p className='text-gray-700 uppercase text-sm tracking-wide'>{singleProduct.category}</p>


                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="text-yellow-400 text-lg">
                            {"★".repeat(Math.round(singleProduct.rating.rate))}
                            <span className="text-gray-300">
                                {"★".repeat(5 - Math.round(singleProduct.rating.rate))}
                            </span>
                        </div>
                        <span className="text-sm text-gray-600">
                            ({singleProduct.rating.rate} / 5 · {singleProduct.rating.count} reviews)
                        </span>
                    </div>

                    {/* Price */}
                    <p className='text-lg sm:text-xl md:text-2xl font-bold text-red-500'> ${singleProduct.price} </p>

                    {/* Desription */}
                    <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>{singleProduct.description}</p>

                    {/* Quantity */}
                    <div className='flex mt-4 items-center gap-3'>
                        <label className='text-sm sm:text-base font-medium text-gray-700'>Quantity:</label>
                        <input
                            type="number"
                            value={quantity}
                            min={1}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className='w-16 sm:w-20 border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-red-500'
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className='flex flex-col sm:flex-row gap-3 mt-4'>
                        <button
                           onClick={() => addToCart(singleProduct, quantity)}  
                            className='w-full sm:w-auto px-6 py-2 flex items-center justify-center gap-2 text-white bg-red-500 hover:bg-red-600 rounded-md shadow-md transition'
                        >
                            <FaShoppingCart /> Add to Cart
                        </button>

                        <button

                            className='w-full sm:w-auto px-6 py-2 flex items-center justify-center gap-2 text-white bg-red-500 hover:bg-red-600 rounded-md shadow-md transition'
                        >
                            💳 Buy Now
                        </button>

                    </div>



                </div>

            </div>
        </div>
    )
}

export default SingleProduct
