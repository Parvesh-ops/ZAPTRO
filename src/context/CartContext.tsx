import { createContext, useState } from "react";
import type { CartItems, Product } from "../types/product";

interface CartContextType {
    cartItems: CartItems[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>>;
    addToCart: (product: Product) => void
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItems[]>([]);


    //  Add to Cart
    const addToCart = (product: Product) => {
        setCartItems((prev) => {
            // Check if product already exists in cart
            const existing = prev.find((item) => item.id === product.id);
            // If exists, increase quantity
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });
    };
    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

