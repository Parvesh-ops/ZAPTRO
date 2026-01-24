import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"
import FilterSection from "../components/FilterSection/FilterSection";
import ProductCard from "../components/ProductCard/ProductCard";

const Products = () => {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error("Product must be used within DataProvider");
  }
  const { data } = context;

  const [search, setsearch] = useState<string>('')
  const [category, setCategory] = useState<string>('All');
  const [brand, setBrand] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<number[]>([0, 700]);
  const [page, setPage] = useState<number>(1);

  // for categories and Brand which is in FilterSection
  const handelCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value);
  const handelBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => setBrand(e.target.value);


  return (

    <div className="px-4 sm:px-6 lg:px-8 py-8">
      {
        data?.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
            {/* if data xa vane i will render here */}

            {/* Filter Section */}
            <FilterSection search={search} setSearch={setsearch} brand={brand} priceRange={priceRange} setPriceRange={setPriceRange} category={category} handelCategoryChange={handelCategoryChange} handelBrandChange={handelBrandChange}
            />


            {/* Product Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full">
              {
                data.map((product, index) => (
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
