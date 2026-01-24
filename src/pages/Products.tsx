import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"
import FilterSection from "../components/FilterSection/FilterSection";
import ProductCard from "../components/ProductCard/ProductCard";
import Pagination from "../components/Pagination/Pagination";
import Lottie from 'lottie-react';
import notfound from '../assets/notfound.json';

const Products = () => {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error("Product must be used within DataProvider");
  }
  const { data } = context;

  const [search, setSearch] = useState<string>('')
  const [category, setCategory] = useState<string>('All');
  const [brand, setBrand] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<number[]>([0, 700]);
  const [page, setPage] = useState<number>(1);

  // for categories and Brand which is in FilterSection
  const handelCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value);
  const handelBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => setBrand(e.target.value);
  const pageHandler = (selectedPage: number) => setPage(selectedPage);

  // for filter data when ever user click on category list filter
  const filterData = data?.filter((item) => (
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || item.category === category) &&
    item.price >= priceRange[0] &&
    item.price <= priceRange[1]
  ))

  //for pageHandle pagination
  const dynamicPage = Math.ceil(filterData?.length / 8);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      {data?.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
          {/* Filter Section */}
          <div className="w-full md:w-1/4">
            <FilterSection
              search={search}
              setSearch={setSearch}
              brand={brand}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              category={category}
              handelCategoryChange={handelCategoryChange}
              handelBrandChange={handelBrandChange}
            />
          </div>

          {/* Products Section */}
          <div className="w-full md:w-3/4 flex flex-col items-center">
            {filterData?.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                  {filterData.slice(page * 8 - 8, page * 8).map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                <Pagination page={page} pageHandler={pageHandler} dynamicPage={dynamicPage} />
              </>
            ) : (
              <div className="flex justify-center items-center w-full mt-10">
                {/* No products found animation */}
                <Lottie animationData={notfound} className="w-72 sm:w-96" />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-80">
          {/* Loading animation */}
          <p className="text-red-500 font-bold text-center">Loading products...</p>
        </div>
      )}
    </div>
  )
}

export default Products