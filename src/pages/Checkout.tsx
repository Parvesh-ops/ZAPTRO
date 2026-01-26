import { useState } from "react";
import { useCart } from "../context/CartContext";

const DELIVERY_FEE = 0;

const Checkout = () => {
  const { cartItems, totalPrice } = useCart();
  const [voucher, setVoucher] = useState("");
  const [discount, setDiscount] = useState(0);

  const total = Math.max(
    totalPrice - discount,
    0
  );

  const handleApplyVoucher = () => {
    if (voucher.trim().toLowerCase() === "save10") {
      setDiscount(10);
    } else {
      setDiscount(0);
      alert("Invalid voucher code");
    }
  };



  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">

        {/* PAGE TITLE */}
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        {/* SHIPPING ADDRESS */}
        <div className="bg-white p-5 rounded-xl shadow mb-6">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Shipping Address</h2>
            <button className="text-blue-500 text-sm">Change</button>
          </div>
          <p className="mt-2 text-gray-600 text-sm">
            Parvesh Chaudhary <br />
            Biratnagar, Nepal <br />
            Phone: 98XXXXXXXX
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT SIDE */}
          <div className="lg:col-span-8 space-y-6">

            {/* DELIVERY OPTION */}
            <div className="bg-white p-5 rounded-xl shadow">
              <h2 className="font-semibold mb-4">Delivery Option</h2>

              <div className="border rounded-lg p-4 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <p className="font-semibold">Standard Delivery</p>
                  <p className="text-gray-500 text-sm">
                    Get by 28-29 Jan
                  </p>
                </div>
                <p className="ml-auto font-bold text-gray-800">
                  $ {DELIVERY_FEE}
                </p>
              </div>
            </div>

            {/* PRODUCT LIST */}
            <div className="bg-white p-5 rounded-xl shadow">
              <h2 className="font-semibold mb-4">
                Products ({cartItems.length})
              </h2>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b last:border-none pb-4 mb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-contain"
                    />
                    <div>
                      <p className="font-medium line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>

                  <p className="font-bold text-gray-800">
                    ${(item.price * item.quantity).toFixed(0)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE – SUMMARY */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-xl shadow sticky top-24">

              <h2 className="font-bold text-lg mb-4">Order Summary</h2>

              {/* PROMO */}
              <div className="mb-4">
                <p className="text-sm font-medium mb-1">Promotion</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={voucher}
                    onChange={(e) => setVoucher(e.target.value)}
                    placeholder="Enter voucher code"
                    className="flex-1 border rounded-l px-3 py-2 text-sm"
                  />
                  <button
                    onClick={handleApplyVoucher}
                    className="bg-orange-500 text-white px-4 rounded-lg">
                    APPLY
                  </button>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600"> Items total({cartItems.length})</span>
                  <span>$ {totalPrice.toFixed(0)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>$ {DELIVERY_FEE}</span>
                </div>
              </div>

              {discount > 0 && (
                <div className="flex mt-2.5 justify-between text-green-600 font-semibold">
                  <span>Discount</span>
                  <span>${discount.toFixed(2)}</span>
                </div>
              )}

              <hr className="my-4" />

              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">Total</h3>
                <p className="text-xl font-bold text-orange-500">
                  $ {total.toFixed(0)}
                </p>
              </div>

              <p className="text-xs text-gray-400 mt-2">
                All taxes included
              </p>

              <button className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition">
                Proceed to Pay
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
