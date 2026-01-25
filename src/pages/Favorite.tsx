import { useFavorite } from "../context/FavoriteContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const { favorites, removeFromFavorites } = useFavorite();
  const navigate = useNavigate();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">No favorites yet ❤️</h2>
          <p className="text-gray-600 mb-6">
            Add some products to your favorites list.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Favorites</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-contain p-4 bg-gray-100"
              />

              <div className="p-4">
                <h2 className="font-semibold text-lg line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-xl font-bold mt-2">${item.price}</p>

                <button
                  onClick={() => removeFromFavorites(item.id)}
                  className="mt-4 flex items-center justify-center gap-2 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  <FaRegTrashAlt />
                  Remove
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
