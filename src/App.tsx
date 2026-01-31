import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout";

// Public pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import Favorite from "./pages/Favorite";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";

// Dashboard
import DashboardLayout from "./dashboard/DashboardLayout";
import DashboardHome from "./dashboard/DashboardHome";
import Sales from "./dashboard/Sales";
import Charts from "./dashboard/Charts";
import Product from "./dashboard/Products";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "products/:id", element: <SingleProduct /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "cart", element: <Cart /> },
        { path: "favorite", element: <Favorite /> },
        { path: "checkout", element: <Checkout /> },
        { path: "payment", element: <Payment /> },
        {
          path: "*",
          element: (
            <h1 className="min-h mt-50 flex justify-center text-center">
              404 - Page Not Found
            </h1>
          ),
        },
      ],
    },

    // ✅ Admin Dashboard
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <DashboardHome /> },
        { path: "charts", element: <Charts /> },
        { path: "sales", element: <Sales /> },
        { path: "Product", element: <Product /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
