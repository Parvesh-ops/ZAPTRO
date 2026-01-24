import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import FilterSection from "../components/FilterSection/FilterSection";
import ProductCard from "../components/ProductCard/ProductCard";

const Products = () => {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error("Product must be used within DataProvider");
  }
  const { data } = context;

  return (

    <div className="px-4 sm:px-6 lg:px-8 py-8">
      {
        data?.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
            {/* if data xa vane i will render here */}

            {/* Filter Section */}
            <FilterSection />


            {/* Product Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full">
              {
                data.map((product,index)=>(
                  <ProductCard key={index} product={product} />
                ))
              }
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-80">
            {/* if data xaine vane i will add here animation later */}

            <p className="text-red-500  font-bold text-center">Loading products...</p>
          </div>
        )
      }
    </div>

  )
}

export default Products
