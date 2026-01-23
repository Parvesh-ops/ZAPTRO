import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from '../Layout'
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"


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
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]}
])
  return (
    <>
 <RouterProvider router={router} />
    </>
  )
}

export default App
