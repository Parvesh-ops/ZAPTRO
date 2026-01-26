import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  return (
    <div className="mt-10 max-w-7xl mx-auto mb-10 px-4">
      {cartItems.length > 0 ? (
        <>
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Shopping Cart</h1>

            <button
              onClick={clearCart}
              className="flex font-bold items-center gap-2 text-l text-red-500 hover:text-red-600 transition"
            >
              <FaRegTrashAlt />
              Clear Cart
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border rounded-xl p-4 flex flex-col sm:flex-row gap-4 shadow-sm"
                >
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain mx-auto sm:mx-0"
                  />

                  {/* INFO */}
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-800 line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500 capitalize">
                      {item.category}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
                      {/* QUANTITY */}
                      <div className="flex items-center border rounded-md overflow-hidden">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="px-3 py-1 text-lg bg-gray-100 hover:bg-gray-200"
                        >
                          −
                        </button>
                        <span className="px-4 font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQty(item.id)}
                          className="px-3 py-1 text-lg bg-gray-100 hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>

                      {/* PRICE */}
                      <div className="text-right">
                        <p className="text-sm font-bold text-gray-700">Price</p>
                        <p className="font-bold text-red-500">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* REMOVE ITEM */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="self-start sm:self-center text-gray-400 hover:text-red-500 transition"
                  >
                    <FaRegTrashAlt size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* ORDER SUMMARY */}
            <div className="bg-white border rounded-xl shadow-md p-6 h-max sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    <LuNotebookText /> Items Total
                  </span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    <MdDeliveryDining /> Delivery
                  </span>
                  <span className="text-green-600 font-semibold">FREE</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    <GiShoppingBag /> Handling Fee
                  </span>
                  <span>$5.00</span>
                </div>

                <hr />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${(totalPrice + 5).toFixed(2)}</span>
                </div>
              </div>

              <button className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition">
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate("/products")}
                className="mt-3 w-full border border-gray-300 py-2 rounded-lg text-sm hover:bg-gray-100 transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      ) : (
        /* EMPTY CART */
        <div className="flex flex-col items-center justify-center h-[60vh] gap-4 text-center">
          <h1 className="text-3xl font-bold text-gray-700">
            Your cart is empty
          </h1>
          <p className="text-gray-500">
            Looks like you haven’t added anything yet
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
          >
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
