import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from '../Layout'
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import SingleProduct from "./pages/SingleProduct"
import Favorite from "./pages/Favorite"
import Checkout from "./pages/Checkout"


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/products/:id", //for dynamic route single page of product
          element: <SingleProduct/>
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/favorite",
          element: <Favorite />
        },
        {
          path: "/checkout",
          element: <Checkout />
        },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
