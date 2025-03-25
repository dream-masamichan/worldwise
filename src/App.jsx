import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './pages/AppLayout'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Pricing from './pages/Pricing'
import Product from './pages/Product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />

        {/* /app 以下をネスト */}
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<p>LIST</p>} />
          <Route index path="cities" element={<p>List of cities</p>} />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
