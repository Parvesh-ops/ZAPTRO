import { useState } from "react";
import { useCart } from "../context/CartContext";

const DELIVERY_CHARGE = 5;

const Checkout = () => {
  const { cartItems, totalPrice } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    district: "",
    landmark: "",
    address: "",
    paymentMethod: "esewa",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.district) newErrors.district = "District is required";
    if (!formData.address) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    alert(
      formData.paymentMethod === "esewa"
        ? "Redirecting to eSewa..."
        : "Order placed with Cash on Delivery"
    );
  };

  const finalTotal = totalPrice + DELIVERY_CHARGE;

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-8 space-y-6">

          {/* 1. GENERAL INFO */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-lg mb-4">1. General Information</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  name="fullName"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  onChange={handleChange}
                />
                {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>

              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  name="phone"
                  placeholder="98XXXXXXXX"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* 2. ADDRESS */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-lg mb-4">2. Shipping Address</h2>

            <div className="grid md:grid-cols-2 gap-4">

              {/* City */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">City</label>
                <input
                  name="city"
                  placeholder="Enter city"
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  onChange={handleChange}
                />
                {errors.city && (
                  <span className="text-red-500 text-xs mt-1">{errors.city}</span>
                )}
              </div>

              {/* District */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">District</label>
                <input
                  name="district"
                  placeholder="Enter district"
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  onChange={handleChange}
                />
                {errors.district && (
                  <span className="text-red-500 text-xs mt-1">{errors.district}</span>
                )}
              </div>
            </div>

            {/* Full Address */}
            <div className="mt-4 flex flex-col">
              <label className="text-sm font-medium mb-1">Full Address</label>
              <textarea
                name="address"
                placeholder="Street, ward no, house no"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                onChange={handleChange}
              />
              {errors.address && (
                <span className="text-red-500 text-xs mt-1">{errors.address}</span>
              )}
            </div>
          </div>


          {/* 3. PAYMENT */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-lg mb-4">3. Payment Method</h2>

            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="esewa"
                  checked={formData.paymentMethod === "esewa"}
                  onChange={handleChange}
                />
                Pay with eSewa
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – ORDER SUMMARY */}
        <div className="lg:col-span-4">
          <div className="bg-white p-6 rounded-xl shadow sticky top-24">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>

            {cartItems.map(item => (
              <div key={item.id} className="flex gap-4 mb-4">
                <img src={item.image} className="w-16 h-16 object-contain " />
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}

            <div className="space-y-2 text-sm mt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$ {totalPrice.toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span>$ {DELIVERY_CHARGE}</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-red-500">$ {finalTotal.toFixed(0)}</span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"
            >
              {formData.paymentMethod === "esewa" ? "Pay with eSewa" : "Place Order"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
