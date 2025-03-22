import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './pages/AppLayout'
import Home from './pages/Homepage'
import PageNotFound from './pages/PageNotFound'
import Pricing from './pages/Pricing'
import Product from './pages/Product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
