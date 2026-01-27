import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import { FaCreditCard, FaMobileAlt, FaMoneyBillWave } from "react-icons/fa";



const Payment = () => {
  const { cartItems, totalPrice } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const finalAmount = location.state?.finalAmount || totalPrice;
  const itemsCount = location.state?.itemsCount || cartItems.length;


  // Payment option state
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  


  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="W-50  px-4">

        {/* PAGE TITLE */}
        <h1 className="text-2xl font-bold mb-6">Payment</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT SIDE - Payment Options */}
          <div className="lg:col-span-8 flex justify-center">
            <div className="w-full max-w-xl">

              <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="font-bold text-lg mb-4">Choose Payment Method</h2>

                {/* CARD OPTION */}
                <div
                  onClick={() => setPaymentMethod("card")}
                  className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer mb-3
          ${paymentMethod === "card"
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 hover:border-gray-400"}
        `}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <FaCreditCard className="text-xl text-gray-700" />
                    </div>
                    <div>
                      <p className="font-semibold">Credit / Debit Card</p>
                      <p className="text-gray-500 text-sm">Visa, MasterCard, Maestro</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                  </div>
                </div>

                {/* ESEWA OPTION */}
                <div
                  onClick={() => setPaymentMethod("esewa")}
                  className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer mb-3
          ${paymentMethod === "esewa"
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 hover:border-gray-400"}
        `}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <FaMobileAlt className="text-xl text-gray-700" />
                    </div>
                    <div>
                      <p className="font-semibold">eSewa Mobile Wallet</p>
                      <p className="text-gray-500 text-sm">Quick & secure mobile payment</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                  </div>
                </div>

                {/* COD OPTION */}
                <div
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer
          ${paymentMethod === "cod"
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 hover:border-gray-400"}
        `}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <FaMoneyBillWave className="text-xl text-gray-700" />
                    </div>
                    <div>
                      <p className="font-semibold">Cash on Delivery</p>
                      <p className="text-gray-500 text-sm">Pay when you receive your order</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                  </div>
                </div>

                {/* CONTINUE BUTTON */}
                <button
                  onClick={() => navigate("/order-confirmation")}
                  className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>



          {/* RIGHT SIDE - Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-xl shadow sticky top-24">

              <h2 className="font-bold text-lg mb-4">Order Summary</h2>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Items ({itemsCount})
                  </span>
                  <span>$ {finalAmount.toFixed(2)}</span>
                </div>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">Total</h3>
                <p className="text-xl font-bold text-orange-500">
                  $ {finalAmount.toFixed(2)}
                </p>
              </div>



              <hr className="my-4" />

              <div className="flex justify-between items-center">
              </div>

              <p className="text-xs text-gray-400 mt-2">
                All taxes included
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Payment;
