import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const HANDLING_FEE = 5;  // for voulcher

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, totalPrice, clearCart, } = useCart();

  const [voucher, setVoucher] = useState<string>("");
  const [discountPercent, setDiscountPercent] = useState<number>(0);


  const navigate = useNavigate();
  const handleApplyVoucher = () => {
    if (voucher.trim().toLowerCase() === "save10") {
      setDiscountPercent(10);
    } else {
      setDiscountPercent(0);
      alert("Invalid voucher code");
    }
  };

  const discountAmount = (totalPrice * discountPercent) / 100;


  const finalTotal = Math.max(
    totalPrice + HANDLING_FEE - discountAmount,
    0
  );


  return (
    <div className="mt-10 max-w-7xl mx-auto mb-10 px-4">
      {cartItems.length > 0 ? (
        <>
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Shopping Cart</h1>

            <button
              onClick={clearCart}
              className="flex font-bold items-center gap-2 text-red-500 hover:text-red-600 transition"
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
                  <img
                    src={item.image}
                    alt={item.title}
                    onClick={() => navigate(`/products/${item.id}`)}
                    className="w-24 h-24 cursor-pointer object-contain mx-auto sm:mx-0"
                  />

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
                          -
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
                    <LuNotebookText /> Sub Total ({cartItems.length} products)
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
                  <span>${HANDLING_FEE.toFixed(2)}</span>
                </div>

                {/* VOUCHER */}
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">
                    Voucher Code
                  </label>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={voucher}
                      onChange={(e) => setVoucher(e.target.value)}
                      placeholder="SAVE10"
                      className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                    />

                    <button
                      onClick={handleApplyVoucher}
                      className="bg-black text-white px-4 rounded-lg text-sm hover:bg-gray-800 transition"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {discountPercent > 0 && (
                  <div className="flex justify-between text-green-600 font-semibold">
                    <span>Discount (-{discountPercent}%)</span>
                    <span>- ${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                {discountPercent > 0 && (
                  <p className="text-green-600 text-sm mt-2">
                    You saved ${discountAmount.toFixed(2)} 🎉
                  </p>
                )}



                <hr />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition">
                Proceed to Checkout ({cartItems.length})
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
          <p className="text-gray-700">There are no items in this cart</p>
          <button
            onClick={() => navigate("/products")}
            className="border border-red-600 text-black font-bold px-6 py-3 rounded-lg hover:bg-red-200 transition"
          >
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
