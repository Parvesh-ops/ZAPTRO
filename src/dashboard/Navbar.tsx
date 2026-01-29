import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-3 items-centre justify-between px-8 md:px-10 border-b border-gray-300/30'>
      <Link to="/">
        <h1 className="font-bold text-3xl">
          <span className="text-red-500 font-serif">Z</span>aptro
        </h1>
      </Link>
    </div>
  )
}

export default Navbar