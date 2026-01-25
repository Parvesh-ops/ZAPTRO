
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DataProvider } from './context/DataContext.tsx'
import { CartProvider } from './context/CartContext.tsx'
import { FavoriteProvider } from './context/FavoriteContext.tsx'

createRoot(document.getElementById('root')!).render(
  <DataProvider>
    <CartProvider>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </CartProvider>
  </DataProvider>,
)
