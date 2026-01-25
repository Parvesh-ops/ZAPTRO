import { useParams } from "react-router-dom";
import axios from "axios";
import api from "../api/api";
import { useContext, useEffect, useState } from "react";
import type { Product } from "../types/product";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { MdOutlineFavorite } from "react-icons/md";
import { useFavorite } from "../context/FavoriteContext";

const SingleProduct = () => {
  const { id } = useParams<string>();

  const [singleProduct, setSingleProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const cartContext = useContext(CartContext);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorite();

  if (!cartContext) throw new Error("Must be used within CartProvider");
  const { addToCart } = cartContext;

  const getSingleProduct = async () => {
    try {
      setLoading(true);
      const response = await api.get<Product>(`/products/${id}`);
      setSingleProduct(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.status);
      }
      console.error("An error occurred while fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) getSingleProduct();
  }, [id]);

  // ✅ SAFE favorite check
  const favorite = singleProduct ? isFavorite(singleProduct.id) : false;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="font-bold text-red-600">Loading...</h1>
      </div>
    );
  }

  if (!singleProduct) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-gray-600">
        Product not found
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 md:px-0 pb-8">
      <Breadcrums title={singleProduct.title} />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={singleProduct.image}
            alt={singleProduct.title}
            className="rounded-2xl w-80 object-contain"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {singleProduct.title}
          </h1>

          <p className="uppercase text-sm text-gray-500">
            {singleProduct.category}
          </p>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-2">
            <div className="text-yellow-400 text-lg">
              {"★".repeat(Math.round(singleProduct.rating.rate))}
              <span className="text-gray-300">
                {"★".repeat(5 - Math.round(singleProduct.rating.rate))}
              </span>
            </div>
            <span className="text-sm text-gray-600">
              ({singleProduct.rating.count} reviews)
            </span>
          </div>

          {/* PRICE */}
          <p className="text-2xl font-bold text-red-500 mt-2">
            ${singleProduct.price}
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-3">
            {singleProduct.description}
          </p>

          {/* QUANTITY + FAVORITE */}
          <div className="flex items-center gap-4 mt-4">
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-20 border rounded-lg px-2 py-1"
            />

            <button
              onClick={() =>
                favorite
                  ? removeFromFavorites(singleProduct.id)
                  : addToFavorites(singleProduct)
              }
              className={`p-3 rounded-full transition active:scale-95
                ${favorite ? "bg-red-500" : "bg-gray-800 hover:bg-gray-700"}`}
            >
              <MdOutlineFavorite
                size={20}
                className={favorite ? "text-white" : "text-gray-300"}
              />
            </button>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3 mt-5">
            <button
              onClick={() => addToCart(singleProduct, quantity)}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md"
            >
              <FaShoppingCart /> Add to Cart
            </button>

            <button className="bg-black text-white px-6 py-2 rounded-md">
              💳 Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
