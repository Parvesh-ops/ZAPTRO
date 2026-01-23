import { createContext, useEffect, useState } from "react";
import type { Product } from "../types/product";
import axios from "axios";

interface DataContextType {
  data: Product[] | null;
  loading: boolean;
  fetchAllProducts: () => Promise<void>;
}

export const DataContext = createContext<DataContextType | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAllProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Product[]>(
        "https://fakestoreapi.com/products"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};
