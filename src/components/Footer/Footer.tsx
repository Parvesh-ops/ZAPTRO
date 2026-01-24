
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  const subscribe = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Thank you for subscribing!")
  }

  return (
    <footer className='bg-gray-900 text-gray-200 py-10'>
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8'>

        {/* Company Info */}
        <div>
          <Link to='/'>
            <h1 className='text-red-500 text-2xl font-bold'>Z<span className='text-white'>aptro</span></h1>
          </Link>
          <p className='mt-2 text-sm'>Powering Your World with the Best in Electronics.</p>
          <p className='mt-2 text-sm'>Nepal, Kathmandu City, BR 10001</p>
          <p className='text-sm'>Email: support@luxora.com</p>
          <p className='text-sm'>Phone: +9779814336521</p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className='text-xl font-semibold mb-2'>Customer Service</h3>
          <ul className='space-y-2'>
            {['Contact Us','Shipping & Returns','FAQs','Order Tracking','Size Guide'].map((item, index) => (
              <li
                key={index}
                className="hover:underline hover:text-red-500 transition-all duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className='text-xl font-semibold mb-2'>Follow Us</h3>
          <div className='flex space-x-4 mt-2'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:text-blue-800 transition-all duration-200'>
              <FaFacebook size={22} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-600 transition-all duration-200'>
              <FaTwitterSquare size={22} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-pink-500 hover:text-pink-700 transition-all duration-200'>
              <FaInstagram size={22} />
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className='text-red-600 hover:text-red-800 transition-all duration-200'>
              <FaPinterest size={22} />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className='text-xl font-semibold mb-2'>Stay in the Loop</h3>
          <p className='mt-2 text-sm'>Subscribe to get special offers, free giveaways, and more</p>
          <form onSubmit={subscribe} className='mt-4 flex flex-col sm:flex-row gap-2'>
            <input 
              type="email" 
              placeholder='Your email address'
              required
              className='flex-1 p-2 rounded-md text-gray-900 border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none'
            />
            <button type='submit' className='bg-red-600 text-white px-4 rounded-md hover:bg-red-700 transition-all duration-200'>
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Section */}
      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
        <p>&copy; {new Date().getFullYear()} <span className='text-red-500'>Zapro</span>. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer