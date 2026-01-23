import { IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {

    return (
        <div className='bg-white py-3 shadow-2xl px-4 md:px-0'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                {/* logo section */}
                <div className='flex gap-7 items-center'>
                    <Link to={'/'}><h1 className='font-bold text-3xl'><span className='text-red-500 font-serif'>Z</span>aptro</h1></Link>
                    <div className='md:flex gap-1 cursor-pointer text-gray-700 items-center hidden'>
                        
                    </div>
                   
                </div>
                {/* menu section */}
                <nav className='flex gap-7 items-center'>
                    <ul className='md:flex gap-7 items-center text-xl font-semibold hidden'>
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500 text-red-500" : "text-black"} cursor-pointer`}><li>Home</li></NavLink>
                        <NavLink to={"/products"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500 text-red-500" : "text-black"} cursor-pointer`}><li>Products</li></NavLink>
                        <NavLink to={"/about"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500 text-red-500" : "text-black"} cursor-pointer`}><li>About</li></NavLink>
                        <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500 text-red-500" : "text-black"} cursor-pointer`}><li>Contact</li></NavLink>
                    </ul>
                    <Link to={'/cart'} className='relative'>
                        <IoCartOutline className='h-7 w-7' />
                        <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white'></span>
                    </Link>
                    
                    
                </nav>
            </div>
        </div>
    )
}

export default Header