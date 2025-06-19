import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutMain } from './Components/Layout/LayoutMain.tsx'
import './index.css'
import Cart from './pages/Cart/Cart.tsx'
import Home from './pages/Home/Home.tsx'
import { CartProvider } from './Context/cartProvider.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> }, // Se indica que la pagina principal sera home
      { path: "/cart", element: <Cart /> }
    ]
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>,
)
