import { useFavorite } from "../context/FavoriteContext";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Favorite = () => {
  const { favorites } = useFavorite();
  const { addToCart} = useCart()
  const navigate = useNavigate();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-xl shadow-md p-8 text-center max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-2">No favorites Products</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          My Favorites
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl  hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
        
              {/* Image */}
              <div
                onClick={() => navigate(`/products/${item.id}`)}
                className="flex items-center justify-center h-52 bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-40 object-contain"
                />
              </div>


              {/* Content */}
              <div className="p-4 gap-2 flex flex-col grow">
                <h2 className="font-semibold text-base text-gray-800 line-clamp-2">
                  {item.title}
                </h2>

                {/* Price */}
                <p className="text-lg font-bold text-gray-900 mt-2">
                  ${item.price}
                </p>

                {/* rating */}
                <p className="text-yellow-400  text-lg">
                  {"★".repeat(Math.round(item.rating.rate))}
                  <span className="text-gray-300">
                    {"★".repeat(5 - Math.round(item.rating.rate))}
                  </span>
                  <span className="text-sm text-gray-600">
                    ({item.rating.count} reviews)
                  </span>
                </p>

                <button
                  onClick={() =>  addToCart(item)}
                  className="mt-auto flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
