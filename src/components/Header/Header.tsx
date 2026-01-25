import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const context = useContext(CartContext) // CartContext from context

  if (!context) throw new Error("Must be used within CartProvider");
  const { cartItems } = context

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${isActive ? "text-red-500 border-b-2 border-red-500" : "text-gray-800"}
     transition-all`;

  return (
    <header className="bg-white shadow-md px-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-3">

        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-3xl">
            <span className="text-red-500 font-serif">Z</span>aptro
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center font-semibold text-lg">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/products" className={navLinkClass}>Products</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              {cartItems.length}
            </span>
          </Link>
        </nav>

        {/* Mobile Icons */}
        <div className="flex items-center gap-4 md:hidden">
          <Link to="/cart" className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              0
            </span>
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl"
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-inner overflow-hidden transition-all duration-300 
        ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4 font-semibold text-lg">
          <NavLink onClick={() => setMenuOpen(false)} to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
