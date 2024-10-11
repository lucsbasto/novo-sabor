import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import MyOrders from "./pages/MyOrders";
import Order from "./pages/Order";
import Product from "./pages/Product";
import Verify from "./pages/Verify,";

export default function App() {
  return (
    <h1 className="overflow-hidden text-[#404040]">
      <div>
        <BrowserRouter>
          <div className="bg-primary">
            <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product" element={<Product />} />
              <Route path=":productId" element={<Product />} />
              <Route path="/order" element={<Order />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/my-orders" element={<MyOrders />} />
            </Routes>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    </h1>
  )
}