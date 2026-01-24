import { createContext, useState, useEffect } from "react";
import type { Product } from "../types/product";
import axios from "axios";

interface DataContextType {
  data: Product[];
  loading: boolean;
  fetchAllProducts: () => Promise<void>;
  categories: string[]
}

export const DataContext = createContext<DataContextType | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAllProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Product[]>(
        "https://fakestoreapi.com/products"
      );
      setData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.status);
      }
      console.error("An error occurred while fetching products:", error);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

    // Extract unique categories 
  const categories = [...new Set(data.map((item) => item.category))];

  return (
    <DataContext.Provider value={{ data, loading, fetchAllProducts,categories }}>
      {children}
    </DataContext.Provider>
  );
};
