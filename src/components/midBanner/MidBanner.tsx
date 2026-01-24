
import banner from "../../assets/banner1.jpg";
import { useNavigate } from 'react-router-dom'

const MidBanner = () => {
 const navigate = useNavigate()
 const handelProducts = ()=>{
  navigate("/products")
 }
  return (
    <section className='relative bg-gray-100 md:py-24'>
      <div
        className='relative max-w-7xl mx-auto md:rounded-2xl h-137.5 md:h-150 flex items-center justify-center bg-cover bg-center'
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/60 md:rounded-2xl flex items-center justify-center'>
          <div className='text-center text-white px-4'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight'>
              Next-Gen Electronics at Your Fingertips
            </h1>
            <p className='text-lg md:text-xl mb-6 max-w-2xl mx-auto'>
              Discover the latest tech innovations with unbeatable prices and free shipping on all orders.
            </p>
            <button onClick={handelProducts} className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl'>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MidBanner