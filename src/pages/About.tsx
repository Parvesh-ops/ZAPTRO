import { FaShippingFast, FaLock, FaHeadset, FaAward } from "react-icons/fa"
import { MdVerified } from "react-icons/md"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Our Story Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className=" text-5xl md:text-6xl font-extrabold text-black mb-4">
              Our Story
            </h2>
            <div className="space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                Founded with a vision to revolutionize online shopping, we've been serving 
                customers worldwide with premium quality products. Our journey began with a 
                simple idea: make shopping accessible, affordable, and enjoyable for everyone.
              </p>
              <p>
                Today, we're proud to offer thousands of products across multiple categories. 
                From electronics to fashion, from home essentials to everyday items – we've 
                got everything you need under one roof.
              </p>
              <p>
                Our commitment to quality, customer satisfaction, and reliability drives 
                everything we do. We carefully select our products to ensure you get only 
                the best value.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                alt="Shopping experience"
                className="w-full h-56 sm:h-64 object-cover rounded-lg"
              />
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <p className="text-2xl sm:text-3xl font-bold text-red-600">10K+</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Happy Customers</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <p className="text-2xl sm:text-3xl font-bold text-red-600">5K+</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-8 sm:mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 rounded-full mb-3">
                <FaShippingFast className="text-2xl text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-sm text-gray-600">
                Quick delivery to your doorstep. Free shipping on orders over $100.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 rounded-full mb-3">
                <FaLock className="text-2xl text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-sm text-gray-600">
                Your transactions are protected with industry-leading security.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 rounded-full mb-3">
                <FaHeadset className="text-2xl text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">
                Our support team is always ready to help you with any queries.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 rounded-full mb-3">
                <FaAward className="text-2xl text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Products</h3>
              <p className="text-sm text-gray-600">
                100% authentic products with quality assurance and easy returns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-6xl mx-auto px-4 py-9 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <MdVerified className="text-3xl text-red-600" />
              <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              To provide an excellent online shopping experience by offering quality 
              products, great customer service, and reliable delivery. We strive to make 
              every purchase simple and satisfying.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 sm:p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <MdVerified className="text-3xl text-red-600" />
              <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              To become a trusted e-commerce platform where people can easily find what 
              they need. We envision a future where online shopping is simple, affordable, 
              and accessible to everyone.
            </p>
          </div>
        </div>
      </div>


      {/* CTA Section */}
      <div className=" text-black font-bold py-6 sm:py-10 px-3">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Ready to Start Shopping?
          </h2>
          <p className="text-sm sm:text-base mb-6">
            Discover thousands of products and enjoy great deals today!
          </p>
          <Link
            to="/products"
            className="inline-block bg-red-500 text-black px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About