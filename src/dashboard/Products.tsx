import { useEffect, useState } from "react"
import type { Product } from "../types/product"
import axios from "axios"
import api from "../api/api"

const PRODUCTS_PER_PAGE = 6

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products")
        setProducts(response.data)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Status:", error.response?.status)
        }
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-lg text-red-500 font-medium">
          Loading products...
        </p>
      </div>
    )
  }

  // 🔢 Pagination calculations
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const currentProducts = products.slice(startIndex, endIndex)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Rating</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentProducts.map((product) => (
              <tr
                key={product.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3 border text-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-12 h-12 object-contain mx-auto"
                  />
                </td>

                <td className="p-3 border max-w-xs truncate">
                  {product.title}
                </td>

                <td className="p-3 border capitalize">
                  {product.category}
                </td>

                <td className="p-3 border font-semibold">
                  ${product.price}
                </td>

                <td className="p-3 border">
                  ⭐ {product.rating.rate}
                </td>

                <td className="p-3 border space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔽 Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Products
