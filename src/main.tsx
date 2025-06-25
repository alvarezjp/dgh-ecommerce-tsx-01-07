import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutMain } from './Components/Layout/LayoutMain.tsx'
import './index.css'
import Home from './pages/Home/Home.tsx'
import { CartProvider } from './Context/cartProvider.tsx'
import Checkout from './pages/Chekout/Checkout.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> }, // Se indica que la pagina principal sera home
      { path: "/checkout", element: <Checkout /> }

    ]
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>
)
